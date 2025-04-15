'use client';

import { motion } from 'framer-motion';
import WithShimmer from './WithShimmer';

interface Props {
  loading?: boolean;
}

const DesignMock = ({ loading = false }: Props) => {
  return (
    <motion.div
        className="rounded-md border border-gray-200 bg-white p-4 shadow-sm w-full md:w-3/4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        <div className="mb-3 text-sm font-medium text-gray-700">UI Wireframe Preview</div>
        <div className="grid grid-cols-3 gap-4 text-xs text-gray-500">
          <div className="h-16 rounded bg-white shadow-inner">Sidebar</div>
          <div className="col-span-2 h-16 rounded bg-white shadow-inner">Main Content</div>
          <div className="col-span-3 h-10 rounded bg-gray-100 text-center pt-2">Navbar</div>
        </div>
      </WithShimmer>
    </motion.div>
  );
};

export default DesignMock;
