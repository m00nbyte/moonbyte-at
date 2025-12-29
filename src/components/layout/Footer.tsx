// src/app/components/layout/Footer.tsx

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-between gap-4 px-8 py-6 text-xs md:text-sm lg:flex-row bg-neutral-950">
            <div className="flex items-center order-2 gap-1 font-bold lg:order-1 font-display">
                <span>made with</span>
                <span id="footer-heart" className="icon-[bxs--heart] h-4 w-4 animate-heart text-rose-600"></span>
                <span>in austria</span>
            </div>
            <div className="flex order-1 gap-2 lg:order-2">
                <Link href="/disclaimer" className="ga-di">
                    disclaimer
                </Link>
                |
                <Link href="/privacy" className="ga-pr">
                    privacy policy
                </Link>
                |
                <button className="ga-cb" onClick={() => window.CookieConsent.showPreferences()}>
                    cookie settings
                </button>
            </div>
        </footer>
    );
}
