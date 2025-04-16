'use client';

import SectionHeader from '../old/SectionHeader';
import WhatYouGet from './WhatYouGet';
import ProductPreview from '../old/ProductPreview';
import TechStack from '../old/TechStack';

export default function DeliverablesSection() {
  return (
    <section id="deliverables" className="">
      <SectionHeader title="What You Get" subtitle="Every deliverable, defined and polished" />
      <WhatYouGet />
      <ProductPreview />
      <TechStack />
    </section>
  );
}
