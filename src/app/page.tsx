// src/app/page.tsx

'use client';

import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ImprintSection } from '@/components/sections/ImprintSection';
import { LandingSection } from '@/components/sections/LandingSection';
import { ServiceSection } from '@/components/sections/ServiceSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';

export default function Home() {
    return (
        <div className="h-full">
            <LandingSection />
            <AboutSection />
            <ServiceSection />
            <ShowcaseSection />
            <ContactSection />
            <ImprintSection />
        </div>
    );
}
