'use client';

import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { src: '/client_logos/survey_app.png', alt: 'SurveyApp' },
    { src: '/client_logos/g162.png', alt: 'Rapid Fire Reports' },
    { src: '/client_logos/arcflow.png', alt: 'Arcflow' },
    { src: '/client_logos/mri.svg', alt: 'MRI' },
    { src: '/client_logos/egent-1.png', alt: 'eGent' },
    { src: '/client_logos/davinci-logo.png', alt: 'davinci' },
  ];
  
const ClientLogoMarquee: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-white px-6 py-16 pb-2 md:pb-8 overflow-hidden"
    >
      <div className="text-center md:text-left mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 flex justify-center">
          Trusted by forward-thinkers
        </h2>
      </div>

      {/* Side Fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/6 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/6 bg-gradient-to-l from-white to-transparent" />

      {/* Animated Marquee */}
      <div className="mx-auto w-3/4 overflow-hidden">
        <motion.div
          className={`flex gap-12 whitespace-nowrap transition-opacity duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20,
          }}
        >
          {logos.concat(logos).map((logo, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center justify-center min-w-[120px] opacity-70 transition hover:opacity-100 grayscale hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={32}
                className="h-auto w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogoMarquee;
