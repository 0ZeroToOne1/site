'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, Handshake, Target, Sparkles } from 'lucide-react';

const pillars = [
  {
    title: 'Clarity Over Complexity',
    text: 'We cut through the noise to focus on what truly matters for launch.',
    icon: Eye,
  },
  {
    title: 'Speed Meets Substance',
    text: 'We ship fast — with structure. Every build is scalable and fundable.',
    icon: Zap,
  },
  {
    title: 'Partners, Not Vendors',
    text: 'We think with you, shape product with you, and build alongside you.',
    icon: Handshake,
  },
  {
    title: 'Outcomes, Not Outputs',
    text: 'We align every line of code to what moves the needle.',
    icon: Target,
  },
  {
    title: 'Craft Is a Competitive Edge',
    text: 'Great software is not just usable — it’s unforgettable.',
    icon: Sparkles,
  },
];

const FivePillars: FC = () => {
  return (
    <section className="bg-white/10 px-6 py-24">
      <div className="mx-auto max-w-5xl text-center mb-16">
        <h2 className="text-3xl font-bold text-[#030b1a] tracking-tight mb-2">
          What We Believe
        </h2>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          These are the principles that guide every build — from kickoff to launch and beyond.
        </p>
      </div>

      <div className="grid max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center">
        {pillars.map(({ title, text, icon: Icon }, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center p-4 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotate: -1, scale: 1.02 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <motion.div
              className="mb-4"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            >
              <Icon className="h-8 w-8 text-[#030b1a]" />
            </motion.div>

            <h3 className="text-xl font-semibold text-[#030b1a] mb-2 tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FivePillars;
