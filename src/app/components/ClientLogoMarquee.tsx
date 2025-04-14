'use client';

import RevealText from './builder/RevealText';
import { FC, useRef } from 'react';
import MotionSection from './builder/MotionSection';
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
    <MotionSection
      ref={ref}
      className="relative px-6 py-16 pb-2 bg-white md:pb-8 overflow-hidden"
    >
      <div className="mb-8 text-center md:text-left">
        <h2 className="flex justify-center text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Trusted by forward-thinkers
        </h2>
      </div>

      {/* Side Fades */}
      <div className="absolute z-10 h-full w-1/6 bg-gradient-to-r from-white to-transparent pointer-events-none left-0 top-0" />
      <div className="absolute z-10 h-full w-1/6 bg-gradient-to-l from-white to-transparent pointer-events-none right-0 top-0" />

      {/* Animated Marquee */}
      <div className="w-2/3 mx-auto sm:w-1/3 overflow-hidden">
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
              className="flex flex-col items-center justify-center hover:opacity-100 hover:grayscale-0 transition md:flex-row min-w-[120px] opacity-70 grayscale"
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
    </MotionSection>
  );
};

export default ClientLogoMarquee;
