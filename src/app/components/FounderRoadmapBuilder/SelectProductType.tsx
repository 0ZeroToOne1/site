'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Store, Wrench, Sparkles } from 'lucide-react'

const productTypes = [
  { label: 'Dashboard SaaS', icon: Monitor },
  { label: 'Mobile App', icon: Smartphone },
  { label: 'Marketplace', icon: Store },
  { label: 'Internal Tool', icon: Wrench },
  { label: 'Something Else', icon: Sparkles },
]

export default function SelectProductType({
  onNext,
  onBack,
}: {
  onNext: (type: string) => void
  onBack: () => void
}) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">What are you building?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        {productTypes.map((type, index) => {
          const Icon = type.icon
          return (
            <motion.button
              key={type.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNext(type.label)}
              className="flex items-center justify-start gap-4 px-5 py-4 rounded-xl text-[var(--accent)] bg-white/80 backdrop-blur-md shadow-lg text-left text-lg font-medium w-full transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Icon className="w-6 h-6 text-blue-500" />
              {type.label}
            </motion.button>
          )
        })}
      </div>

      <div className="mt-8">
        <button
          onClick={onBack}
          className="text-sm text-white cursour-pointer border-b-2 cursor-pointer border-transparent hover:border-b-2 hover:border-white/50 transition-all duration-300 ease-out"
        >
          ← Back
        </button>
      </div>
    </div>
  )
}
