// components/motion/MotionSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef } from 'react';

type MotionSectionProps = ComponentPropsWithoutRef<typeof motion.section>;

const MotionSection = ({ children, ...rest }: MotionSectionProps) => {
  return (
    <motion.section
      {...rest}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
