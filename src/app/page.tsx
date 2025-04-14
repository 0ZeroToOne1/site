'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import {
  Hero,
  SiteHeader,
  HowWeWorkTimeline,
  WhatYouGet,
  WhatHappensNext,
  FivePillars,
  CaseStudySection,
  CallToActionSection,
  WhoItsFor,
  ProductPreview,
  TechStack,
  TestimonialsByBrand,
  FoundersSection,
  LaunchPlanSteps,
  FloatingCTA,
  FloatingSectionNav,
  WhyWeExist,
  RichPricingTable,
} from './components';


export default function HomePage() {
  return (
    <main className="font-sans subpixel-antialiased bg-white tw-text-gray-900">
      {/* Header */}
      <SiteHeader />

      {/* Hero */}
      <Hero />

      {/* Floating CTA */}
      <FloatingCTA alwaysVisibleAfter="#hero" until="#contact" />

      {/* Sections */}
      <WhoItsFor />
      <HowWeWorkTimeline />
      <RichPricingTable />

      {/* Background Image */}
      <WhatYouGet />
    
      <WhyWeExist />
      <LaunchPlanSteps />
      <ProductPreview />
      <TechStack />

      {/* Floating Section Nav */}
      <FloatingSectionNav />
      <TestimonialsByBrand />
      <CaseStudySection />
    
      <FivePillars />
      <FoundersSection />
      <WhatHappensNext />

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Footer */}
      <footer className="py-6 tw-text-center tw-text-sm text-white bg-[#030b1a] flex justify-center mx-auto">
        © 2025 ZeroToOne • Built with clarity
      </footer>
    </main>
  );
}
