'use client'

import {
  SiteHeader,
  WhatHappensNext,
  FivePillars,
  WhoItsFor,
  FoundersSection,
  LaunchPlanSteps,
  FloatingCTA,
  WhyWeExist,
  TestimonialHighlight,
  OpenSourceBadgeWall,
  BuildTimeline,
  Hero,
  HowWeWorkTimeline,
  WhatYouGet,
  ProductPreview,
  TechStack,
  CaseStudySection,
  CallToActionSection,
  TestimonialsByBrand,
  FloatingSectionNav,
  ProductBuildSimulator,
  SectionHeader,
  RichPricingTable,
} from './';

import FounderRoadmapBuilder from './FounderRoadmapBuilder';

export default function StyledLanding() {
  return (
    <main className="bg-white text-[#030b1a] font-sans antialiased scroll-smooth">
      <FloatingSectionNav />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Process */}
      <section id="process" className="py-14 pb-0">
        <SectionHeader title="Our Process" subtitle="From vision to launch in 4 steps" />
        <HowWeWorkTimeline />
      </section>

      <section id="roadmap" className="py-14 px-4">
      <FounderRoadmapBuilder />
      </section>


      {/* Deliverables */}
      <section id="deliverables" className="py-14">
        <SectionHeader title="What You Get" subtitle="Every deliverable, defined and polished" />
        <WhatYouGet />
        <ProductPreview />
        <TechStack />
      </section>

      {/* Proof */}
      <section id="proof" className="py-14">
        <SectionHeader title="Real Results" subtitle="Case studies & client testimonials" />
        <CaseStudySection />
        <TestimonialsByBrand />
      </section>



      {/* Pricing */}
      <section id="pricing" className="py-14">
        
        <SectionHeader title="Pricing Plans" subtitle="Flexible packages that scale with you" />
        <RichPricingTable />
      </section>

      {/* Founders */}
      <section id="about" className="py-14">
      <SectionHeader title="Get To Know Us" subtitle="Why we want to help" />
      <WhyWeExist />
      <FivePillars />
      <FoundersSection />
      </section>


      {/* Final CTA */}
      <section id="contact" className="py-14 bg-[#030b1a] text-white">

        <CallToActionSection />
      </section>
    </main>
  )
}