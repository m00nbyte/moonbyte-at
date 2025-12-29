// src/components/sections/LandingSection.tsx

import Link from 'next/link';
import { useEffect } from 'react';

export function LandingSection() {
    useEffect(() => {
        const initStarField = () => {
            if (typeof window !== 'undefined' && window.animatedStarField) {
                window.animatedStarField({
                    container: '.scrolling_stars',
                    background: '#141d27',
                    direction: 0,
                    sizes: {
                        small: {
                            amount: 50,
                            color: '#ffffff',
                            speed: 0.8,
                            blink: 2000
                        },
                        medium: {
                            amount: 50,
                            color: '#ffffff',
                            speed: 0.6,
                            blink: 2000
                        },
                        large: {
                            amount: 50,
                            color: '#ffffff',
                            speed: 0.5,
                            blink: 2000
                        }
                    },
                    fadeInDuration: 1000,
                    fadeInFrom: 'black'
                });

                return true;
            }

            return false;
        };

        const initGlitch = () => {
            if (typeof window !== 'undefined' && window.PowerGlitch && window.PowerGlitch.glitch) {
                window.PowerGlitch.glitch('#landing-title', {
                    timing: {
                        duration: 4000
                    }
                });

                return true;
            }

            return false;
        };

        const starFieldInitialized = initStarField();
        const glitchInitialized = initGlitch();

        if (!starFieldInitialized || !glitchInitialized) {
            const checkInterval = setInterval(() => {
                if (!starFieldInitialized) initStarField();
                if (!glitchInitialized) initGlitch();

                if (initStarField() && initGlitch()) {
                    clearInterval(checkInterval);
                }
            }, 100);

            return () => clearInterval(checkInterval);
        }
    }, []);

    return (
        <section id="landing" className="h-screen -mt-[4rem] md:-mt-[4.2rem] group bg-stone-950 relative overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full gap-16 text-center font-display scrolling_stars">
                <div className="z-20 flex flex-col gap-6 mt-16">
                    <h1 id="landing-title" className="flex flex-col text-6xl lg:text-7xl font-bold tracking-tighter">
                        <span>M</span>
                        <span>oo</span>
                        <span>nbyte</span>
                    </h1>
                    <span className="text-3xl lg:text-4xl sm:leading-10 text-stone-300 font-bold">
                        beyond <span>the</span> <span>limits</span>
                    </span>
                </div>

                <div className="z-20 flex items-center gap-4 text-2xl transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <Link
                        href="https://github.com/m00nbyte"
                        target="_blank"
                        title="github"
                        className="p-1 transition-all ga-si opacity-70 hover:opacity-100 hover:scale-110 hover:bg-stone-800/30 rounded-full"
                    >
                        <span className="icon-[devicon--github] invert h-8.5 w-8.5"></span>
                    </Link>
                    <Link
                        href="https://npmjs.org/~m00nbyte"
                        target="_blank"
                        title="npm"
                        className="p-2 transition-all ga-si opacity-70 hover:opacity-100 hover:scale-110 hover:bg-stone-800/30 rounded-full"
                    >
                        <span className="icon-[devicon-plain--npm] h-8 w-8"></span>
                    </Link>
                    <Link
                        href="https://linkedin.com/in/m00nbyte"
                        target="_blank"
                        title="linkedin"
                        className="p-2 transition-all ga-si opacity-70 hover:opacity-100 hover:scale-110 hover:bg-stone-800/30 rounded-full"
                    >
                        <span className="icon-[devicon-plain--linkedin] h-8.5 w-8.5"></span>
                    </Link>
                </div>

                <Link href="#about" className="absolute z-20 w-8 cursor-pointer h-14 bottom-10 ga-sc animate-bounce">
                    <div className="custom-chevron">
                        <span className="sr-only">scroll</span>
                    </div>
                    <div className="custom-chevron">
                        <span className="sr-only">scroll</span>
                    </div>
                    <div className="custom-chevron">
                        <span className="sr-only">scroll</span>
                    </div>
                </Link>
            </div>

            <div className="absolute top-0 left-0 w-72 h-72 bg-sky-900/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-900/5 rounded-full blur-3xl"></div>
        </section>
    );
}
