'use client';

import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
// Optional: import { motion } from 'framer-motion';

// import { motion } from 'framer-motion';
import HeaderToggle from './HeaderToggle';

export default function SiteHeader() {
  return (
    <header  className="sticky z-50 flex flex-col w-full px-6 py-5 items-center justify-center bg-white top-0 md:flex-row">
      <motion.div className="flex flex-col pl-2 gap-3 items-center md:flex-row">
        <Image
          src="/final-250.png"
          alt="ZeroToOne logo"
          width={130}
          height={23}
          className="w-auto"
        />
      </motion.div>

      <div className="flex flex-col gap-3 items-center md:flex-row">
        {/* If you have a HeaderToggle or user menu, put it here */}
        {/* <HeaderToggle /> */}
      </div>


    </header>
  );
}
