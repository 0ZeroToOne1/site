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
      className="px-4 sm:px-6 py-20 sm:py-24 text-right bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title + Icon */}
      <div className="mx-auto w-full sm:w-2/3 mb-10 sm:mb-12">
        <motion.div
          className="mb-4 flex items-center justify-end gap-2 text-[#030b1a]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Briefcase className="h-6 w-6" />
          <h2 className="text-3xl font-semibold text-[#030b1a] sm:text-3xl text-right">Case Studies</h2>
        </motion.div>

        <motion.p
          className="text-sm sm:text-base text-gray-600 px-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From inspection platforms and healthcare tools to investor-backed fintech — we build what scales.
        </motion.p>
      </div>

      {/* Responsive Card Layout */}
      <motion.div
        className="scrollbar-hide flex snap-x snap-mandatory gap-3 sm:gap-6 overflow-x-auto sm:grid sm:grid-cols-3 sm:overflow-visible sm:snap-none px-1 sm:px-0 mb-8 w-full sm:w-5/6 mx-auto"
        variants={containerVariants}
      >
        {cards.map(({ title, description, icon: Icon }, i) => (
          <motion.div
  key={`card-${i}`}
  whileHover={{ scale: 1.03 }}
  whileFocus={{ scale: 1.03 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  tabIndex={0}
  className="min-w-[75%] sm:min-w-0 snap-start shrink-0 p-4 sm:p-5 bg-white rounded-lg shadow-sm ring-1 ring-gray-200 hover:shadow-lg focus:shadow-lg outline-none transition flex flex-col items-start"
  variants={cardVariants}
>
  <div className="mb-2 text-[#030b1a]">
    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
  </div>
  <h3 className="text-sm sm:text-base font-semibold text-[#030b1a] mb-1">{title}</h3>
  <p className="text-xs sm:text-sm text-gray-700 leading-snug text-left">{description}</p>
</motion.div>
        ))}
      </motion.div>

      <ClientLogoMarquee />
    </motion.section>
  );
};

export default CaseStudySection;
