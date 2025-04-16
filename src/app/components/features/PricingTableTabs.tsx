'use client';

import MotionList from './builder/MotionList';
import { FC } from 'react';
import MotionSection from './builder/MotionSection';
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
    <MotionSection className="px-6 py-24 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <RevealText className="mb-2 text-3xl font-bold tracking-tight text-[#030b1a]">Pricing Packages</RevealText>
        <p className="max-w-xl mx-auto text-gray-600">
          Choose a package that fits your stage — or let’s customize one together.
        </p>
      </MotionCard>

      <div className="grid grid-cols-1 max-w-6xl mx-auto gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="mb-4 text-xs font-semibold text-blue-600 uppercase">Most Popular</MotionCard>
            )}
            <h3 className="text-xl font-semibold text-[#030b1a]">{tier.name}</h3>
            <RevealText as='p' className="mb-4 text-gray-500 text-sm">{tier.description}</RevealText>
            <div className="mb-6 text-3xl font-bold text-[#030b1a]">{tier.price}</MotionCard>

            <MotionList className="space-y-2 text-sm text-left text-gray-700">
              {tier.features.map((f, idx) => (
                <motion.li variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} key={idx} className="flex gap-2 items-start">
                  <CheckCircle className="h-4 w-4 mt-[2px] text-blue-600" />
                  <span>{f}</span>
                </li>
              ))}
            </MotionList>
          </motion.div>
        ))}
      </MotionCard>
    </MotionSection>
  );
};

export default PricingTable;
