'use client';

import { FC, useState, useRef } from 'react';
import * as Popover from '@radix-ui/react-popover';
import MotionSection from '../motion/MotionSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';
import {
  SiNextdotjs, SiTailwindcss, SiPostgresql, SiStripe,
  SiDocker, SiAmazonwebservices, SiRubyonrails, SiGithub,
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3
} from 'react-icons/si';
import { FaRegFilePdf } from 'react-icons/fa';

const sections = {
  Frontend: [
    { name: 'Next.js', icon: SiNextdotjs, description: 'A React framework for building performant web apps.' },
    { name: 'React', icon: SiReact, description: 'A library for building user interfaces using components.' },
    { name: 'TypeScript', icon: SiTypescript, description: 'Typed JavaScript at scale.' },
    { name: 'JavaScript', icon: SiJavascript, description: 'The language of the web.' },
    { name: 'HTML5', icon: SiHtml5, description: 'Semantic markup for modern websites.' },
    { name: 'CSS3', icon: SiCss3, description: 'Styling for layouts, colors, and effects.' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'A utility-first CSS framework.' },
  ],
  Backend: [
    { name: 'Ruby On Rails', icon: SiRubyonrails, description: 'A full-stack web framework for Ruby.' },
    { name: 'PostgreSQL', icon: SiPostgresql, description: 'A powerful open source relational database.' },
    { name: 'Grover PDF', icon: FaRegFilePdf, description: 'PDF generation from HTML in Ruby via Puppeteer.' },
    { name: 'Stripe', icon: SiStripe, description: 'Payment processing for the internet.' },
  ],
  DevOps: [
    { name: 'Docker', icon: SiDocker, description: 'Containerize apps for consistency across environments.' },
    { name: 'AWS', icon: SiAmazonwebservices, description: 'Cloud services and infrastructure from Amazon.' },
    { name: 'GitHub', icon: SiGithub, description: 'Source control and collaborative development platform.' },
  ],
};

const TechStack: FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const getIconColor = (section: string) => {
    switch (section) {
      case 'Frontend': return 'text-blue-600';
      case 'Backend': return 'text-emerald-600';
      case 'DevOps': return 'text-yellow-500';
      default: return 'text-gray-700';
    }
  };

  return (
    <MotionSection
        ref={sectionRef} // 👈 Add this
      className="relative w-full px-6 py-16 pt-2 mx-auto text-center bg-white md:text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
        >            
      
      <h4 className="text-lg font-semibold mb-2 text-[var(--accent)] text-center">Built With Trusted Tools</h4>
      <p className="text-gray-400 mt-2 text-center mb-8">
        We use a fully open source stack trusted by thousands of startups and scale-ups.
      </p>

      <div className="flex mb-6 gap-3 justify-center">
        {(['grid', 'list'] as const).map((mode) => (
          <button
            key={mode}
            onClick={() => setView(mode)}
            className={clsx(
              'px-4 py-1 text-sm rounded-full border transition-all',
              view === mode
                ? 'bg-[var(--accent)] text-white border-transparent shadow'
                : 'text-gray-600 border-gray-300 hover:border-gray-400'
            )}
          >
            {mode === 'grid' ? 'Grid View' : 'List View'}
          </button>
        ))}
      </div>

      {Object.entries(sections).map(([section, tools], i, arr) => (
        <div key={section}>
          {i > 0 && (
            <motion.hr
              className="w-1/3 border-t border-gray-200 mx-auto my-10 opacity-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
          )}
          <div className="mb-10">
            <h4 className="flex mb-2 mx-auto justify-center text-xs font-medium text-gray-500">
              {section}
            </h4>
            <motion.div
              className={clsx(
                view === 'grid'
                  ? 'grid grid-cols-2 md:flex flex-wrap justify-center gap-4 w-full md:w-3/4 mx-auto'
                  : 'flex flex-col gap-3 items-center'
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: i * 0.2,
                  },
                },
              }}
            >
              {tools.map(({ name, icon: Icon, description }, j) => (
                <motion.div
                  key={j}
                  layout
                  className={clsx(
                    'relative group px-4 py-2 text-sm shadow-sm transition rounded-full',
                    view === 'grid'
                      ? 'flex flex-col md:flex-row items-center gap-2 border border-gray-200 bg-gray-50 text-gray-600'
                      : 'flex items-center gap-3 border border-gray-100 bg-white w-full max-w-xs text-[#030b1a]'
                  )}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button className="flex items-center gap-2 focus:outline-none">
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                            style={{ backgroundColor: 'var(--accent)' }}
                          />
                          <Icon className={clsx('relative z-10 h-5 w-5 group-hover:scale-110 transition-transform', getIconColor(section))} />
                        </div>
                        {name}
                      </button>
                    </Popover.Trigger>
                    <Popover.Content side={view === 'grid' ? 'bottom' : 'left'} align="center" sideOffset={8}
                      className={clsx('rounded-md bg-white border px-4 py-2 shadow-lg w-64 z-50', 
                        view === 'grid' ? 'mt-3' : 'mr-3'
                      )}
                    >
                      <p className="text-sm font-semibold text-[var(--accent)] mb-1">{name}</p>
                      <p className="text-xs text-gray-600">{description}</p>
                    </Popover.Content>
                  </Popover.Root>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
        {/* Optional Scroll Progress Bar */}
    <motion.div
style={{ width }}
className="absolute bottom-0 right-0 h-1 bg-blue-500 rounded-full "
/>
    </MotionSection>
  );
};

export default TechStack;