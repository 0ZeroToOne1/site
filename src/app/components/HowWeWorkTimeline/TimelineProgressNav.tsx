'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface Step {
  id: number;
  title: string;
}

interface Props {
  steps: Step[];
  visibleStep: number | null;
  onScrollToStep: (id: number) => void;
}

const TimelineProgressNav: FC<Props> = ({ steps, visibleStep, onScrollToStep }) => {
  const totalSteps = steps.length;
  const progress = visibleStep ? (visibleStep / totalSteps) * 100 : 0;

  return (
    <div className="relative hidden md:block sticky top-28 self-start">
      {/* Static track */}
      <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-200" />

      {/* Animated fill */}
      <motion.div
        className="absolute left-2 top-0 w-0.5 bg-[var(--accent)] origin-top"
        style={{ height: `${progress}%` }}
        initial={{ height: 0 }}
        animate={{ height: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      />

      {/* Nav items */}
      <ul className="relative z-10 flex flex-col items-start space-y-6 pl-6">
        {steps.map((step) => (
          <li key={step.id} className="relative flex items-center gap-2">
            <button
              onClick={() => onScrollToStep(step.id)}
              className={`relative z-10 h-3 w-3 rounded-full transition-all duration-300 ring-2 ${
                visibleStep === step.id
                  ? 'bg-[var(--accent)] ring-white scale-110 shadow'
                  : 'bg-white ring-gray-300'
              }`}
              aria-label={`Scroll to ${step.title}`}
            />
            <span
              className={`text-sm font-medium cursor-pointer transition ${
                visibleStep === step.id ? 'text-[var(--accent)]' : 'text-gray-400'
              }`}
              onClick={() => onScrollToStep(step.id)}
            >
              {step.title.replace(/^0\d\. /, '')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineProgressNav;
