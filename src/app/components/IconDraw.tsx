
'use client';

import { motion } from 'framer-motion';
import { isValidElement } from 'react';

const IconDraw = ({ icon: Icon, delay = 0 }: { icon: any; delay: number }) => {
  const iconElement = <Icon size={24} stroke="#030b1a" />;
  const children = isValidElement(iconElement) ? iconElement.props.children : [];

  return (
    <motion.div
      className="mb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay },
        },
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#030b1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        {Array.isArray(children)
          ? children.map((child: any, i: number) => {
              const El = motion[child.type] || child.type;
              return (
                <El
                  key={i}
                  {...child.props}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.4,
                    ease: 'easeInOut',
                    delay,
                  }}
                />
              );
            })
          : null}
      </svg>
    </motion.div>
  );
};

export default IconDraw;
