'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import ClientLogoMarquee from './ClientLogoMarquee';
import {
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Home,
} from 'lucide-react';

const cards = [
  {
    icon: ClipboardList,
    title: 'Inspection SaaS',
    description:
      'Launched → Acquired by a major industry player within 14 months.',
  },
  {
    icon: Home,
    title: 'Real Estate Contract Platform',
    description:
      'Streamlined document workflows and e-signatures for agents and brokers.',
  },
  {
    icon: TrendingUp,
    title: 'Funded Fintech',
    description:
      'Investor-ready MVP in 30 days, helped close $1.2M seed round.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CaseStudySection: FC = () => {
  return (
    <motion.section
    id="case-studies"
      className="px-6 py-24 text-center bg-white "
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title + Icon */}
      <div className="mx-auto max-w-3xl mb-12">
        <motion.div
          className="mb-4 flex items-center justify-center gap-2 text-[var(--accent)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Briefcase className="h-6 w-6" />
          <h2 className="text-3xl font-semibold text-gray-900">Case Studies</h2>
        </motion.div>

        <motion.p
          className="text-base text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From inspection platforms and healthcare tools to investor-backed fintech — we build what scales.
        </motion.p>
      </div>

      {/* Carousel for mobile / Grid for desktop */}
      <motion.div
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:snap-none mb-2 w-5/6 justify-center mx-auto"
        variants={containerVariants}
      >
        {cards.map(({ title, description, icon: Icon }, i) => (
          <motion.div
            key={`card-${i}`}
            className="min-w-[85%] sm:min-w-0 snap-start shrink-0 p-5 bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-md transition flex flex-col items-start"
            variants={cardVariants}
          >
            <div className="mb-3 text-[var(--accent)]">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-[var(--accent)] mb-1">{title}</h3>
            <p className="text-sm text-gray-700 leading-snug">{description}</p>
          </motion.div>
        ))}
      </motion.div>
      <ClientLogoMarquee />
    </motion.section>
  );
};

export default CaseStudySection;
