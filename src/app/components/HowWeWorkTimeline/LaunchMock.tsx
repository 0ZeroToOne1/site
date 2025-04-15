'use client';

import { motion } from 'framer-motion';
import WithShimmer from './WithShimmer';

interface Props {
  loading?: boolean;
}

const LaunchMock = ({ loading = false }: Props) => {
  return (
    <motion.div
        className="rounded-md border border-gray-200 bg-white p-4 shadow-sm w-full md:w-3/4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        <div className="mb-4 text-sm font-medium text-gray-700">Launch Metrics</div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
          <div>
            <div className="text-xs text-gray-500">Users</div>
            <div className="font-bold text-xl">1,284</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">MVP Conversions</div>
            <div className="font-bold text-xl">47%</div>
          </div>
        </div>
        <div className="mt-4 rounded bg-[var(--accent)] px-4 py-2 text-center text-sm text-white shadow-sm">
          🚀 Live and scaling
        </div>
      </WithShimmer>
    </motion.div>
  );
};

export default LaunchMock;
