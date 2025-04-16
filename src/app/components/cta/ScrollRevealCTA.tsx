'use client';

import MotionCard from './builder/MotionCard';
import { FC, useEffect, useState } from 'react';
import MotionSection from './builder/MotionSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket } from 'lucide-react';
import Link from 'next/link';
import WhatHappensNextModal from './WhatHappensNextModal';

interface Props {
  enterId: string;
  exitId?: string;
}

const ScrollRevealCTA: FC<Props> = ({ enterId, exitId }) => {
  const [show, setShow] = useState(false);

  const { ref: enterRef, inView: isPastEnter } = useInView({
    threshold: 0,
    rootMargin: '-100px 0px 0px 0px', // trigger when top of section hits 100px from top
  });

  const { ref: exitRef, inView: isPastExit } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (exitId) {
      setShow(isPastEnter && !isPastExit);
    } else {
      setShow(isPastEnter);
    }
  }, [isPastEnter, isPastExit]);

  return (
    <>
      {/* Invisible tracking anchors */}
      <motion.div id={enterId} ref={enterRef} className="h-px w-full" />


      <AnimatePresence>
        {show && (
          <motion.div
            key="cta-float"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="fixed z-50 bottom-6 right-6"
          >
            <Link
              href="#contact"
              className="flex-col px-6 py-3 gap-2 items-center text-sm font-medium text-white shadow-lg rounded-full hover:-translate-y-1 hover:shadow-xl transition-transform inline-flex md:flex-row bg-[var(--accent)]"
            >
              <Rocket className="h-4 w-4" />
              <span>Start Your Build</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollRevealCTA;
