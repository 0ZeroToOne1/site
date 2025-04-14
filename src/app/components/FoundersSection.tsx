'use client';

import RevealText from './builder/RevealText';
import { FC } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Signature from './Signature'; // Optional animated SVG signature

const pins = [
  { x: '25%', y: '40%' }, // West Coast US
  { x: '42%', y: '44%' }, // NYC
  { x: '60%', y: '48%' }, // London
  { x: '72%', y: '55%' }, // India
  { x: '84%', y: '60%' }, // SE Asia
];

const FoundersSection: FC = () => {
  return (
    <MotionSection
      className="relative py-28 px-6 bg-white md:px-10 overflow-hidden"
      id="founder"
    >
      {/* 🗺️ World map background with soft vignette overlay */}
      <div className="absolute z-0 inset-0">
        <Image
          src="/world-map.svg"
          alt="Global map"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none select-none opacity-60"
        />
        <div className="absolute z-10 inset-0 pointer-events-none">
          {pins.map((pin, i) => (
            <div
              key={i}
              className="absolute"
              style={{ left: pin.x, top: pin.y }}
            >
              {/* 🔵 Core dot */}
              <motion.div
                className="relative z-10 w-3 h-3 bg-blue-500 shadow-md rounded-full"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
              />

              {/* 🌀 Pulse ring */}
              <motion.div
                className="absolute w-8 h-8 border-2 border-blue-300 rounded-full top-1/2 left-1/2"
                style={{ translateX: '-50%', translateY: '-50%' }}
                animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1.0,
                  ease: 'easeOut',
                  delay: i * 0.3,
                }}
              />
            </div>
          ))}

          {/* Connections as SVG paths */}
          <svg className="absolute w-full h-full inset-0 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M25,40 Q33,43 42,44 Q51,46 60,48 Q66,51 72,55 Q78,57 84,60"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.3"
              strokeDasharray="6"
              strokeDashoffset="8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </svg>
        </div>
        <div className="absolute bg-gradient-to-br from-white to-transparent inset-0 via-white/60" />
      </div>

      {/* ✍️ Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-[#030b1a]">
          Who’s Behind ZeroToOne?
        </h2>
        <p className="max-w-2xl mb-10 mx-auto text-lg text-gray-600">
          ZeroToOne is led by <strong>Frank Camp</strong>, a software engineer, founder, and product strategist with over a decade of experience helping early-stage companies bring bold ideas to life — fast.
        </p>

        {/* 👤 Founder Bio */}
        <div className="flex flex-col gap-6 items-center justify-center md:flex-row">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-24 h-24 shadow-lg ring-2 ring-gray-200 rounded-full overflow-hidden"
          >
            <Image
              src="/founder-avatar.jpg"
              alt="Frank Camp"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="text-sm text-gray-700 text-center leading-snug md:text-left">
            <span className="font-semibold text-base">Frank Camp</span> <br />
            Founder & Technical Partner
          </div>
        </div>

        {/* 🔗 LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/frankcamp"
          target="_blank"
          className="inline-block mt-5 text-sm font-semibold text-blue-600 hover:underline"
        >
          Meet Frank on LinkedIn →
        </Link>

        <p className="max-w-xl mt-10 mx-auto text-sm text-gray-500">
          Based in the U.S. — Building with partners around the world.
        </p>
      </motion.div>
    </MotionSection>
  );
};

export default FoundersSection;
