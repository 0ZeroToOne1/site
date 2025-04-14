'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
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
      className="group flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#030b1a] px-3 py-1.5 text-sm text-gray-800 dark:text-gray-200 shadow hover:shadow-md transition-all duration-200"
      aria-label="Toggle Dark Mode"
    >
      <span className="font-medium">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
      <span className="relative flex items-center justify-center w-5 h-5">
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