'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import HeroScene from '@/components/3d/HeroScene'

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background - Now positioned behind content */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
        </div>

        {/* Content - Now with higher z-index */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pointer-events-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Dinh Phuc Thinh
            </span>
          </motion.h1>
          
          <motion.p
            className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI, Web & Mobile Developer
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="relative z-20 px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-black font-medium hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="relative z-20 px-8 py-3 rounded-full border border-green-400/20 text-white font-medium hover:bg-green-400/10 transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </section>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
