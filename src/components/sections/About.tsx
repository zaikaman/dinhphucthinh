'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Avatar3D from '../3d/Avatar3D'

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* 3D Model */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[500px]"
        >
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <OrbitControls 
              enableZoom={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
            <Avatar3D />
          </Canvas>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <motion.p 
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi! I'm Đinh Phúc Thịnh, a passionate developer with expertise in AI, Web, and Mobile development. 
            I love creating innovative solutions and bringing ideas to life through code.
          </motion.p>

          {/* Skills */}
          <div className="space-y-4">
            <motion.h3 
              className="text-3xl font-semibold text-green-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Skills
            </motion.h3>
            <motion.ul 
              className="space-y-2 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                Artificial Intelligence & Machine Learning
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                Full Stack Web Development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                Mobile App Development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                UI/UX Design
              </li>
            </motion.ul>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <motion.h3 
              className="text-3xl font-semibold text-green-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Education
            </motion.h3>
            <motion.div 
              className="space-y-2 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p>Computer Science Major</p>
              <p>TOEIC Score: <span className="text-green-400 font-semibold">960</span></p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
