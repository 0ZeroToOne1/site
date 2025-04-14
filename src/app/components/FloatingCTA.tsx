'use client';

import { FC, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';
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
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Rocket className="h-4 w-4" />
              <span>Start Your Build</span>
            </Link>

        
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
