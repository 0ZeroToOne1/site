'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Image from 'next/image';

const CallToActionSection: FC = () => {
  return (
    <motion.section
      id="contact"
      className="relative bg-[#030b1a] text-white px-4 sm:px-6 py-20 text-center overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated Icon + Heading */}
      <motion.div
        className="mb-6 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Send className="h-6 w-6 shrink-0" />
        <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
          Let’s Build Something Worth Launching
        </h2>
      </motion.div>

      {/* CTA Description */}
      <motion.p
        className="mx-auto mb-8 max-w-md text-base sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Share your idea — and we’ll help you turn it into a fundable, launch-ready MVP.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="mailto:frank@advanced-software-solutions.com"
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-white text-sm font-medium shadow-md transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-lg"
        >
          <span>Share Your Idea</span>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
          >
            <Send className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
          </motion.div>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default CallToActionSection;
