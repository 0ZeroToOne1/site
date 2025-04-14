'use client';

import { FC } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import { Eye, Zap, Handshake, Target, Sparkles } from 'lucide-react';
import RevealText from './builder/RevealText';

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
    <MotionSection className="relative px-6 py-24 bg-white overflow-hidden">
      {/* Optional animated shimmer background */}
      <div className="absolute bg-gradient-to-br from-white to-blue-50 inset-0 pointer-events-none via-transparent opacity-20" />

      <div className="relative z-10 w-full mx-auto mb-16 text-center md:text-left sm:w-2/3">
        <motion.h2
          className="mb-4 text-4xl font-bold text-[#030b1a]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Believe
        </motion.h2>
        <motion.p
          className="mx-auto text-gray-600 text-base text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          These are the principles that guide every build — from kickoff to launch and beyond.
        </motion.p>
      </div>

      <motion.div
        className="relative z-10 grid grid-cols-1 max-w-6xl mx-auto gap-10 sm:grid-cols-2 lg:grid-cols-5"
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
  className="relative flex flex-col p-4 items-center text-center bg-white/70 shadow-sm border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-100 transition-all duration-300 sm:p-6 backdrop-blur group"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* 🔢 Index Badge */}
  <div className="absolute text-xs text-gray-400 font-mono top-2 right-3 select-none">
    {String(i + 1).padStart(2, '0')}
  </div>

  {/* 💠 Icon */}
  <motion.div
    className="mb-4 p-3 bg-white shadow-inner rounded-full"
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
    <h3 className="relative inline-block text-lg font-semibold tracking-tight text-[#030b1a]">
      {title}
      <span
        className="block h-0.5 transition-transform duration-300 bg-[var(--accent)] origin-left scale-x-0 group-hover:scale-x-100"
      />
    </h3>
  </div>

  <RevealText as='p' className="text-sm text-gray-600 leading-relaxed">{text}</RevealText>
</motion.div>
        ))}
      </motion.div>
    </MotionSection>
  );
};

export default FivePillars;
