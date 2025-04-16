'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Search, Loader2, Plus } from 'lucide-react';
import WithShimmer from './WithShimmer';

interface Props {
  loading?: boolean;
}

const DiscoverMock = ({ loading = false }: Props) => {
  return (
    <motion.div
      className="rounded-md border border-gray-200 bg-white p-4 shadow-sm w-full md:w-2/3 text-left"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        <div className="mb-4 text-sm font-semibold text-gray-800">🧠 Discovery Tracker</div>

        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-4 w-4" />
            Founder interview complete
          </li>
          <li className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-4 w-4" />
            Competitor analysis uploaded
          </li>
          <li className="flex items-center gap-2 text-yellow-600 animate-pulse">
            <Loader2 className="h-4 w-4 animate-spin" />
            Persona research: in progress
          </li>
        </ul>

        {/* Note input */}
        <div className="mt-6 flex items-center gap-2">
          <input
            type="text"
            placeholder="Add discovery note..."
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
          />
          <button
            className="inline-flex items-center gap-1 rounded-md bg-[var(--accent)] px-4 py-2 text-sm text-white hover:bg-[var(--accent-hover)] transition"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </WithShimmer>
    </motion.div>
  );
};

export default DiscoverMock;
