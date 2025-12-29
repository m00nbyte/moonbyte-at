// src/app/components/layout/Layout.tsx

'use client';

import 'react-tooltip/dist/react-tooltip.css';

import { useEffect } from 'react';
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
    useEffect(() => {
        initializeFun();
        initializeConsent();
        registerServiceWorker();
        setupConnectionListeners();
    });

    return (
        <>
            <Header />
            <main className="row-start-2">{children}</main>
            <Footer />

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
