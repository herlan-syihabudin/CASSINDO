'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX, HiPhone, HiArrowRight } from 'react-icons/hi'
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

  // Handle mounted state untuk prevent hydration error
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll handler
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

  // Lock body scroll when mobile menu open
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

  // Close mobile menu on route change
  useEffect(() => {
    if (!mounted) return
    setIsMobileMenuOpen(false)
  }, [pathname, mounted])

  const openMenu = useCallback(() => setIsMobileMenuOpen(true), [])
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  // Don't render anything during SSR to prevent hydration mismatch
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
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className={`
              w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105
              ${isWhite ? 'border-2 border-primary bg-white shadow-md shadow-primary/20' : 'border-2 border-white bg-transparent'}
            `}>
              <span className={`font-bold text-xs sm:text-base ${isWhite ? 'text-primary' : 'text-white'}`}>
                CSS
              </span>
            </div>
            <div>
              <span className={`font-poppins font-bold text-sm sm:text-xl ${isWhite ? 'text-primary' : 'text-white'}`}>
                Cassindo
              </span>
              <span className={`text-[10px] sm:text-xs block -mt-0.5 ${isWhite ? 'text-primary/60' : 'text-white/60'}`}>
                Core Advanced Supply Solution
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
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
            `}>
              Request Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={openMenu}
            className="md:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Open menu"
          >
            <HiMenu size={24} className={isWhite ? 'text-primary' : 'text-white'} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-[998]" onClick={closeMenu} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-[999] overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-16 pb-6">
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
                    onClick={closeMenu}
                    className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
                  >
                    <HiX className="text-sm" />
                  </button>
                </div>

                <a href="tel:+6281776848333" className="flex items-center gap-2 mx-5 mt-5 p-3 rounded-xl bg-primary/5 text-primary border border-primary/20">
                  <HiPhone className="text-sm" />
                  <span className="text-sm font-medium">+62 817 7684 8333</span>
                </a>
                
                <div className="flex-1 mt-4">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-3 px-5 mx-2 rounded-xl font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? 'bg-primary text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="px-5 pt-4 pb-6 border-t border-gray-100 mt-auto">
                  <Link href="/contact" onClick={closeMenu} className="btn-primary w-full justify-center py-2.5 text-sm">
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
