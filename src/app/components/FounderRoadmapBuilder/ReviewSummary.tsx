'use client'

import { motion } from 'framer-motion'
import { Brain, CheckCircle, CalendarDays } from 'lucide-react'

export default function ReviewSummary({
  onNext,
  onBack,
  productType,
  features,
}: {
  onNext: () => void
  onBack: () => void
  productType: string
  features: string[]
}) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Review Your Roadmap</h2>
      <p className="text-gray-300 mb-6">Here’s a quick look before we send it to your inbox.</p>

      <div className="p-6 rounded-xl text-left space-y-6 max-w-xl mx-auto text-[#030b1a] bg-white/80 backdrop-blur-sm shadow-lg">
        <div>
          <div className="flex items-center gap-2 mb-3 font-semibold">
            <Brain className="w-5 h-5 text-blue-400" />
            <span>What You Are Building</span>
          </div>
          <p className="text-gray-800 space-y-2 ml-8">{productType}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3 font-semibold">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Core Features</span>
          </div>
          <ul className="list-disc text-gray-800 space-y-2 ml-8">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3 font-semibold">
            <CalendarDays className="w-5 h-5 text-red-300" />
            <span>Your Timeline</span>
          </div>
          <ul className="list-none text-gray-800 space-y-2 ml-8">
            <li>Week 1–2: Design Sprint</li>
            <li>Week 3–4: MVP Build</li>
            <li>Week 5: Testing & QA</li>
            <li>Week 6: Launch</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-between max-w-xl mx-auto">
      <button
          onClick={onBack}
          className="text-sm text-white cursour-pointer border-b-2 cursor-pointer border-transparent hover:border-b-2 hover:border-white/50 transition-all duration-300 ease-out"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="bg-white/80 backdrop-blur-md text-[var(--accent)] px-5 py-2 rounded-lg text-lg font-semibold hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
        >
          Looks Good →
        </button>
      </div>
    </div>
  )
}
