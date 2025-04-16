'use client';

import { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingCTAWrapperProps {
  show: boolean;
  children: ReactNode;
}

const FloatingCTAWrapper: FC<FloatingCTAWrapperProps> = ({ show, children }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        key="floating-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
        className="fixed z-50 bottom-6 right-6"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default FloatingCTAWrapper;
