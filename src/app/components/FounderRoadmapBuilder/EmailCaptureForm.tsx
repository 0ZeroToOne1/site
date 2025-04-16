'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { MailCheck, LoaderCircle } from 'lucide-react'

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { width, height } = useWindowSize()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setTimeout(() => setSubmitted(true), 500) // mimic API delay
  }

  return (
    <div className="text-center relative">
   

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 justify-center">
              <MailCheck className="w-7 h-7 text-white animate-pulse" />
              <h2 className="text-2xl font-bold">Send your roadmap to your inbox</h2>
            </div>

            <p className="text-gray-200">No spam. Just your custom MVP plan, ready to go.</p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <input
                type="email"
                placeholder="you@startup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 rounded-lg border border-gray-300 w-full sm:w-72 placeholder:text-gray-400 bg-white text-[#030b1a] shadow-md"
              />
              <button
                type="submit"
                className="bg-white/80 backdrop-blur-md text-[var(--accent)] px-5 py-2 rounded-lg text-lg font-semibold hover:drop-shadow-lg hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
              >
                Send →
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-12 inline-block bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <MailCheck className="w-6 h-6 text-green-500" />
              <motion.h3
                className="text-2xl font-semibold text-green-600"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Sent!
              </motion.h3>
            </div>
            <p className="text-[#030b1a]">Check your inbox — your roadmap is on its way 🚀</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
