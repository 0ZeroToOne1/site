'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const ProductPreview: FC = () => {
  return (
    <motion.section
      className="relative bg-white/10 px-6 py-8 md:py-24 text-right md:text-left overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto mb-12 w-full sm:w-2/3 text-right">
        <h2 className="text-3xl font-semibold text-[#030b1a] mb-4">
          See It In Action
        </h2>
        <p className="text-base text-gray-600">
          Real product UIs — clean, responsive, and built for speed. Designed to impress and ready to scale.
        </p>
      </div>

      <div className="mx-auto flex flex-col md:flex-row flex-wrap justify-center gap-12 max-w-6xl mx-auto">
        {/* MacBook Frame */}
        <motion.div
          className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-200 shadow-md"
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
          className="w-[260px] overflow-hidden rounded-[2rem] border border-gray-200 shadow flex flex-col md:flex-row items-center justify-center mx-auto"
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
    </motion.section>
  );
};

export default ProductPreview;
