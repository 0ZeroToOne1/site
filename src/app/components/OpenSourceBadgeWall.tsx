'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  { name: 'Rails', logo: '/badges/rails.svg' },
  { name: 'Tailwind CSS', logo: '/badges/tailwind.svg' },
  { name: 'PostgreSQL', logo: '/badges/postgres.svg' },
  { name: 'Turbo', logo: '/badges/turbo.svg' },
  { name: 'Stimulus', logo: '/badges/stimulus.svg' },
  { name: 'Docker', logo: '/badges/docker.svg' },
  { name: 'GitHub Actions', logo: '/badges/github-actions.svg' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const OpenSourceBadgeWall: FC = () => {
  return (
    <section className="bg-white py-24 px-6 text-center" id="open-source">
      <motion.div
        className="mx-auto max-w-3xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-3xl font-semibold mb-4">Built With Trusted Tools</h2>
        <p className="text-gray-600 mb-10">
          We use a fully open source stack trusted by thousands of startups and scale-ups.
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              className="bg-gray-100 hover:shadow-lg transition rounded-xl px-5 py-3 flex items-center space-x-3"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={tool.logo} alt={tool.name} width={28} height={28} />
              <span className="text-gray-800 font-medium">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OpenSourceBadgeWall;
