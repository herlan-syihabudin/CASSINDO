'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiPhone, HiEye, HiShieldCheck, 
  HiBadgeCheck, HiUserGroup, HiLightningBolt, 
  HiChip, HiArrowRight, HiInformationCircle,
  HiBriefcase, HiCalendar, HiSupport, HiGlobeAlt,
  HiOfficeBuilding, HiCog, HiHome, HiBeaker, HiCurrencyDollar
} from 'react-icons/hi'

export default function Hero() {
  const [activeValue, setActiveValue] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [screenSize, setScreenSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>('lg')

  // Detect screen size untuk responsive adjustment
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 480) setScreenSize('xs')
      else if (width < 640) setScreenSize('sm')
      else if (width < 768) setScreenSize('md')
      else if (width < 1024) setScreenSize('lg')
      else if (width < 1280) setScreenSize('xl')
      else setScreenSize('2xl')
      
      setIsMobile(width < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handleValueClick = (valueName: string) => {
    if (isMobile) {
      setActiveValue(activeValue === valueName ? null : valueName)
    }
  }

  // Trust Signals - responsive labels
  const trustSignals = [
    { value: '500+', label: screenSize === 'xs' ? 'Projects' : 'Projects Delivered', icon: HiBriefcase },
    { value: '12+', label: screenSize === 'xs' ? 'Years' : 'Years Experience', icon: HiCalendar },
    { value: '24/7', label: screenSize === 'xs' ? 'Support' : 'Support Ready', icon: HiSupport },
    { value: '34', label: screenSize === 'xs' ? 'Cities' : 'Cities Covered', icon: HiGlobeAlt },
  ]

  const industries = [
    { name: screenSize === 'xs' ? 'Mfg' : 'Manufacturing', icon: HiOfficeBuilding, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: screenSize === 'xs' ? 'Const' : 'Construction', icon: HiHome, color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    { name: 'Mining', icon: HiCog, color: 'bg-gray-500/10 text-gray-400 border-gray-500/20' },
    { name: screenSize === 'xs' ? 'O&G' : 'Oil & Gas', icon: HiBeaker, color: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { name: screenSize === 'xs' ? 'Gov' : 'Government', icon: HiCurrencyDollar, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  ]

  const coreValues = [
    { icon: HiShieldCheck, name: 'Trusted', color: 'text-blue-400', bgClass: 'bg-blue-500/20', hoverClass: 'hover:bg-blue-500/30', description: '500+ trusted clients' },
    { icon: HiBadgeCheck, name: 'Quality', color: 'text-green-400', bgClass: 'bg-green-500/20', hoverClass: 'hover:bg-green-500/30', description: 'ISO 9001:2021' },
    { icon: HiUserGroup, name: 'Partnership', color: 'text-purple-400', bgClass: 'bg-purple-500/20', hoverClass: 'hover:bg-purple-500/30', description: 'Long-term relationships' },
    { icon: HiLightningBolt, name: 'Efficiency', color: 'text-yellow-400', bgClass: 'bg-yellow-500/20', hoverClass: 'hover:bg-yellow-500/30', description: 'Fast response' },
    { icon: HiChip, name: 'Innovation', color: 'text-cyan-400', bgClass: 'bg-cyan-500/20', hoverClass: 'hover:bg-cyan-500/30', description: 'Modern solutions' },
  ]

  // Dynamic font sizes based on screen size
  const getHeadingSize = () => {
    switch(screenSize) {
      case 'xs': return 'text-2xl'
      case 'sm': return 'text-3xl'
      case 'md': return 'text-4xl'
      case 'lg': return 'text-5xl'
      case 'xl': return 'text-6xl'
      default: return 'text-7xl'
    }
  }

  const getSubheadingSize = () => {
    switch(screenSize) {
      case 'xs': return 'text-base'
      case 'sm': return 'text-lg'
      case 'md': return 'text-xl'
      default: return 'text-2xl'
    }
  }

  const getDescriptionSize = () => {
    switch(screenSize) {
      case 'xs': return 'text-xs'
      case 'sm': return 'text-sm'
      default: return 'text-base'
    }
  }

  const getPadding = () => {
    switch(screenSize) {
      case 'xs': return 'py-4'
      case 'sm': return 'py-6'
      default: return 'py-8'
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format"
          alt="Industrial warehouse and logistics background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`w-full ${screenSize === 'xs' ? 'max-w-full' : 'max-w-5xl'}`}
        >
          {/* Badge/Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-3 sm:mb-4 md:mb-6"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/80 text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
              {screenSize === 'xs' ? 'Trusted Partner Since 2014' : "Indonesia's Trusted Supply Partner Since 2014"}
            </span>
          </motion.div>

          {/* Main Heading - Responsive */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${getHeadingSize()} font-bold text-white leading-tight mb-2 sm:mb-3 md:mb-5`}
          >
            {screenSize === 'xs' ? (
              <>
                Your Strategic
                <span className="text-accent block"> Procurement</span>
                <span className="text-white/70 text-base block mt-1">Across Indonesia</span>
              </>
            ) : screenSize === 'sm' ? (
              <>
                Your Strategic 
                <span className="text-accent block"> Procurement Partner</span>
                <span className="text-white/70 text-lg block mt-1">Across Indonesia</span>
              </>
            ) : (
              <>
                Your Strategic 
                <span className="text-accent block md:inline"> Procurement Partner</span>
                <span className="text-white/80 text-xl md:text-2xl lg:text-3xl block md:inline md:ml-2">Across Indonesia</span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`${getDescriptionSize()} text-white/70 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-2xl`}
          >
            {screenSize === 'xs' ? (
              <>Reliable supply chain solutions for industrial & commercial needs. <span className="text-accent">24/7 Support.</span></>
            ) : (
              <>Empowering industrial growth through reliable, efficient, and innovative supply chain solutions. <span className="text-accent font-semibold">24/7 Support.</span></>
            )}
          </motion.p>

          {/* Trust Signals - Grid responsif */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 ${getPadding()}`}
          >
            {trustSignals.map((signal, idx) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 py-2 sm:px-3 sm:py-3 border border-white/10"
              >
                <signal.icon className="text-accent text-base sm:text-lg md:text-xl" />
                <div>
                  <p className="text-white font-bold text-sm sm:text-base md:text-lg">{signal.value}</p>
                  <p className="text-white/40 text-[10px] sm:text-xs">{signal.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Industries Served - Wrap responsif */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-wider mb-2 sm:mb-3">Industries We Serve</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {industries.map((industry, idx) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  className={`flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full ${industry.color} backdrop-blur-sm border`}
                >
                  <industry.icon className="text-[10px] sm:text-xs" />
                  <span className="text-[10px] sm:text-xs font-medium">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons - Stack di mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4"
          >
            <Link 
              href="/contact" 
              className="btn-primary group w-full sm:w-auto justify-center text-sm sm:text-base"
            >
              <HiPhone className="text-sm sm:text-base group-hover:rotate-12 transition-transform" />
              <span>{screenSize === 'xs' ? 'Quote' : 'Request Quotation'}</span>
            </Link>

            <Link 
              href="/services" 
              className="btn-outline group w-full sm:w-auto justify-center text-sm sm:text-base"
            >
              <HiEye className="text-sm sm:text-base" />
              <span>{screenSize === 'xs' ? 'Services' : 'Explore Services'}</span>
              <HiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sm" />
            </Link>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 sm:mt-8 md:mt-10"
          >
            <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
              <p className="text-white/40 text-[8px] sm:text-[10px] uppercase tracking-wider">Core Values</p>
              <HiInformationCircle className="text-white/20 text-[8px] sm:text-[10px]" />
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {coreValues.map((value) => (
                <div
                  key={value.name}
                  className="relative"
                  onMouseEnter={() => !isMobile && setActiveValue(value.name)}
                  onMouseLeave={() => !isMobile && setActiveValue(null)}
                  onClick={() => handleValueClick(value.name)}
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full ${value.bgClass} ${value.hoverClass} backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300`}
                  >
                    <value.icon className={`text-[10px] sm:text-xs ${value.color}`} />
                    <span className="text-white/80 text-[10px] sm:text-xs font-medium">{value.name}</span>
                  </motion.div>

                  <AnimatePresence>
                    {activeValue === value.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 sm:mb-2 w-36 sm:w-44 z-20"
                      >
                        <div className="bg-gray-900/95 backdrop-blur-md rounded-lg p-1.5 sm:p-2 shadow-xl border border-white/10">
                          <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed">
                            {value.description}
                          </p>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-900/95 rotate-45 border-r border-b border-white/10" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="group flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-white/50 text-[8px] sm:text-[10px] font-medium tracking-wider">SCROLL</span>
          <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border border-white/30 rounded-full flex justify-center group-hover:border-accent transition-colors">
            <motion.div 
              className="w-0.5 h-1 sm:w-1 sm:h-1.5 bg-white rounded-full mt-1.5 sm:mt-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
