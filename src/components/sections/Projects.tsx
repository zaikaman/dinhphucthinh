'use client'

import { motion } from 'framer-motion'
import Project3DCard from '../Project3DCard'

const projects = [
  {
    title: "Kien Vocal",
    description: "Comprehensive vocal learning platform in collaboration with instructor Dinh Trung Kien",
    image: "/kienvocal.png",
    demoLink: "https://kienvocal.com/",
    sourceLink: "https://github.com/zaikaman/WebKienVocal",
    tags: ["Next.js", "React", "TensorFlow", "WebAudio API"]
  },
  {
    title: "SkillMatchers",
    description: "A Tinder-like platform for matching jobs and job seekers, streamlining the job search process.",
    image: "/skillmatchers.png",
    demoLink: "https://skillmatchers.vercel.app/",
    sourceLink: "https://github.com/zaikaman/SkillMatchers",
    tags: ["Next.js", "Tailwind CSS", "Supabase"]
  },
  {
    title: "Currency.vn",
    description: "A marketing project for Van Lang University, featuring a wallet-selling ecommerce website.",
    image: "/currency.vn.png",
    demoLink: "https://currency-vn.vercel.app/",
    sourceLink: "https://github.com/zaikaman/currency.vn",
    tags: ["Next.js", "Tailwind CSS", "Gemini AI"]
  },
  {
    title: "Airdrop Killers",
    description: "Blockchain platform for purchasing tools and participating in cryptocurrency airdrop programs.",
    image: "/airdropkillers.png",
    demoLink: "https://airdrop-killers.vercel.app/",
    sourceLink: "https://github.com/zaikaman/AirdropKillers",
    tags: ["React", "Web3.js", "Ethereum", "Tailwind CSS"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-xy" />
      
      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-slow ${Math.random() * 10 + 15}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-400 text-xl"
          >
            Explore the projects I've worked on
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
              <div className="relative">
                <Project3DCard project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
