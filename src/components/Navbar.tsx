'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
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
      stiffness: 300,
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
  hidden: { x: 50, opacity: 0 },
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

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const isWhiteNavbar = isScrolled || pathname !== '/'

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isWhiteNavbar
            ? 'bg-white shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Cassindo Home"
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
              isWhiteNavbar
                ? 'border-2 border-primary bg-white'
                : 'border-2 border-white bg-transparent'
            }`}>
              <span className={`font-bold text-base ${
                isWhiteNavbar ? 'text-primary' : 'text-white'
              }`}>CSS</span>
            </div>
            <div>
              <span className={`font-poppins font-bold text-xl ${
                isWhiteNavbar 
                  ? 'bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                Cassindo
              </span>
              <span className={`text-xs block -mt-0.5 ${
                isWhiteNavbar ? 'text-primary/60' : 'text-white/60'
              }`}>
                Core Advanced Supply Solution
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
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
            
            {/* Contact Quick Action */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <a 
                href="tel:+6281776848333" 
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isWhiteNavbar 
                    ? 'text-gray-600 hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <HiPhone className="text-sm" />
                <span className="hidden lg:inline">+62 817 7684 8333</span>
                <span className="lg:hidden">Call</span>
              </a>
            </div>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                isWhiteNavbar
                  ? 'bg-primary text-white shadow-md shadow-primary/30 hover:bg-primary-dark'
                  : 'bg-white text-primary shadow-md hover:bg-gray-100'
              }`}
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button - Improved */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
              isWhiteNavbar 
                ? 'text-primary hover:bg-gray-100' 
                : 'text-white hover:bg-white/20 backdrop-blur-sm'
            } ${isMobileMenuOpen ? (isWhiteNavbar ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm') : ''}`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Glassmorphism Premium */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - Glassmorphism blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel - Glassmorphism card */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-full max-w-sm h-full z-40 md:hidden overflow-y-auto"
              style={{
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="flex flex-col min-h-full pt-20 pb-8 px-6">
                {/* Header with close indicator */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                  <div>
                    <div className="w-10 h-10 rounded-xl border-2 border-primary bg-white flex items-center justify-center">
                      <span className="font-bold text-base text-primary">CSS</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition"
                  >
                    <HiX className="text-sm" />
                  </button>
                </div>

                {/* Phone number - Premium Card */}
                <motion.a 
                  href="tel:+6281776848333"
                  variants={mobileItemVariants}
                  className="flex items-center gap-3 py-3 px-4 mb-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-semibold border border-primary/20"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <HiPhone className="text-sm" />
                  </div>
                  <span>+62 817 7684 8333</span>
                </motion.a>
                
                {/* Navigation Links - Premium styling */}
                <div className="flex-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={mobileItemVariants}
                      custom={index}
                    >
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between py-4 px-3 rounded-xl font-medium transition-all duration-300 ${
                          pathname === link.href
                            ? 'bg-primary text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span>{link.label}</span>
                        {pathname === link.href && (
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button - Premium */}
                <motion.div
                  variants={mobileItemVariants}
                  className="mt-6 pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="btn-primary w-full justify-center py-3 text-base shadow-lg shadow-primary/30"
                  >
                    Request Quote →
                  </Link>
                </motion.div>

                {/* Bottom indicator */}
                <motion.div
                  variants={mobileItemVariants}
                  className="mt-8 pt-6 text-center"
                >
                  <p className="text-xs text-gray-400">
                    Core Advanced Supply Solution
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
