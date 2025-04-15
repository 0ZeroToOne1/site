'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import MotionSection from './builder/MotionSection';
import RevealText from './builder/RevealText';
import Signature from './Signature';

const pins = [
  { x: '18%', y: '42%' }, // San Francisco
  { x: '26%', y: '43%' }, // Austin
  { x: '40%', y: '44%' }, // NYC
  { x: '53%', y: '47%' }, // Brazil
  { x: '60%', y: '48%' }, // London
  { x: '68%', y: '52%' }, // Berlin
  { x: '72%', y: '55%' }, // India
  { x: '76%', y: '50%' }, // Dubai
  { x: '84%', y: '60%' }, // Singapore
  { x: '88%', y: '58%' }, // Sydney
];

const FoundersSection: FC = () => {
  return (
    <MotionSection
      id="founder"
      className="relative overflow-hidden bg-white py-28 px-6 md:px-10"
    >
      {/* 🌍 Map + Pins */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/world-map.svg"
          alt="Global map"
          layout="fill"
          objectFit="fill"
          className="pointer-events-none select-none opacity-60"
        />
        <div className="absolute inset-0 z-10 pointer-events-none">
          {pins.map((pin, i) => (
            <div key={i} className="absolute" style={{ left: pin.x, top: pin.y }}>
              {/* 🔵 Core dot */}
              <motion.div
                className="relative h-3 w-3 rounded-full bg-blue-500 shadow-md opacity-60"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
              />

              {/* 🌀 Pulse ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-8 w-8 rounded-full border-2 border-blue-300"
                style={{ translateX: '-50%', translateY: '-50%' }}
                animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: 'easeOut',
                  delay: i * 0.3,
                }}
              />
            </div>
          ))}

          {/* 🔗 SVG Path + ✈️ Plane */}
          <svg
            className="absolute inset-0 h-full w-full opacity-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              id="travelPath"
              d="M18,42 Q22,43 26,43 Q33,44 40,44 Q46,45 53,47 Q56,47 60,48 Q64,50 68,52 Q70,54 72,55 Q74,53 76,50 Q80,55 84,60 Q86,59 88,58"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="0.3"
              strokeDasharray="6"
              strokeDashoffset="8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />

            {/* ✈️ Animated Plane */}
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#travelPath" />
              </animateMotion>
              <path
                d="M0 0 L2 1 L0 2 L0.5 1 Z"
                fill="#3B82F6"
                transform="scale(0.9) translate(0.5, -1)"
              />
            </motion.g>
          </svg>
        </div>

        {/* 💡 Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-transparent" />
      </div>

      {/* 👤 Glass Info Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-20 mx-auto max-w-3xl rounded-2xl border border-white/20 bg-white/10 px-6 py-12 text-center shadow-2xl backdrop-blur-xl backdrop-saturate-150"
      >
        <h2 className="mb-6 text-4xl font-bold text-[#030b1a]">
          Who’s Behind ZeroTo<span className="text-[var(--accent)]">One</span>?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
          Hey — I’m <strong>Frank Camp</strong>. I’ve spent the last 10+ years helping early-stage teams
          turn vision into code — from scrappy MVPs to real, scalable platforms. I’ve launched
          VC-backed fintechs, SaaS tools used by thousands, and products that have gone on to acquisition.
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
          ZeroTo<span className="text-[var(--accent)]">One</span> is the studio I wish I had when I was building my first startup: fast,
          collaborative, and deeply product-minded. We work globally, but partner locally — with
          founders who care about what they’re building.
        </p>

        {/* 🧑‍💻 Avatar + Name */}
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gray-200 shadow-md"
          >
            <Image
              src="/founder-avatar.jpg"
              alt="Frank Camp"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="text-center text-sm leading-snug text-gray-700 md:text-left">
            <span className="text-base font-semibold">Frank Camp</span> <br />
            Founder & Technical Partner
          </div>
        </div>

        {/* 🔗 LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/frankcamp"
          target="_blank"
          className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline"
        >
          Meet Frank on LinkedIn →
        </Link>

        <p className="mx-auto mt-10 max-w-xl text-sm text-gray-500">
          U.S. based. Globally partnered. Always building what matters.
        </p>
      </motion.div>
    </MotionSection>
  );
};

export default FoundersSection;
