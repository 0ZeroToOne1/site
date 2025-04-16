'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionSection from './builder/MotionSection';
import MotionCard from './builder/MotionCard';
import RevealText from './builder/RevealText';
import {
  Activity,
  PenTool,
  Code2,
  Layout,
  Layers3,
  ServerCog,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

const items = [
  {
    title: 'Strategy',
    icon: Activity,
    text: 'Goal mapping, roadmap creation, and lean validation to guide your MVP toward traction.',
    details: {
      points: [
        { text: 'Stakeholder interviews + alignment sessions', icon: Layout },
        { text: 'Lean MVP scoping for fast validation', icon: Layers3 },
        { text: 'Custom 30–60–90 day roadmap', icon: ServerCog },
      ],
      callout: '“Ideas are cheap. A roadmap turns them into momentum.”',
    },
    color: 'bg-pink-500',
    pulse: 'bg-pink-400/40',
  },
  {
    title: 'Design',
    icon: PenTool,
    text: 'Beautiful, conversion-ready interfaces that turn complex flows into effortless experiences.',
    details: {
      points: [
        { text: 'Wireframes, UI mockups, clickable prototypes', icon: Layout },
        { text: 'Responsive layouts for all devices', icon: Layers3 },
        { text: 'User-centered UX with built-in onboarding flows', icon: PenTool },
      ],
      callout: '“Delight isn’t just pretty — it’s functional beauty that converts.”',
    },
    color: 'bg-yellow-500',
    pulse: 'bg-yellow-400/40',
  },
  {
    title: 'Engineering',
    icon: Code2,
    text: 'Scalable, modern code — battle-tested Rails backends and pixel-perfect frontend builds.',
    details: {
      points: [
        { text: 'Production-ready Rails API', icon: ServerCog },
        { text: 'Pixel-perfect React or ERB frontend', icon: Layout },
        { text: 'CI/CD, staging, and performance tuning included', icon: Code2 },
      ],
      callout: '“We don’t just ship code — we ship certainty.”',
    },
    color: 'bg-blue-600',
    pulse: 'bg-blue-500/40',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const WhatYouGet: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MotionSection
      id="what-you-get"
      className="relative w-full px-6 py-24 mx-auto text-left sm:py-32 bg-transparent sm:max-w-3xl"
    >
<div className="absolute inset-0 z-20 pointer-events-none text-black/90 dark:text-white/5">
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1, x: [0, -20, 0], y: [0, -20, 0] }}
    transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
  >
    <g stroke="currentColor" strokeWidth="1">
      <path d="M0 0L400 400" />
      <path d="M400 0L0 400" />
      <path d="M100 0L500 400" />
      <path d="M0 100L400 500" />
      <path d="M200 0L600 400" />
      <path d="M0 200L400 600" />
    </g>
  </motion.svg>
</div>

      <div className="relative z-10 flex flex-col gap-16">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={item.title}
              className="flex flex-col gap-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="flex gap-6 items-start">
                <div className="relative shrink-0">
                  <div className={`absolute inset-0 rounded-full ${item.pulse} blur-2xl animate-pulse`} />
                  <MotionCard className={`relative z-10 p-4 rounded-full ${item.color} shadow-md transition-all duration-300 ease-in-out hover:scale-105`}>
                    <Icon className="h-6 w-6 text-white transition-transform duration-300 ease-in-out transform hover:rotate-12" />
                  </MotionCard>
                </div>

                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <RevealText className="text-sm text-gray-600 leading-relaxed">{item.text}</RevealText>
                  <button
                    onClick={() => toggleOpen(i)}
                    className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:underline focus:outline-none"
                  >
                    More details
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-1"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`details-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="ml-20 mt-2 space-y-4 text-sm text-gray-700 leading-relaxed"
                  >
                    <div>
                      <span className="block mb-1 font-medium text-gray-900">What You’ll Get:</span>
                      <ul className="space-y-2">
                        {item.details.points.map((point, idx) => {
                          const BulletIcon = point.icon;
                          return (
                            <li key={idx} className="flex items-start gap-2">
                              <motion.div
                                className="mt-1 shrink-0 text-blue-600"
                                variants={iconVariants}
                                initial="hidden"
                                animate="visible"
                                custom={idx}
                              >
                                <BulletIcon className="h-4 w-4" />
                              </motion.div>
                              <span>{point.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="flex items-start gap-2 rounded-md border-l-4 border-blue-600 bg-blue-50 p-4 text-blue-900">
                      <Sparkles className="h-4 w-4 mt-1 shrink-0 text-blue-600" />
                      <p className="text-sm italic">“{item.details.callout}”</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </MotionSection>
  );
};

export default WhatYouGet;
