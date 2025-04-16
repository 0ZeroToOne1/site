'use client';

import SectionHeader from '../old/SectionHeader';
import CaseStudySection from '../old/CaseStudySection';
import TestimonialsByBrand from '../old/TestimonialsByBrand';

export default function ProofSection() {
  return (
    <section id="proof" className="py-14">
      <SectionHeader title="Real Results" subtitle="Case studies & client testimonials" />
      <CaseStudySection />
      <TestimonialsByBrand />
    </section>
  );
}
