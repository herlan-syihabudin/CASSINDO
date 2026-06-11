'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX, HiPhone, HiArrowRight, HiCheckCircle, HiClock } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },    
  { href: '/services', label: 'Product & Services' },         
  { href: '/projects', label: 'Project' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-2">
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-14 h-14">
              <img 
                src="/images/logo/cassindo-logo.png"
                alt="Cassindo Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
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
          ${isWhite ? 'bg-white shadow-md' : 'bg-transparent'}
        `}
        style={{
          backdropFilter: isWhite ? 'none' : 'blur(12px)',
          WebkitBackdropFilter: isWhite ? 'none' : 'blur(12px)',
          backgroundColor: isWhite ? 'white' : 'rgba(255, 255, 255, 0.05)',
        }}
      >
        <div className="container-custom flex justify-between items-center py-2">
          {/* LOGO - Besar tapi navbar tetap low profile */}
          <Link href="/" className="shrink-0">
            <div className="relative w-18 h-18 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-105">
              <img 
                src="/images/logo/cassindo-logo.png"
                alt="Cassindo Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative font-medium transition-all duration-300 py-1 group text-sm
                  ${isWhite ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'}
                  ${pathname === item.href ? (isWhite ? 'text-primary' : 'text-white') : ''}
                `}
              >
                {item.label}
                <span className={`
                  absolute -bottom-0.5 left-0 h-0.5 transition-all duration-300 group-hover:w-full
                  ${isWhite ? 'bg-primary' : 'bg-white'}
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
              px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5
              ${isWhite ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'}
            `}>Request Quote</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20"
            aria-label="Open menu"
          >
            <HiMenu size={18} className="text-primary" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - PREMIUM BOTTOM SHEET */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
              onClick={closeMenu}
            />
            
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[999] bg-white rounded-t-3xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-12 h-1 bg-gray-300 rounded-full" />
              </div>

              <div className="px-5 pt-2 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                      <img 
                        src="/images/logo/cassindo-logo.png"
                        alt="Cassindo Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-poppins font-bold text-sm text-primary">Cassindo</span>
                      <p className="text-[7px] text-gray-400 -mt-0.5">Core Advanced Supply Solution</p>
                    </div>
                  </div>
                  <button
                    onClick={closeMenu}
                    className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 active:bg-gray-200 transition"
                  >
                    <HiX className="text-sm" />
                  </button>
                </div>
              </div>

              <div className="px-5 py-3 border-b border-gray-50">
                <a 
                  href="tel:+6281776848333"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 active:bg-primary/10 transition"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <HiPhone className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500">Call us now</p>
                      <p className="text-xs font-semibold text-gray-900">+62 817 7684 8333</p>
                    </div>
                  </div>
                  <HiArrowRight className="text-primary text-xs opacity-60" />
                </a>
              </div>

              <div className="px-5 py-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`
                        flex items-center justify-between py-2.5 px-2 rounded-xl font-medium transition-all duration-200 text-sm
                        ${isActive 
                          ? 'bg-primary text-white shadow-md shadow-primary/20' 
                          : 'text-gray-700 active:bg-gray-50'
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </Link>
                  )
                })}
              </div>

              <div className="px-5 pt-2 pb-5">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex flex-col gap-1.5 w-full p-3 bg-primary rounded-xl text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">Request Quote</span>
                    <HiArrowRight className="text-white text-sm" />
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-white/80">
                    <span className="flex items-center gap-1"><HiClock className="text-[10px]" /> Response &lt; 24h</span>
                    <span className="flex items-center gap-1"><HiCheckCircle className="text-[10px]" /> Free Consultation</span>
                  </div>
                </Link>
              </div>

              <div className="px-5 pb-5 pt-1 text-center border-t border-gray-50">
                <p className="text-[8px] text-gray-400">© 2026 Cassindo Core Advanced Supply Solution</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
