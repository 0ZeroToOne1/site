'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, MailCheck, Rocket } from 'lucide-react';
import Image from 'next/image';

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
    <motion.section
      id="next"
      className="relative z-0 bg-gradient-to-b from-white via-white/90 to-white px-4 sm:px-6 pt-24 pb-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-grid-small [mask-image:radial-gradient(white,transparent_85%)] opacity-5" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl bg-white/80 backdrop-blur-sm p-6 sm:p-10 shadow-xl ring-1 ring-gray-200 rounded-3xl">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold tracking-tight text-[#030b1a] mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Happens Next?
        </motion.h2>

        <motion.ol
          className="relative space-y-14 border-l border-gray-200 pl-6"
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
                className="relative flex flex-col sm:flex-row items-start gap-4"
                variants={itemVariants}
              >
                <motion.div
                  className="absolute left-[-13px] top-1 rounded-full bg-[var(--accent)] p-2 text-white shadow-md"
                  initial={{ rotate: -30, scale: 0.5 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                <div className="ml-8 flex-1">
                  <div className="flex items-center gap-3 mb-2">
  
                    <h3 className="text-lg font-semibold text-[#030b1a]">{step.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">{step.text}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Inline CTA Form */}
        <div className="mt-16 border-t pt-8">
          <h4 className="text-xl font-semibold text-[#030b1a] mb-4 text-center">
            Ready to start? Let’s talk.
          </h4>
          <form className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email address"
              className="border border-gray-300 rounded-md px-4 py-2"
            />
            <textarea
              placeholder="Tell us about your idea"
              className="border border-gray-300 rounded-md px-4 py-2 sm:col-span-2"
              rows={4}
            />
            <button
              type="submit"
              className="bg-[var(--accent)] text-white rounded-md px-6 py-2 hover:bg-blue-700 transition sm:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatHappensNextSection;
