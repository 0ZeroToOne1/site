'use client';

import MotionCard from '@/components/MotionCard';
import MotionSection from '@/components/MotionSection';
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
  TestimonialHighlight,
} from './components';


export default function HomePage() {
  return (
    <main className="font-sans bg-white subpixel-antialiased tw-text-gray-900">
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
    
 
      <LaunchPlanSteps />
      <ProductPreview />
      <TechStack />

      {/* Floating Section Nav */}
      <FloatingSectionNav />
      <WhyWeExist />
      <TestimonialsByBrand />
      <CaseStudySection />
    
      <FivePillars />
      <FoundersSection />
      <WhatHappensNext />

      <TestimonialHighlight />

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Footer */}
      <footer className="flex py-6 mx-auto justify-center text-white tw-text-center tw-text-sm bg-[#030b1a]">
        © 2025 ZeroToOne • Built with clarity
      </footer>
    </main>
  );
}
