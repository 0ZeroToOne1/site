'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FoundersSection: FC = () => {
  return (
    <section className="relative bg-gradient-to-t from-blue-50 to-white  py-24 px-6" id="founder">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Who's Behind ZeroToOne?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          ZeroToOne is led by <strong>Frank Camp</strong>, a software engineer, founder, and product strategist with over a decade of experience helping early-stage companies bring bold ideas to life — fast.
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-lg ring-2 ring-gray-200">
            <Image
              src="/founder-avatar.jpg" // Replace with actual avatar
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
      </motion.div>
    </section>
  );
};

export default FoundersSection;