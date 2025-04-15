'use client';

import MotionCard from './builder/MotionCard';
import { useEffect, useState, useRef } from 'react';
import MotionSection from './builder/MotionSection';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const sections = [
  { id: '#hero', label: 'Top' },
  { id: '#who-its-for', label: "Who It's For" },
  { id: '#how-we-work', label: 'How We Work' },
  { id: '#pricing', label: 'Example Pricing' },
  { id: '#what-you-get', label: 'What You Get' },
  { id: '#launch-plan', label: 'The Launch Plan' },
  { id: '#example-screens', label: 'Examples' },
  { id: '#beleive', label: 'What We Believe' },
  { id: '#why-we-exist', label: 'Why We Exist' },
  { id: '#testimonials', label: 'Testimonials' },
  { id: '#case-studies', label: 'Case Studies' },
  { id: '#founder', label: 'About Frank' },
  { id: '#contact', label: 'Contact' },
];

export default function FloatingSectionNav() {
  const [activeId, setActiveId] = useState<string>('');
  const [collapsed, setCollapsed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  let lastScrollY = 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      {
        rootMargin: '-40% 0% -40% 0%',
        threshold: 0.1,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      if (scrollingDown) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCollapsed(false);
      }, 1200);

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      animate={{ opacity: collapsed ? 0 : 1, y: collapsed ? -10 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed z-40 hidden flex-col gap-3 top-1/2 -translate-y-1/2 right-4 lg:flex"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={id}
          onClick={(e) => handleClick(e, id)}
          className="relative group"
          aria-label={label}
        >
          <span
            className={clsx(
              'block h-3 w-3 rounded-full transition-all duration-300',
              activeId === id
                ? 'bg-[var(--accent)] scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            )}
          />
          <motion.span
            initial={{ opacity: 0, x: 5 }}
            whileHover={{ opacity: 1, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute text-xs right-7 top-1/2 -translate-y-1/2 whitespace-nowrap text-[#3b82f6] opacity-0 group-hover:opacity-100"
          >
            {label}
          </motion.span>
        </a>
      ))}
    </motion.div>
  );
}
