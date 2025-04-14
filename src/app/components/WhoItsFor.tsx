'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, Settings2, Compass } from 'lucide-react';

const items = [
  {
    title: 'Visionaries',
    icon: Sparkles,
    text: 'You’ve got the big idea — we help you make it real.',
  },
  {
    title: 'Founders',
    icon: Briefcase,
    text: 'From pitch decks to product-market fit — we build for traction.',
  },
  {
    title: 'Operators',
    icon: Settings2,
    text: 'Need internal tools or automation? We design for clarity and scale.',
  },
  {
    title: 'Product Leads',
    icon: Compass,
    text: 'You’ve mapped the strategy — we deliver the build.',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const WhoItsFor: FC = () => {
  return (
    <motion.section
    id = "who-its-for"
      className="bg-white px-6 py-24 text-right w-full mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      
      <motion.h2
        className="mb-4 text-3xl font-semibold text-[#030b1a] w-2/3 jusitfy-center mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Who It’s For
      </motion.h2>

      <motion.p
        className="mb-12 text-right text-gray-600 w-2/3 jusitfy-center mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Whether you’re shaping a vision or scaling your ops — we’re here to help you build the future.
      </motion.p>

      <motion.div
        className="mx-auto flex flex-wrap justify-center gap-6 max-w-8xl"
        variants={container}
      >
        {items.map(({ title, text, icon: Icon }, index) => (
          <motion.div
            key={index}
            variants={child}
            className="w-full sm:w-[20rem] mx-4 rounded-lg bg-white p-6 shadow ring-1 ring-gray-200 flex flex-col items-center text-center"
          >
            <div className="mb-4 text-[#030b1a]">
              <Icon className="h-8 w-8" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-[#030b1a]">{title}</h3>
            <p className="text-sm text-gray-600">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhoItsFor;
