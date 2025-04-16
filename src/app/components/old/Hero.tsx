'use client';

import { useRef } from 'react';
import MotionSection from '../motion/MotionSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactUsModal from './ContactUsModal';
import { ArrowDownIcon } from 'lucide-react';

import {
  BadgeStack,
} from '.';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const ySubtext = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0]);

  return (
    <MotionSection
      id="hero"
      ref={ref}
      className="relative flex flex-col px-4 items-center justify-center text-center bg-white min-h-[90vh] sm:min-h-screen overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Layers */}
      <motion.div className="absolute z-0 inset-0 pointer-events-none overflow-hidden">
    
        <motion.div
          className="absolute bg-gradient-to-r from-white to-white w-[120%] h-[120%] via-blue-50 opacity-20 blur-3xl"
          animate={{ x: ['-10%', '10%', '-10%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Animated Watermark */}
      <motion.div
        className="absolute z-10 pointer-events-none top-[19%] left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
        style={{ y: watermarkY, opacity: watermarkOpacity }}
      >
        <span className="block font-black text-gray-300 tracking-tighter leading-none text-[clamp(4rem,20vw,16rem)] whitespace-nowrap">
          0<span className="text-[#3b82f6]">→</span>1
        </span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20">
        <motion.h1
          style={{ y: yHeadline, opacity }}
          className="mb-4 mx-auto text-3xl font-bold leading-tight tracking-tight sm:text-6xl text-[#030b1a] max-w-[90vw] sm:max-w-7xl sm:mt-12"
        >
          Turn Bold Ideas Into Launch-Ready Software
        </motion.h1>

        <motion.p
          style={{ y: ySubtext, opacity }}
          className="mx-auto mb-10 text-lg text-gray-600 max-w-[90vw] sm:max-w-2xl sm:text-xl"
        >
          We help visionaries turn raw ideas into real, working products — designed to impress,
          built to scale, and ready to launch.
        </motion.p>

        <BadgeStack />
        <ContactUsModal />

        <motion.div
  className="flex mt-12 mx-auto justify-center items-center text-center animate-bounce cursor-pointer"
  onClick={() => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  <ArrowDownIcon className="w-6 h-6 text-gray-700 hover:scale-110" />
</motion.div>
      </div>
    </MotionSection>
  );
}
