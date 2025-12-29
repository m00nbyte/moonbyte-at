// src/components/sections/ImprintSection.tsx

import Link from 'next/link';

export function ImprintSection() {
    return (
        <section
            id="imprint"
            className="relative overflow-hidden flex items-center justify-center px-6 py-10 mx-auto transition-all bg-dynamic"
        >
            <div className="relative flex flex-col w-full gap-6 md:w-5/6 xl:w-4/6 2xl:max-w-4xl z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold">⚖️</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-stone-100 to-stone-300 bg-clip-text text-transparent">
                        Legal Information
                    </h2>
                </div>

                <p className="text-sm text-stone-300 italic leading-relaxed">
                    Information in accordance with §5 of the E-Commerce Act, §14 of the Unternehmensgesetzbuch, §63 of the
                    Commercial Code and disclosure requirements under §25 of the Media Act. Responsible for the content and
                    operator of the website:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-stone-800/20 to-stone-900/20">
                        <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                            <span className="text-sky-400">📍</span>
                            Contact Details
                        </h3>
                        <div className="space-y-3 text-sm text-stone-300">
                            <div className="flex items-start gap-3">
                                <span className="font-bold text-stone-100">Sven Sommerbauer</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex flex-col">
                                    <span>Liechtensteinstraße 16/3</span>
                                    <span>AT-2344 Maria Enzersdorf, Austria</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Link
                                    href="mailto:office@moonbyte.at"
                                    className="underline cursor-pointer contact_email text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    office[at]moonbyte[dot]at
                                </Link>
                            </div>
                            <div className="flex items-start gap-3">
                                <span>
                                    Tax-ID: <span className="font-mono">16 330/6863</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-stone-800/20 to-stone-900/20">
                        <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                            <span className="text-emerald-400">⚖️</span>
                            Legal Information
                        </h3>
                        <div className="space-y-3 text-sm text-stone-300">
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-stone-100">Company Purpose:</span>
                                <span className="italic">Web Development, IT Consulting, IT Training</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-stone-100">Laws & Regulations:</span>
                                <Link
                                    href="//ris.bka.gv.at/"
                                    title="trade regulations (ris.bka.gv.at)"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline transition-all ga-ll hover:text-emerald-400"
                                >
                                    Trade Regulations (ris.bka.gv.at)
                                </Link>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-stone-100">Trade Authority:</span>
                                <Link
                                    href="//noe.gv.at/noe/Moedling/Bezirkshauptmannschaft_Moedling.html"
                                    title="District authority Mödling"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline transition-all ga-ll hover:text-emerald-400"
                                >
                                    District Authority Mödling
                                </Link>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-stone-100">Membership:</span>
                                <Link
                                    href="//firmen.wko.at/sven-stefan-sommerbauer/nieder%C3%B6sterreich/?firmaid=9f2d41e9-218d-4273-851c-b6329fc6c41f"
                                    title="WKO Niederösterreich"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline transition-all ga-ll hover:text-emerald-400"
                                >
                                    WKO Niederösterreich
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="relative h-[400px] rounded-xl overflow-hidden border border-stone-700 shadow-sm">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Liechtensteinstraße+16+2344+Maria+Enzersdorf&ie=UTF8&t=&z=15&iwloc=B&output=embed"
                        className="absolute inset-0"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone/80 to-transparent pointer-events-none"></div>
                </div> */}
            </div>
        </section>
    );
}
