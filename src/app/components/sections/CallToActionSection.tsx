'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import MotionSection from '../motion/MotionSection';
import MotionCard from '../motion/MotionCard';

const CallToActionSection: FC = () => {
  return (
    <MotionSection
      className="relative overflow-hidden px-4 py-24 text-white text-center sm:px-6 bg-[#030b1a]"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >


      {/* 🎯 Icon + Title */}
      <motion.div
        className="relative z-10 flex flex-col mb-6 gap-3 items-center md:flex-row md:justify-center md:gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex items-center justify-center">
          <MotionCard className="absolute w-12 h-12 rounded-full bg-[var(--accent)] opacity-20 blur-md animate-pulse-slow" />
          <Send className="relative h-6 w-6 text-[var(--accent)] z-10" />
        </div>

        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Let’s Build Something Worth Launching
        </h2>
      </motion.div>

      {/* 💬 Subtext */}
      <motion.p
        className="mb-3 text-sm tracking-wide text-white/60 uppercase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Backed by 10+ years of performance. Built for bold founders.
      </motion.p>

      {/* 🧠 Description */}
      <motion.p
        className="relative z-10 max-w-lg mx-auto mb-10 text-base sm:text-lg text-white/90"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Share your idea — and we’ll help you turn it into a fundable, launch-ready MVP.
      </motion.p>

      {/* 🚀 CTA Button */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="mailto:frank@advanced-software-solutions.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out bg-[var(--accent)] rounded-full shadow-md hover:-translate-y-0.5 hover:shadow-lg group"
        >
          <span>Share Your Idea</span>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          >
            <Send className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110" />
          </motion.div>
        </a>
      </motion.div>
    </MotionSection>
  );
};

export default CallToActionSection;
