'use client';

import { motion } from 'framer-motion';
import WithShimmer from './WithShimmer';
import { ArrowUpRight, ArrowDownRight, Rocket, PartyPopper } from 'lucide-react';

interface Props {
  loading?: boolean;
}

const LaunchMock = ({ loading = false }: Props) => {
  const users = 1284;
  const conversions = 47;
  const userGrowth = 5.2; // positive %
  const convGrowth = -1.3; // negative %

  return (
    <motion.div
      className="rounded-lg border border-gray-200 bg-white p-5 shadow-md w-full md:w-1/2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <WithShimmer loading={loading}>
        <div className="mb-5 text-sm font-semibold text-gray-800">📈 Launch Metrics</div>

        <div className="grid grid-cols-2 gap-6 text-sm text-[#030b1a]">
          <div>
            <div className="text-xs text-gray-500 mb-1">Users</div>
            <div className="flex items-center gap-2">
              <div className="font-bold text-2xl tracking-tight">{users.toLocaleString()}</div>
              <span className={`text-xs flex items-center gap-0.5 ${userGrowth >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {userGrowth >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {Math.abs(userGrowth)}%
              </span>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-1">MVP Conversions</div>
            <div className="flex items-center gap-2">
              <div className="font-bold text-2xl tracking-tight">{conversions}%</div>
              <span className={`text-xs flex items-center gap-0.5 ${convGrowth >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {convGrowth >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {Math.abs(convGrowth)}%
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="mb-1 flex justify-between text-xs text-gray-500">
            <span>Launch Progress</span>
            <span>80%</span>
          </div>
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[var(--accent)]"
              initial={{ width: '0%' }}
              animate={{ width: '80%' }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>

        {/* Milestone Badge */}
        <div className="mt-5 flex items-center justify-between bg-blue-50 text-blue-800 border border-blue-200 px-4 py-2 rounded-md text-sm shadow-sm">
          <div className="flex items-center gap-2">
            <PartyPopper className="h-4 w-4" />
            <span>Next Milestone: V2 Beta (May 20)</span>
          </div>
          <span className="text-xs bg-blue-100 rounded-full px-2 py-0.5 font-medium">Team Goal</span>
        </div>

        {/* Status */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 text-sm text-white shadow"
        >
          <Rocket className="h-4 w-4" />
          <span>Live and scaling</span>
        </motion.div>
      </WithShimmer>
    </motion.div>
  );
};

export default LaunchMock;