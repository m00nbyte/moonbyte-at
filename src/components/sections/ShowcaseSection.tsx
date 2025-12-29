// src/components/sections/ShowcaseSection.tsx

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import { logoList, projectsList } from '@/data/config';
import { initializeLogos } from '@/utils/logoSlider';

export function ShowcaseSection() {
    useEffect(() => {
        initializeLogos(logoList);
    });

    return (
        <section
            id="showcase"
            className="relative overflow-hidden flex items-center justify-center px-6 py-20 mx-auto transition-all md:min-h-screen md:px-0 bg-dynamic"
        >
            <div className="relative flex flex-col w-full gap-16 md:w-5/6 xl:w-4/6 2xl:max-w-4xl z-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                <span className="text-3xl font-bold">🚀</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
                                Innovation in Action
                            </h2>
                        </div>

                        <div className="space-y-8 text-lg lg:text-xl leading-relaxed text-stone-300">
                            <p>
                                Each project I undertake is more than just code — {`it's`} a{' '}
                                <span className="font-bold text-emerald-400">strategic solution</span> to a real-world
                                challenge. Below, {`you'll`} find a selection of my recent work that demonstrates how{' '}
                                <span className="italic">technical expertise meets creative problem-solving</span> to deliver
                                tangible business value and exceptional user experiences.
                            </p>

                            <p className="relative pl-6 border-l-2 border-sky-500/30 bg-gradient-to-r from-stone-800/20 to-transparent rounded-r-lg">
                                <span className="absolute -left-3 text-sky-400">✦</span>
                                My development philosophy emphasizes three key aspects:{' '}
                                <span className="font-bold text-stone-100">scalable architecture</span>,{' '}
                                <span className="font-bold text-emerald-400">intuitive design</span>, and{' '}
                                <span className="font-bold text-sky-400">measurable impact</span>. Every project shown here
                                reflects this commitment to excellence and client success.
                            </p>

                            <p>
                                These case studies represent just a fraction of {`what's`} possible. For a comprehensive view of
                                my technical capabilities and ongoing explorations, I invite you to explore my complete{' '}
                                <Link
                                    href="https://github.com/m00nbyte?tab=repositories"
                                    target="_blank"
                                    className="underline transition-all hover:text-stone-300 text-emerald-400 font-medium hover:text-emerald-300"
                                >
                                    GitHub profile
                                </Link>
                                . If you find something inspiring, consider leaving a{' '}
                                <span className="text-yellow-400">⭐</span> to support open-source development!
                            </p>
                        </div>
                    </div>

                    <div id="projects_grid" className="grid w-full max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
                        {projectsList.map(({ href, imageSrc, alt, title, subtitle }) => (
                            <Link
                                key={title}
                                href={href}
                                target="_blank"
                                className="relative flex w-full h-48 rounded-2xl shadow-2xl group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-emerald-500/10 z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="z-10 w-full h-full overflow-hidden transition duration-500 ease-in-out border border-stone-700 opacity-80 group-hover:opacity-100 group-hover:border-emerald-500/50 rounded-2xl">
                                    <Image
                                        src={imageSrc}
                                        width={150}
                                        height={50}
                                        className="block object-cover object-left-top w-full h-full transition duration-500 transform scale-100 opacity-100 animate-fade-in group-hover:scale-110"
                                        alt={alt}
                                    />
                                </div>
                                <div className="absolute bottom-0 z-20 p-4 m-0 transition duration-500 ease-in-out group-hover:-translate-y-2 group-hover:translate-x-2">
                                    <span className="text-2xl font-bold text-white drop-shadow-lg">{title}</span>
                                    <p className="text-sm font-light text-gray-200 drop-shadow-lg italic">{subtitle}</p>
                                </div>

                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-emerald-400 text-2xl">↗</span>
                                </div>
                            </Link>
                        ))}
                        <Link
                            href="https://github.com/m00nbyte"
                            target="_blank"
                            className="relative flex w-full h-48 rounded-2xl shadow-2xl group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 z-0"></div>
                            <div className="z-10 w-full h-full overflow-hidden transition duration-300 ease-in-out border border-stone-700 opacity-80 group-hover:opacity-100 group-hover:border-emerald-500/50 rounded-2xl flex items-center justify-center pb-10">
                                <span className="icon-[devicon--github] invert text-5xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"></span>
                            </div>
                            <div className="absolute bottom-0 z-20 p-4 m-0 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3">
                                <span className="text-2xl font-bold text-white shadow-xl">Explore More on Github</span>
                                <p className="text-sm text-stone-300 italic">Dive into the code →</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <span className="text-2xl text-emerald-400">🌟</span>
                        <h3 className="text-2xl font-bold tracking-tight text-stone-100">
                            Trusted by Forward-Thinking Organizations
                        </h3>
                    </div>

                    <div className="space-y-4">
                        <p className="text-xl lg:text-xl text-stone-300 leading-relaxed italic">
                            My expertise has been sought by innovative companies and brands who value{' '}
                            <span className="font-bold text-emerald-400 not-italic">technical precision</span> combined with{' '}
                            <span className="italic">strategic vision</span>. These collaborations have spanned various
                            industries, each presenting unique challenges that required tailored, sophisticated solutions.
                        </p>

                        <p className="text-lg text-stone-300">
                            The brands shown below represent a selection of organizations that have entrusted me with their
                            digital transformation. Each partnership has been built on{' '}
                            <span className="font-bold text-sky-400">mutual respect</span>,{' '}
                            <span className="italic">clear communication</span>, and a shared commitment to excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 rounded-2xl overflow-hidden bg-gradient-to-br from-stone-800/30 via-stone-900/30 to-stone-800/30">
                        <div
                            id="logo_slider"
                            className="relative overflow-hidden whitespace-nowrap grayscale transition-all duration-500 [mask-image:_linear-gradient(to_right,_transparent_0,_white_64px,white_calc(100%-64px),_transparent_100%)] p-8"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
