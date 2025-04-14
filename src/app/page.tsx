'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import HowWeWorkTimeline from './components/HowWeWorkTimeline';
import WhatYouGet from './components/WhatYouGet';
import FloatingCTA from './components/FloatingCTA';
import WhatHappensNext from './components/WhatHappensNext';
import FivePillars from './components/FivePillars'; // Ensure the file exists at this path or adjust the path accordingly
import CaseStudySection from './components/CaseStudySection';
import CallToActionSection from './components/CallToActionSection';
import WhoItsFor from './components/WhoItsFor';
import ProductPreview from './components/ProductPreview';
import TechStack from './components/TechStack';
import TestimonialsByBrand from './components/TestimonialsByBrand';
import Hero from './components/Hero';
import FoundersSection from './components/FoundersSection';
import LaunchPlanSteps from './components/LaunchPlanSteps';
import FloatingSectionNav from './components/FloatingSectionNav';
import SiteHeader from './components/SiteHeader';
import WhyWeExist from './components/WhyWeExist'; // Adjust path as needed
import RichPricingTable from './components/RichPricingTable';


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
      <footer className="py-6 tw-text-center tw-text-sm text-white bg-[#030b1a]">
        © 2025 ZeroToOne • Built with clarity
      </footer>
    </main>
  );
}
