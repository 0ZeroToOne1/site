// utils/animationConfig.ts

export const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  };
  
  export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };
  
  export const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };
  
  export const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  
  export const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };
  