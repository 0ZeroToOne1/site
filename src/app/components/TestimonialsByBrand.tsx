'use client';

import { FC, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import MotionSection from './builder/MotionSection';
import { motion, AnimatePresence } from 'framer-motion';
import SectionSubHeader from './SectionSubHeader';
import ClientLogoMarquee from './ClientLogoMarquee';
import clsx from 'clsx';

const testimonials = [
  {
    logo: '/client_logos/survey_app.png',
    quote: 'They helped us ship our MVP in under 30 days — and we were acquired 14 months later.',
    name: 'Jordan M.',
    role: 'Founder, SurveyApp',
  },
  {
    logo: '/client_logos/egent-1.png',
    quote: 'Their team felt like an extension of ours. The launch was smooth and impactful.',
    name: 'Zach G.',
    role: 'Founder, eGent',
  },
  {
    logo: '/client_logos/davinci-logo.png',
    quote: 'Everything was designed to impress and built to scale. Couldn’t ask for better partners.',
    name: 'Frank Camp',
    role: 'Creator, DaVinci Platform',
  },
];

const TestimonialsByBrand: FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Click-away collapse
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        expanded !== null &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setExpanded(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [expanded]);

  return (
    <MotionSection
      className="relative w-full px-6 py-24 mx-auto text-center md:text-left bg-white sm:w-full z-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

<svg

  className="absolute inset-0 z-[-1] w-full h-[90dvh] pointer-events-none scale-y-[-1]"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <polygon points="0,100 100,0 100,100" fill="var(--accent)" />
  <polygon points="0,80 100,20 100,100" fill="white" opacity="0.1" />
</svg>



<div className="mb-10 w-2/3 mx-auto text-right">
<h3 className="mb-2 text-3xl font-semibold tracking-tight text-white sm:text-3xl z-20">What Our Clients Say</h3>
<p className="text-gray-200 mt-2">Trusted by founders, operators, and innovators across industries.</p>
      </div>

      <motion.div
        className="grid max-w-6xl mx-auto gap-6 sm:grid-cols-2 lg:grid-cols-3"
        layout
        ref={containerRef}
      >

        
        {testimonials.map(({ logo, quote, name, role }, i) => {
          const isExpanded = expanded === i;
          const isDimmed = expanded !== null && !isExpanded;

          return (
            <motion.div
              key={i}
              layout
              onClick={() => setExpanded(isExpanded ? null : i)}
              transition={{ layout: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] } }}
              className={clsx(
                'cursor-pointer bg-white shadow-lg ring-1 ring-gray-200 rounded-lg overflow-hidden p-6 transition-all z-20',
                isExpanded
                  ? 'z-10 col-span-3 scale-[1.02]'
                  : 'hover:shadow-md',
                isDimmed && 'opacity-50 scale-95'
              )}
            >
              <motion.div layout="position" className="relative h-8 w-28 mb-4">
                <Image src={logo} alt={name} fill className="object-contain" />
              </motion.div>
              <motion.p
                layout="position"
                className="mb-4 text-gray-700 text-sm italic"
              >
                “{quote}”
              </motion.p>
              <motion.div layout="position" className="text-sm text-gray-500 font-medium">
                {name} <span className="text-gray-400">•</span> {role}
              </motion.div>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    className="mt-4 text-blue-600 text-sm font-semibold underline"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    Read More →
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      <ClientLogoMarquee />




    </MotionSection>
    
  );
};

export default TestimonialsByBrand;
