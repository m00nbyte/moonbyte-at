// src/app/components/sections/ContactSection.tsx

import Link from 'next/link';
import { useEffect } from 'react';

import { formText } from '@/data/config';
import initializeForm from '@/utils/formHelper';

export function ContactSection() {
    useEffect(() => {
        initializeForm(formText);
    });

    return (
        <section
            id="contact"
            className="relative overflow-hidden flex items-center justify-center px-6 py-20 mx-auto transition-all md:min-h-screen md:px-0 bg-dynamic"
        >
            <div className="relative flex flex-col w-full gap-16 md:w-5/6 xl:w-4/6 2xl:max-w-4xl z-10">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-3xl font-bold">💥</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
                            {`Let's`} Build Something <span className="italic">Extraordinary</span>
                        </h2>
                    </div>

                    <div className="space-y-8 text-lg lg:text-xl leading-relaxed text-stone-300">
                        <p>
                            Every great project begins with a conversation. Whether you have a{' '}
                            <span className="font-bold text-emerald-400">fully-formed concept</span> or just a{' '}
                            <span className="italic">spark of an idea</span>, {`I'm`} here to listen, understand, and
                            collaborate on bringing your digital vision to life with precision and passion.
                        </p>

                        <p className="relative pl-6 border-l-2 border-sky-500/30 bg-gradient-to-r from-stone-800/20 to-transparent rounded-r-lg">
                            <span className="absolute -left-3 text-sky-400">✦</span>
                            The consultation process is designed to be{' '}
                            <span className="font-bold text-stone-100">comprehensive yet straightforward</span>: {`we'll`}{' '}
                            explore your objectives, discuss potential solutions, and outline a clear path forward — all with{' '}
                            <span className="font-bold text-emerald-400">no obligation</span> and{' '}
                            <span className="font-bold text-sky-400">complete transparency</span>.
                        </p>

                        <p className="text-lg text-stone-200 font-medium mt-6">
                            <span className="text-emerald-400">Ready to begin?</span> Fill out the form below with as much
                            detail as you can provide about your project, timeline, and goals. The more information you share,
                            the more tailored and valuable my response will be.
                        </p>
                    </div>
                </div>
                <form id="contact_form" action="#" method="POST" noValidate>
                    <input className="hidden" name="_honey" type="text" />

                    <div className="grid w-full grid-cols-2 gap-6 m-auto">
                        <div className="col-span-2 lg:col-span-1 relative">
                            <div className="relative">
                                <input
                                    id="contact_name"
                                    className="w-full px-4 py-3 text-base placeholder-stone-300 border appearance-none border-stone-700 bg-stone-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none rounded-lg transition-all"
                                    name="name"
                                    type="text"
                                    placeholder="Name *"
                                    minLength={3}
                                    maxLength={100}
                                    required
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1 relative">
                            <div className="relative">
                                <input
                                    id="contact_email"
                                    className="w-full px-4 py-3 text-base placeholder-stone-300 border appearance-none border-stone-700 bg-stone-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none rounded-lg transition-all"
                                    name="email"
                                    type="text"
                                    placeholder="E-Mail *"
                                    minLength={10}
                                    maxLength={100}
                                    required
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <div className="col-span-2 relative">
                            <div id="message_box" className="relative flex flex-col">
                                <textarea
                                    className="w-full px-4 py-3 text-base placeholder-stone-300 border appearance-none resize-none border-stone-700 bg-stone-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none rounded-lg transition-all"
                                    id="message_input"
                                    name="message"
                                    placeholder="Message *"
                                    rows={5}
                                    cols={40}
                                    minLength={10}
                                    maxLength={1000}
                                    required
                                    onInput={(e) => {
                                        const textarea = e.target as HTMLTextAreaElement;
                                        const countElement = document.getElementById('message_count');
                                        if (countElement) {
                                            countElement.textContent = (1000 - textarea.value.length).toString();
                                        }
                                    }}
                                ></textarea>
                            </div>
                            <div className="flex items-center gap-2 pt-3 text-xs text-stone-300">
                                <span className="icon-[fluent--arrow-up-20-filled]"></span>
                                <span>
                                    <span id="message_count">1000</span> characters left
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col col-span-2 text-left relative">
                            <label
                                className="relative flex flex-row items-center justify-start gap-2 text-sm text-left cursor-pointer"
                                htmlFor="privacy"
                            >
                                <input
                                    className="w-4 h-4 -mt-0.5 form-checkbox text-emerald-600 border-stone-300 rounded focus:ring-emerald-500"
                                    id="privacy"
                                    name="privacy"
                                    type="checkbox"
                                    required
                                />
                                <span>
                                    {`I've`} read the{' '}
                                    <Link href="/privacy" className="text-stone-300 hover:text-stone-200 underline">
                                        privacy policy
                                    </Link>
                                </span>
                            </label>
                        </div>

                        <div id="form_submit" className="relative col-span-2">
                            <button
                                className="w-full border-0 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 px-4 py-3 text-lg text-white text-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                type="submit"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Send
                                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
