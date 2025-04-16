'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Navigation, Rocket, CheckCircle, DollarSign, Phone, User } from 'lucide-react'

const sections = [
  { id: 'process', label: 'Process', icon: <Navigation size={14} /> },
  { id: 'roadmap', label: 'Submit Proposal', icon: <Rocket size={14} /> },
  { id: 'deliverables', label: 'What You Get', icon: <CheckCircle size={14} /> },
  { id: 'proof', label: 'Proof', icon: <CheckCircle size={14} /> },
  { id: 'pricing', label: 'Pricing', icon: <DollarSign size={14} /> },
  { id: 'about', label: 'Who We aAre', icon: <User size={14} /> },
  { id: 'contact', label: 'Start', icon: <Phone size={14} /> },
]

export default function DotNavScrollSpy() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Tooltip.Provider delayDuration={100}>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
      {/* Progress line */}
      <div className="relative h-[260px] w-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 w-1 bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"
          style={{ height: progressHeight }}
        />
      </div>

      {/* Dots */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
      >
        {sections.map((section) => (
          <Tooltip.Root key={section.id} delayDuration={100}>
            <Tooltip.Trigger asChild>
              <Link
                href={`#${section.id}`}
                scroll={true}
                className="group relative"
              >
                <motion.span
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1 },
                  }}
                  animate={{
                    scale: activeId === section.id ? 1.3 : 1,
                    backgroundColor: activeId === section.id ? '#2563eb' : '#d1d5db',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-3 h-3 rounded-full block"
                />
              </Link>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="left"
                className="bg-white text-[var(--accent)] px-3 py-2 text-xs rounded shadow-lg flex items-center space-x-2"
              >
                {section.icon}
                <span>{section.label}</span>
                <Tooltip.Arrow className="fill-[var(--accent)]" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </motion.div>
    </div>
    </Tooltip.Provider>
  )
}
