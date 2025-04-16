'use client';

import { FC, useState, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Eye, Zap, Handshake, Target, Sparkles } from 'lucide-react';
import MotionSection from '../motion/MotionSection';
import RevealText from '../motion/RevealText';
import SectionSubHeader from './SectionSubHeader';

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
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <MotionSection className="relative px-6 py-28  overflow-hidden"
           ref={sectionRef} >
      {/* ✨ Animated background shimmer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-transparent opacity-20" />
        <div className="absolute top-0 left-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 w-full mx-auto mb-20 text-center md:text-right sm:w-2/3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionSubHeader
            title="What We Believe"
            subtitle="These are the principles that guide every build — from kickoff to launch and beyond."
          />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 grid grid-cols-1 max-w-6xl mx-auto gap-10 sm:grid-cols-2 lg:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
{pillars.map(({ title, text, icon: Icon }, i) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      key={i}
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex flex-col p-5 items-center text-center bg-white/70 shadow-md border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-[var(--accent)] transition-all duration-300 sm:p-6 backdrop-blur group cursor-pointer"
      initial={{ opacity: 0, scale: 0.95, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* 🔢 Index Badge */}
      <div className="absolute text-xs text-gray-400 font-mono top-2 right-3 select-none">
        {String(i + 1).padStart(2, '0')}
      </div>

      {/* 💠 Animated Icon Orb */}
      <motion.div
        className="relative mb-5"
        animate={{ scale: [1, 1.15, 1], opacity: [1, 0.9, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          delay: i * 0.1,
        }}
      >
        <div className="absolute inset-0 blur-xl bg-blue-100 rounded-full opacity-30 scale-125 z-[-1]" />
        <div className="p-3 bg-white rounded-full shadow-inner">
          <Icon className="h-7 w-7 text-[#030b1a]" />
        </div>
      </motion.div>

      {/* 🖋️ Title + hover line */}
      <div className="mb-2">
        <h3 className="relative inline-block text-lg font-semibold tracking-tight text-[#030b1a]">
          {title}
          <span className="block h-0.5 transition-transform duration-300 bg-[var(--accent)] origin-left scale-x-0 group-hover:scale-x-100" />
        </h3>
      </div>

      <RevealText as="p" className="text-sm text-gray-600 leading-relaxed">
        {text}
      </RevealText>

      {/* Reveal-on-click section */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1, marginTop: 16 } : { height: 0, opacity: 0, marginTop: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="overflow-hidden text-sm text-blue-800 font-medium"
      >
        <p>Want to see how we do it? <span className="underline">Learn how →</span></p>
      </motion.div>
    </motion.div>
  )
})}

      </motion.div>
            {/* Optional Scroll Progress Bar */}
            <motion.div
        style={{ width }}
        className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
      />
    </MotionSection>
  );
};

export default FivePillars;
