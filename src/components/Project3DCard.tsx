'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent, useRef } from 'react'
import Image from 'next/image'
import { translations } from '@/translations'

interface Project {
  title: string
  description: string
  image: string
  demoLink: string
  sourceLink: string
  tags: string[]
  lang: string
}

export default function Project3DCard({ project }: { project: Project }) {
  const t = translations[project.lang as 'en' | 'vi']
  const cardRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-gray-900 to-black p-8 group cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(75px)" }} 
        className="h-full space-y-4"
      >
        <div className="relative h-1/2 w-full overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {project.title}
          </h3>
          
          <p className="text-gray-300 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-green-400 rounded-full text-sm"
                style={{ transform: "translateZ(100px)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ transform: "translateZ(100px)" }}
            >
              {t.projects.viewPage}
            </a>
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
              style={{ transform: "translateZ(100px)" }}
            >
              {t.projects.sourceCode}
            </a>
          </div>
        </div>
      </div>

      {/* Gradient border effect */}
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "translateZ(50px)" }}
      />
    </motion.div>
  )
}
