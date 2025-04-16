'use client';

import { FC } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialHighlight: FC = () => {
  return (
    <MotionSection
      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative py-16 px-6 text-center bg-white overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div className="max-w-3xl mx-auto">
        {/* 🧠 Animated Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="w-16 h-16 mx-auto mb-6 shadow-md ring-2 ring-blue-100 rounded-full overflow-hidden"
        >
          <Image
            src="/alex.png"
            alt="Client Testimonial"
            width={64}
            height={64}
            className="object-cover"
          />
        </motion.div>

        {/* 💬 Quote */}
        <motion.blockquote
          className="relative text-lg text-[#030b1a] font-medium leading-relaxed italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          “ZeroToOne helped us launch a polished MVP in under 6 weeks — fast, clean, and investor-ready.”
        </motion.blockquote>

        {/* 🧑 Attribution */}
        <motion.div
          className="mt-4 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Alex Rivera • Product Lead at RapidFireReports
        </motion.div>
      </motion.div>
    </MotionSection>
  );
};

export default TestimonialHighlight;
