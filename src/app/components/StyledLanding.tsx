'use client';

import FloatingSectionNav from './navigation/FloatingSectionNav';
import { HowWeWorkTimeline, FounderRoadmapBuilder} from './old';
import SectionHeader from './old/SectionHeader';
import WhyWeExist from './old/WhyWeExist';
import {
  HeroSection,
  DeliverablesSection,
  ProofSection,
  PricingSection,
  FoundersSection,
  CallToActionSection,
  FivePillars,

} from './sections';

export default function StyledLanding() {
  return (
    <main className="bg-white text-[#030b1a] font-sans antialiased scroll-smooth">

      
      <FloatingSectionNav />

      <HeroSection />

      <section id="process" className=" pb-0">
        <SectionHeader title="Our Process" subtitle="From vision to launch in 4 steps" />
        <HowWeWorkTimeline />
      </section>

      <section id="roadmap" className="py-14 px-4">
      <FounderRoadmapBuilder />
      </section>

      <DeliverablesSection />

      <ProofSection />

      <PricingSection />

      <section id="about" className="py-14">
      <SectionHeader title="Get To Know Us" subtitle="Why we want to help" />
      <FivePillars />
      <WhyWeExist />
      <FoundersSection />
      </section>

      <section id="contact" className="py-14 bg-[#030b1a] text-white">
        <CallToActionSection />
      </section>
    </main>
  );
}
