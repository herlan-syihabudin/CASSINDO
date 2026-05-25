'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/services', label: 'Layanan' },
  { href: '/projects', label: 'Proyek' },
  { href: '/contact', label: 'Kontak' },
]

// Variants for animations
const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', damping: 20, stiffness: 300 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Reset scroll ke atas saat pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Cek posisi scroll
  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Cek langsung saat mount
    checkScroll()
    
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  // Lock body scroll when mobile menu is open
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Determine if navbar should be white based on scroll AND pathname
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
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Cassindo Home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div>
              <span className="font-poppins font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Cassindo
              </span>
              <span className="text-xs text-accent block -mt-1">General Supplier</span>
            </div>
          </Link>

          {/* Desktop Menu - Warna dinamis berdasarkan isWhiteNavbar */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  isWhiteNavbar
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-accent'
                } ${pathname === link.href ? 'text-primary' : ''}`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className={`block h-0.5 rounded-full mt-1 ${
                    isWhiteNavbar ? 'bg-primary' : 'bg-accent'
                  }`} />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 ${
                isWhiteNavbar
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark'
                  : 'bg-white text-primary shadow-lg hover:bg-gray-100'
              }`}
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden text-2xl p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
              isWhiteNavbar 
                ? 'text-primary hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-40 pt-20 px-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                        pathname === link.href
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 pt-4 border-t border-gray-200"
                >
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="btn-primary w-full justify-center"
                  >
                    Request Quote →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
