'use client'

import { useEffect, useState } from 'react'

interface SectionPoint {
  id: string
  position: number
}

export const useSectionPositions = (ids: string[]) => {
  const [positions, setPositions] = useState<SectionPoint[]>([])

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = ids.map(id => {
        const el = document.getElementById(id)
        const rect = el?.getBoundingClientRect()
        const scrollY = window.scrollY || window.pageYOffset
        return {
          id,
          position: rect ? rect.top + scrollY : 0
        }
      })

      // Only update state if positions actually changed (prevent re-renders)
      const hasChanged = newPositions.some((newPos, i) => newPos.position !== positions[i]?.position)
      if (hasChanged) setPositions(newPositions)
    }

    updatePositions()
    window.addEventListener('resize', updatePositions)
    // Debounce scroll so we don’t update every pixel
    const onScroll = () => {
      window.requestAnimationFrame(updatePositions)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('resize', updatePositions)
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids, positions]) // You might be tempted to remove `positions` here — DON’T unless you store prev in ref

  return positions
}
