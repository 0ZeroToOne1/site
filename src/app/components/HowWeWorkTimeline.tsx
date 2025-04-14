'use client';

import { useState, useEffect, FC } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import DiscoverMock from './HowWeWorkTimeline/DiscoverMock';
import DesignMock from './HowWeWorkTimeline/DesignMock';
import BuildMock from './HowWeWorkTimeline/BuildMock';
import LaunchMock from './HowWeWorkTimeline/LaunchMock';
import TimelineProgressNav from './HowWeWorkTimeline/TimelineProgressNav';
import TimelineMobileNav from './HowWeWorkTimeline/TimelineMobileNav';

import { Lightbulb, Ruler, Code2, Rocket } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  text: string;
}

const steps: Step[] = [
  { id: 1, title: '01. Discover', text: 'We listen. We learn. We map your vision to product goals.' },
  { id: 2, title: '02. Design', text: 'We design intuitive, stunning interfaces built to impress and convert.' },
  { id: 3, title: '03. Build', text: 'We engineer scalable systems that move fast, with modern frameworks.' },
  { id: 4, title: '04. Launch + Beyond', text: 'We ship. Then we stay close — supporting your growth and scale.' },
];

const iconMap: Record<Step['id'], typeof Lightbulb> = {
  1: Lightbulb,
  2: Ruler,
  3: Code2,
  4: Rocket,
};

const HowWeWorkTimeline: FC = () => {
  const [view, setView] = useState<'simple' | 'visual'>('visual');
  const [loading, setLoading] = useState(false);
  const [visibleStep, setVisibleStep] = useState<number | null>(null);

  useEffect(() => {
    if (view === 'visual') {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [view]);

  const scrollToStep = (id: number) => {
    const el = document.getElementById(`step-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const renderMockUI = (id: number, loading: boolean) => {
    switch (id) {
      case 1:
        return <DiscoverMock loading={loading} />;
      case 2:
        return <DesignMock loading={loading} />;
      case 3:
        return <BuildMock loading={loading} />;
      case 4:
        return <LaunchMock loading={loading} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="how-we-work"
      className="bg-white px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#030b1a] sm:mb-12 sm:text-3xl">
            How We Work
          </h2>
          <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1 text-sm">
            <button
              onClick={() => setView('simple')}
              className={`rounded-full px-4 py-1 transition-all ${
                view === 'simple' ? 'bg-[var(--accent)] text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Simple View
            </button>
            <button
              onClick={() => setView('visual')}
              className={`rounded-full px-4 py-1 transition-all ${
                view === 'visual' ? 'bg-[var(--accent)] text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Visual View
            </button>
          </div>
        </div>

        {/* 2-Column Timeline Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
          <TimelineProgressNav
            steps={steps}
            visibleStep={visibleStep}
            onScrollToStep={scrollToStep}
          />
          <TimelineMobileNav
            steps={steps}
            visibleStep={visibleStep}
            onScrollToStep={scrollToStep}
          />

          {/* Step Content */}
          <div className="space-y-24">
            {steps.map((step, i) => {
              const Icon = iconMap[step.id];
              const { ref, inView } = useInView({ threshold: 0.4 });

              useEffect(() => {
                if (inView) setVisibleStep(step.id);
              }, [inView]);

              return (
                <motion.section
                  key={step.id}
                  ref={ref}
                  id={`step-${step.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="scroll-mt-24"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] shadow ring-2 ring-white">
                      <Icon className="h-4 w-4 text-white" />
                    </span>
                    <h3 className="text-xl font-semibold text-[#030b1a]">{step.title}</h3>
                  </div>
                  <p className="mb-6 text-gray-600">{step.text}</p>

                  {view === 'visual' && (
                    <div className="mt-4">{renderMockUI(step.id, loading)}</div>
                  )}
                </motion.section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkTimeline;
