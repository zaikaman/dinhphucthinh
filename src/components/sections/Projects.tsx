'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: "Kien Vocal",
    description: "A comprehensive vocal training platform with AI-powered feedback and personalized learning paths.",
    image: "/kienvocal.png",
    demoLink: "https://kienvocal.com/",
    tags: ["Next.js", "React", "TensorFlow", "WebAudio API"]
  },
  {
    title: "Airdrop Killers",
    description: "A blockchain-based platform for tracking and participating in cryptocurrency airdrops.",
    image: "/airdropkillers.png",
    demoLink: "https://airdrop-killers.vercel.app/",
    tags: ["React", "Web3.js", "Ethereum", "Tailwind CSS"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-green-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Visit Site
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
