'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, MailCheck, Rocket } from 'lucide-react';

const steps = [
  {
    title: '01. Share Your Idea',
    text: 'Tell us what you’re building, what problem it solves, and any early notes or visuals.',
    icon: Lightbulb,
  },
  {
    title: '02. We Review + Respond',
    text: 'You’ll hear back within 24h with a brief plan, estimate, or next-step suggestion.',
    icon: MailCheck,
  },
  {
    title: '03. Kick Off the Build',
    text: 'Once aligned, we’ll jump into design + architecture and start your MVP sprint.',
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const WhatHappensNextSection: FC = () => {
  return (
    <motion.section
      id="next"
      className="relative z-0 bg-white/10 px-6 pt-24 pb-32 overflow-visible"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="relative z-10 mx-auto max-w-4xl bg-white p-10 shadow-lg ring-1 ring-gray-200 rounded-xl">
        <motion.h2
          className="text-3xl font-bold text-[#030b1a] mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Happens Next?
        </motion.h2>

        <motion.ol
  className="space-y-8 text-left"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={containerVariants}
>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.li
              key={i}
              className="flex items-start gap-4"
              variants={itemVariants}
              >
                <div className="mt-1 shrink-0">
                  <Icon className="h-6 w-6 text-[#030b1a]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#030b1a]">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.text}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </motion.section>
  );
};

export default WhatHappensNextSection;
