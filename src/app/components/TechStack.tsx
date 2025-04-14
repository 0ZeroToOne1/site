
'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiStripe,
  SiDocker,
  SiAmazonwebservices,
  SiRubyonrails,
  SiGithub,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { FaRegFilePdf } from 'react-icons/fa';

const sections = {
  Frontend: [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  Backend: [
    { name: 'Ruby On Rails', icon: SiRubyonrails },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Grover PDF', icon: FaRegFilePdf },
    { name: 'Stripe', icon: SiStripe },
  ],
  DevOps: [
    { name: 'Docker', icon: SiDocker },
    { name: 'AWS', icon: SiAmazonwebservices },
    { name: 'GitHub', icon: SiGithub },
  ],
};

const TechStack: FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const getIconColor = (section: string) => {
    switch (section) {
      case 'Frontend':
        return 'text-blue-600';
      case 'Backend':
        return 'text-emerald-600';
      case 'DevOps':
        return 'text-yellow-500';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <motion.section
      className="bg-white px-6 py-16 pt-2 text-center md:text-left w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="mb-6 text-sm uppercase font-semibold text-gray-400 tracking-widest text-center">
        Our Tech Stack
      </h3>

      <div className="mb-6 flex justify-center gap-3">
        <button
          onClick={() => setView('grid')}
          className={clsx(
            'px-3 py-1 text-sm rounded-full border',
            view === 'grid'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'text-gray-600 border-gray-300 hover:border-gray-400'
          )}
        >
          Grid View
        </button>
        <button
          onClick={() => setView('list')}
          className={clsx(
            'px-3 py-1 text-sm rounded-full border',
            view === 'list'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'text-gray-600 border-gray-300 hover:border-gray-400'
          )}
        >
          List View
        </button>
      </div>

      {Object.entries(sections).map(([section, tools], i) => (
        <div key={section} className="mb-10">
          <h4 className="text-xs font-medium text-gray-500 mb-2 flex justify-center mx-auto">
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
            {tools.map(({ name, icon: Icon }, j) => (
              <motion.div
                key={j}
                title={name}
                className={clsx(
                  'rounded-full px-4 py-2 text-sm shadow-sm transition',
                  view === 'grid'
                    ? 'flex flex-col md:flex-row items-center gap-2 border border-gray-200 bg-gray-50 text-gray-600'
                    : 'flex items-center gap-3 border border-gray-100 bg-white w-full max-w-xs text-gray-800'
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Icon className={clsx('h-4 w-4', getIconColor(section))} />
                {name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </motion.section>
  );
};

export default TechStack;
