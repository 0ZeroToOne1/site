
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const MotionSection = ({ children, className = '', id }: MotionSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
