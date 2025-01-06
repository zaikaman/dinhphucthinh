'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { translations } from '@/translations'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const lang = pathname.startsWith('/vi') ? 'vi' : 'en'
  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-colors ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            href={`/${lang}`}
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            DPT
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <Link 
                key={item.label}
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="/DinhPhucThinhResume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white hover:opacity-90 transition-opacity"
            >
              {t.nav.resume}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {menuItems.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href="/DinhPhucThinhResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.resume}
              </a>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
