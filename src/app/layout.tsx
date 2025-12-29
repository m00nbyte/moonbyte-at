// src/app/layout.tsx

import '@/styles/global.sass';

import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Fira_Sans } from 'next/font/google';
import { Megrim } from 'next/font/google';

import Layout from '@/components/layout/Layout';

const firaSans = Fira_Sans({
    weight: '400',
    variable: '--font-fira_sans',
    subsets: ['latin']
});

const megrim = Megrim({
    weight: '400',
    variable: '--font-heading',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'moonbyte • beyond the limits',
    description: 'beyond the limits',
    keywords: [
        'moonbyte',
        'm00nbyte',
        'developer',
        'programmer',
        'coder',
        'engineer',
        'manager',
        'trainer',
        'web design',
        'ecommerce',
        'e-commerce',
        'it consulting',
        'it security',
        'network security',
        'web security',
        'security',
        'training',
        'support',
        'html5',
        'css3',
        'javascript',
        'typescript',
        'react',
        'nextjs',
        'vuejs',
        'electron',
        'socketio',
        'tailwindcss',
        'rollup',
        'webpack',
        'mongodb',
        'redis',
        'zustand',
        'eslint',
        'sass',
        'postcss',
        'markdown',
        'yarn',
        'docker',
        'nginx',
        'vercel',
        'cloudflare',
        'playwright',
        'puppeteer'
    ],
    robots: 'all',
    authors: [{ name: 'm00nbyte' }],
    creator: 'm00nbyte',
    publisher: 'm00nbyte',
    applicationName: 'moonbyte',
    appleWebApp: {
        title: 'moonbyte',
        capable: true
    },
    metadataBase: new URL('https://www.moonbyte.at'),
    alternates: {
        canonical: '/'
    },
    other: {
        owner: 'm00nbyte',
        designer: 'm00nbyte',
        audience: 'all',
        coverage: 'Worldwide',
        classification: 'Business',
        'revisit-after': '7 days',
        'mobile-web-app-capable': 'yes'
    },
    openGraph: {
        siteName: 'moonbyte',
        title: 'beyond the limits',
        description: 'beyond the limits',
        type: 'website',
        url: '/',
        images: [
            {
                url: '/img/logo/logo_social.png',
                width: 1200,
                height: 630,
                alt: 'moonbyte'
            }
        ],
        locale: 'de_DE'
    },
    twitter: {
        card: 'summary_large_image',
        site: '@m00nbyte',
        creator: '@m00nbyte',
        title: 'moonbyte',
        description: 'beyond the limits',
        images: ['/img/logo/logo_social.png']
    },
    icons: {
        icon: [{ url: '/favicon.ico' }],
        apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
        shortcut: ['/favicon.ico']
    },
    manifest: '/manifest.json'
};

export const viewport: Viewport = {
    themeColor: '#111827',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const schemaOrg = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'moonbyte',
        legalName: 'moonbyte',
        description: 'beyond the limits',
        url: 'https://www.moonbyte.at/',
        logo: 'https://www.moonbyte.at/img/logo_social.png',
        email: 'office[at]moonbyte[dot]at',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Liechtensteinstraße 16/3',
            addressLocality: 'Maria Enzersdorf',
            addressRegion: 'Niederösterreich',
            postalCode: '2344',
            addressCountry: 'Österreich'
        },
        foundingDate: '2015',
        founders: [
            {
                '@type': 'Person',
                name: 'Sven Sommerbauer'
            }
        ],
        sameAs: ['https://www.linkedin.com/in/m00nbyte/']
    };

    return (
        <html lang="en" className="cc--darkmode">
            <head>
                <meta name="apple-mobile-web-app-title" content="moonbyte" />

                <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />

                <link
                    rel="preload"
                    href="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/dist/cookieconsent.css"
                    as="style"
                    integrity="sha256-ygRrixsQlBByBZiOcJamh7JByO9fP+/l5UPtKNJmRsE="
                    crossOrigin="anonymous"
                />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/dist/cookieconsent.css"
                    integrity="sha256-ygRrixsQlBByBZiOcJamh7JByO9fP+/l5UPtKNJmRsE="
                    crossOrigin="anonymous"
                />

                <script
                    src="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/dist/cookieconsent.umd.js"
                    integrity="sha256-Emf9M/zzq0BDp8xizJJZosZvg59pUhb3c37Te3s+YuY="
                    crossOrigin="anonymous"
                    async
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/gh/m00nbyte/animated-starfield@latest/dist/index.iife.min.js"
                    integrity="sha256-R97IKl/SQ+tGCa70XpysZDXbBL5heXRgqf65fjZVSXI="
                    crossOrigin="anonymous"
                    async
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/powerglitch@2.5.0/dist/powerglitch.min.js"
                    integrity="sha256-C3fum6Nbq1Og2inPUFtGBmnfsRyk7yS+kMKJSoiH7i8="
                    crossOrigin="anonymous"
                    async
                ></script>

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

                <GoogleTagManager gtmId="GTM-5WDFJ5R" />
            </head>
            <body
                className={`bg-stone-800 text-white min-h-screen grid grid-rows-[auto_1fr] ${firaSans.className} ${megrim.variable}`}
            >
                <Layout>{children}</Layout>
                <div className="!opacity-90 pointer-events-none bg-noise"></div>
            </body>
        </html>
    );
}
