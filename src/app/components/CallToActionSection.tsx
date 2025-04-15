'use client';

import RevealText from './builder/RevealText';
import { FC } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import MotionCard from './builder/MotionCard'; // Ensure this path is correct

const CallToActionSection: FC = () => {
  return (
    <MotionSection

      className="relative px-4 py-24 text-white text-center bg-[#030b1a] sm:px-6 overflow-hidden"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >


      {/* 🎯 CTA Icon + Title */}
      <motion.div
        className="relative z-10 flex flex-col mb-6 gap-3 items-center md:flex-row md:justify-center md:gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <motion.div className="relative flex items-center justify-center">
          <MotionCard className="absolute w-10 h-10 rounded-full bg-[var(--accent)] opacity-20 blur-md" >
            <Send className="h-6 w-6 shrink-0 text-[var(--accent)]" />
          </MotionCard>
        </motion.div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Let’s Build Something Worth Launching
        </h2>
      </motion.div>
      

      {/* 💬 Optional mini subtext */}
      <motion.p
        className="mb-3 text-sm tracking-wide text-white/50 uppercase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Backed by 10+ years, built for bold founders
      </motion.p>

      {/* 🧠 Description */}
      <motion.p
        className="relative z-10 max-w-md mx-auto mb-8 text-base sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Share your idea — and we’ll help you turn it into a fundable, launch-ready MVP.
      </motion.p>

      {/* 🚀 CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10"
        >
        <a
          href="mailto:frank@advanced-software-solutions.com"
          className="px-6 py-3 gap-2 items-center justify-center text-white text-sm font-semibold shadow-md rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out group inline-flex bg-[var(--accent)]"
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
