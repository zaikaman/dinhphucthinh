'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Kien Vocal",
    description: "A comprehensive vocal training platform with AI-powered feedback and personalized learning paths.",
    image: "/kienvocal.png",
    link: "https://kienvocal.com/",
    github: "#",
    tech: ["Next.js", "React", "TensorFlow", "WebAudio API"]
  },
  {
    title: "Airdrop Killers",
    description: "A blockchain-based platform for tracking and participating in cryptocurrency airdrops.",
    image: "/airdropkillers.png",
    link: "https://airdrop-killers.vercel.app/",
    github: "#",
    tech: ["React", "Web3.js", "Ethereum", "Tailwind CSS"]
  }
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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
          stagger: 0.3,
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
      id="projects" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center p-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Featured Projects
        </h2>
        
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 hover:border-green-400/50 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Visit Site</span>
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
