'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import RevealText from '@/components/motion/RevealText';

interface CaseStudyBadge {
  label: string;
  icon: LucideIcon;
  color: string;
  tooltip: string;
}

interface CaseStudyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: CaseStudyBadge;
  delay?: number;
}

const CaseStudyCard: FC<CaseStudyCardProps> = ({ icon: Icon, title, description, badge, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut', delay }}
    className="relative group flex flex-col items-start p-5 rounded-xl bg-white shadow-md ring-1 ring-gray-200 hover:ring-2 hover:ring-blue-300 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
  >
    <div className="absolute inset-0 bg-blue-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0 rounded-xl" />
    <div className="relative z-10">
      <div className="text-[#030b1a] mb-2">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <h3 className="text-sm font-semibold sm:text-base text-[#030b1a]">{title}</h3>
      <RevealText as="p" className="text-xs text-gray-700 leading-snug text-left sm:text-sm">{description}</RevealText>
    </div>
  </motion.div>
);

export default CaseStudyCard;
