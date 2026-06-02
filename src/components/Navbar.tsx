'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX, HiPhone, HiArrowRight, HiClock, HiCheckCircle } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/services', label: 'Layanan' },
  { href: '/projects', label: 'Proyek' },
  { href: '/contact', label: 'Kontak' },
]

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      damping: 25, 
      stiffness: 260,
      staggerChildren: 0.05,
      delayChildren: 0.1
    } 
  },
  exit: { 
    x: '100%', 
    opacity: 0, 
    transition: { duration: 0.25, ease: 'easeInOut' } 
  }
}

const mobileItemVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isMobileMenuOpen])

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const isWhiteNavbar = isScrolled || pathname !== '/'

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isWhiteNavbar
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' 
            : 'bg-white/5 backdrop-blur-md py-5'
        }`}
        style={{
          backgroundColor: isWhiteNavbar 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
            aria-label="Cassindo Home"
          >
            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
              isWhiteNavbar
                ? 'border-2 border-primary bg-white shadow-md shadow-primary/20'
                : 'border-2 border-white bg-transparent shadow-white/10'
            }`}>
              <span className={`font-bold text-xs sm:text-base ${
                isWhiteNavbar ? 'text-primary' : 'text-white'
              }`}>CSS</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-poppins font-bold text-sm sm:text-xl ${
                isWhiteNavbar ? 'text-primary' : 'text-white'
              }`}>Cassindo</span>
              <span className={`text-[10px] sm:text-xs block -mt-0.5 ${
                isWhiteNavbar ? 'text-primary/60' : 'text-white/60'
              }`}>Core Advanced Supply Solution</span>
            </div>
            <div className="sm:hidden">
              <span className={`font-poppins font-bold text-sm ${
                isWhiteNavbar ? 'text-primary' : 'text-white'
              }`}>Cassindo</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 py-2 group ${
                  isWhiteNavbar
                    ? 'text-gray-600 hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                } ${pathname === link.href ? (isWhiteNavbar ? 'text-primary' : 'text-white') : ''}`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  pathname === link.href ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <a href="tel:+6281776848333" className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isWhiteNavbar ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}>
                <HiPhone className="text-sm" />
                <span className="hidden lg:inline">+62 817 7684 8333</span>
                <span className="lg:hidden">Call</span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/contact" className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
              isWhiteNavbar
                ? 'bg-primary text-white shadow-md shadow-primary/30 hover:bg-primary-dark'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
            }`}>Request Quote</Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
              isWhiteNavbar ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-80 h-full z-40 md:hidden overflow-y-auto"
              style={{
                background: 'rgba(255, 255, 255, 0.96)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="flex flex-col min-h-full pt-16 pb-8">
                {/* Header */}
                <div className="px-6 pb-5 mb-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 flex items-center justify-center">
                        <span className="font-bold text-sm text-primary">CSS</span>
                      </div>
                      <div>
                        <span className="font-poppins font-bold text-base text-primary">Cassindo</span>
                        <p className="text-[9px] text-gray-400 -mt-0.5">Core Advanced Supply Solution</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
                    >
                      <HiX className="text-sm" />
                    </button>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="px-6 mb-6">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">QUICK CONTACT</p>
                  <a 
                    href="tel:+6281776848333"
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <HiPhone className="text-primary text-base" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Call us now</p>
                      <p className="text-sm font-semibold text-gray-900">+62 817 7684 8333</p>
                    </div>
                    <HiArrowRight className="ml-auto text-primary text-sm" />
                  </a>
                </div>

                {/* Menu Navigation - Tanpa bullet */}
                <div className="px-6 mb-6">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">MENU</p>
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between py-3 px-3 rounded-xl font-medium transition-all duration-300 ${
                          pathname === link.href
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{link.label}</span>
                        {pathname === link.href && (
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 mt-auto pt-4">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">GET STARTED</p>
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block w-full p-4 bg-primary rounded-xl text-white"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Request Quote</span>
                      <HiArrowRight className="text-white" />
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/80">
                      <span className="flex items-center gap-1">⏱ Response &lt; 24h</span>
                      <span className="flex items-center gap-1">✓ Free Consultation</span>
                    </div>
                  </Link>
                  <p className="text-center text-[9px] text-gray-400 mt-5 pt-3 border-t border-gray-100">
                    Core Advanced Supply Solution
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
