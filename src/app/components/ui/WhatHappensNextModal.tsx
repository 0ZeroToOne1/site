'use client';

import { FC, useState } from 'react';
import MotionSection from './builder/MotionSection';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb, MailCheck, Rocket } from 'lucide-react';
import Link from 'next/link';

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

const WhatHappensNextModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex-col px-6 py-3 gap-2 items-center text-sm text-[#030b1a] bg-gradient-to-r from-white to-gray-100 shadow rounded-full hover:scale-105 hover:shadow-md transition-all duration-300 ease-out inline-flex md:flex-row"
      >
        What Happens Next?
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 flex flex-col px-4 items-center justify-center bg-black/40 inset-0 md:flex-row backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-md w-full p-6 bg-white shadow-xl ring-1 ring-gray-200 rounded-xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute text-gray-400 hover:text-gray-600 transition top-4 right-4"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="mb-6 text-xl font-semibold text-[#030b1a]">
                What Happens Next?
              </h3>

              <motion.ol
                className="space-y-5 text-sm text-gray-700"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.li
                      key={i}
                      className="flex flex-col gap-4 items-start md:flex-row"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <motion.div className="mt-1">
                        <Icon className="h-5 w-5 text-[#030b1a]" />
                      </MotionCard>
                      <div>
                        <RevealText as='p' className="font-medium text-[#030b1a]">{step.title}</RevealText>
                        <RevealText as='p' className="text-gray-700">{step.text}</RevealText>
                      </MotionCard>
                    </motion.li>
                  );
                })}
              </motion.ol>

              {/* CTA at bottom */}
              <div className="mt-8 text-center md:text-left">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-5 py-2.5 text-sm font-medium text-white shadow rounded-md hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-lg transition-all bg-[var(--accent)]"
                >
                  Let’s Talk →
                </Link>
              </MotionCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatHappensNextModal;
