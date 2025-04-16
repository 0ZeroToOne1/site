'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from './builder/RevealText';
import SectionSubHeader from './SectionSubHeader';
import MotionSection from './builder/MotionSection';
import { MonitorSmartphone, Smartphone, SwitchCamera } from 'lucide-react';

const ProductPreview = () => {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');

  const toggleView = () => {
    setView(view === 'desktop' ? 'mobile' : 'desktop');
  };

  return (
    <MotionSection
      className="relative px-6 py-16 text-center bg-white/10 md:py-24 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full mx-auto mb-16 sm:w-2/3 text-center sm:text-right">
        <SectionSubHeader
          title="See It In Action"
          subtitle="Toggle between views to explore real product UIs, responsive across all devices."
        />
      </div>

      {/* Toggle Button */}
      <div className="mb-10 flex justify-center">
        <button
          onClick={toggleView}
          className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-full transition"
        >
          <SwitchCamera className="h-4 w-4" />
          Switch to {view === 'desktop' ? 'Mobile' : 'Desktop'}
        </button>
      </div>

      {/* Preview Area */}
      <div className="relative flex justify-center items-center min-h-[400px]">
        <AnimatePresence mode="wait">
          {view === 'desktop' ? (
            <motion.div
              key="desktop"
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl border border-gray-200 shadow-md rounded-2xl overflow-hidden relative"
            >
              <div className="absolute top-4 left-4 text-xs text-gray-500 bg-white/80 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 shadow z-10">
                <MonitorSmartphone className="w-4 h-4" />
                Desktop View
              </div>
              <img
                src="/screens/macbook.png"
                alt="MacBook App UI"
                className="w-full h-auto relative z-0"
              />
            </motion.div>
          ) : (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.9 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
              className="w-[260px] border border-gray-200 shadow rounded-[2rem] overflow-hidden relative"
            >
              <div className="absolute top-3 left-3 text-xs text-gray-500 bg-white/80 backdrop-blur px-3 py-1 rounded-full flex items-center gap-2 shadow z-10">
                <Smartphone className="w-4 h-4" />
                Mobile View
              </div>
              <img
                src="/screens/iphone.png"
                alt="Mobile App UI"
                className="w-full h-auto relative z-0"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionSection>
  );
};

export default ProductPreview;