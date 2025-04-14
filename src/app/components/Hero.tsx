'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Brain, ShieldCheck, Send } from 'lucide-react';
import BadgeStack from './BadgeStack';
import Link from 'next/link';
import ContactUsModal from './ContactUsModal';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax + fade effects
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const ySubtext = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // Watermark motion
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

{/* Animated Badge Stack */}
<BadgeStack />


{/* CTA Button */}


      <ContactUsModal />

        {/* Scroll Cue Arrow */}
        <motion.div
          className="mt-12 text-2xl text-gray-400"
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          ↓
        </motion.div>
      </div>
    </motion.section>

    
  );
}
