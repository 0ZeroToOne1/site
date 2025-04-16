'use client';

import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface TestimonialCardProps {
  logo: string;
  quote: string;
  name: string;
  role: string;
  expanded: boolean;
  onClick: () => void;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ logo, quote, name, role, expanded, onClick }) => {
  const isDimmed = expanded !== false && !expanded;
  return (
    <motion.div
      layout
      onClick={onClick}
      transition={{ layout: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] } }}
      className={\`cursor-pointer bg-white shadow-lg ring-1 ring-gray-200 rounded-lg overflow-hidden p-6 transition-all z-20 \${expanded ? 'z-10 col-span-3 scale-[1.02]' : 'hover:shadow-md'} \${isDimmed ? 'opacity-50 scale-95' : ''}\`}
    >
      <motion.div layout="position" className="relative h-8 w-28 mb-4">
        <Image src={logo} alt={name} fill className="object-contain" />
      </motion.div>
      <motion.p layout="position" className="mb-4 text-gray-700 text-sm italic">“{quote}”</motion.p>
      <motion.div layout="position" className="text-sm text-gray-500 font-medium">
        {name} <span className="text-gray-400">•</span> {role}
      </motion.div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="mt-4 text-blue-600 text-sm font-semibold underline"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
          >
            Read More →
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TestimonialCard;
