'use client'

import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TechCube from '../3d/TechCube'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
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
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center p-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="h-[400px] lg:h-[600px] w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl" />
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2.5}
              maxPolarAngle={Math.PI / 1.5}
            />
            <TechCube />
          </Canvas>
        </div>

        <div ref={contentRef} className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            About Me
          </h2>
          
          <p className="text-xl text-gray-300">
            Hi, I'm Đinh Phúc Thịnh, a passionate developer with expertise in AI, Web, and Mobile development.
            With a TOEIC score of 960, I effectively communicate and collaborate in international environments.
          </p>
          
          <p className="text-xl text-gray-300">
            I specialize in creating innovative solutions using cutting-edge technologies.
            My goal is to build applications that not only solve problems but also provide
            exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-3 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-xl border border-green-400/20">
              <h3 className="text-green-400 font-semibold">AI Development</h3>
              <p className="text-gray-400">Machine Learning & Neural Networks</p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-xl border border-green-400/20">
              <h3 className="text-green-400 font-semibold">Web Development</h3>
              <p className="text-gray-400">Full Stack & Modern Frameworks</p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-green-400/10 to-blue-500/10 rounded-xl border border-green-400/20">
              <h3 className="text-green-400 font-semibold">Mobile Development</h3>
              <p className="text-gray-400">Cross-platform & Native Apps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
