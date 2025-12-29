// src/components/sections/AboutSection.tsx

import { techStack } from '@/data/config';

export function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden flex items-center justify-center px-6 py-20 mx-auto transition-all md:min-h-screen md:px-0 bg-dynamic"
        >
            <div className="relative flex flex-col w-full gap-20 md:w-5/6 xl:w-4/6 2xl:max-w-4xl z-10">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-3xl font-bold">👋</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
                            Hey there, {`I'm`} <span className="text-emerald-400">Sven</span>.
                        </h2>
                    </div>

                    <div className="space-y-8 text-lg lg:text-xl leading-relaxed text-stone-300">
                        <p className="relative pl-6 border-l-2 border-emerald-500/30">
                            <span className="absolute -left-3 text-emerald-400">✦</span>I am a{' '}
                            <span className="font-bold text-stone-100">senior full-stack developer</span>,{' '}
                            <span className="font-bold text-stone-100">network administrator</span> and{' '}
                            <span className="font-bold text-stone-100">IT security specialist</span> from Austria with{' '}
                            <span className="font-bold text-emerald-400">{new Date().getFullYear() - 2008} years</span> of
                            comprehensive hands-on experience. My expertise has been honed through{' '}
                            <span className="italic">extensive real-world practice</span>, continuous learning, and solving
                            complex technical challenges across diverse industries.
                        </p>

                        <p className="relative pl-6 border-l-2 border-sky-500/30">
                            <span className="absolute -left-3 text-sky-400">✦</span>
                            As a <span className="font-bold text-stone-100">professional software engineer</span>, I possess the
                            unique ability to <span className="italic">design, architect, develop, and deploy</span>{' '}
                            sophisticated digital solutions that drive business growth. From elegant company websites and
                            high-performance e-commerce platforms to
                            <span className="font-bold text-sky-400"> complex enterprise applications</span>, I bridge the gap
                            between visionary ideas and technical reality.
                        </p>

                        <p className="relative pl-6 border-l-2 border-emerald-500/30">
                            <span className="absolute -left-3 text-emerald-400">✦</span>
                            My approach combines <span className="font-bold text-stone-100">technical precision</span> with{' '}
                            <span className="italic">creative problem-solving</span>. I specialize in creating scalable,
                            maintainable codebases that not only meet current requirements but are{' '}
                            <span className="font-bold text-emerald-400">engineered for future growth</span>. Whether {`it's`}{' '}
                            optimizing performance, enhancing security, or implementing cutting-edge features, I ensure every
                            solution is robust, efficient, and user-centric.
                        </p>

                        <p className="relative pl-6 border-l-2 border-sky-500/30 bg-gradient-to-r from-stone-800/20 to-transparent rounded-r-lg">
                            <span className="absolute -left-3 text-sky-400">✦</span>
                            What truly sets me apart is my{' '}
                            <span className="font-bold text-stone-100">holistic understanding</span> of the digital ecosystem.
                            Beyond just writing code, I consider{' '}
                            <span className="italic">
                                user experience, system architecture, security protocols, and business objectives
                            </span>{' '}
                            to deliver comprehensive solutions that{' '}
                            <span className="font-bold text-sky-400">exceed expectations</span>.
                        </p>

                        <p className="relative pl-6 border-l-2 border-emerald-500/30 bg-gradient-to-r from-stone-800/20 to-transparent rounded-r-lg">
                            <span className="absolute -left-3 text-emerald-400">✦</span>I invite you to schedule a{' '}
                            <span className="font-bold text-emerald-400">complimentary strategy session</span> where we can
                            explore your vision in depth. Share your goals, challenges, and aspirations, and {`I'll`} craft a
                            <span className="italic"> tailor-made, high-performance solution</span> that not only meets your
                            immediate needs but also positions you for long-term success — all delivered with{' '}
                            <span className="font-bold text-stone-100">transparent pricing</span> and{' '}
                            <span className="font-bold text-emerald-400">unwavering commitment to quality</span>.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-sky-700 to-sky-500"></div>
                        <h3 className="text-2xl font-bold tracking-tight lg:text-3xl bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
                            Technical Expertise
                        </h3>
                        <div className="flex-grow h-0.5 bg-gradient-to-r from-sky-500 to-sky-700"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-stone-300 leading-relaxed">
                            Over the years, {`I've`} mastered a diverse technology stack that enables me to tackle any
                            challenge. Here are the core technologies I work with daily:
                        </p>
                        <div id="tech_stack" className="flex flex-wrap items-center gap-12 pt-3">
                            {techStack.map(({ title, icon }) => {
                                return (
                                    <span
                                        key={title}
                                        className={`${icon} h-10 w-10 opacity-80 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-pointer hover:drop-shadow-glow`}
                                        data-tooltip-id="custom-tooltip"
                                        data-tooltip-content={title}
                                        data-tooltip-place="bottom"
                                    ></span>
                                );
                            })}
                        </div>
                        <p className="text-base text-stone-400 italic mt-4">
                            This is just a snapshot of my technical toolkit. {`I'm`} constantly exploring new technologies and
                            frameworks to ensure I deliver the most modern, efficient solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
