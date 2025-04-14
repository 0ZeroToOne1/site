'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const CallToActionSection: FC = () => {
  return (
    <motion.section
      id="contact"
      className="relative bg-[#030b1a] text-white px-4 sm:px-6 py-24 text-center overflow-hidden"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >


      {/* 🎯 CTA Icon + Title */}
      <motion.div
        className="mb-6 relative z-10 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-10 h-10 rounded-full bg-[var(--accent)] opacity-20 blur-md" />
          <Send className="h-6 w-6 shrink-0 text-[var(--accent)]" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
          Let’s Build Something Worth Launching
        </h2>
      </motion.div>

      {/* 💬 Optional mini subtext */}
      <motion.p
        className="text-sm uppercase tracking-wide text-white/50 mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Backed by 10+ years, built for bold founders
      </motion.p>

      {/* 🧠 Description */}
      <motion.p
        className="mx-auto mb-8 max-w-md text-base sm:text-lg relative z-10"
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
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-white text-sm font-semibold shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
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
    </motion.section>
  );
};

export default CallToActionSection;
