'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'
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

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.3 }
  })
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Optimized scroll handler with throttle
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
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
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition"
              whileHover={{ rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-xl">C</span>
            </motion.div>
            <div>
              <span className="font-poppins font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Cassindo
              </span>
              <span className="text-xs text-accent block -mt-1">General Supplier</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link
                  href={link.href}
                  className={`relative font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary' 
                      : 'text-white hover:text-accent'
                  } ${pathname === link.href ? 'text-primary' : ''} group`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="btn-primary !px-5 !py-2.5 text-sm group"
            >
              <span>Request Quote</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden text-2xl p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
              isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
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
