'use client';

import { FC } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import { Activity, PenTool, Code2 } from 'lucide-react';
import MotionCard from './builder/MotionCard';
import RevealText from './builder/RevealText';

const items = [
  {
    title: 'Strategy',
    icon: Activity,
    text: 'Goal mapping, roadmap creation, and lean validation to guide your MVP toward traction.',
  },
  {
    title: 'Design',
    icon: PenTool,
    text: 'Beautiful, conversion-ready interfaces that turn complex flows into effortless experiences.',
  },
  {
    title: 'Engineering',
    icon: Code2,
    text: 'Scalable, modern code — battle-tested Rails backends and pixel-perfect frontend builds.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const WhatYouGet: FC = () => {
  return (
    <MotionSection
      id="what-you-get"
      className="relative w-full px-6 py-24 mx-auto text-left bg-gradient-to-b from-white to-white via-white/90 sm:py-32 sm:w-2/3"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-grid-small [mask-image:radial-gradient(white,transparent_85%)] opacity-5" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left">
        <h2 className="mb-4 text-sm font-medium tracking-wider uppercase text-[var(--accent)]">
          Built for Bold Founders
        </h2>
        <p className="mb-12 text-3xl font-semibold tracking-tight text-[#030b1a] sm:text-4xl">
          What You Get
        </p>

        <div className="grid max-w-5xl px-4 mx-auto gap-10 text-center sm:grid-cols-3 sm:gap-14">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="p-6 bg-white/60 shadow-md ring-1 ring-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 group backdrop-blur"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <MotionCard className="mb-4 p-4 items-center justify-center shadow-md rounded-full transition-transform inline-flex bg-[var(--accent)] group-hover:scale-110">
                  <Icon className="h-6 w-6 text-white" />
                </MotionCard>
                <h3 className="mb-2 text-xl font-semibold text-[var(--accent)]">{item.title}</h3>
                <RevealText as='p' className="text-sm text-gray-700 leading-relaxed">{item.text}</RevealText>
              </motion.div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
};

export default WhatYouGet;
