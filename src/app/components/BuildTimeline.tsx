'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import SectionSubHeader from './SectionSubHeader';

const steps = [
  { week: 'Week 1–2', title: 'Product Discovery + Design', desc: 'We align goals, define scope, and create clickable UI mockups for key flows.' },
  { week: 'Week 3–4', title: 'MVP Build – Core Flows', desc: 'We build the backend (Rails + Turbo) and wire up your first user flows.' },
  { week: 'Week 5', title: 'Auth + Admin Tools', desc: 'Login, roles, dashboards, and basic permissions for you and your users.' },
  { week: 'Week 6', title: 'Polish + Visual QA', desc: 'Refining UI, motion, animations, and adding empty states and loading UX.' },
  { week: 'Week 7', title: 'Internal Review + Feedback', desc: 'You explore the MVP and request final changes before go-live.' },
  { week: 'Week 8', title: 'Launch + Handoff', desc: 'We ship your MVP and hand over docs, deploy access, and training videos.' },
];

const BuildTimelineCurved: FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleIndex = entries.findIndex((entry) => entry.isIntersecting);
        if (visibleIndex !== -1) setActiveStep(visibleIndex);
      },
      { threshold: 0.4 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Spacing
  const verticalSpacing = 240;
  const pathHeight = steps.length * verticalSpacing;

  // Build dynamic SVG path
  const buildPath = () => {
    const startX = 100;
    const leftX = 20;
    const rightX = 180;

    let d = `M ${startX} 0`;
    steps.forEach((_, i) => {
      const isEven = i % 2 === 0;
      const y = (i + 1) * verticalSpacing;
      const ctrlX = isEven ? rightX : leftX;
      d += ` C ${ctrlX} ${y - 120}, ${ctrlX} ${y - 120}, ${startX} ${y}`;
    });
    return d;
  };

  return (
    <section id="timeline" ref={ref} className="relative bg-white text-[#030b1a] py-24 px-4 sm:px-8 overflow-hidden">
      <div className="w-full sm:w-2/3 mx-auto">
        <div className="text-center sm:text-right mb-20">
          <SectionSubHeader title="Your Road to Launch" subtitle="A transparent 8-week timeline that shows how we bring your idea to life." />
        </div>

        {/* Curved SVG Path */}
        <svg
          className="absolute left-1/2 top-15 -translate-x-1/2 z-0 opacity-60"
          width="300"
          height={2500}
          viewBox={`0 0 200 ${pathHeight}`}
          preserveAspectRatio="xMidYMid"
          fill="none"
        >
          <path
            d={buildPath()}
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Timeline Items */}
        <div className="relative z-10 flex flex-col gap-[240px] w-3/4 justify-center mx-auto">
          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                ref={(el) => (stepRefs.current[idx] = el!)}
                className={`relative flex ${isLeft ? 'justify-end' : 'justify-start'}`}
              >
                {/* Dot */}
                <div className={`absolute top-2 ${isLeft ? '-right-6' : '-left-6'} z-20`}>
                  <div className="w-5 h-5 bg-white border-4 border-blue-500 rounded-full shadow-md" />
                  {activeStep === idx && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping"
                      style={{ top: '-1px', left: '0px', width: '20px', height: '20px' }}
                    />
                  )}
                </div>

                {/* Card */}
                <motion.div
                  className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-sm text-gray-500">{step.week}</h4>
                  <h3 className="text-lg font-semibold text-[#030b1a]">{step.title}</h3>
                  <p className="text-gray-600 mt-1">{step.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BuildTimelineCurved;
