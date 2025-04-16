'use client';

import MotionCard from './builder/MotionCard';
import { useEffect, useState } from 'react';
import MotionSection from './builder/MotionSection';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="fixed bg-gradient-to-r shadow-[0_0_8px_rgba(43,114,255,0.6)] top-0 left-0 h-[2px] z-[9999] from-[#3b82f6] to-[#2563eb]"
      style={{ width: `${progress * 100}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${progress * 100}%` }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    />
  );
}
