'use client';

import { useRef } from 'react';
import MotionSection from './builder/MotionSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionDivider from './SectionDivider';
import MotionCard from './builder/MotionCard';
import MotionList from './builder/MotionList';
import RevealText from './builder/RevealText';

export default function WhyWeExist() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const items = [
    'Every great product starts as a sketch — a scribble — a spark.',
    'We’ve helped visionaries turn those sparks into funded, scalable products.',
    'From founder decks to real launchable MVPs, we’ve been the force behind 0 → 1.',
    'We don’t just build software. We bring ideas to life with clarity and craft.',
  ];

  return (
    <MotionSection
      id="why-we-exist"
      ref={sectionRef}
      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative w-full py-28 px-6 mx-auto bg-white border-t border-gray-100 sm:py-36 sm:px-12 sm:w-2/3"
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ width }}
        className="absolute h-1 bg-blue-500 rounded-tr-lg rounded-br-lg bottom-0 left-0 origin-left"
      />

      <div ref={inViewRef} className="relative mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full mb-4 mx-auto justify-center text-3xl font-semibold text-center md:text-left text-[#030b1a]"
        >
          <span className="relative z-10">Why We Exist</span>

        </motion.h2>
      </div>

      <div className="relative pr-6 text-right">
  {/* Dashed vertical line with grow-in animation */}
  <motion.div
    initial={{ height: 0 }}
    animate={inView ? { height: '100%' } : {}}
    transition={{ duration: 1.2, ease: 'easeInOut' }}
    className="absolute w-px bg-gradient-to-b from-blue-400 to-blue-200 right-0 top-0"
    style={{
      backgroundImage: 'repeating-linear-gradient(to bottom, #3B82F6, #3B82F6 4px, transparent 4px, transparent 8px)',
      backgroundRepeat: 'repeat-y',
      backgroundSize: '1px 8px',
    }}
  />

  {/* Timeline Items */}
  <div className="space-y-12 border-r-2 border-transparent">
    {items.map((text, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        className="relative"
      >
        {/* Animated Dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: i * 0.2 + 0.1, type: 'spring', stiffness: 300 }}
          className="absolute w-3 h-3 bg-blue-500 shadow-lg rounded-full animate-pulse -right-[0.7rem] top-1"
        />
        <RevealText as='p' className="mr-6 text-lg text-gray-700 leading-relaxed">{text}</RevealText>
      </motion.div>
    ))}
  </div>
</div>
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative mt-20 pl-6 p-6 text-xl text-gray-800 bg-blue-50 border-l-4 border-blue-500 shadow-lg rounded-lg italic"
      >
        <span className="absolute text-blue-200 text-6xl top-0 left-0 -translate-x-4 -translate-y-3 pointer-events-none select-none">“</span>
        <p>
          We exist to turn raw ideas into software that wins hearts, closes deals, and scales fast.
          We’ve seen what happens when great ideas never get the right launch — when timelines slip,
          teams fumble, or confidence fades. That’s why we care so deeply about getting it right from day one.
        </p>
        <div className="flex mt-4 justify-end text-gray-500 font-medium">- Frank</div>
      </motion.blockquote>

    </MotionSection>
  );
}
