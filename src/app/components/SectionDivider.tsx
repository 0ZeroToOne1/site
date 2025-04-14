'use client';

import MotionCard from './builder/MotionCard';
import { useRef, useEffect } from 'react';
import MotionSection from './builder/MotionSection';
import { motion, useInView } from 'framer-motion';
import clsx from 'clsx';

interface SectionDividerProps {
  direction?: 'top' | 'bottom';
  scrollTargetId?: string; // ID of the section to scroll into view
  className?: string;
}

const SectionDivider = ({
  direction = 'bottom',
  scrollTargetId,
  className = '',
}: SectionDividerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -30% 0px' });

  useEffect(() => {
    if (isInView && scrollTargetId) {
      const target = document.getElementById(scrollTargetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isInView, scrollTargetId]);

  const pathVariants = {
    initial: {
      d:
        direction === 'bottom'
          ? 'M0,0 C50,100 150,100 200,0 L200,0 L0,0 Z'
          : 'M0,100 C50,0 150,0 200,100 L200,100 L0,100 Z',
    },
    animate: {
      d:
        direction === 'bottom'
          ? 'M0,0 C100,200 300,0 500,100 L500,0 L0,0 Z'
          : 'M0,100 C100,-100 300,100 500,0 L500,100 L0,100 Z',
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
  };

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 500 100"
      preserveAspectRatio="none"
      className={clsx(
        'w-full h-16 md:h-24 text-white dark:text-gray-900',
        direction === 'top' ? 'rotate-180' : '',
        className
      )}
      initial="initial"
      whileInView="animate"
    >
      <motion.path fill="currentColor" variants={pathVariants} />
    </motion.svg>
  );
};

export default SectionDivider;
