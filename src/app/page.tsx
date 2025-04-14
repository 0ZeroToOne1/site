'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import HowWeWorkTimeline from './components/HowWeWorkTimeline';
import WhatYouGet from './components/WhatYouGet';
import FloatingCTA from './components/FloatingCTA';
import WhatHappensNext from './components/WhatHappensNext';
import ThreePillars from './components/ThreePillars';
import CaseStudySection from './components/CaseStudySection';
import CallToActionSection from './components/CallToActionSection';
import WhoItsFor from './components/WhoItsFor';
import ProductPreview from './components/ProductPreview';
import TechStack from './components/TechStack';
import TestimonialsByBrand from './components/TestimonialsByBrand';
import Hero from './components/Hero';
import HeaderToggle from './components/HeaderToggle';
import FoundersSection from './components/FoundersSection';
import LaunchPlanSteps from './components/LaunchPlanSteps';
import FloatingSectionNav from './components/FloatingSectionNav';

export default function HomePage() {
  return (
    <main className="font-sans subpixel-antialiased bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5 shadow-sm">
        <div className="flex items-center gap-3 pl-2">
          <Image
            src="/final-250.png"
            alt="ZeroToOne logo"
            width={150}
            height={23}
            className="w-auto"
          />
        </div>
        <div className="flex items-center gap-3">

</div>
        <Link
          href="#contact"
          className="text-sm font-medium text-[var(--accent)] hover:underline"
        >
          Get Started
        </Link>
      </header>

      {/* Hero */}
      <Hero  />

      {/* Floating CTA */}
      <FloatingCTA alwaysVisibleAfter="#hero" until="#contact" />

      <WhoItsFor />

      {/* Sections */}
      <WhatYouGet />

      <HowWeWorkTimeline />
      <LaunchPlanSteps />
  
  
      <TechStack />
      <ProductPreview />

      <FloatingSectionNav />

     
      <CaseStudySection />
      <TestimonialsByBrand />
      <ThreePillars />
      <FoundersSection />
      <WhatHappensNext />
      {/* Call to Action Section */}
      <CallToActionSection />






      {/* Footer */}
      <footer className=" py-6 text-center text-sm text-white bg-[#030b1a]">
        © 2025 ZeroToOne • Built with clarity
      </footer>
    </main>
  );
}
