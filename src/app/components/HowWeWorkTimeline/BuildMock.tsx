'use client';

import { motion } from 'framer-motion';
import WithShimmer from './WithShimmer';
import IDEMock from './IDEMock';

interface Props {
  loading?: boolean;
}

const BuildMock = ({ loading = false }: Props) => {
  return (
    <motion.div
      className="rounded-md border border-gray-200 bg-black p-4 text-sm font-mono text-green-400 shadow-sm w-3/4 text-left"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        <IDEMock loading={loading} />
      </WithShimmer>
    </motion.div>
  );
};

export default BuildMock;
