'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FoundersSection: FC = () => {
  return (
    <section
      className="relative bg-white py-24 px-6 overflow-hidden"
      id="founder"
    >
      {/* Background world map */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/world-map.svg" // Use a clean vector world map SVG
          alt="Global map"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none select-none"
        />
      </div>

      {/* Avatar Pin */}
      <div className="absolute left-[21%] top-[18%] z-10">
        <span className="relative block size-5 bg-blue-600 rounded-full shadow-lg">
          <span className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-70"></span>
        </span>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto max-w-4xl text-center z-20"
      >
        <h2 className="text-3xl font-semibold text-[#030b1a] mb-4">
          Who's Behind ZeroToOne?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          ZeroToOne is led by <strong>Frank Camp</strong>, a software engineer, founder, and product strategist with over a decade of experience helping early-stage companies bring bold ideas to life — fast.
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-lg ring-2 ring-gray-200">
            <Image
              src="/founder-avatar.jpg"
              alt="Frank Camp"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Frank Camp</span> <br />
            Founder & Technical Partner
          </div>
        </div>

        <p className="mt-12 text-base text-gray-500">
          Based in the U.S. — Building with partners around the world.
        </p>
      </motion.div>
    </section>
  );
};

export default FoundersSection;
