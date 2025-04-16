'use client';

import { FC } from 'react';
import MotionSection from '../motion/MotionSection';
import { motion } from 'framer-motion';
import { Lightbulb, MailCheck, Rocket } from 'lucide-react';
import Image from 'next/image';
import MotionCard from '../motion/MotionCard';
import RevealText from '../motion/RevealText';

const steps = [
  {
    title: '01. Share Your Idea',
    text: 'Tell us what you’re building, what problem it solves, and any early notes or visuals.',
    icon: Lightbulb,
    avatar: '/avatars/avatar1.png',
  },
  {
    title: '02. We Review + Respond',
    text: 'You’ll hear back within 24h with a brief plan, estimate, or next-step suggestion.',
    icon: MailCheck,
    avatar: '/avatars/avatar2.png',
  },
  {
    title: '03. Kick Off the Build',
    text: 'Once aligned, we’ll jump into design + architecture and start your MVP sprint.',
    icon: Rocket,
    avatar: '/avatars/avatar3.png',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const WhatHappensNextSection: FC = () => {
  return (
    <MotionSection
      id="contact"
      className="relative z-0 px-4 pt-24 pb-20 bg-white sm:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-grid-small [mask-image:radial-gradient(white,transparent_85%)] opacity-5" />
      </motion.div>

      <motion.div className="relative z-10 max-w-4xl mx-auto p-6 bg-white/80 shadow-xl ring-1 ring-gray-200 rounded-3xl backdrop-blur-sm sm:p-10">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl text-[#030b1a]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Happens Next?
        </motion.h2>

        <motion.ol
          className="relative pl-6 space-y-14 border-l border-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={i}
                className="relative flex flex-col gap-4 items-start sm:flex-row"
                variants={itemVariants}
              >
                <motion.div
                  className="absolute p-2 text-white shadow-md rounded-full left-[-13px] top-1 bg-[var(--accent)]"
                  initial={{ rotate: -30, scale: 0.5 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                <div className="flex-1 ml-8">
                  <div className="flex mb-2 gap-3 items-center">

                    <h3 className="text-lg font-semibold text-[#030b1a]">{step.title}</h3>
                  </div>
                  <RevealText as='p' className="text-sm text-gray-700 sm:text-base">{step.text}</RevealText>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Inline CTA Form */}
        <div className="mt-16 pt-8 border-t">
          <h4 className="mb-4 text-xl font-semibold text-center text-[#030b1a]">
            Ready to start? Let’s talk.
          </h4>
          <form className="grid max-w-2xl mx-auto gap-4 sm:grid-cols-2 text-[#030b1a] placeholder:text-gray-400">
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Tell us about your idea"
              className="px-4 py-2 border border-gray-300 rounded-md sm:col-span-2"
              rows={4}
            />
            <button
              type="submit"
              className="px-6 py-2 text-white rounded-md hover:bg-blue-700 transition bg-[var(--accent)] sm:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </MotionSection>
  );
};

export default WhatHappensNextSection;
