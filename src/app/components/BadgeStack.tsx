'use client';

import { FC } from 'react';
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
      className="mb-6 flex flex-col md:flex-row flex-wrap justify-center gap-3 max-w-2/3 mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      {badges.map(({ icon: Icon, text }, index) => (
        <motion.div
          key={index}
          className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-white to-gray-100 px-2 py-1 sm:px-4 sm:py-1.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out hover:scale-105 hover:shadow-md max-w-[80vw] sm:max-w-none"
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
