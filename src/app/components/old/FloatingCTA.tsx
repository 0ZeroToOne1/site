'use client';

import { FC, useEffect, useState } from 'react';
import MotionSection from '../motion/MotionSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import Link from 'next/link';


interface Props {
  alwaysVisibleAfter: string; // e.g. "#hero" or "#what-you-get"
  until?: string;             // optional: hide before this selector (e.g. "#contact")
}

const FloatingCTA: FC<Props> = ({ alwaysVisibleAfter, until }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerEl = document.querySelector(alwaysVisibleAfter);
      const exitEl = until ? document.querySelector(until) : null;
      if (!triggerEl) return;

      const triggerTop = triggerEl.getBoundingClientRect().top;
      const pastTrigger = triggerTop < window.innerHeight * 0.1;

      let beforeExit = true;
      if (exitEl) {
        const exitTop = exitEl.getBoundingClientRect().top;
        beforeExit = exitTop > 150;
      }

      setShow(pastTrigger && beforeExit);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysVisibleAfter, until]);

  return (
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
          <motion.div className="flex flex-col gap-2 items-center sm:flex-row">
            <Link
              href="#contact"
              className="px-6 py-3 gap-2 items-center text-sm font-medium text-white shadow-lg rounded-full hover:-translate-y-1 hover:shadow-xl transition-transform inline-flex bg-[var(--accent)]"
            >
              <Send className="h-4 w-4" />
              <span>Share Your Idea</span>
            </Link>

        
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
