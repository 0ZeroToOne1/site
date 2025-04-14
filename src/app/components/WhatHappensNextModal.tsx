'use client';

import { FC, useState } from 'react';
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
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-gray-100 px-6 py-3 text-sm text-gray-800 shadow transition-all duration-300 ease-out hover:scale-105 hover:shadow-md"
      >
        What Happens Next?
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-md w-full bg-white rounded-xl p-6 shadow-xl ring-1 ring-gray-200"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="text-xl font-semibold text-[#030b1a] mb-6">
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
                      className="flex items-start gap-4"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="mt-1">
                        <Icon className="h-5 w-5 text-[#030b1a]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#030b1a]">{step.title}</p>
                        <p className="text-gray-700">{step.text}</p>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ol>

              {/* CTA at bottom */}
              <div className="mt-8 text-center">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:shadow-lg"
                >
                  Let’s Talk →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatHappensNextModal;
