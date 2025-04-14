'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  loading: boolean;
  children: ReactNode;
  duration?: number; // in ms
  shimmer?: ReactNode;
}

const WithShimmer = ({ loading, children, duration = 1000, shimmer }: Props) => {
  const [showContent, setShowContent] = useState(!loading);

  useEffect(() => {
    if (loading) {
      setShowContent(false);
      const timer = setTimeout(() => setShowContent(true), duration);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, [loading, duration]);

  return (
    <>
      {!showContent ? (
        shimmer || (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 w-1/2 rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-4/5 rounded bg-gray-200" />
          </div>
        )
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default WithShimmer;
