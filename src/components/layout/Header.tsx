// src/app/components/layout/Header.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

import { NavigationItem } from '@/types';

export default function Header() {
    const pathname = usePathname();
    const headerRef = useRef<HTMLHeadElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    const isMainPage = pathname === '/';

    const navigationItems: NavigationItem[] = useMemo(
        () => [
            {
                href: '#about',
                label: 'about',
                tooltip: 'about'
            },
            {
                href: '#services',
                label: 'services',
                tooltip: 'services'
            },
            {
                href: '#showcase',
                label: 'showcase',
                tooltip: 'showcase'
            },
            {
                href: '#contact',
                label: 'contact',
                tooltip: 'contact'
            }
        ],
        []
    );

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;

            const scrollY = window.scrollY;

            if (!isMainPage) {
                headerRef.current.classList.add('scrolled');
                setIsHeaderScrolled(true);
                return;
            }

            if (scrollY > 150) {
                headerRef.current.classList.add('scrolled');
                setIsHeaderScrolled(true);
            } else {
                headerRef.current.classList.remove('scrolled');
                setIsHeaderScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMainPage]);

    useEffect(() => {
        if (!isMainPage) return;

        const sections = document.querySelectorAll('section[id]');

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (id) {
                        setActiveSection(`#${id}`);

                        if (history.pushState) {
                            history.pushState(null, '', `#${id}`);
                        }
                    }
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            if (section.id) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section.id) {
                    observer.unobserve(section);
                }
            });
        };
    }, [isMainPage]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <div className="header-wrapper sticky top-0 z-[9999]">
            <header ref={headerRef} className="border-b border-transparent relative transition-all duration-300">
                <div className="px-4 mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="p-4">
                            <Link
                                id="logo_button"
                                className="flex items-center text-2xl font-bold cursor-pointer md:text-3xl hover:text-stone-300 ga-lb"
                                href="#landing"
                            >
                                <span
                                    id="logo_text"
                                    className={`tracking-wider transition-all duration-300 ease-out pointer-events-none font-display ${
                                        isMainPage && isHeaderScrolled ? 'opacity-0 z-negativ -translate-x-3' : 'opacity-100'
                                    }`}
                                >
                                    moonbyte
                                </span>

                                <span
                                    id="logo_scroll"
                                    className={`absolute flex items-center gap-2 -ml-2 transition-all duration-300 ease-out pointer-events-none ${
                                        isMainPage && isHeaderScrolled ? 'opacity-100' : 'opacity-0 z-negative -translate-x-3'
                                    }`}
                                >
                                    <span className="icon-[gg--border-top] text-xl"></span>
                                    <span className="text-lg tracking-tight font-body">back to top</span>
                                </span>
                            </Link>
                        </div>

                        {isMainPage ? (
                            <nav className="hidden md:flex items-center space-x-2">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-2 px-3 transition-all cursor-pointer py-2 rounded-md ${
                                            isHeaderScrolled
                                                ? 'hover:bg-stone-600/40 text-stone-800'
                                                : 'hover:bg-stone-600/20 text-white'
                                        } ${
                                            activeSection === item.href
                                                ? isHeaderScrolled
                                                    ? 'bg-stone-600/40 font-semibold'
                                                    : 'bg-white/20 font-semibold'
                                                : ''
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        ) : (
                            <nav className="flex items-center space-x-2">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 px-3 transition-all cursor-pointer py-2 rounded-md hover:bg-stone-600/40 text-stone-800"
                                >
                                    home
                                </Link>
                            </nav>
                        )}

                        {isMainPage && (
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none cursor-pointer pr-4"
                                    aria-label="Open menu"
                                >
                                    <span
                                        className={`hamburger-line block transition-all duration-300 ease-out
                                        h-0.5 w-6 rounded-sm ${
                                            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                                        }`}
                                    ></span>
                                    <span
                                        className={`hamburger-line block transition-all duration-300 ease-out
                                        h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                                    ></span>
                                    <span
                                        className={`hamburger-line block transition-all duration-300 ease-out
                                        h-0.5 w-6 rounded-sm ${
                                            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                                        }`}
                                    ></span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div
                className={`xl:hidden fixed inset-0 z-[9999] bg-stone-900 backdrop-blur-sm transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                }`}
            >
                <div className="flex flex-col h-full w-full transform transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-between pr-2 border-b border-stone-800">
                        <div className="ml-4 p-4">
                            <Link
                                id="logo_button"
                                className="flex items-center text-2xl font-bold cursor-pointer md:text-3xl hover:text-stone-300 ga-lb"
                                href="#landing"
                            >
                                <span
                                    id="logo_text"
                                    className="tracking-wider transition-all duration-300 ease-out pointer-events-none font-display opacity-100"
                                >
                                    moonbyte
                                </span>
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-0.5 mr-3.5 p-2 items-center flex text-white hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
                            aria-label="Close menu"
                        >
                            <span className="icon-[mdi--close] text-2xl"></span>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-4 px-4">
                        <div className="flex flex-col space-y-4 text-xl">
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 transition-all hover:text-stone-200 cursor-pointer hover:bg-stone-800 rounded-lg transform transition-all duration-300 ease-out ${
                                        activeSection === item.href ? 'bg-stone-800 text-stone-200 font-semibold' : ''
                                    } ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                                    style={{
                                        transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                                    }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
