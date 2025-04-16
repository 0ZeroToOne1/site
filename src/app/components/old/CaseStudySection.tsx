'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';
import CaseStudyBadge from './CaseStudyBadge';
import SectionSubHeader from './SectionSubHeader';

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
      color: 'bg-gray-100 text-[#030b1a]',
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
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const PatchworkCaseStudyGrid: FC = () => {
  return (
    <MotionSection
      id="case-studies"
      className="relative px-4 py-20 bg-white sm:px-6 sm:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >

<div className="absolute inset-0 z-0 pointer-events-none opacity-10">
      <div className="absolute inset-0 z-0 pointer-events-none">
 
      <svg className=" w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="20%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="10%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="15%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="20%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="30%" y1="100%" x2="100%" y2="20%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="40%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="25%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="15%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="5%" y1="20%" x2="100%" y2="80%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="20%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="25%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="33%" y1="100%" x2="100%" y2="20%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="45%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />

</svg>
</div>
      </div>

      <motion.div
        className="w-full mx-auto mb-12 sm:w-2/3 text-center sm:text-left"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SectionSubHeader
          title="Case Studies"
          subtitle="From inspection platforms and healthcare tools to investor-backed fintech — we build what scales."
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-6 sm:auto-rows-[minmax(180px,_1fr)] gap-4 sm:gap-6 w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map(({ title, description, icon: Icon, badge }, i) => (
          <motion.div
            key={`card-${i}`}
            variants={cardVariants}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.3 }}
            className={`
              relative group overflow-hidden z-20
              flex flex-col items-start p-4 sm:p-5 rounded-xl bg-white shadow-md ring-1 ring-gray-200
              hover:shadow-blue-200 hover:ring-2 hover:ring-blue-300
              transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
              ${i % 6 === 0 ? 'sm:col-span-3 sm:row-span-2' :
                i % 6 === 1 ? 'sm:col-span-3' :
                i % 6 === 2 ? 'sm:col-span-2 sm:row-span-2' :
                i % 6 === 3 ? 'sm:col-span-4' :
                i % 6 === 4 ? 'sm:col-span-2' :
                'sm:col-span-3'}
            `}
          >
            <div className="absolute inset-0 bg-blue-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0 rounded-xl" />
            <div className="relative z-10">
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
              <h3 className="mb-1 text-sm font-semibold sm:text-base text-[#030b1a]">{title}</h3>
              <RevealText className="text-xs text-gray-700 leading-snug text-left sm:text-sm">
                {description}
              </RevealText>
            </div>
          </motion.div>
        ))}
      </motion.div>
              {/* ⬇️ Diagonal SVG Background */}
              <svg

  className="absolute bottom-0 left-0 w-full h-[100dvh] z-0 pointer-events-none"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <polygon points="0,100 100,0 100,100" fill="var(--accent)" />
  <polygon points="0,80 100,20 100,100" fill="white" opacity="0.1" />
</svg>
    </MotionSection>
  );
};

export default PatchworkCaseStudyGrid;
