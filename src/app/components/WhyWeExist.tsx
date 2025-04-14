'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

export default function WhyWeExist() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const items = [
    'Every great product starts as a sketch — a scribble — a spark.',
    'We’ve helped visionaries turn those sparks into funded, scalable products.',
    'From founder decks to real launchable MVPs, we’ve been the force behind 0 → 1.',
    'We don’t just build software. We bring ideas to life with clarity and craft.',
  ];

  return (
    <section
      id="why-we-exist"
      ref={sectionRef}
      className="relative py-24 bg-white sm:py-32 border-t border-gray-100 px-6"
    >
      {/* Horizontal scroll progress bar */}
      <motion.div
        style={{ width }}
        className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-tr-lg rounded-br-lg origin-left"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12" ref={inViewRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-[#030b1a] sm:text-3xl"
          >
            Why We Exist
          </motion.h2>
        </div>

        <div className="space-y-10 relative pl-6 border-l-2 border-gray-200">
          {items.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[0.7rem] top-1 w-3 h-3 rounded-full bg-blue-500 shadow-md" />
              <p className="text-gray-700 text-lg leading-relaxed pl-4">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 border-l-4 border-blue-500 pl-6 italic text-xl text-gray-800"
        >
          “We exist to turn raw ideas into software that wins hearts, closes deals, and scales fast. We’ve seen what happens when great ideas never get the right launch — when timelines slip, teams fumble, or confidence fades. That’s why we care so deeply about getting it right from day one.”
          <span className="flex justify-end items-center mt-4 text-gray-500">
            <span className="font-semibold">— Frank</span>
            </span>
        </motion.blockquote>
      </div>
    </section>
  );
}
