'use client'

import { motion } from 'framer-motion'

export default function SectionSubHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="mb-2 text-3xl font-semibold tracking-tight text-[#030b1a] sm:text-3xl z-20">{title}</h3>
      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
    </motion.div>
  )
}