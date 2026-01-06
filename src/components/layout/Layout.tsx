// src/app/components/layout/Layout.tsx

'use client';

import 'react-tooltip/dist/react-tooltip.css';

import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import initializeConsent from '@/utils/consentModal';
import initializeFun from '@/utils/consoleFun';
import { registerServiceWorker, setupConnectionListeners } from '@/utils/serviceWorker';

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    useEffect(() => {
        initializeFun();
        initializeConsent();
        registerServiceWorker();
        setupConnectionListeners();
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsHeaderHovered(false);
        const handleClickOutside = (event: MouseEvent) => {
            const headerWrapper = document.querySelector('.header-wrapper');
            if (headerWrapper && !headerWrapper.contains(event.target as Node)) {
                setIsHeaderHovered(false);
            }
        };

        if (isHeaderHovered) {
            window.addEventListener('scroll', handleScroll);
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isHeaderHovered]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/30 transition-all duration-300 z-[9997] pointer-events-none ${
                    isHeaderHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsHeaderHovered(false)}
                aria-hidden="true"
            />

            <div
                className="header-wrapper sticky top-0 z-[9999]"
                onMouseEnter={() => setIsHeaderHovered(true)}
                onMouseLeave={() => setIsHeaderHovered(false)}
            >
                <Header />
            </div>

            <main className={`row-start-2 transition-all duration-300 ${isHeaderHovered ? 'brightness-95' : ''}`}>
                {children}
            </main>

            <div className={`transition-all duration-300 ${isHeaderHovered ? 'brightness-95' : ''}`}>
                <Footer />
            </div>

            <Tooltip
                id="custom-tooltip"
                className="z-50 !bg-stone-800 !text-white !text-sm !py-1.5 !px-2.5 !rounded-md !border !border-stone-700"
                classNameArrow="!border-stone-800"
                delayShow={300}
                noArrow={false}
                offset={10}
            />
        </>
    );
}
