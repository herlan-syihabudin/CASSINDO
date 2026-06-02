'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX, HiPhone, HiArrowRight, HiClock, HiCheckCircle } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/services', label: 'Layanan' },
  { href: '/projects', label: 'Proyek' },
  { href: '/contact', label: 'Kontak' },
]

const SCROLL = {
  SCROLLED: 20,
  SHRINK: 80,
  MOBILE_SHRINK: 65,
  DESKTOP_SHRINK: 110,
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [shrink, setShrink] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > SCROLL.SCROLLED)
      setShrink(y > SCROLL.SHRINK)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveLink('')
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

  const openMenu = useCallback(() => setIsMobileMenuOpen(true), [])
  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  const handleLinkClick = useCallback((label: string) => {
    setActiveLink(label)
    setIsMobileMenuOpen(false)
  }, [])

  // Header classes
  const headerClasses = `
    fixed top-0 w-full z-[200] transition-all duration-300
    ${!mounted ? 'bg-white py-5' : ''}
    ${isMobileMenuOpen ? 'bg-white py-5 shadow-md' : ''}
    ${!isMobileMenuOpen && isScrolled ? 'bg-white shadow-md py-3' : ''}
    ${!isMobileMenuOpen && !isScrolled && pathname === '/' ? 'bg-transparent py-5' : ''}
    ${!isMobileMenuOpen && !isScrolled && pathname !== '/' ? 'bg-white shadow-md py-3' : ''}
  `

  // Logo classes
  const getLogoColor = () => {
    if (!mounted) return 'text-gray-800'
    if (isMobileMenuOpen) return 'text-gray-800'
    if (isScrolled) return 'text-gray-800'
    if (pathname !== '/') return 'text-gray-800'
    return 'text-white'
  }

  const getLogoSpanColor = () => {
    if (!mounted) return 'text-primary'
    if (isMobileMenuOpen) return 'text-primary'
    if (isScrolled) return 'text-primary'
    if (pathname !== '/') return 'text-primary'
    return 'text-accent'
  }

  const getTextColor = () => {
    if (!mounted) return 'text-gray-800'
    if (isMobileMenuOpen) return 'text-gray-800'
    if (isScrolled) return 'text-gray-800'
    if (pathname !== '/') return 'text-gray-800'
    return 'text-white'
  }

  const getButtonStyle = () => {
    if (!mounted) return 'bg-primary text-white'
    if (isMobileMenuOpen) return 'bg-primary text-white'
    if (isScrolled) return 'bg-primary text-white'
    if (pathname !== '/') return 'bg-primary text-white'
    return 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
  }

  if (!mounted) return null

  return (
    <header className={headerClasses}>
      <div className={`
        container-custom mx-auto flex items-center justify-between
        transition-all duration-300
        ${shrink && !isMobileMenuOpen ? 'h-[52px]' : 'h-[70px]'}
      `}>
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => {
            setActiveLink('')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="group relative flex items-center gap-2 sm:gap-3"
        >
          <div className={`
            w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center
            transition-all duration-300 group-hover:scale-105
            ${getLogoColor() === 'text-white' 
              ? 'border-2 border-white bg-transparent' 
              : 'border-2 border-primary bg-white shadow-md shadow-primary/20'
            }
          `}>
            <span className={`font-bold text-xs sm:text-base ${getLogoColor() === 'text-white' ? 'text-white' : 'text-primary'}`}>
              CSS
            </span>
          </div>
          <div>
            <span className={`font-poppins font-bold text-sm sm:text-xl ${getLogoColor()}`}>
              Cassindo
            </span>
            <span className={`text-[10px] sm:text-xs block -mt-0.5 ${getLogoColor() === 'text-white' ? 'text-white/60' : 'text-primary/60'}`}>
              Core Advanced Supply Solution
            </span>
          </div>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleLinkClick(item.label)}
              className={`
                relative text-sm lg:text-base font-medium transition-all duration-300 py-2 group
                ${getTextColor()}
                ${activeLink === item.label || pathname === item.href ? 'text-primary font-semibold' : ''}
                hover:text-primary
              `}
            >
              {item.label}
              <span className={`
                absolute -bottom-0.5 left-0 h-0.5 bg-primary transition-all duration-300
                ${activeLink === item.label || pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}
              `} />
            </Link>
          ))}

          {/* Phone Number */}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
            <a 
              href="tel:+6281776848333" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${getTextColor()} hover:text-primary`}
            >
              <HiPhone className="text-sm" />
              <span className="hidden lg:inline">+62 817 7684 8333</span>
              <span className="lg:hidden">Call</span>
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className={`
              px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5
              ${getButtonStyle()}
            `}
          >
            Request Quote
          </Link>
        </nav>

        {/* MOBILE: Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={openMenu}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open menu"
          >
            <Menu size={24} className={getTextColor()} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU - BOTTOM SHEET STYLE */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={closeMenu} />
          
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-white rounded-t-3xl shadow-2xl overflow-y-auto max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
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
                onClick={closeMenu}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                aria-label="Close menu"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            <div className="p-5">
              {/* Quick Contact */}
              <div className="mb-6">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">QUICK CONTACT</p>
                <a 
                  href="tel:+6281776848333"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 transition-all hover:bg-primary/10"
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

              {/* Navigation Menu */}
              <div className="mb-6">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">MENU</p>
                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => handleLinkClick(item.label)}
                      className={`
                        flex items-center justify-between py-3 px-4 rounded-xl font-medium
                        transition-all duration-200
                        ${activeLink === item.label || pathname === item.href
                          ? 'bg-gradient-to-r from-primary/10 to-transparent text-primary border-l-4 border-primary'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                        }
                      `}
                    >
                      <span>{item.label}</span>
                      {(activeLink === item.label || pathname === item.href) && (
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-auto pt-2">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">GET STARTED</p>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full p-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white shadow-lg shadow-primary/30 transition-all hover:scale-[0.98] active:scale-[0.98]"
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
              </div>
            </div>

            {/* Footer */}
            <div className="p-5 pt-0 pb-8 text-center text-[10px] text-gray-400 border-t border-gray-100 mt-4">
              © 2026 <span className="text-primary font-semibold">Cassindo</span> Core Advanced Supply Solution
            </div>
          </motion.div>
        </>
      )}
    </header>
  )
}
