'use client';

import MotionCard from '../motion/MotionCard';
import MotionSection from '../motion/MotionSection';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeaderToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex flex-col px-3 py-1.5 gap-2 items-center text-sm text-[#030b1a] bg-white border border-gray-200 shadow rounded-full hover:shadow-md transition-all duration-200 group md:flex-row dark:border-gray-700 dark:bg-[#030b1a] dark:text-gray-200"
      aria-label="Toggle Dark Mode"
    >
      <span className="font-medium">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
      <span className="relative flex flex-col w-5 h-5 items-center justify-center md:flex-row">
        <Moon
          size={16}
          className={`absolute transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`}
        />
        <Sun
          size={16}
          className={`absolute transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}
        />
      </span>
    </button>
  );
}