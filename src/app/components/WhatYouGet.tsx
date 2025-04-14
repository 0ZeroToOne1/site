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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const WhatYouGet: FC = () => {
  return (
    <section
      id="what-you-get"
      className="bg-white/10 px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#030b1a] sm:mb-12 sm:text-3xl">
          What You Get
        </h2>

        <div className="mx-auto grid max-w-5xl gap-12 px-4 text-center sm:grid-cols-3 sm:gap-16">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="rounded-xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[var(--accent)] p-3 shadow-sm">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-[var(--accent)]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
