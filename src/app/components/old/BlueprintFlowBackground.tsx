'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useSectionPositions } from '../hooks/useSectionPositions'

type Variant = 'default' | 'diagonal' | 'minimal' | 'scroll-sync' | 'zigzag'

interface Props {
  variant?: Variant
  sectionIds?: string[]
}

const BlueprintFlowBackground = ({ variant = 'default', sectionIds = [] }: Props) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const opacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.2])
  const positions = useSectionPositions(sectionIds)

  const renderPaths = () => {
    switch (variant) {
      case 'zigzag':
        return renderZigZagLines()
      case 'scroll-sync':
        return (
          <>
            <line x1="50" y1="0" x2="50" y2="1000" stroke="#3B82F6" strokeWidth="0.2" />
            {positions.map((pos, index) => {
              const y = (pos.position / document.body.scrollHeight) * 1000
              return <circle key={index} cx="50" cy={y} r="1.2" fill="#3B82F6" />
            })}
          </>
        )
      case 'diagonal':
        return (
          <>
            <line x1="0" y1="0" x2="100" y2="1000" stroke="#3B82F6" strokeWidth="0.3" />
            <circle cx="30" cy="300" r="1" fill="#3B82F6" />
            <circle cx="70" cy="700" r="1" fill="#3B82F6" />
          </>
        )
      case 'minimal':
        return <line x1="50" y1="0" x2="50" y2="1000" stroke="#3B82F6" strokeWidth="0.2" />
      case 'default':
      default:
        return (
          <>
            <circle cx="50" cy="5" r="1" fill="#3B82F6">
              <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite" />
            </circle>
            <motion.line
              x1="50"
              y1="5"
              x2="50"
              y2="995"
              stroke="#3B82F6"
              strokeWidth="0.3"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <circle cx="20" cy="300" r="1" fill="#3B82F6" />
            <line x1="20" y1="300" x2="50" y2="300" stroke="#3B82F6" strokeWidth="0.2" />
            <circle cx="80" cy="700" r="1" fill="#3B82F6" />
            <line x1="80" y1="700" x2="50" y2="700" stroke="#3B82F6" strokeWidth="0.2" />
          </>
        )
    }
  }

  const renderZigZagLines = () => {
    const totalHeight = 1000
    const segmentHeight = 500
    const segments = totalHeight / segmentHeight
  
    return Array.from({ length: segments }).map((_, i) => {
      const y1 = i * segmentHeight
      const y2 = (i + 1) * segmentHeight
      const x1 = i % 2 === 0 ? 0 : 100
      const x2 = i % 2 === 0 ? 100 : 0
  
      return (
        <motion.line
          key={`zigzag-${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#3B82F6"
          strokeWidth="0.9"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: i * 0.15 }}
        />
        
        
      )
    })
  }

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 -z[-1] pointer-events-none"
      style={{ opacity }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
<defs>
  {/* Light background grid (horizontal & vertical lines every 50 units) */}
  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3B82F6" strokeWidth="0.08" opacity="0.15" />
  </pattern>

  {/* Optional: bold major grid every 200 units */}
  <pattern id="grid-major" width="200" height="200" patternUnits="userSpaceOnUse">
    <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#3B82F6" strokeWidth="0.15" opacity="0.3" />
  </pattern>
</defs>
<radialGradient id="fade" cx="50%" cy="50%" r="80%">
  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
</radialGradient>
<rect width="100%" height="100%" fill="url(#fade)" />
<rect width="100%" height="100%" fill="url(#grid)" />


        {/* Glowing animated path */}
        <g>{renderPaths()}</g>
      </svg>
    </motion.div>
  )
}

export default BlueprintFlowBackground
