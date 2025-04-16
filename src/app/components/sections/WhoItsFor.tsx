'use client';

import { FC } from 'react';
import MotionSection from '../motion/MotionSection';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, Settings2, Compass } from 'lucide-react';
import RevealText from '../motion/RevealText';

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
    <MotionSection
    id = "who-its-for"
       className="w-full px-6 py-24 mx-auto text-center md:text-right bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      
      <motion.h2
        className="w-2/3 mb-4 mx-auto text-3xl font-semibold text-[#030b1a] justify-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Who It’s For
      </motion.h2>

      <motion.p
        className="w-2/3 mb-12 mx-auto text-center md:text-right text-gray-600 jusitfy-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Whether you’re shaping a vision or scaling your ops — we’re here to help you build the future.
      </motion.p>

      <motion.div
        className="flex flex-wrap max-w-8xl mx-auto gap-6 justify-center"
        variants={container}
      >
        {items.map(({ title, text, icon: Icon }, index) => (
          <motion.div
            key={index}
            variants={child}
            className="flex flex-col w-full mx-4 p-6 items-center text-center bg-white shadow ring-1 ring-gray-200 rounded-lg sm:w-[20rem]"
          >
            <motion.div className="mb-4 text-[#030b1a]">
              <Icon className="h-8 w-8" />
            </motion.div>
            <h3 className="mb-2 text-lg font-semibold text-[#030b1a]">{title}</h3>
            <RevealText as='p' className="text-sm text-gray-600">{text}</RevealText>
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  );
};

export default WhoItsFor;
