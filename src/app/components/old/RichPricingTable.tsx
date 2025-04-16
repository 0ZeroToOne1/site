'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import clsx from 'clsx';
import {
  CheckCircle,
  Rocket,
  Layers3,
  Hammer,
  ChevronDown,
  Star,
  PanelTopClose,
} from 'lucide-react';

import MotionSection from '../motion/MotionSection';
import MotionList from '../motion/MotionList';
import MotionCard from '../motion/MotionCard';
import RevealText from '../motion/RevealText';
import SectionSubHeader from './SectionSubHeader';
import ComparePlansTable from './ComparePlansTable';

const plans = {
  kickstart: {
    title: '30-Day Kickstart Kit',
    icon: Hammer,
    badge: 'Entry Tier',
    subtitle: 'For early founders needing a fast, functional foundation.',
    timeline: '3–4 weeks',
    price: '$5k–$7k',
    deliverable: 'Simple but solid MVP foundation',
    highlights: [
      { label: 'Product Strategy Workshop', description: 'Collaborative planning session to align goals with product scope.' },
      { label: 'UI/UX Design', description: 'High-fidelity responsive designs covering core flows.' },
      { label: 'Rails MVP', description: 'Turbo + Tailwind + Postgres stack foundation.' },
    ],
  },
  sprint: {
    title: '60-Day MVP Sprint',
    icon: Rocket,
    badge: 'Best for Launch',
    subtitle: 'For fast-moving founders ready to validate and impress.',
    timeline: '6–8 weeks',
    price: '$17k–$21k',
    deliverable: 'Launch-ready MVP with key flows',
    highlights: [
      { label: 'Auth + Admin + Dashboards', description: 'All the essentials to manage your MVP.' },
      { label: 'Stripe Payments', description: 'Subscription or one-time billing integrations.' },
      { label: 'PDF Export & Sharing', description: 'Built-in export tools with Grover or Puppeteer.' },
      { label: 'Fly.io or AWS Hosting', description: 'Fully deployed and CI/CD-ready.' },
    ],
  },
  launchpack: {
    title: '90-Day Launch Pack – Foundation+',
    icon: Star,
    badge: 'Most Popular',
    subtitle: 'For founders ready to scale, raise, or onboard users.',
    timeline: '10–12 weeks',
    price: '$22k–$30k',
    deliverable: 'Scalable MVP with monetization tools',
    highlights: [
      { label: 'Advanced PDFs & Templates', description: 'Styled, dynamic PDF reports for user data.' },
      { label: 'Tiered Billing + Admin Controls', description: 'Custom Stripe tiers and admin tooling.' },
      { label: 'Custom Field Builder', description: 'Visual form editor for dynamic data.' },
      { label: 'Stimulus UX Toolkit', description: 'Undo, toasts, modals, and more.' },
    ],
  },
  studio: {
    title: '180-Day Studio Partnership',
    icon: Layers3,
    subtitle: 'For founders building a serious platform with support.',
    timeline: '5–6 months',
    price: '$70k+',
    deliverable: 'End-to-end product with branding + growth features',
    highlights: [
      { label: 'Brand Identity', description: 'Logo, typography, styling system, and PDF design.' },
      { label: 'Multi-Tenant SaaS', description: 'Teams, roles, and custom environments.' },
      { label: 'Feature Flags & Collaboration', description: 'Advanced toggles, notifications, and staging.' },
    ],
  },
};

const tiers = Object.keys(plans) as Array<keyof typeof plans>;

export default function ResponsivePricingLayout() {
  const [selected, setSelected] = useState<keyof typeof plans>('kickstart');
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [showCompare, setShowCompare] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabNavRef = useRef(null);
  const currentIndex = tiers.indexOf(selected);
  const current = plans[selected];
  const Icon = current.icon;

  useEffect(() => {
    const tab = tabRefs.current[currentIndex];
    if (tab) {
      const { offsetLeft, offsetWidth } = tab;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [selected]);

  return (
    <MotionSection className="relative w-full px-4 py-24 mx-auto bg-white sm:px-6 sm:w-full" id="pricing">
      <div className="mb-12 text-center md:text-left w-2/3 mx-auto">
        <SectionSubHeader title="Productized Pricing Tiers" subtitle="Each plan is designed for a specific founder stage." />
      </div>

      {/* Floating Sticky Tab Navigation */}
      <div ref={tabNavRef} className="sticky top-4 px-2 py-3 mb-8 w-2/3 mx-auto">
        <div className="relative flex gap-2 overflow-x-auto scrollbar-hide sm:justify-center sm:gap-4 mb-12">
          <motion.div
            className="absolute z-0 h-9 rounded-full top-1/2 -translate-y-1/2 bg-[var(--accent)]/10"
            animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          />
          <motion.div
            className="absolute z-0 h-9 rounded-full top-1/2 -translate-y-1/2 animate-pulse bg-[var(--accent)]/20"
            style={indicatorStyle}
          />
          {tiers.map((tier, i) => (
            <button
              key={tier}
              ref={(el) => (tabRefs.current[i] = el)}
              onClick={() => setSelected(tier)}
              className={clsx(
                'relative z-10 whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer',
                selected === tier
                  ? 'bg-[var(--accent)] text-white drop-shadow-lg '
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {plans[tier].title}
            </button>
          ))}
        </div>
      </div>

      {/* Plan Card */}
      <motion.div
        key={selected}
        className="max-w-3xl mx-auto p-6 bg-white drop-shadow-lg hover:scale-105 transition ease-in-out duration-300 rounded-xl w-2/3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex mb-3 gap-2 items-center justify-center">
          <Icon className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-[#030b1a]">{current.title}</h3>
        </div>

        {'badge' in current && current.badge && (
          <MotionCard className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            {current.badge}
          </MotionCard>
        )}

        <RevealText className="flex w-full mb-4 pb-2 justify-center text-gray-500 text-sm border-b border-gray-100 italic">
          {current.subtitle}
        </RevealText>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full mb-4 gap-4 items-center text-sm text-gray-700 text-center">
          <div><strong>Timeline:</strong> {current.timeline}</div>
          <div><strong>Price:</strong> {current.price}</div>
          <div className="col-span-2"><strong>Deliverable:</strong> {current.deliverable}</div>
        </div>

        <MotionList className="space-y-4">
          {current.highlights.map((item, i) => {
            const isOpen = expanded[i];
            return (
              <motion.li key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <button
                  onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                  className="flex w-full items-start justify-between text-left text-sm font-medium text-[#030b1a]"
                >
                  <div className="flex gap-2 items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    {item.label}
                  </div>
                  <ChevronDown
                    className={clsx('h-4 w-4 transition-transform', { 'rotate-180': isOpen })}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      className="mt-2 pl-6 pr-2 text-xs text-gray-600"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </MotionList>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-full transition cursor-pointer"
          >
            <PanelTopClose className="w-4 h-4" />
            {showCompare ? 'Hide Comparison' : 'Compare All Plans'}
          </button>
        </div>
      </motion.div>

      {/* Compare All Toggle Section */}
      <AnimatePresence>
        {showCompare && (
          <motion.div
            key="compare-plans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className=" mx-auto mt-10"
          >
            <ComparePlansTable plans={plans} />
          </motion.div>
        )}
      </AnimatePresence>
    </MotionSection>
  );
}
