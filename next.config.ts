import type { NextConfig } from 'next';

const generateCSP = () => {
    return `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.googletagmanager.com;
        style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
        img-src 'self' blob: data: https:;
        font-src 'self' https: https://cdn.jsdelivr.net;
        connect-src 'self' https:;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-src 'self' https://www.googletagmanager.com;
        worker-src 'self' blob:;
        child-src 'self' https://www.googletagmanager.com;
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `.replace(/\n/g, '');
};

const securityHeaders = [
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-XSS-Protection', value: '1; mode=block' },
    { key: 'X-DNS-Prefetch-Control', value: 'on' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Content-Security-Policy', value: generateCSP() },
    {
        key: 'Permissions-Policy',
        value: 'accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()'
    }
];

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    headers: async () => {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders
            }
        ];
    }
};

export default nextConfig;
