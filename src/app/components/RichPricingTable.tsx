
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle, Star, Rocket, Layers3, Hammer } from 'lucide-react';
import CompareFeaturesTable from './CompareFeaturesTable';

const plans = {
  kickstart: {
    title: '30-Day Kickstart Kit',
    subtitle: 'For early founders needing a fast, functional foundation.',
    badge: 'Entry Tier',
    icon: Hammer,
    timeline: '3–4 weeks',
    price: '$5k–$7k',
    deliverable: 'Simple but solid MVP foundation',
    highlights: [
      'Product Strategy Workshop',
      'UI/UX Design (Core Flows & Responsive)',
      'Rails MVP (Turbo, Tailwind, Postgres)',
    ],
  },
  sprint: {
    title: '60-Day MVP Sprint',
    subtitle: 'For fast-moving founders who need to validate and impress early.',
    badge: 'Best for Launch',
    icon: Rocket,
    timeline: '6–8 weeks',
    price: '$12k–$18k',
    deliverable: 'Launch-ready MVP with foundational features',
    highlights: [
      'Auth, Admin, Dashboards',
      'Stripe Integration (subscriptions or one-time)',
      'PDF Export & Sharing (Grover or Puppeteer)',
      'Fly.io or AWS hosting with CI/CD',
    ],
  },
  launchpack: {
    title: '90-Day Launch Pack – Foundation+',
    subtitle: 'For founders ready to onboard users, raise funds, or go live with v1.',
    badge: 'Most Popular',
    icon: Star,
    timeline: '10–12 weeks',
    price: '$20k–$30k',
    deliverable: 'Scalable MVP with onboarding & monetization tools',
    highlights: [
      'Advanced PDF & Report Templates',
      'Tiered Stripe Billing + Admin Controls',
      'Custom Field Builder',
      'Stimulus UX: Modals, Undo, Flash',
      'In-app Help, Customer Portal, Basic Analytics',
    ],
  },
  studio: {
    title: '180-Day Studio Partnership',
    subtitle: 'For founders who want it all — MVP, polish, growth features, and support.',
    badge: null,
    icon: Layers3,
    timeline: '5–6 months',
    price: '$50k–$75k',
    deliverable: 'End-to-end product with scale & polish built-in',
    highlights: [
      'Full Brand Identity (Logo, Fonts, PDF Styling)',
      'Multi-tenant SaaS, Teams + Roles',
      'Feature Flags + Versioning',
      'Team Collaboration + Notifications',
      'Staging, Video Walkthroughs, 90-Day Support',
    ],
  },
};

const tiers = ['kickstart', 'sprint', 'launchpack', 'studio'];

export default function RichPricingTable() {
  const [selected, setSelected] = useState('kickstart');
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const tabNavRef = useRef(null);
  const sectionRef = useRef(null);
  const tabInView = useInView(tabNavRef, { once: false, amount: 0.1 });

  useEffect(() => {
    const tab = tabRefs.current[tiers.indexOf(selected)];
    if (tab) {
      setIndicatorStyle({
        left: tab.offsetLeft,
        width: tab.offsetWidth,
      });
    }
  }, [selected]);

  const current = plans[selected];
  const Icon = current.icon;

  return (
    <section ref={sectionRef} className="px-6 py-24 bg-white relative" id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-4xl text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#030b1a] tracking-tight mb-2">
          Productized Pricing Tiers
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Every build is scoped for success — grouped by stage, impact, and velocity.
        </p>
      </motion.div>

      {/* Sticky Tab Nav */}
      <motion.div
        ref={tabNavRef}
        initial={{ opacity: 0, y: 10 }}
        animate={tabInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.3 }}
        className={`relative z-10 mb-8 ${
          !tabInView ? 'sticky top-0 bg-white shadow-sm' : ''
        }`}
      >
        <div className="flex justify-center gap-4 px-4 py-2 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <button
              key={tier}
              ref={(el) => (tabRefs.current[i] = el)}
              onClick={() => setSelected(tier)}
              className={`px-4 py-2 text-sm font-medium rounded-full z-10 relative transition ${
                selected === tier ? 'text-white' : 'text-gray-700 hover:text-[#030b1a]'
              }`}
            >
              {plans[tier].title}
            </button>
          ))}
        </div>
        <motion.div
          className="absolute top-0 h-full bg-[#030b1a] rounded-full z-0"
          animate={indicatorStyle}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ position: 'absolute', height: '100%' }}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto border rounded-xl p-8 shadow-sm"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon className="h-6 w-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-[#030b1a]">{current.title}</h3>
          </div>

          {current.badge && (
            <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-4">
              {current.badge}
            </div>
          )}

          <p className="text-gray-500 text-sm mb-4 italic">{current.subtitle}</p>

          <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-700 mb-6 gap-3">
            <div>
              <strong>Timeline:</strong> {current.timeline}
            </div>
            <div>
              <strong>Price Range:</strong> {current.price}
            </div>
          </div>

          <p className="text-sm text-gray-600 font-medium mb-4">
            Deliverable: <span className="text-gray-800">{current.deliverable}</span>
          </p>

          <motion.ul
            className="space-y-2 mb-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {current.highlights.map((f, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="text-sm text-gray-800 flex gap-2 items-start"
              >
                <CheckCircle className="h-4 w-4 text-blue-600 mt-[2px]" />
                <span>{f}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={tabInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <a
          href="#compare"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-full shadow transition"
        >
          Book a Free Strategy Call →
        </a>
      </motion.div>
      <CompareFeaturesTable />
    </section>
  );
}
