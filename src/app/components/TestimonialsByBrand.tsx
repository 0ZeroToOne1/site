'use client';

import { FC } from 'react';
import Image from 'next/image';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import MotionCard from './builder/MotionCard';
import RevealText from './builder/RevealText';

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const TestimonialsByBrand: FC = () => {
  return (
    <MotionSection
      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 py-24 mx-auto justify-center text-center md:text-left bg-white sm:w-2/3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="mb-4 text-3xl font-semibold text-[#030b1a]"
        variants={child}
      >
        What Our Clients Say
      </motion.h2>
      <motion.p
        className="mx-auto mb-12 text-base text-gray-600"
        variants={child}
      >
        Trusted by founders, operators, and innovators across industries.
      </motion.p>

      <motion.div className="grid max-w-6xl mx-auto gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ logo, quote, name, role }, i) => (
          <motion.div
            key={i}
            className="p-6 text-left bg-white shadow ring-1 ring-gray-200 rounded-lg"
            variants={child}
          >
            <div className="relative h-8 w-28 mb-4">
              <Image src={logo} alt={name} fill className="object-contain" />
            </div>
            <RevealText as='p' className="mb-4 text-gray-700 text-sm italic">“{quote}”</RevealText>
            <div className="text-sm text-gray-500 font-medium">
              {name} <span className="text-gray-400">•</span> {role}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  );
};

export default TestimonialsByBrand;
