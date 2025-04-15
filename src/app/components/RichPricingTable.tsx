'use client';

import MotionList from './builder/MotionList';
import { useState, useRef, useEffect } from 'react';
import MotionSection from './builder/MotionSection';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle, Star, Rocket, Layers3, Hammer, ChevronDown } from 'lucide-react';
import RevealText from './builder/RevealText';
import MotionCard from './builder/MotionCard';

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
      { label: 'UI/UX Design (Core Flows & Responsive)', description: 'High-fidelity, responsive UI designs covering main user flows.' },
      { label: 'Rails MVP (Turbo, Tailwind, Postgres)', description: 'A performant backend powered by Rails + Turbo + Tailwind stack.' },
    ],
  },
  sprint: {
    title: '60-Day MVP Sprint',
    icon: Rocket,
    badge: 'Best for Launch',
    subtitle: 'For fast-moving founders who need to validate and impress early.',
    timeline: '6–8 weeks',
    price: '$17k–$21k',
    deliverable: 'Launch-ready MVP with foundational features',
    highlights: [
      { label: 'Auth, Admin, Dashboards', description: 'User authentication, admin controls, and internal dashboards.' },
      { label: 'Stripe Integration (subscriptions or one-time)', description: 'Subscription or one-time payment flows with admin tools.' },
      { label: 'PDF Export & Sharing (Grover or Puppeteer)', description: 'Export data or reports to PDF using Grover or Puppeteer.' },
      { label: 'Fly.io or AWS hosting with CI/CD', description: 'Hosting and deployment of your MVP using CI/CD.' },
    ],
  },
  launchpack: {
    title: '90-Day Launch Pack – Foundation+',
    icon: Star,
    badge: 'Most Popular',
    subtitle: 'For founders ready to onboard users, raise funds, or go live with v1.',
    timeline: '10–12 weeks',
    price: '$22k–$30k',
    deliverable: 'Scalable MVP with onboarding & monetization tools',
    highlights: [
      { label: 'Advanced PDF & Report Templates', description: 'Custom-styled, dynamic PDF reports with templating.' },
      { label: 'Tiered Stripe Billing + Admin Controls', description: 'Customizable Stripe plans, trial handling, and admin dashboard.' },
      { label: 'Custom Field Builder', description: 'Drag-and-drop builder for structured form inputs.' },
      { label: 'Stimulus UX: Modals, Undo, Flash', description: 'Dynamic frontend UX with modals, toasts, and transitions.' },
      { label: 'In-app Help, Customer Portal, Basic Analytics', description: 'Customer portal with basic usage metrics and help features.' },
    ],
  },
  studio: {
    title: '180-Day Studio Partnership',
    icon: Layers3,
    subtitle: 'For founders who want it all — MVP, polish, growth features, and support.',
    timeline: '5–6 months',
    price: '$70k+',
    deliverable: 'End-to-end product with scale & polish built-in',
    highlights: [
      { label: 'Full Brand Identity (Logo, Fonts, PDF Styling)', description: 'Complete brand package including logo, fonts, and PDF styling.' },
      { label: 'Multi-tenant SaaS, Teams + Roles', description: 'Multi-tenant SaaS with user roles and team management.' },
      { label: 'Feature Flags + Versioning', description: 'Feature flags for version control and gradual rollouts.' },
      { label: 'Team Collaboration + Notifications', description: 'Tools for team collaboration and automated notifications.' },
      { label: 'Staging, Video Walkthroughs, 90-Day Support', description: 'Comprehensive support with staging environment and walkthroughs.' },
    ],
  },
};

const tiers = Object.keys(plans);

export default function ResponsivePricingLayout() {
  const [selected, setSelected] = useState('kickstart');
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabNavRef = useRef(null);
  const tabInView = useInView(tabNavRef, { once: false, amount: 0.1 });
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
    <MotionSection className="w-full px-4 py-24 mx-auto bg-white sm:px-6 sm:w-2/3" id="pricing">
      <motion.div className="mb-12 text-center md:text-left">
        <RevealText className="text-3xl font-bold text-[#030b1a]">Productized Pricing Tiers</RevealText>
        <p className="mt-2 mx-auto text-gray-600">
          Each plan is designed for a specific founder stage.
        </p>
      </motion.div>

      <div
        ref={tabNavRef}
        className="relative z-10 flex mb-6 px-1 gap-2 overflow-x-auto scrollbar-hide sm:justify-center sm:gap-4"
      >
        <motion.div
          className="absolute z-0 h-9 rounded-full transition-all top-1/2 -translate-y-1/2 bg-[#030b1a]/10"
          animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
        {tiers.map((tier, i) => (
          <button
            key={tier}
            ref={(el) => (tabRefs.current[i] = el)}
            onClick={() => setSelected(tier)}
            className={`relative z-10 whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all ${
              selected === tier
                ? 'bg-[#030b1a] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {plans[tier].title}
          </button>
        ))}
      </div>

      <motion.div
        key={selected}
        className="max-w-3xl mx-auto p-6 border shadow rounded-xl"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex mb-3 gap-2 items-center justify-center">
          <Icon className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-[#030b1a]">{current.title}</h3>
        </div>

        {current.badge && (
          <MotionCard className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            {current.badge}
          </MotionCard>
        )}

        <p className="flex w-full mb-4 pb-2 justify-center text-gray-500 text-sm border-b-2 border-gray-100 italic">
          {current.subtitle}
        </p>

        <div className="grid grid-cols-1 w-full mb-4 gap-4 items-center text-sm text-gray-700 text-center sm:grid-cols-2">
          <div><strong>Timeline:</strong> {current.timeline}</div>
          <div><strong>Price:</strong> {current.price}</div>
          <div className="col-span-2"><strong>Deliverable:</strong> {current.deliverable}</div>
        </div>

        <MotionList className="space-y-4">
          {current.highlights.map((item, i) => {
            const isOpen = expanded[i];
            return (
              <motion.li variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} key={i}>
                <button
                  onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                  className="flex w-full items-start justify-between text-left text-sm font-medium text-[#030b1a]"
                >
                  <div className="flex gap-2 items-center text-left">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                    {item.label}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
      </motion.div>
    </MotionSection>
  );
}
