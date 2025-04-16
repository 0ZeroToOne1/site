'use client'

import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-[#030b1a] tracking-wider">{title}</h2>
      {subtitle && <p className="text-[var(--accent)] mt-2 font-semibold tracking-wide">{subtitle}</p>}
    </motion.div>
  )
}