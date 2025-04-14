'use client';

import { motion } from 'framer-motion';
import WithShimmer from './WithShimmer';

interface Props {
  loading?: boolean;
}

const BuildMock = ({ loading = false }: Props) => {
  return (
    <motion.div
      className="rounded-md border border-gray-200 bg-black p-4 text-sm font-mono text-green-400 shadow-sm w-full md:w-3/4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <WithShimmer loading={loading}>
        <div className="mb-2 text-xs text-gray-400">Terminal</div>
        <pre>
          <code>
            $ rails generate scaffold Project name:string status:boolean{'\n'}
            ✅ Migration created successfully{'\n'}
            ✅ Controller + views ready{'\n'}
            ⚡ Launch server with `bin/dev`
          </code>
        </pre>
      </WithShimmer>
    </motion.div>
  );
};

export default BuildMock;
