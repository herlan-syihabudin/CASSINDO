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

  // Cek posisi scroll dengan threshold lebih tinggi
  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
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

  // Determine navbar style
  const isHeroPage = pathname === '/'
  const isTransparent = isHeroPage && !isScrolled
  const isWhiteNavbar = !isTransparent

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isWhiteNavbar
            ? 'bg-white shadow-lg py-3' 
            : 'bg-white/5 backdrop-blur-md py-5 border-b border-white/10'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo - dengan border outline, tanpa background di tengah */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Cassindo Home"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
              isWhiteNavbar 
                ? 'border-2 border-primary bg-white' 
                : 'border-2 border-white/80 bg-transparent'
            }`}>
              <span className={`font-bold text-lg ${
                isWhiteNavbar ? 'text-primary' : 'text-white'
              }`}>C</span>
            </div>
            <div>
              <span className={`font-poppins font-bold text-xl ${
                isWhiteNavbar 
                  ? 'bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent' 
                  : 'text-white'
              }`}>
                Cassindo
              </span>
              <span className={`text-xs block -mt-1 ${
                isWhiteNavbar ? 'text-primary/60' : 'text-white/60'
              }`}>
                Core Advanced Supply Solution
              </span>
            </div>
          </Link>

          {/* Desktop Menu - dengan underline animation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-colors duration-300 py-2 group ${
                    isWhiteNavbar
                      ? 'text-gray-600 hover:text-primary' 
                      : 'text-white/80 hover:text-white'
                  } ${isActive ? (isWhiteNavbar ? 'text-primary' : 'text-white') : ''}`}
                >
                  {link.label}
                  {/* Underline animation - elegant */}
                  <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive ? 'w-full' : 'w-0'
                  }`} />
                </Link>
              )
            })}
            
            {/* Contact Quick Action - Phone Number */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <a 
                href="tel:+6281234567890" 
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isWhiteNavbar 
                    ? 'text-gray-600 hover:text-primary' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <HiPhone className="text-sm" />
                <span className="hidden lg:inline">+62 812 3456 7890</span>
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
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
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

      {/* Mobile Menu Overlay - Full width lebih lega */}
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
            
            {/* Menu Panel - Full width atau max-w-sm sesuai device */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl z-40 pt-20 px-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {/* Phone number di mobile menu */}
                <a 
                  href="tel:+6281234567890"
                  className="flex items-center gap-3 py-3 px-4 bg-primary/10 rounded-xl text-primary font-semibold"
                >
                  <HiPhone className="text-lg" />
                  <span>+62 812 3456 7890</span>
                </a>
                
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
                          ? 'bg-primary text-white'
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
