'use client';

import RevealText from './builder/RevealText';
import { FC } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';

const ProductPreview: FC = () => {
  return (
    <MotionSection
      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative px-6 py-8 text-right bg-white/10 md:py-24 md:text-left overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="w-full mx-auto mb-12 text-center md:text-right sm:w-2/3">
        <h2 className="mb-4 text-3xl font-semibold text-[#030b1a]">
          See It In Action
        </h2>
        <p className="text-base text-gray-600">
          Real product UIs — clean, responsive, and built for speed. Designed to impress and ready to scale.
        </p>
      </motion.div>

      <div className="flex flex-col flex-wrap max-w-6xl mx-auto mx-auto gap-12 justify-center md:flex-row">
        {/* MacBook Frame */}
        <motion.div
          className="w-full max-w-2xl border border-gray-200 shadow-md rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/screens/macbook.png"
            alt="MacBook App UI"
            className="w-full h-auto"
          />
        </motion.div>

        {/* iPhone Frame */}
        <motion.div
          className="flex flex-col mx-auto items-center justify-center border border-gray-200 shadow rounded-[2rem] w-[260px] overflow-hidden md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src="/screens/iphone.png"
            alt="Mobile App UI"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default ProductPreview;
