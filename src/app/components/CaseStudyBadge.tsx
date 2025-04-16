
'use client';

import { FC } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BadgeProps {
  label: string;
  icon?: LucideIcon;
  color?: string;
  className?: string;
  tooltip?: string;
  delay?: number;
}

const CaseStudyBadge: FC<BadgeProps> = ({
  label,
  icon: Icon,
  color = 'bg-gray-100 text-[#030b1a]',
  className = '',
  tooltip,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-1 mb-2 rounded-full ${color} ${className}`}
      title={tooltip || label}
    >
      {Icon && <Icon className="h-3 w-3" />}
      {label}
    </motion.div>
  );
};

export default CaseStudyBadge;
