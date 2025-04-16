'use client';

import { FC, Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import * as Popover from '@radix-ui/react-popover';
import { Check, Rocket, Hammer, Star, Layers3, Info } from 'lucide-react';
import clsx from 'clsx';

const tiers = [
  { id: 'kickstart', name: '30-Day Kickstart', icon: Hammer, description: 'Fast foundation for early founders.' },
  { id: 'sprint', name: '60-Day MVP Sprint', icon: Rocket, recommended: true, description: 'Full MVP with Stripe, PDF, and CI/CD.' },
  { id: 'launchpack', name: '90-Day Launch Pack', icon: Star, description: 'Includes monetization, onboarding, and analytics.' },
  { id: 'studio', name: '180-Day Studio', icon: Layers3, description: 'All-in-one studio build with support + branding.' },
] as const;

const features = [
  {
    category: 'Core Build',
    items: [
      { label: 'Strategy Workshop', icon: Hammer, includedIn: ['kickstart', 'sprint', 'launchpack', 'studio'] },
      { label: 'UI/UX Design', icon: Star, includedIn: ['kickstart', 'sprint', 'launchpack', 'studio'] },
      { label: 'Rails MVP Stack', icon: Layers3, includedIn: ['kickstart', 'sprint', 'launchpack', 'studio'] },
    ],
  },
  {
    category: 'Launch Features',
    items: [
      { label: 'Auth, Admin, Dashboards', icon: Rocket, includedIn: ['sprint', 'launchpack', 'studio'] },
      { label: 'Stripe Integration', icon: Rocket, includedIn: ['sprint', 'launchpack', 'studio'] },
      { label: 'PDF Export (Grover)', icon: Rocket, includedIn: ['sprint', 'launchpack', 'studio'] },
    ],
  },
  {
    category: 'Scale + Monetize',
    items: [
      { label: 'Custom Field Builder', icon: Star, includedIn: ['launchpack', 'studio'] },
      { label: 'Advanced Reports + PDF Templates', icon: Star, includedIn: ['launchpack', 'studio'] },
      { label: 'Customer Portal & Analytics', icon: Star, includedIn: ['launchpack', 'studio'] },
    ],
  },
  {
    category: 'Full Studio Build',
    items: [
      { label: 'Brand Identity + Styling', icon: Layers3, includedIn: ['studio'] },
      { label: 'Multi-Tenant SaaS + Roles', icon: Layers3, includedIn: ['studio'] },
      { label: 'Collab Tools + Notifications', icon: Layers3, includedIn: ['studio'] },
    ],
  },
];

const ComparePlansTable: FC = () => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  return (
    <motion.div
      className="relative w-full max-w-6xl mx-auto overflow-x-auto px-4 sm:px-6 pb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.table className="w-full text-left border-collapse rounded-xl shadow-xl overflow-hidden">
        <thead>
          <tr className="bg-[var(--accent)] text-white text-sm">
            <th className="sticky left-0 z-10 px-4 py-4 bg-[#030b1a] text-white">Features</th>
            {tiers.map((tier) => (
              <th
                key={tier.id}
                className="relative px-6 py-4 text-center"
                onMouseEnter={() => setHoveredTier(tier.id)}
                onMouseLeave={() => setHoveredTier(null)}
              >
                <div className="flex flex-col items-center justify-center relative">
                  <tier.icon className="w-5 h-5 mb-1" />
                  <span className="font-semibold">{tier.name}</span>

  

                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button className="absolute top-1 right-1 text-white/70 hover:text-white">
                        <Info className="w-4 h-4" />
                      </button>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content
                        sideOffset={8}
                        className="max-w-xs p-3 rounded-md shadow-lg border text-sm bg-white text-gray-700"
                      >
                        {tier.description}
                        <Popover.Arrow className="fill-white" />
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>

                {hoveredTier === tier.id && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-3/4 bg-blue-500 rounded-full blur-sm opacity-60 animate-pulse" />
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white text-sm divide-y divide-gray-200">
          {features.map(({ category, items }) => (
            <Fragment key={`category-${category}`}>
              <tr className="bg-gray-50 text-xs uppercase tracking-wide font-semibold text-gray-600">
                <td className="sticky left-0 z-10 px-4 py-3 bg-white">{category}</td>
                {tiers.map((tier) => (
                  <td key={`category-${category}-col-${tier.id}`} className="bg-white" />
                ))}
              </tr>
              {items.map((feature, featIdx) => (
                <motion.tr
                  key={`feature-${category}-${feature.label}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: featIdx * 0.05 }}
                >
                  <td className="sticky left-0 z-10 px-4 py-3 bg-white flex items-center gap-2 font-medium text-[#030b1a]">
                    <feature.icon className="w-4 h-4 text-blue-600 shrink-0" />
                    {feature.label}
                  </td>
                  {tiers.map((tier) => (
                    <td
                      key={`check-${category}-${feature.label}-${tier.id}`}
                      className="text-center"
                    >
                      {feature.includedIn.includes(tier.id) ? (
                        <Check className="w-4 h-4 text-green-600 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </motion.table>
    </motion.div>
  );
};

export default ComparePlansTable;
