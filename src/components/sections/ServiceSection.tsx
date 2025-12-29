// src/components/sections/ServiceSection.tsx

import { servicesList } from '@/data/config';

export function ServiceSection() {
    return (
        <section
            id="services"
            className="relative overflow-hidden flex items-center justify-center px-6 py-20 mx-auto transition-all md:min-h-screen md:px-0 bg-dynamic"
        >
            <div className="relative flex flex-col w-full gap-16 md:w-5/6 xl:w-4/6 2xl:max-w-4xl z-10">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-3xl font-bold">✨</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
                            Comprehensive Digital Solutions
                        </h2>
                    </div>

                    <div className="space-y-8 text-lg lg:text-xl leading-relaxed text-stone-300">
                        <p>
                            I transcend conventional service categories by approaching each project as a{' '}
                            <span className="font-bold text-emerald-400">unique narrative</span> that deserves its own bespoke
                            solution. Rather than offering cookie-cutter packages, I engage in{' '}
                            <span className="italic">deep collaborative discovery</span> to understand your specific challenges,
                            objectives, and vision.
                        </p>

                        <p className="relative pl-6 border-l-2 border-sky-500/30 bg-gradient-to-r from-stone-800/20 to-transparent rounded-r-lg">
                            <span className="absolute -left-3 text-sky-400">✦</span>
                            My methodology is built on three core principles:{' '}
                            <span className="font-bold text-stone-100">strategic innovation</span>,{' '}
                            <span className="font-bold text-sky-400">technical excellence</span>, and{' '}
                            <span className="font-bold text-emerald-400">client-centric delivery</span>. Every solution is
                            crafted not just to meet requirements, but to{' '}
                            <span className="italic">exceed expectations and drive meaningful results</span>.
                        </p>

                        <p>
                            Below {`you'll`} find my core service areas, but please remember: these are starting points, not
                            limitations. The true value I provide lies in the{' '}
                            <span className="font-bold text-emerald-400">custom integration</span> and{' '}
                            <span className="italic">creative adaptation</span> of these capabilities to serve your unique
                            needs. {`Let's`} have a conversation about {`what's`} possible for your specific situation.
                        </p>
                    </div>
                </div>

                <div id="services_grid" className="grid gap-6 md:grid-cols-2">
                    {servicesList.map(({ icon, title, description }) => (
                        <div
                            key={title}
                            className="group relative h-full overflow-hidden border border-stone-700 bg-gradient-to-br from-stone-800/50 to-stone-900/50 p-6 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 rounded-2xl hover:-translate-y-2"
                        >
                            <div className="flex flex-col h-full gap-4">
                                <div className="flex flex-row items-center gap-4">
                                    <div className="rounded-xl group-hover:from-emerald-500/30 group-hover:to-sky-500/30 transition-all">
                                        <span className={`${icon} h-7 w-7 text-emerald-400`}></span>
                                    </div>
                                    <span className="text-2xl font-bold tracking-tight text-stone-100">{title}</span>
                                </div>
                                <p className="flex-grow text-base leading-relaxed text-justify text-stone-300 group-hover:text-stone-200 transition-colors">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <p className="text-stone-400 text-lg">
                        <span className="italic">
                            {`"The best technology is invisible — it works so well you don't even notice it."`}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
