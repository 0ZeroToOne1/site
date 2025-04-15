'use client';

import { useState, useEffect, FC, useRef } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import MotionCard from './builder/MotionCard';
import RevealText from './builder/RevealText';
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
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

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

  // ✅ Attach intersection observer to stepRefs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const index = stepRefs.current.findIndex((ref) => ref === visibleEntry.target);
          if (index !== -1) {
            setVisibleStep(steps[index].id);
            console.log('Visible step:', steps[index].id);
          }
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      stepRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <MotionSection id="how-we-work" className="px-6 py-20 bg-white sm:py-24">
      <div className="w-full mx-auto sm:w-2/3">
        {/* Header */}
        <div className="flex flex-col mb-10 gap-4 items-center justify-between sm:flex-row">
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#030b1a] sm:mb-12 sm:text-3xl">
            How We Work
          </h2>
          <MotionCard className="flex p-1 gap-2 items-center text-sm bg-gray-100 rounded-full">
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
          </MotionCard>
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
              return (
                <section
                  key={step.id}
                  id={`step-${step.id}`}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className="scroll-mt-24"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex mb-4 gap-3 items-center">
                      <span className="h-8 w-8 items-center justify-center shadow ring-2 ring-white rounded-full inline-flex bg-[var(--accent)]">
                        <Icon className="h-4 w-4 text-white" />
                      </span>
                      <h3 className="text-xl font-semibold text-[#030b1a]">{step.title}</h3>
                    </div>
                    <RevealText as="p" className="mb-6 text-gray-600">
                      {step.text}
                    </RevealText>
                    {view === 'visual' && <div className="mt-4">{renderMockUI(step.id, loading)}</div>}
                  </motion.div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default HowWeWorkTimeline;
