'use client'

import { motion } from 'framer-motion'
import Project3DCard from '../Project3DCard'

const projects = [
  {
    title: "Kien Vocal",
    description: "Nền tảng học thanh nhạc toàn diện với công nghệ AI phân tích và đưa ra phản hồi, cùng lộ trình học tập cá nhân hóa.",
    image: "/kienvocal.png",
    demoLink: "https://kienvocal.com/",
    tags: ["Next.js", "React", "TensorFlow", "WebAudio API"]
  },
  {
    title: "Airdrop Killers",
    description: "Nền tảng blockchain để theo dõi và tham gia các chương trình airdrop tiền điện tử.",
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
          Dự Án Tiêu Biểu
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Project3DCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
