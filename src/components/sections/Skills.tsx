'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { translations } from '@/translations'

gsap.registerPlugin(ScrollTrigger)

interface SkillsProps {
  lang: string
}

const getSkills = (lang: 'en' | 'vi') => ({
  [lang === 'en' ? 'Frontend Development' : 'Phát triển Frontend']: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Three.js", level: 75 }
  ],
  [lang === 'en' ? 'Backend Development' : 'Phát triển Backend']: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "GraphQL", level: 70 }
  ],
  [lang === 'en' ? 'Mobile Development' : 'Phát triển Mobile']: [
    { name: "React Native", level: 85 },
    { name: "Flutter", level: 75 },
    { name: "iOS Development", level: 70 },
    { name: "Android Development", level: 70 }
  ],
  [lang === 'en' ? 'Artificial Intelligence' : 'Trí tuệ Nhân tạo']: [
    { name: "TensorFlow", level: 80 },
    { name: "PyTorch", level: 75 },
    { name: "Computer Vision", level: 75 },
    { name: "NLP", level: 70 }
  ]
})

export default function Skills({ lang }: SkillsProps) {
  const t = translations[lang as 'en' | 'vi']
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const skills = getSkills(lang as 'en' | 'vi')

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "center center",
            toggleActions: "play none none reverse"
          }
        }
      )
    }
  }, [])

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center p-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 leading-relaxed py-4">
          {t.skills.title}
        </h2>
        
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-green-400/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-400">
                {category}
              </h3>
              
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full skill-bar"
                        style={{ '--skill-level': `${skill.level}%` } as any}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
