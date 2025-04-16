'use client';

import { useState, useEffect, FC, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import MotionSection from './builder/MotionSection';
import MotionCard from './builder/MotionCard';
import RevealText from './builder/RevealText';
import DiscoverMock from './HowWeWorkTimeline/DiscoverMock';
import DesignMock from './HowWeWorkTimeline/DesignMock';
import BuildMock from './HowWeWorkTimeline/BuildMock';
import LaunchMock from './HowWeWorkTimeline/LaunchMock';
import TimelineProgressNav from './HowWeWorkTimeline/TimelineProgressNav';
import TimelineMobileNav from './HowWeWorkTimeline/TimelineMobileNav';
import SectionSubHeader from './SectionSubHeader';
import { Lightbulb, Ruler, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    week: 'Week 1 – 2',
    title: '01. Discover',
    text: 'We listen. We learn. We map your vision to product goals.',
    desc: 'We align goals, define scope, and create clickable UI mockups for key flows.',
  },
  {
    id: 2,
    week: 'Week 3 – 4',
    title: '02. Design',
    text: 'We design intuitive, stunning interfaces built to impress and convert.',
    desc: 'We build the backend (Rails + Turbo) and wire up your first user flows.',
  },
  {
    id: 3,
    week: 'Week 5 – 6',
    title: '03. Build',
    text: 'We engineer scalable systems that move fast, with modern frameworks.',
    desc: 'Login, dashboards, permissions, empty states, motion polish, and QA.',
  },
  {
    id: 4,
    week: 'Week 7 – 8',
    title: '04. Launch + Beyond',
    text: 'We ship. Then we stay close — supporting your growth and scale.',
    desc: 'You review, give feedback, and we deliver final polish, docs, and deploy.',
  },
];

const iconMap = {
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
    document.getElementById(`step-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const renderMockUI = (id: number) => {
    const map = {
      1: <DiscoverMock loading={loading} />,
      2: <DesignMock loading={loading} />,
      3: <BuildMock loading={loading} />,
      4: <LaunchMock loading={loading} />,
    };
    return map[id as keyof typeof map] ?? null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setVisibleStep(steps[index].id);
            break;
          }
        }
      },
      { threshold: 0.4 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => {
      stepRefs.current.forEach((el) => el && observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  };

  return (
    <MotionSection id="how-we-work" className="relative px-6 py-20 sm:py-24 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_30%,_transparent_100%)] ">
      {/* Blueprint background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="1"
              height="1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B82F6" strokeWidth="0.07" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto w-full sm:w-2/3">
        <div className="mb-20 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <SectionSubHeader title="How We Work" subtitle="The steps we take to perfect your idea." />
          <MotionCard className="flex gap-2 rounded-full bg-gray-100 p-1 text-sm shadow-sm border border-gray-200">
            {(['simple', 'visual'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setView(mode)}
                aria-pressed={view === mode}
                className={`rounded-full px-4 py-1 transition-all duration-300 ${view === mode
                    ? 'bg-[var(--accent)] text-white shadow'
                    : 'text-gray-500 hover:text-gray-700 bg-white'
                  }`}
              >
                {mode === 'simple' ? 'Simple View' : 'Visual View'}
              </button>
            ))}
          </MotionCard>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr] w-full mx-auto">
          <TimelineProgressNav steps={steps} visibleStep={visibleStep} onScrollToStep={scrollToStep} />
          <TimelineMobileNav steps={steps} visibleStep={visibleStep} onScrollToStep={scrollToStep} />

          <div className="relative space-y-32">
            {steps.map((step, i) => {
              const Icon = iconMap[step.id];
              const isRight = i % 2 !== 0;

              return (
                <div className="relative z-10" key={step.id}>
                  <section
                    id={`step-${step.id}`}
                    ref={(el) => (stepRefs.current[i] = el)}
                    className="scroll-mt-32"
                  >
                    <motion.div
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`md:max-w-full ${isRight ? 'md:ml-32' : 'md:mr-0'}`}
                    >
                      <div className="relative">
                        <div
                          className={`relative bg-white shadow-lg rounded-xl w-5/6 p-6 ${isRight
                              ? 'border-l-6 border-blue-500'
                              : 'border-r-6 border-blue-500 text-right justify-end'
                            }`}
                        >
                          <div
                            className={`mb-4 flex items-center gap-3 ${isRight ? 'justify-start' : 'justify-end'
                              }`}
                          >
                            <span
                              className={`inline-flex h-8 w-8 items-center justify-center rounded-full shadow ring-2 ring-white ${visibleStep === step.id ? 'bg-[var(--accent)] animate-pulse' : 'bg-gray-300'
                                }`}
                            >
                              <Icon className="h-4 w-4 text-white" />
                            </span>
                            <h3 className="text-xl font-semibold text-[#030b1a]">{step.title}</h3>
                          </div>

                          <h4 className="text-sm text-blue-500 font-medium mb-1">{step.week}</h4>
                          <RevealText as="p" className="mb-2 text-gray-600">
                            {step.desc}
                          </RevealText>
                          <RevealText as="p" className="mb-6 text-gray-400">
                            {step.text}
                          </RevealText>
                          {view === 'visual' && (
                            <div className="mt-4 flex justify-center">{renderMockUI(step.id)}</div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {i < steps.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 top-full z-0 h-48 w-2 -translate-x-1/2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <svg width="4" height="100%" className="h-full w-full">
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="100%"
                          stroke="var(--accent-hover)"
                          strokeDasharray="4 6"
                          strokeWidth="8"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="20"
                            to="0"
                            dur="1.5s"
                            repeatCount="indefinite"
                          />
                        </line>
                      </svg>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default HowWeWorkTimeline;
