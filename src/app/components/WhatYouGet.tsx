'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Activity, PenTool, Code2 } from 'lucide-react';

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
    <section
      id="what-you-get"
      className="relative bg-gradient-to-b from-white via-white/90 to-white px-6 py-24 sm:py-32 w-full sm:w-2/3 mx-auto text-left"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-grid-small [mask-image:radial-gradient(white,transparent_85%)] opacity-5" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-left">
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
          Built for Bold Founders
        </h2>
        <p className="mb-12 text-3xl font-semibold tracking-tight text-[#030b1a] sm:text-4xl">
          What You Get
        </p>

        <div className="grid max-w-5xl gap-10 px-4 sm:grid-cols-3 sm:gap-14 mx-auto text-center">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="group rounded-2xl bg-white/60 backdrop-blur p-6 shadow-md ring-1 ring-gray-200 hover:shadow-xl transition-all duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[var(--accent)] p-4 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[var(--accent)]">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
