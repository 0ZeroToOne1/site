'use client'

import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function ProductBuildSimulator() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(false)

  // Animations based on scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const sidebarX = useTransform(scrollYProgress, [0, 1], ['-100px', '0px'])
  const terminalX = useTransform(scrollYProgress, [0, 1], ['100px', '0px'])
  const formY = useTransform(scrollYProgress, [0, 1], ['30px', '0px'])
  const formScale = useTransform(scrollYProgress, [0.2, 0.6], [0.95, 1])
  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v > 0.85) setShowConfetti(true)
      else setShowConfetti(false)
    })
    return () => unsub()
  }, [scrollYProgress])

  return (
    <section ref={sectionRef} className="relative min-h-[600vh] bg-[#030b1a] text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ y }}
          className="relative mx-auto max-w-6xl w-full p-8 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Your MVP. Built in Real-Time.
          </h2>

          <div className="grid grid-cols-12 gap-6 relative">
            {/* Sidebar */}
            <motion.div
              style={{ x: sidebarX, opacity }}
              className="col-span-3 bg-blue-500/20 rounded-lg h-64 flex items-center justify-center"
            >
              <span className="text-white font-medium">Sidebar Navigation</span>
            </motion.div>

            {/* Form Area */}
            <motion.div
              style={{ y: formY, scale: formScale, opacity }}
              className="col-span-6 bg-white/10 rounded-lg h-64 p-4 relative overflow-hidden"
            >
              <motion.div
                className="bg-white/20 rounded p-3 mb-3 blur-sm hover:blur-none hover:scale-105 transition-all duration-300"
              >
                <span className="text-white">Form Field: Name</span>
              </motion.div>
              <motion.div
                className="bg-white/20 rounded p-3 blur-sm hover:blur-none hover:scale-105 transition-all duration-300"
              >
                <span className="text-white">Form Field: Email</span>
              </motion.div>
            </motion.div>

            {/* Terminal */}
            <motion.div
              style={{ x: terminalX, opacity }}
              className="col-span-3 bg-black/60 text-green-400 font-mono text-xs p-4 rounded-lg h-64 overflow-auto border border-green-400/20"
            >
              <pre className="whitespace-pre-wrap">
{`> rails g scaffold User name:string email:string
> rails db:migrate
> turbo:form connected`}
              </pre>
            </motion.div>
          </div>

          {/* Floating Toast */}
          <motion.div
            animate={showConfetti ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
          >
            🎉 Saved to Dashboard
          </motion.div>

          {/* Confetti */}
          {showConfetti && <Confetti width={width} height={height} />}
        </motion.div>
      </div>
    </section>
  )
}
