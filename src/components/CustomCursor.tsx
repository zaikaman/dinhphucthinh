'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY })
        })
        
        const target = e.target as HTMLElement
        setIsPointer(
          window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON'
        )
      }
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  if (isMobile || isHidden) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-green-400 rounded-full mix-blend-difference pointer-events-none z-[100]"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ 
          type: "tween",
          duration: 0,
          ease: "linear"
        }}
      />
      
      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-green-400 rounded-full mix-blend-difference pointer-events-none z-[100]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ 
          type: "tween",
          duration: 0.1,
          ease: "linear"
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-green-400/20 rounded-full blur-xl pointer-events-none z-[99]"
        animate={{
          x: position.x - 48,
          y: position.y - 48,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{ 
          type: "tween",
          duration: 0.15,
          ease: "linear"
        }}
      />
    </>
  )
}
