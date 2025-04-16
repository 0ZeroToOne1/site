'use client';

import { FC } from 'react';

interface Step {
  id: number;
  title: string;
}

interface Props {
  steps: Step[];
  visibleStep: number | null;
  onScrollToStep: (id: number) => void;
}

const TimelineMobileNav: FC<Props> = ({ steps, visibleStep, onScrollToStep }) => {
  return (
    <div className="mb-8 flex justify-center gap-3 sm:hidden">
      {steps.map((step) => (
        <button
          key={step.id}
          onClick={() => onScrollToStep(step.id)}
          className={`rounded-full px-3 py-1 text-sm font-medium transition ${
            visibleStep === step.id
              ? 'bg-[var(--accent)] text-white'
              : 'bg-gray-100 text-gray-500 hover:text-[#030b1a]'
          }`}
        >
          {step.title.replace(/^0\d\. /, '')}
        </button>
      ))}
    </div>
  );
};

export default TimelineMobileNav;
