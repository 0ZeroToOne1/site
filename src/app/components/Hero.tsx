'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import BadgeStack from './BadgeStack';
import Link from 'next/link';
import ContactUsModal from './ContactUsModal';
import { ArrowDownIcon } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const ySubtext = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0]);

  return (
    <motion.section
      id="hero"
      ref={ref}
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    
        <motion.div
          className="absolute w-[120%] h-[120%] bg-gradient-to-r from-white via-blue-50 to-white opacity-20 blur-3xl"
          animate={{ x: ['-10%', '10%', '-10%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Animated Watermark */}
      <motion.div
        className="pointer-events-none absolute top-[19%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 select-none"
        style={{ y: watermarkY, opacity: watermarkOpacity }}
      >
        <span className="text-[clamp(4rem,20vw,12rem)] font-black text-gray-300 tracking-tighter leading-none block whitespace-nowrap">
          0<span className="text-[#3b82f6]">→</span>1
        </span>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-20">
        <motion.h1
          style={{ y: yHeadline, opacity }}
          className="mb-4 text-4xl sm:text-6xl font-bold leading-tight tracking-tight text-[#030b1a] max-w-[90vw] sm:max-w-3xl mx-auto"
        >
          Turn Bold Ideas Into Launch-Ready Software
        </motion.h1>

        <motion.p
          style={{ y: ySubtext, opacity }}
          className="mx-auto mb-10 max-w-[90vw] sm:max-w-2xl text-lg text-gray-600 sm:text-xl"
        >
          We help visionaries turn raw ideas into real, working products — designed to impress,
          built to scale, and ready to launch.
        </motion.p>

        <BadgeStack />
        <ContactUsModal />

        <motion.div
  className="mt-12 cursor-pointer animate-bounce text-center mx-auto flex justify-center items-center"
  onClick={() => {
    document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' });
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  <ArrowDownIcon className="w-6 h-6 text-gray-700 hover:scale-110" />
</motion.div>
      </div>
    </motion.section>
  );
}
