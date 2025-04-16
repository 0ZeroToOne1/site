'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GripVertical, CheckCircle } from 'lucide-react'

const allFeatures = [
  'Auth & User Management',
  'Dashboard',
  'Messaging',
  'Admin Tools',
  'Billing & Payments',
  'Mobile Layout',
]

export default function DragFeaturePicker({
  onNext,
  onBack,
}: {
  onNext: (features: string[]) => void
  onBack: () => void
}) {
  const [selected, setSelected] = useState<string[]>([])

  const toggleFeature = (feature: string) => {
    setSelected((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    )
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">What features matter most?</h2>
      <p className="text-gray-300 mb-6">Choose up to 5 core features for your MVP.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {allFeatures.map((feature, index) => {
          const isSelected = selected.includes(feature)
          const baseStyles =
            'flex items-center justify-between gap-3 px-5 py-3 rounded-lg border transition-all duration-300 w-full bg-white/80 backdrop-blur-md text-[var(--accent)] cursor-pointer'
          const selectedStyles =
            ' shadow-md scale-100'
          const unselectedStyles =
            ' border-gray-200 scale-95 hover:bg-gray-100'

          return (
            <motion.button
              key={feature}
              onClick={() => toggleFeature(feature)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`${baseStyles} ${isSelected ? selectedStyles : unselectedStyles}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <GripVertical className="w-4 h-4" />
                <span>{feature}</span>
              </div>
              {isSelected && <CheckCircle className="w-5 h-5 text-green-500" />}
            </motion.button>
          )
        })}
      </div>

      <div className="mt-8 flex justify-between max-w-xl mx-auto">
      <button
          onClick={onBack}
          className="text-sm text-white cursour-pointer border-b-2 cursor-pointer border-transparent hover:border-b-2 hover:border-white/50 transition-all duration-300 ease-out"
        >
          ← Back
        </button>

        <button
          onClick={() => onNext(selected)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          disabled={selected.length === 0}
        >
          Continue →
        </button>
      </div>
    </div>
  )
}
