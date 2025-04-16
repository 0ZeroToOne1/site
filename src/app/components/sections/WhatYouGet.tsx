'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionSection from '../motion/MotionSection';
import MotionCard from '../motion/MotionCard';
import RevealText from '../motion/RevealText';
import {
  Activity,
  PenTool,
  Code2,
  Layout,
  Layers3,
  ServerCog,
  ChevronDown,
  Sparkles,
  Rocket,
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
  {
    title: 'Launch',
    icon: Rocket,
    text: 'Your MVP goes live — complete with polish, launch checklists, and support for your go-to-market push.',
    details: {
      points: [
        { text: 'Launch QA and polish pass', icon: Sparkles },
        { text: 'Production deployment + monitoring setup', icon: ServerCog },
        { text: 'Go-to-market assets and support', icon: Layout },
      ],
      callout: '“Prep, polish, deploy. We help you hit the ground running — and fast.”',
    },
    color: 'bg-green-600',
    pulse: 'bg-green-500/40',
  },
  {
    title: 'Support',
    icon: Layers3,
    text: 'We’ll help you iterate, grow, and refine — optional support plans keep you covered post-launch.',
    details: {
      points: [
        { text: 'Bug fixes and post-launch tuning', icon: Code2 },
        { text: 'Analytics dashboards + product usage insights', icon: Layout },
        { text: 'Ongoing support or roadmap retainer', icon: ServerCog },
      ],
      callout: '“Great products deserve great care. We’ll help you stay ahead.”',
    },
    color: 'bg-indigo-600',
    pulse: 'bg-indigo-500/40',
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

const WhatYouGet: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MotionSection id="what-you-get" className="relative px-6 py-24 mx-auto text-left sm:py-32 bg-transparent w-full">



      {/* Diagonal SVG accents */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
      <div className="absolute inset-0 z-0 pointer-events-none">
 
      <svg className=" w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="20%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="10%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="15%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="20%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="30%" y1="100%" x2="100%" y2="20%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="40%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="25%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="15%" y1="0" x2="90%" y2="100%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="5%" y1="20%" x2="100%" y2="80%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="20%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="25%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />
  <line x1="33%" y1="100%" x2="100%" y2="20%" stroke="#60a5fa" strokeWidth="2" />
  <line x1="45%" y1="100%" x2="85%" y2="0" stroke="#60a5fa" strokeWidth="2" />

</svg>
</div>
      </div>

      <div className="relative z-10 flex flex-col gap-32 w-1/3 mx-auto mb-20 text-center md:text-left ">
        {items.map((item, i) => {
          const Icon = item.icon;
          const isOpen = openIndex === i;

          return (
            <div key={item.title} className="relative z-10">
              <motion.div
                layout
                className="relative group flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6 overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              >
                <motion.div className="absolute -inset-1 rounded-xl transition duration-300 blur-sm z-0" layoutId={`flicker-${i}`} />

                <div className="relative z-10 flex gap-6 items-start">
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
                      className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:underline focus:outline-none justify-end w-full cursor-pointer"
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
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="ml-20 mt-2 space-y-4 text-sm text-gray-700 leading-relaxed overflow-hidden"
                    >
                      <div>
                        <span className="block mb-1 font-medium text-gray-900">What You’ll Get:</span>
                        <ul className="space-y-2">
                          {item.details.points.map((point, idx) => {
                            const BulletIcon = point.icon;
                            return (
                              <li key={idx} className="flex items-start gap-2">
                                <BulletIcon className="h-4 w-4 mt-1 text-blue-600 shrink-0" />
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

              {i < items.length - 1 && (
  <motion.div
    className={`absolute top-full z-0 h-48 w-2 ${
      i % 2 === 0 ? 'left-[30%]' : 'left-[70%]'
    } -translate-x-1/2`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <svg width="4" height="100%" className="h-full w-full">
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="100%"
        stroke="var(--accent-hover)"
        strokeDasharray="4 6"
        strokeWidth="8"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="20"
          to="0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  </motion.div>
)}
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
};

export default WhatYouGet;
