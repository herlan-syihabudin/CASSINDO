'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX, HiPhone, HiArrowRight, HiCheckCircle, HiClock } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/services', label: 'Layanan' },
  { href: '/projects', label: 'Proyek' },
  { href: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [shrink, setShrink] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 20)
      setShrink(y > 80)
    }
    
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen, mounted])

  useEffect(() => {
    if (!mounted) return
    setIsMobileMenuOpen(false)
  }, [pathname, mounted])

  const openMenu = useCallback(() => setIsMobileMenuOpen(true), [])
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-3">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl border-2 border-primary bg-white flex items-center justify-center">
              <span className="font-bold text-xs sm:text-base text-primary">CSS</span>
            </div>
            <div>
              <span className="font-poppins font-bold text-sm sm:text-xl text-primary">Cassindo</span>
              <span className="text-[10px] sm:text-xs block -mt-0.5 text-primary/60">Core Advanced Supply Solution</span>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  const isHomePage = pathname === '/'
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen
  const isWhite = !isTransparent

  return (
    <>
      <nav 
        className={`
          fixed top-0 w-full z-50 transition-all duration-500
          ${isWhite ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}
        `}
        style={{
          backdropFilter: isWhite ? 'none' : 'blur(12px)',
          WebkitBackdropFilter: isWhite ? 'none' : 'blur(12px)',
          backgroundColor: isWhite ? 'white' : 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className={`
              w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105
              ${isWhite ? 'border-2 border-primary bg-white shadow-md shadow-primary/20' : 'border-2 border-white bg-transparent'}
            `}>
              <span className={`font-bold text-xs sm:text-base ${isWhite ? 'text-primary' : 'text-white'}`}>CSS</span>
            </div>
            <div>
              <span className={`font-poppins font-bold text-sm sm:text-xl ${isWhite ? 'text-primary' : 'text-white'}`}>Cassindo</span>
              <span className={`text-[10px] sm:text-xs block -mt-0.5 ${isWhite ? 'text-primary/60' : 'text-white/60'}`}>Core Advanced Supply Solution</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative font-medium transition-all duration-300 py-2 group
                  ${isWhite ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'}
                  ${pathname === item.href ? (isWhite ? 'text-primary' : 'text-white') : ''}
                `}
              >
                {item.label}
                <span className={`
                  absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full
                  ${pathname === item.href ? 'w-full' : 'w-0'}
                `} />
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <a href="tel:+6281776848333" className={`flex items-center gap-2 text-sm font-medium transition-colors ${isWhite ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'}`}>
                <HiPhone className="text-sm" />
                <span className="hidden lg:inline">+62 817 7684 8333</span>
              </a>
            </div>
            <Link href="/contact" className={`
              px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5
              ${isWhite ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'}
            `}>Request Quote</Link>
          </div>

          <button
            onClick={openMenu}
            className="md:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20"
            aria-label="Open menu"
          >
            <HiMenu size={22} className="text-primary" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - PREMIUM BOTTOM SHEET */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
              onClick={closeMenu}
            />
            
            {/* Menu Panel - Bottom Sheet Style */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[999] bg-white rounded-t-3xl shadow-2xl overflow-hidden"
            >
              {/* Handle Bar */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-12 h-1 bg-gray-300 rounded-full" />
              </div>

              {/* Header */}
              <div className="px-5 pt-2 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center">
                      <span className="font-bold text-sm text-primary">CSS</span>
                    </div>
                    <div>
                      <span className="font-poppins font-bold text-base text-primary">Cassindo</span>
                      <p className="text-[9px] text-gray-400 -mt-0.5">Core Advanced Supply Solution</p>
                    </div>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 active:bg-gray-200 transition"
                  >
                    <HiX className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Contact Card */}
              <div className="px-5 py-4 border-b border-gray-50">
                <a 
                  href="tel:+6281776848333"
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 active:bg-primary/10 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                      <HiPhone className="text-primary text-base" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Call us now</p>
                      <p className="text-sm font-semibold text-gray-900">+62 817 7684 8333</p>
                    </div>
                  </div>
                  <HiArrowRight className="text-primary text-sm opacity-60" />
                </a>
              </div>

              {/* Navigation Menu */}
              <div className="px-5 py-2">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`
                        flex items-center justify-between py-3.5 px-3 rounded-xl font-medium transition-all duration-200
                        ${isActive 
                          ? 'bg-primary text-white shadow-md shadow-primary/20' 
                          : 'text-gray-700 active:bg-gray-50'
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* CTA Section */}
              <div className="px-5 pt-2 pb-6">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex flex-col gap-2 w-full p-4 bg-primary rounded-xl text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Request Quote</span>
                    <HiArrowRight className="text-white" />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/80">
                    <span className="flex items-center gap-1">
                      <HiClock className="text-xs" /> Response &lt; 24h
                    </span>
                    <span className="flex items-center gap-1">
                      <HiCheckCircle className="text-xs" /> Free Consultation
                    </span>
                  </div>
                </Link>
              </div>

              {/* Footer */}
              <div className="px-5 pb-6 pt-2 text-center border-t border-gray-50">
                <p className="text-[9px] text-gray-400">
                  © 2026 Cassindo Core Advanced Supply Solution
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
