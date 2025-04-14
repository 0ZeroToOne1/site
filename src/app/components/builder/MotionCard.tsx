// components/MotionCard.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionCardProps {
  children: ReactNode;
  className?: string;
}

const MotionCard = ({ children, className = '' }: MotionCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    viewport={{ once: true }}
    className={`rounded-2xl shadow-lg p-6 bg-white transition-all ${className}`}
  >
    {children}
  </motion.div>
);

export default MotionCard;
