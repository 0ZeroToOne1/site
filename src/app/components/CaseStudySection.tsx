'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import MotionSection from './builder/MotionSection';
import RevealText from './builder/RevealText';
import ClientLogoMarquee from './ClientLogoMarquee';
import CaseStudyBadge from './CaseStudyBadge';

import {
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  Home,
  Check,
  Shield,
  DollarSign,
  UploadCloud,
  RefreshCcw,
  Zap,
} from 'lucide-react';

const cards = [
  {
    icon: ClipboardList,
    title: 'Inspection SaaS',
    description: 'Launched → Acquired by a major industry player within 14 months.',
    badge: {
      label: 'Acquired',
      color: 'bg-green-100 text-green-800',
      icon: Check,
      tooltip: 'Exited via acquisition',
    },
  },
  {
    icon: Home,
    title: 'Real Estate Contract Platform',
    description: 'Streamlined document workflows and e-signatures for agents and brokers.',
    badge: {
      label: 'Launched',
      color: 'bg-indigo-100 text-indigo-800',
      icon: UploadCloud,
      tooltip: 'Built + shipped in production',
    },
  },
  {
    icon: TrendingUp,
    title: 'Funded Fintech',
    description: 'Investor-ready MVP in 30 days, helped close $1.2M seed round.',
    badge: {
      label: 'Funded',
      color: 'bg-yellow-100 text-yellow-800',
      icon: DollarSign,
      tooltip: 'Led directly to seed round',
    },
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA-Compliant Health App',
    description: 'Secure patient intake and reporting tool for specialty clinics — launched in under 8 weeks.',
    badge: {
      label: 'HIPAA',
      color: 'bg-blue-100 text-blue-800',
      icon: Shield,
      tooltip: 'Meets healthcare data compliance',
    },
  },
  {
    icon: Briefcase,
    title: 'Freelancer CRM',
    description: 'End-to-end client tracking, payments, and project workflow for independent designers.',
    badge: {
      label: 'Bootstrapped',
      color: 'bg-gray-100 text-gray-800',
      icon: Zap,
      tooltip: 'Launched with no external funding',
    },
  },
  {
    icon: ClipboardList,
    title: 'Regulatory Compliance Tracker',
    description: 'Helped a B2B SaaS platform modernize their compliance reporting — full rebuild in 60 days.',
    badge: {
      label: 'Rebuilt',
      color: 'bg-purple-100 text-purple-800',
      icon: RefreshCcw,
      tooltip: 'Modernized legacy tooling',
    },
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
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
      {/* Title + Description */}
      <motion.div className="w-full mx-auto mb-10 sm:w-2/3 sm:mb-12">
        <motion.div
          className="flex mb-4 gap-2 items-center justify-center md:justify-end text-[#030b1a]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Briefcase className="h-6 w-6" />
          <RevealText className="text-3xl font-semibold text-center md:text-right text-[#030b1a] sm:text-3xl">
            Case Studies
          </RevealText>
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
        {cards.map(({ title, description, icon: Icon, badge }, i) => (
          <motion.div
            key={`card-${i}`}
            whileHover={{ scale: 1.03 }}
            whileFocus={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            tabIndex={0}
            className="flex flex-col p-4 items-start bg-white shadow-sm ring-1 ring-gray-200 rounded-lg hover:shadow-lg focus:shadow-lg transition min-w-[75%] sm:min-w-0 snap-start shrink-0 sm:p-5 outline-none"
            variants={cardVariants}
          >
            {badge && (
              <CaseStudyBadge
                label={badge.label}
                icon={badge.icon}
                color={badge.color}
                tooltip={badge.tooltip}
                delay={i * 0.08}
              />
            )}
            <div className="mb-2 text-[#030b1a]">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h3 className="mb-1 text-sm font-semibold sm:text-base text-[#030b1a]">
              {title}
            </h3>
            <RevealText as="p" className="text-xs text-gray-700 leading-snug text-left sm:text-sm">
              {description}
            </RevealText>
          </motion.div>
        ))}
      </motion.div>

      <ClientLogoMarquee />
    </MotionSection>
  );
};

export default CaseStudySection;
