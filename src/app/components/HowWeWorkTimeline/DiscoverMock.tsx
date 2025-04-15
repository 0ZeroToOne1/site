'use client';

import { motion } from 'framer-motion';
import WithShimmer from './WithShimmer';

interface Props {
  loading?: boolean;
}

const DiscoverMock = ({ loading = false }: Props) => {
  return (
    <motion.div
      className="rounded-md border border-gray-200 bg-white p-4 shadow-sm w-full md:w-3/4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        <div className="mb-4 text-sm font-medium text-gray-700">Discovery Notes</div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>✅ Founder interview complete</li>
          <li>✅ Competitor analysis uploaded</li>
          <li>🔍 Persona research: in progress</li>
        </ul>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Add note..."
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm"
          />
          <button className="rounded bg-[var(--accent)] px-4 py-2 text-sm text-white hover:bg-[var(--accent-hover)]">
            Add
          </button>
        </div>
      </WithShimmer>
    </motion.div>
  );
};

export default DiscoverMock;
