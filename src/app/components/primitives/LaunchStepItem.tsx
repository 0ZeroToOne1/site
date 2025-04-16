'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import RevealText from '@/components/motion/RevealText';
import { LucideIcon } from 'lucide-react';

interface LaunchStepItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const LaunchStepItem: FC<LaunchStepItemProps> = ({ icon: Icon, title, description, index }) => (
  <motion.li
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12 mr-6 text-right"
  >
    <span className="absolute flex h-6 w-6 items-center justify-center ring-8 ring-white shadow-md rounded-full -right-3 bg-[var(--accent)]">
      <Icon className="text-white" size={14} />
    </span>
    <h3 className="mb-1 text-xl font-semibold text-[#030b1a]">{title}</h3>
    <RevealText as="p" className="text-lg text-gray-600">{description}</RevealText>
  </motion.li>
);

export default LaunchStepItem;
