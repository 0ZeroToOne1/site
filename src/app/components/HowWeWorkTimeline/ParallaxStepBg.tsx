'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Ruler, Code2, Rocket } from 'lucide-react';

const iconMap = {
  lightbulb: Lightbulb,
  ruler: Ruler,
  code: Code2,
  rocket: Rocket,
};

type IconKey = keyof typeof iconMap;

const ParallaxStepBg = ({ icon, direction }: { icon: IconKey; direction: 'left' | 'right' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const x = useTransform(scrollYProgress, [0, 1], direction === 'right' ? ['0%', '15%'] : ['0%', '-15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.15, 0.08]); // Increased opacity

  const Icon = iconMap[icon];

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className={`absolute top-0 z-20 w-28 h-28 ${
        direction === 'right' ? 'left-[-20px]' : 'right-[-20px]'
      } pointer-events-none`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <foreignObject width="100%" height="100%">
          <div className="w-full h-full flex items-center justify-center">
            <Icon className="w-20 h-20 stroke-[0.6] text-[var(--accent)]" />
          </div>
        </foreignObject>
      </svg>
    </motion.div>
  );
};

export default ParallaxStepBg;
