'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';
import SectionSubHeader from './SectionSubHeader';

const items = [
  'Every great product starts as a sketch — a scribble — a spark.',
  'We’ve helped visionaries turn those sparks into funded, scalable products.',
  'From founder decks to real launchable MVPs, we’ve been the force behind 0 → 1.',
  'We don’t just build software. We bring ideas to life with clarity and craft.',
];

export default function WhyWeExist() {
  const sectionRef = useRef(null);

  

  return (
    
    <MotionSection
      id="why-we-exist"
      ref={sectionRef}
      className="relative w-full px-6 py-28 sm:px-12 sm:py-36 overflow-hidden"
      whileTap={{ scale: 0.98 }}
    >
           <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
      <div className="absolute inset-0 z-0 pointer-events-none">
 
      <svg className=" w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="20%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="10%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="15%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="20%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="30%" y1="100%" x2="100%" y2="20%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="40%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="25%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="15%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="5%" y1="20%" x2="100%" y2="80%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="20%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="25%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="33%" y1="100%" x2="100%" y2="20%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="45%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />

</svg>
</div>
      </div>

{/* ⬇️ Flipped Animated Diagonal SVG Background */}
<motion.svg
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }}
  className="absolute bottom-0 left-0 w-full h-[100dvh] z-0 pointer-events-none"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <motion.polygon
    points="0,0 0,100 100,100"
    fill="var(--accent)"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  />
  <motion.polygon
    points="0,0 0,80 100,100"
    fill="white"
    opacity="0.1"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  />
</motion.svg>

      {/* 🎯 Section Header */}
      <div className="relative z-10 mb-16 text-center md:text-left w-full sm:w-2/3 mx-auto">
        <SectionSubHeader
          title="Why We Exist"
          subtitle="Closing the gap between idea and product."
        />
      </div>

      {/* 📈 Timeline + Motion Column */}
      <div className="relative pr-6 text-right z-10 w-full sm:w-2/3 mx-auto  p-6 rounded-xl">
        {/* Gradient Behind the Line */}
        <motion.div className="absolute top-0 right-0 h-full w-6 z-0">
          <div className="h-full w-full bg-gradient-to-b from-blue-50/60 to-white opacity-60 blur-lg" />
        </motion.div>

        {/* Animated Dashed Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute top-0 right-3 w-px z-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, #3B82F6, #3B82F6 4px, transparent 4px, transparent 8px)',
            backgroundSize: '1px 8px',
            backgroundRepeat: 'repeat-y',
          }}
        />

        {/* 💬 Timeline Items */}
        <div className="relative z-20 space-y-12 border-r-2 border-transparent">
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
                {/* Animated Upward Motion Dot */}
                <motion.div
                  className="absolute -right-[0.7rem] top-1 w-3 h-3 rounded-full bg-blue-500 shadow-md"
                  animate={{
                    y: [0, -4, 0],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
                <RevealText as="p" className="mr-6 text-lg text-gray-700 leading-relaxed">
                  {text}
                </RevealText>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ✨ Highlight Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 mt-24 pl-8 pr-6 py-8 text-lg text-[#030b1a] bg-white border-l-4 border-blue-500 rounded-xl shadow-xl italic w-full sm:w-1/2 mx-auto"
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
    </MotionSection>
  );
}
