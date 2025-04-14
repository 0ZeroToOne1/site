'use client';

import { useEffect, useState } from 'react';
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
      className="fixed top-0 left-0 h-[2px] z-[9999] bg-gradient-to-r from-[#3b82f6] to-[#2563eb] shadow-[0_0_8px_rgba(43,114,255,0.6)]"
      style={{ width: `${progress * 100}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${progress * 100}%` }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    />
  );
}
