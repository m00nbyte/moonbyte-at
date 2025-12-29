// public/sw.js

const CACHE_NAME = 'moonbyte-cache-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(CACHE_NAME);
            await cache.add(new Request('/offline.html', { cache: 'reload' }));

            self.skipWaiting();
        })()
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            await self.clients.claim();
            const cacheNames = await caches.keys();

            await Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })()
    );
});

function isImageRequest(request) {
    const url = request.url.toLowerCase();

    if (url.includes('/img/')) return true;
    if (url.includes('/_next/image?')) return true;

    const imageExtensions = /\.(jpg|jpeg|png|webp|gif|svg|ico|avif|bmp|tiff|tif)(\?.*)?$/i;
    if (imageExtensions.test(url)) return true;

    if (request.headers) {
        const acceptHeader = request.headers.get('accept');
        if (acceptHeader && acceptHeader.includes('image/')) return true;
    }

    return false;
}

function isHtmlRequest(request) {
    if (request.mode === 'navigate') return true;

    const acceptHeader = request.headers.get('accept');
    return acceptHeader && acceptHeader.includes('text/html');
}

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = request.url;

    if (request.method !== 'GET') return;
    if (url.includes('/api/')) return;

    if (isHtmlRequest(request)) {
        event.respondWith(handleHtmlRequest(event));
        return;
    }

    if (isImageRequest(request)) {
        event.respondWith(handleImageRequest(event));
        return;
    }

    event.respondWith(handleOtherRequest(event));
});

async function handleHtmlRequest(event) {
    const request = event.request;
    const url = request.url;

    if (url.endsWith('/offline.html') || url.includes('/offline.html')) {
        const cached = await caches.match('/offline.html');

        if (cached) {
            return cached;
        }
    }

    try {
        const response = await fetch(request);

        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
        }

        return response;
    } catch {
        const cached = await caches.match(request);

        if (cached) {
            return cached;
        }

        if (request.mode === 'navigate') {
            const offlinePage = await caches.match('/offline.html');

            if (offlinePage) {
                return offlinePage;
            }
        }

        return new Response(`<h1>Offline</h1><p>You're offline. Please check your connection.</p>`, {
            headers: { 'Content-Type': 'text/html' },
            status: 200
        });
    }
}

async function handleImageRequest(event) {
    const request = event.request;
    const url = request.url;
    const isImgDirectory = url.includes('/img/');

    const cached = await caches.match(request);

    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(request);

        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            const cacheUrl = new URL(url);
            const paramsToRemove = ['v', 'version', 'cb', 'cache', 'ts', 't'];

            paramsToRemove.forEach((param) => {
                cacheUrl.searchParams.delete(param);
            });

            const cleanRequest = new Request(cacheUrl.toString(), request);

            await cache.put(cleanRequest, response.clone());
            await cache.put(request, response.clone());
        }

        return response;
    } catch {
        if (url.includes('?')) {
            const urlWithoutQuery = url.split('?')[0];
            const cachedWithoutQuery = await caches.match(urlWithoutQuery);

            if (cachedWithoutQuery) {
                return cachedWithoutQuery;
            }
        }

        if (isImgDirectory) {
            const cache = await caches.open(CACHE_NAME);
            const keys = await cache.keys();

            const sameDirImages = keys.filter(
                (key) =>
                    key.url.includes('/img/') && key.url.split('/').pop().split('.')[0] === url.split('/').pop().split('.')[0]
            );

            if (sameDirImages.length > 0) {
                const bestMatch = await cache.match(sameDirImages[0]);

                if (bestMatch) {
                    return bestMatch;
                }
            }
        }

        return new Response(
            `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <rect width="100" height="100" fill="#f0f0f0"/>
                <text x="50" y="50" font-family="Arial" font-size="10" text-anchor="middle" fill="#666">Offline</text>
            </svg>`,
            {
                headers: { 'Content-Type': 'image/svg+xml' }
            }
        );
    }
}

async function handleOtherRequest(event) {
    const request = event.request;
    const cached = await caches.match(request);

    if (cached) {
        return cached;
    }

    try {
        const response = await fetch(request);

        if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        throw error;
    }
}

self.addEventListener('message', (event) => {
    if (event.data === 'clearCache') {
        caches.delete(CACHE_NAME);
    }

    if (event.data === 'showCache') {
        caches.open(CACHE_NAME).then((cache) => {
            cache.keys().then((keys) => {
                if (event.ports && event.ports[0]) {
                    event.ports[0].postMessage(keys.map((k) => k.url));
                }
            });
        });
    }
});
