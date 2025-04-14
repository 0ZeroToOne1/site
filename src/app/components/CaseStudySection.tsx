'use client';

import { FC } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import ClientLogoMarquee from './ClientLogoMarquee';
import RevealText from './builder/RevealText';
import MotionCard from './builder/MotionCard';
import MotionList from './builder/MotionList';
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
    <MotionSection
      id="case-studies"
      className="px-4 py-20 text-right bg-white sm:px-6 sm:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title + Icon */}
      <motion.div className="w-full mx-auto mb-10 sm:w-2/3 sm:mb-12">
        <motion.div
          className="flex mb-4 gap-2 items-center justify-center md:justify-end text-[#030b1a]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Briefcase className="h-6 w-6" />
          <RevealText className="text-3xl font-semibold text-center md:text-right text-[#030b1a] sm:text-3xl">Case Studies</RevealText>
        </motion.div>

        <motion.p
          className="px-2 text-sm text-gray-600 sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          From inspection platforms and healthcare tools to investor-backed fintech — we build what scales.
        </motion.p>
      </motion.div>

      {/* Responsive Card Layout */}
      <motion.div
        className="flex w-full px-1 mb-8 mx-auto gap-3 scrollbar-hide snap-x snap-mandatory sm:gap-6 overflow-x-auto sm:grid sm:grid-cols-3 sm:overflow-visible sm:snap-none sm:px-0 sm:w-5/6"
        variants={containerVariants}
      >
        {cards.map(({ title, description, icon: Icon }, i) => (
          <motion.div
  key={`card-${i}`}
  whileHover={{ scale: 1.03 }}
  whileFocus={{ scale: 1.03 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  tabIndex={0}
  className="flex flex-col p-4 items-start bg-white shadow-sm ring-1 ring-gray-200 rounded-lg hover:shadow-lg focus:shadow-lg transition min-w-[75%] sm:min-w-0 snap-start shrink-0 sm:p-5 outline-none"
  variants={cardVariants}
>
  <div className="mb-2 text-[#030b1a]">
    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
  </div>
  <h3 className="mb-1 text-sm font-semibold sm:text-base text-[#030b1a]">{title}</h3>
  <RevealText as='p' className="text-xs text-gray-700 leading-snug text-left sm:text-sm">{description}</RevealText>
</motion.div>
        ))}
      </motion.div>

      <ClientLogoMarquee />
    </MotionSection>
  );
};

export default CaseStudySection;
