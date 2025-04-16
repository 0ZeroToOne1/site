'use client';

import { motion } from 'framer-motion';

const Signature = () => {
  return (
    <motion.svg
      viewBox="0 0 300 100"
      width="200"
      height="70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[var(--accent)]"
    >
      <motion.path
        d="M10 60 C 20 20, 40 20, 50 60 S 80 100, 90 60 M100 60 C110 20, 130 20, 140 60 M150 60 C160 20, 180 20, 190 60"
        // Replace this path with traced "Frank Camp" SVG path for a real signature look
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.6, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
};

export default Signature;
