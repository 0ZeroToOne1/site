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
    <section className="relative bg-white px-6 py-24 overflow-hidden">
      {/* Optional animated shimmer background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white via-transparent to-blue-50 opacity-20" />

      <div className="mx-auto w-full sm:w-2/3 text-left mb-16 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-[#030b1a] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Believe
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base text-left mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          These are the principles that guide every build — from kickoff to launch and beyond.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-6xl mx-auto z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {pillars.map(({ title, text, icon: Icon }, i) => (
          <motion.div
  key={i}
  className="relative flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-white/70 backdrop-blur shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-100 transition-all duration-300 group"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* 🔢 Index Badge */}
  <div className="absolute top-2 right-3 text-xs text-gray-400 font-mono select-none">
    {String(i + 1).padStart(2, '0')}
  </div>

  {/* 💠 Icon */}
  <motion.div
    className="mb-4 rounded-full bg-white p-3 shadow-inner"
    animate={{ scale: [1, 1.15, 1] }}
    transition={{
      duration: 2.4,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
      delay: i * 0.1,
    }}
  >
    <Icon className="h-7 w-7 text-[#030b1a]" />
  </motion.div>

  {/* 🖋️ Title + Hover Underline */}
  <div className="mb-2">
    <h3 className="text-lg font-semibold text-[#030b1a] tracking-tight relative inline-block">
      {title}
      <span
        className="block h-0.5 bg-[var(--accent)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      />
    </h3>
  </div>

  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
</motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FivePillars;
