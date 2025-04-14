'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle, Star, Rocket, Layers3, Hammer, ChevronDown } from 'lucide-react';

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
    <section className="px-4 sm:px-6 py-24 bg-white w-full sm:w-2/3 mx-auto" id="pricing">
      <motion.div className="text-right mb-12">
        <h2 className="text-3xl font-bold text-[#030b1a]">Productized Pricing Tiers</h2>
        <p className="text-gray-600 mt-2  mx-auto">
          Each plan is designed for a specific founder stage.
        </p>
      </motion.div>

      <div
        ref={tabNavRef}
        className="relative z-10 mb-6 overflow-x-auto scrollbar-hide flex sm:justify-center gap-2 sm:gap-4 px-1"
      >
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full bg-[#030b1a]/10 z-0 transition-all"
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
        className="max-w-3xl mx-auto rounded-xl border p-6 shadow"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Icon className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-[#030b1a]">{current.title}</h3>
        </div>

        {current.badge && (
          <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-2">
            {current.badge}
          </div>
        )}

        <p className="text-gray-500 text-sm italic mb-4 flex w-full justify-center border-b-2 border-gray-100 pb-2">
          {current.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-4 items-center text-center w-full">
          <div><strong>Timeline:</strong> {current.timeline}</div>
          <div><strong>Price:</strong> {current.price}</div>
          <div className="col-span-2"><strong>Deliverable:</strong> {current.deliverable}</div>
        </div>

        <ul className="space-y-4">
          {current.highlights.map((item, i) => {
            const isOpen = expanded[i];
            return (
              <li key={i}>
                <button
                  onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                  className="w-full flex items-start justify-between text-left text-sm text-[#030b1a] font-medium"
                >
                  <div className="flex items-center gap-2 text-left">
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
                      className="mt-2 text-xs text-gray-600 pl-6 pr-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
