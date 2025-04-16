// components/MotionList.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionListProps {
  children: ReactNode;
  className?: string;
}

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const MotionList = ({ children, className = '' }: MotionListProps) => (
  <motion.ul
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={listVariants}
    className={className}
  >
    {children}
  </motion.ul>
);

export default MotionList;