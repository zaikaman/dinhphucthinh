'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/Navbar'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out"
        }
      )
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="relative">
        <section className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
          <div 
            ref={heroRef} 
            className="z-10 max-w-5xl w-full text-center space-y-6 relative"
            style={{
              transform: scrolled ? 'translateY(-50px)' : 'none',
              opacity: scrolled ? 0.5 : 1,
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <h1 className="text-7xl sm:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Đinh Phúc Thịnh
            </h1>
            <p className="text-3xl sm:text-4xl mb-4 text-gray-300">
              AI, Web & Mobile Developer
            </p>
            <p className="text-2xl mb-8 text-green-400 font-semibold">
              TOEIC 960
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white font-bold hover:scale-105 transition-all"
              >
                View Projects
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 border-2 border-green-400 rounded-full text-green-400 font-bold hover:bg-green-400 hover:text-black transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="fixed inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
              <Stars 
                radius={100} 
                depth={50} 
                count={5000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={1}
              />
            </Canvas>
          </div>
        </section>

        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
