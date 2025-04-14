'use client';

import { motion } from 'framer-motion';
import { Clock, Wrench, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Clock,
    title: 'Days 1–30: Strategy & Architecture',
    description: 'We clarify your idea, define your MVP, and establish the technical plan for a fast, scalable build.',
  },
  {
    icon: Wrench,
    title: 'Days 31–60: Design & Build',
    description: 'We design clean, user-focused interfaces and develop your app using scalable, maintainable code.',
  },
  {
    icon: Rocket,
    title: 'Days 61–90: Launch & Iterate',
    description: 'We help you launch confidently, gather user feedback, and iterate for traction and growth.',
  },
];

export default function LaunchPlanSteps() {
  return (
    <section className="bg-white/10 py-24 px-6" id="launch-plan">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#030b1a] text-center mb-16"
        >
          Your 90-Day Launch Roadmap
        </motion.h2>

        <ol className="relative border-r border-gray-200">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 mr-6 text-right"
            >
              <span className="absolute -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)] ring-8 ring-white shadow-md">
                <Icon className="text-white" size={14} />
              </span>
              <h3 className="text-xl font-semibold text-[#030b1a] mb-1">{title}</h3>
              <p className="text-lg text-gray-600">{description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
