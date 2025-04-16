'use client';

import MotionCard from './builder/MotionCard';
import { FC } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import { Rocket, Brain, ShieldCheck } from 'lucide-react';

const badges = [
  { icon: Rocket, text: 'Launch-ready in weeks' },
  { icon: Brain, text: 'Built for founders' },
  { icon: ShieldCheck, text: 'Secure & scalable' },
];

const BadgeStack: FC = () => {
  return (
    <motion.div
      className="flex flex-col flex-wrap max-w-2/3 mb-6 mx-auto gap-3 justify-center md:flex-row"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      {badges.map(({ icon: Icon, text }, index) => (
        <motion.div
          key={index}
          className="flex-col px-2 py-1 gap-1 items-center text-sm text-[#030b1a] bg-gradient-to-r from-white to-gray-100 shadow rounded-full hover:scale-105 hover:shadow-md transition-all duration-300 ease-out inline-flex sm:flex-row sm:gap-2 sm:px-4 sm:py-1.5 max-w-[80vw] sm:max-w-none"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -2 }}
        >
          <Icon className="h-4 w-4 text-[#030b1a]" />
          <span className="text-center sm:text-left">{text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BadgeStack;
