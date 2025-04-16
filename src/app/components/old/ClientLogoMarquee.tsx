'use client';

import RevealText from '../motion/RevealText';
import { FC, useRef } from 'react';
import MotionSection from '../motion/MotionSection';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { src: '/client_logos/survey_app.png', alt: 'SurveyApp' },
    { src: '/client_logos/g162.png', alt: 'Rapid Fire Reports' },
    { src: '/client_logos/arcflow.png', alt: 'Arcflow' },
    { src: '/client_logos/mri.svg', alt: 'MRI' },
    { src: '/client_logos/egent-1.png', alt: 'eGent' },
    { src: '/client_logos/davinci-logo.png', alt: 'davinci' },
    { src: '/client_logos/health-hq.png', alt: 'Hea;lth HQ' },
    { src: '/client_logos/health-bridge.png', alt: 'Health Bridge' },
  ];
  
  const ClientLogoMarquee: FC = () => {
    const marqueeRef = useRef(null);
    const isInView = useInView(marqueeRef, { once: true, amount: 0.2 });
  
    return (
      <MotionSection className="relative px-6 py-16 pb-2 bg-white md:pb-8 overflow-hidden mt-8 rounded-xl shadow-lg w-2/3 mx-auto z-20">
        <div className="mb-8 text-center md:text-left">
        <h4 className="text-lg font-semibold mb-2 text-[var(--accent)] text-center">Trusted by forward-thinkers</h4>
        <p className="text-gray-400 mt-2 text-center mb-8">
          Across the globe, our clients are leveraging our solutions to drive innovation and efficiency.
        </p>
        </div>
  
        {/* Side Fades */}
        <div className="absolute z-10 h-full w-1/6 bg-gradient-to-r from-white to-transparent pointer-events-none left-0 top-0" />
        <div className="absolute z-10 h-full w-1/6 bg-gradient-to-l from-white to-transparent pointer-events-none right-0 top-0" />
  
        {/* Animated Marquee */}
        <div className="w-2/3 mx-auto sm:w-2/3 overflow-hidden z-50" ref={marqueeRef}>
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
                className="flex flex-col items-center justify-center hover:opacity-100 hover:grayscale-0 transition md:flex-row min-w-[120px] opacity-70 "
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
