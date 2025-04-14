
'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Signature from './Signature';

const FoundersSection: FC = () => {
  return (
    <section
      className="relative bg-white py-24 px-6 md:px-10 overflow-hidden"
      id="founder"
    >
      {/* Background world map + gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/world-map.svg"
          alt="Global map"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none select-none opacity-20"
        />
              </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto max-w-3xl text-center z-20"
      >
        <h2 className="text-3xl font-semibold text-[#030b1a] mb-4">
          Who's Behind ZeroToOne?
        </h2>
        <p className="text-lg text-gray-600 mb-10 w-full max-w-2xl mx-auto">
          ZeroToOne is led by <strong>Frank Camp</strong>, a software engineer, founder, and product strategist with over a decade of experience helping early-stage companies bring bold ideas to life — fast.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-lg ring-2 ring-gray-200">
            <Image
              src="/founder-avatar.jpg"
              alt="Frank Camp"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-sm text-gray-700 text-center md:text-left">
            <span className="font-semibold">Frank Camp</span> <br />
            Founder & Technical Partner
          </div>
        </div>

        <Link
          href="https://www.linkedin.com/in/frankcamp"
          target="_blank"
          className="inline-block mt-8 text-sm font-semibold text-blue-600 hover:underline"
        >
          Meet Frank on LinkedIn →
        </Link>

        <p className="mt-12 text-base text-gray-500 max-w-xl mx-auto">
          Based in the U.S. — Building with partners around the world.
        </p>
      </motion.div>
    </section>
  );
};

export default FoundersSection;
