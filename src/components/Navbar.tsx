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
    } 
  },
  exit: { 
    x: '100%', 
    opacity: 0, 
    transition: { duration: 0.25, ease: 'easeInOut' } 
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
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white/5 backdrop-blur-sm py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
        style={{
          backgroundColor: isWhiteNavbar 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
            aria-label="Cassindo Home"
          >
            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isWhiteNavbar
                ? 'border-2 border-primary bg-white'
                : 'border-2 border-white bg-transparent'
            }`}>
              <span className={`font-bold text-xs sm:text-base ${
                isWhiteNavbar ? 'text-primary' : 'text-white'
              }`}>CSS</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-poppins font-bold text-sm sm:text-xl ${
                isWhiteNavbar 
                  ? 'text-primary' 
                  : 'text-white'
              }`}>
                Cassindo
              </span>
              <span className={`text-[10px] sm:text-xs block -mt-0.5 ${
                isWhiteNavbar ? 'text-primary/60' : 'text-white/60'
              }`}>
                Core Advanced Supply Solution
              </span>
            </div>
            {/* Short logo untuk mobile */}
            <div className="sm:hidden">
              <span className={`font-poppins font-bold text-sm ${
                isWhiteNavbar ? 'text-primary' : 'text-white'
              }`}>
                Cassindo
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
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
              isWhiteNavbar 
                ? 'text-primary hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <HiX className="text-lg sm:text-xl" /> : <HiMenu className="text-lg sm:text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel with blur */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-64 h-full bg-white/95 backdrop-blur-xl shadow-2xl z-40 md:hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="flex flex-col h-full pt-16 pb-6">
                {/* Header */}
                <div className="flex justify-between items-center px-5 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg border-2 border-primary bg-white flex items-center justify-center">
                      <span className="font-bold text-xs text-primary">CSS</span>
                    </div>
                    <div>
                      <span className="font-poppins font-bold text-sm text-primary">Cassindo</span>
                      <p className="text-[8px] text-gray-400 -mt-0.5">Core Advanced Supply Solution</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
                  >
                    <HiX className="text-sm" />
                  </button>
                </div>

                {/* Phone Number */}
                <a 
                  href="tel:+6281776848333"
                  className="flex items-center gap-2 mx-5 mt-5 p-3 rounded-xl bg-primary/5 text-primary border border-primary/20"
                >
                  <HiPhone className="text-sm" />
                  <span className="text-sm font-medium">+62 817 7684 8333</span>
                </a>
                
                {/* Navigation Links */}
                <div className="flex-1 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block py-3 px-5 mx-2 rounded-xl font-medium transition-all duration-300 ${
                        pathname === link.href
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="px-5 pt-4 pb-6 border-t border-gray-100 mt-auto">
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="btn-primary w-full justify-center py-2.5 text-sm"
                  >
                    Request Quote →
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
