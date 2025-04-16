'use client';

import SectionHeader from '../old/SectionHeader';
import RichPricingTable from '../old/RichPricingTable';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-14">
      <SectionHeader title="Pricing Plans" subtitle="Flexible packages that scale with you" />
      <RichPricingTable />
    </section>
  );
}
