'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
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

const stack = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Stripe', icon: SiStripe },
    { name: 'Grover PDF', icon: FaRegFilePdf },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Docker', icon: SiDocker },
    { name: 'AWS', icon: SiAmazonwebservices },
    { name: 'Ruby On Rails', icon: SiRubyonrails },
    { name: 'GitHub', icon: SiGithub },
];

const TechStack: FC = () => {
    return (
        <motion.section
            className="bg-white px-6 py-16 pt-2 text-center w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h3 className="mb-6 text-sm uppercase font-semibold text-gray-400 tracking-widest">
                Our Tech Stack
            </h3>

            <div className="flex flex-wrap justify-center gap-4 w-1/2 mx-auto">
                {stack.map(({ name, icon: Icon }, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 shadow-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    >
                        <Icon className="h-4 w-4 text-[#030b1a]" />
                        {name}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default TechStack;
