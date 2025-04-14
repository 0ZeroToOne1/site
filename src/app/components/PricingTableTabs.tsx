'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Launch',
    price: '$5,000',
    description: 'For early MVPs and idea validation.',
    features: ['2–3 core screens', 'Clickable prototype', 'Basic CMS integration', '2-week delivery'],
    highlight: false,
  },
  {
    name: 'Grow',
    price: '$12,000',
    description: 'Our most popular — for funded MVPs & pilot-ready launches.',
    features: ['6–8 custom pages', 'Custom design system', 'CMS + Auth + DB setup', '4-week delivery'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    description: 'For high-stakes builds, platforms, or complex apps.',
    features: ['End-to-end UX flows', 'Advanced integrations', 'Scaling strategy included', 'Dedicated PM'],
    highlight: false,
  },
];

const PricingTable: FC = () => {
  return (
    <section className="px-6 py-24 bg-white" id="pricing">
      <div className="mx-auto max-w-6xl text-center mb-16">
        <h2 className="text-3xl font-bold text-[#030b1a] tracking-tight mb-2">Pricing Packages</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Choose a package that fits your stage — or let’s customize one together.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            className={`border rounded-xl p-6 shadow-sm hover:shadow-md transition-all ${
              tier.highlight ? 'border-blue-600 bg-blue-50/20' : 'border-gray-200'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {tier.highlight && (
              <div className="text-xs font-semibold uppercase text-blue-600 mb-4">Most Popular</div>
            )}
            <h3 className="text-xl font-semibold text-[#030b1a]">{tier.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
            <div className="text-3xl font-bold text-[#030b1a] mb-6">{tier.price}</div>

            <ul className="space-y-2 text-sm text-left text-gray-700">
              {tier.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-[2px]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
