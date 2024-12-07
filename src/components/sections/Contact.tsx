'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, Twitter, Linkedin, Facebook, Instagram, Mail, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/zaikaman',
    icon: Github,
    color: 'hover:bg-gray-800'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/ThinhDinh1706',
    icon: Twitter,
    color: 'hover:bg-blue-500'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/%C4%91inh-ph%C3%BAc-th%E1%BB%8Bnh-2561b5274/',
    icon: Linkedin,
    color: 'hover:bg-blue-700'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/dinfucthin/',
    icon: Facebook,
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dinfucthin/',
    icon: Instagram,
    color: 'hover:bg-pink-600'
  }
]

export default function Contact() {
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
      id="contact" 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0" />
      
      <div ref={contentRef} className="max-w-4xl w-full text-center relative z-10 space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Let's Connect
        </h2>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello. 
          I'm always open to discussing new projects and opportunities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-gray-800 
                  hover:border-green-400/50 transition-all duration-300 ${social.color}`}
              >
                <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span className="font-medium">{social.name}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )
          })}
        </div>

        <div className="mt-12 inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
          <Mail className="w-5 h-5" />
          <span>zaikaman123@gmail.com</span>
        </div>
      </div>
    </section>
  )
}
