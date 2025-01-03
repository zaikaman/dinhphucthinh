'use client'

import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Avatar3D from '../3d/Avatar3D'
import { GiChessKing, GiGuitar, GiMicrophone } from 'react-icons/gi'
import { FaChalkboardTeacher, FaTrophy, FaMedal } from 'react-icons/fa'

export default function About() {
  const achievements = [
    {
      title: "Chess",
      icon: GiChessKing,
      details: "Third Place in Team Chess Competition, Ho Chi Minh City"
    },
    {
      title: "English",
      icon: FaChalkboardTeacher,
      details: "English Teacher (1 year experience), Third Place in City-level English Competition, Silver Medal in April 30th Olympic"
    },
    {
      title: "Music",
      icon: GiMicrophone,
      details: "Amateur Rapper, Singer and Guitarist"
    }
  ]

  return (
    <section id="about" className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16 animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-blue-500/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Enhanced 3D Model Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[700px] relative z-10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <OrbitControls 
              enableZoom={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
            <Avatar3D scale={1.8} />
          </Canvas>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-8 relative"
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
            className="text-gray-100 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello! I'm Dinh Phuc Thinh, a person passionate about technology, art, and education. 
            Besides being a developer specializing in AI, Web, and Mobile, I'm also a chess player, 
            musician, and former English teacher.
          </motion.p>

          {/* Enhanced Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-gray-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {achievement.title}
                </h3>
                <p className="text-gray-400">{achievement.details}</p>
              </motion.div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-4 relative z-20">
            <motion.h3 
              className="text-3xl font-semibold text-green-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Technical Skills
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                <span className="text-white">Artificial Intelligence & Machine Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                <span className="text-white">Full Stack Web Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                <span className="text-white">Mobile App Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">▹</span>
                <span className="text-white">UI/UX Design</span>
              </li>
            </motion.ul>
          </div>

          {/* Education */}
          <div className="space-y-4 relative z-10">
            <motion.h3 
              className="text-3xl font-semibold text-green-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Education & Certificates
            </motion.h3>
            <motion.div 
              className="space-y-2 text-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p>Major in Software Engineering</p>
              <p>TOEIC Score: <span className="text-green-400 font-semibold">960</span></p>
              <div className="flex items-center gap-2 text-green-400">
                <FaMedal className="w-5 h-5" />
                <span>Silver Medal - April 30th English Olympic</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <FaTrophy className="w-5 h-5" />
                <span>Third Place - City-level English Competition</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
