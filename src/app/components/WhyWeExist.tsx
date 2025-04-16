'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MotionSection from './builder/MotionSection';
import RevealText from './builder/RevealText';
import SectionSubHeader from './SectionSubHeader';

const items = [
  'Every great product starts as a sketch — a scribble — a spark.',
  'We’ve helped visionaries turn those sparks into funded, scalable products.',
  'From founder decks to real launchable MVPs, we’ve been the force behind 0 → 1.',
  'We don’t just build software. We bring ideas to life with clarity and craft.',
];

export default function WhyWeExist() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <MotionSection
      id="why-we-exist"
      ref={sectionRef}
      className="relative w-full px-6 py-28 sm:px-12 sm:py-36 sm:w-full mx-auto bg-white overflow-hidden"

      whileTap={{ scale: 0.98 }}
    >
      {/* Blueprint-style grid accent */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B82F6" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-16 text-center md:text-left w-2/3 mx-auto">
        <SectionSubHeader
          title="Why We Exist"
          subtitle="Closing the gap between idea and product."
        />
      </div>

      {/* Timeline Section */}
      <div className="relative pr-6 text-right z-10 w-2/3 mx-auto">
        {/* Animated Dashed Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-px"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, #3B82F6, #3B82F6 4px, transparent 4px, transparent 8px)',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '1px 8px',
          }}
        />

        {/* Timeline Items */}
        <div className="space-y-12 border-r-2 border-transparent">
          {items.map((text, i) => {
            const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
            return (
              <motion.div
                ref={ref}
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* Pulse Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
                  className="absolute -right-[0.7rem] top-1 w-3 h-3 bg-blue-500 rounded-full shadow-md animate-pulse"
                />
                <RevealText as="p" className="mr-6 text-lg text-gray-700 leading-relaxed">
                  {text}
                </RevealText>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Highlight Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 mt-24 pl-8 pr-6 py-8 text-lg text-[#030b1a] bg-blue-50 border-l-4 border-blue-500 rounded-xl shadow-xl italic w-1/2 mx-auto"
      >
        <span className="absolute text-blue-200 text-6xl top-0 left-0 -translate-x-4 -translate-y-3 pointer-events-none select-none">
          “
        </span>
        <p>
          We exist to turn raw ideas into software that wins hearts, closes deals, and scales fast.
          We’ve seen what happens when great ideas never get the right launch — when timelines slip,
          teams fumble, or confidence fades. That’s why we care so deeply about getting it right from day one.
        </p>
        <div className="flex mt-6 justify-end text-gray-500 font-medium">– Frank</div>
      </motion.blockquote>

      {/* Optional Scroll Progress Bar */}
      <motion.div
        style={{ width }}
        className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
      />
    </MotionSection>
  );
}
