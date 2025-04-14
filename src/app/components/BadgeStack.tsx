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
      className="mb-6 flex flex-wrap justify-center gap-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      {badges.map(({ icon: Icon, text }, index) => (
        <motion.div
          key={index}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-gray-100 px-4 py-1.5 text-sm text-gray-800 shadow transition-all duration-300 ease-out hover:scale-105 hover:shadow-md"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -2 }}
        >
          <Icon size={16} className="text-[#030b1a]" />
          {text}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BadgeStack;
