// components/RevealText.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const RevealText = ({ children, className = '', delay = 0 }: RevealTextProps) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.span>
);

export default RevealText;