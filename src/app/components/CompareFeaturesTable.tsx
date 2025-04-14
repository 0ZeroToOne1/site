
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';

const rawGroups = [
  {
    name: 'Core Build',
    features: [
      {
        label: 'Product Strategy Workshop',
        description: 'Collaborative planning session to align goals with product scope.',
        plans: ['kickstart'],
      },
      {
        label: 'UI/UX Design (Core Flows & Responsive)',
        description: 'High-fidelity, responsive UI designs covering main user flows.',
        plans: ['kickstart'],
      },
      {
        label: 'Rails MVP (Turbo, Tailwind, Postgres)',
        description: 'A performant backend powered by Rails + Turbo + Tailwind stack.',
        plans: ['kickstart'],
      },
    ],
  },
  {
    name: 'Launch Essentials',
    features: [
      {
        label: 'Auth, Admin, Dashboards',
        description: 'User authentication, admin controls, and internal dashboards.',
        plans: ['sprint'],
      },
      {
        label: 'Stripe Integration',
        description: 'Subscription or one-time payment flows with admin tools.',
        plans: ['sprint'],
      },
      {
        label: 'PDF Export & Sharing',
        description: 'Export data or reports to PDF using Grover or Puppeteer.',
        plans: ['sprint'],
      },
    ],
  },
  {
    name: 'Growth Features',
    features: [
      {
        label: 'Advanced PDF Templates',
        description: 'Custom-styled, dynamic PDF reports with templating.',
        plans: ['launchpack'],
      },
      {
        label: 'Custom Field Builder',
        description: 'Drag-and-drop builder for structured form inputs.',
        plans: ['launchpack'],
      },
      {
        label: 'Stimulus UX (modals, undo, flash)',
        description: 'Dynamic frontend UX with modals, toasts, and transitions.',
        plans: ['launchpack'],
      },
      {
        label: 'Tiered Billing + Admin',
        description: 'Stripe plans, trial handling, and admin billing UI.',
        plans: ['launchpack'],
      },
      {
        label: 'Analytics (Posthog / Ahoy)',
        description: 'In-app user tracking and event metrics.',
        plans: ['launchpack'],
      },
    ],
  },
  {
    name: 'Enterprise & Scale',
    features: [
      {
        label: 'Multi-tenant SaaS (Teams + Roles)',
        description: 'Scoped user access per organization, with roles and invites.',
        plans: ['studio'],
      },
      {
        label: 'Feature Flags + Versioning',
        description: 'Toggle features and manage deployments by version.',
        plans: ['studio'],
      },
      {
        label: 'Team Collaboration Tools',
        description: 'Comments, shared access, and team productivity tools.',
        plans: ['studio'],
      },
      {
        label: 'Email Notifications + Campaigns',
        description: 'User email alerts and marketing drip campaigns.',
        plans: ['studio'],
      },
    ],
  },
];

const tiers = ['kickstart', 'sprint', 'launchpack', 'studio'];
const tierLabels = {
  kickstart: 'Kickstart',
  sprint: '60-Day MVP',
  launchpack: '90-Day Pack',
  studio: 'Studio',
};

// Inherit feature sets upward
function computeInheritedGroups(groups: Group[]): Group[] {
  const tierSets: Record<string, Set<string>> = {};
  const inherited: Group[] = [];

  tiers.forEach((tier: string) => {
    tierSets[tier] = new Set<string>();
  });

  for (const group of groups) {
    const newGroup: Group = { name: group.name, features: [] };
    for (const feature of group.features) {
      const allPlans: Set<string> = new Set();
      for (const tier of tiers) {
        if (feature.plans.includes(tier)) {
          allPlans.add(tier);
          const idx: number = tiers.indexOf(tier);
          for (let i = idx + 1; i < tiers.length; i++) {
            allPlans.add(tiers[i]);
          }
        }
      }
      newGroup.features.push({ ...feature, plans: Array.from(allPlans) });
    }
    inherited.push(newGroup);
  }

  return inherited;
}

interface Feature {
  label: string;
  description: string;
  plans: string[];
}

interface Group {
  name: string;
  features: Feature[];
}

const groupedFeatures: Group[] = computeInheritedGroups(rawGroups);

export default function CompareFeaturesTable() {
  const [hoverCol, setHoverCol] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 bg-white border-t" id="compare">
      <div className="mx-auto max-w-6xl text-center md:text-left mb-12">
        <h2 className="text-3xl font-bold text-[#030b1a] mb-2">Feature Comparison</h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Each tier builds on the one before it — more features, more polish.
        </p>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b text-[#030b1a]">
              <th className="p-4 font-medium text-left">Feature</th>
              {(tiers as Array<keyof typeof tierLabels>).map((tier, index) => (
                <th
                  key={tier}
                  onMouseEnter={() => setHoverCol(index)}
                  onMouseLeave={() => setHoverCol(null)}
                  className="p-4 font-semibold text-center md:text-left cursor-pointer"
                >
                  {tierLabels[tier]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groupedFeatures.map((group, groupIdx) => (
              <React.Fragment key={groupIdx}>
                <tr className="bg-gray-100 border-b">
                  <td colSpan={tiers.length + 1} className="p-4 font-semibold text-[#030b1a]">
                    {group.name}
                  </td>
                </tr>
                {group.features.map((feature, i) => (
                  <tr key={feature.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-700 flex flex-col md:flex-row items-start gap-2">
                      {feature.label}
                      <span title={feature.description}>
                        <Info className="h-4 w-4 text-gray-400 hover:text-blue-600 transition" />
                      </span>
                    </td>
                    {tiers.map((tier, idx) => (
                      <td
                        key={tier}
                        className={`p-4 text-center transition duration-300 ${
                          hoverCol === idx ? 'bg-blue-50' : ''
                        }`}
                      >
                        {feature.plans.includes(tier) ? (
                          <motion.div
                            whileHover={{ scale: 1.25 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            className="inline-block"
                          >
                            <Check className="h-4 w-4 text-green-600" />
                          </motion.div>
                        ) : (
                          <X className="h-4 w-4 text-gray-300 inline" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
