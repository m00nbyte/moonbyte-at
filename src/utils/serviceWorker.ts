// src/utils/serviceWorker.ts

export function registerServiceWorker(): void {
    if (typeof window === 'undefined') {
        return;
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch((error: Error) => {
                console.error('❌ Service Worker registration failed:', error);
            });
        });

        try {
            navigator.serviceWorker.register('/sw.js').catch((err) => console.error('Immediate registration failed:', err));
        } catch (error) {
            console.error('❌ Immediate registration error:', error);
        }
    } else {
        console.warn('⚠️ Service Worker not supported in this browser');
    }
}

export function unregisterServiceWorker(): void {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error('❌ Service Worker unregistration failed:', error);
            });
    }
}

export async function checkServiceWorkerStatus(): Promise<{
    isSupported: boolean;
    isActive: boolean;
    controller?: ServiceWorker;
}> {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
        return {
            isSupported: false,
            isActive: false
        };
    }

    try {
        return {
            isSupported: true,
            isActive: !!navigator.serviceWorker.controller,
            controller: navigator.serviceWorker.controller || undefined
        };
    } catch {
        return {
            isSupported: true,
            isActive: false
        };
    }
}

export async function sendMessageToServiceWorker(message: object): Promise<void> {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage(message);
    }
}

export function isOffline(): boolean {
    return typeof navigator !== 'undefined' && !navigator.onLine;
}

export function setupConnectionListeners(): void {
    if (typeof window !== 'undefined') {
        window.addEventListener('online', () => {
            sendMessageToServiceWorker({ type: 'APP_ONLINE' });
        });

        window.addEventListener('offline', () => {
            sendMessageToServiceWorker({ type: 'APP_OFFLINE' });
        });
    }
}
