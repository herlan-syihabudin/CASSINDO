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

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const handleValueClick = (valueName: string) => {
    if (isMobile) {
      setActiveValue(activeValue === valueName ? null : valueName)
    }
  }

  const trustSignals = [
    { value: '500+', label: 'Projects', fullLabel: 'Projects Delivered', icon: HiBriefcase },
    { value: '12+', label: 'Years', fullLabel: 'Years Experience', icon: HiCalendar },
    { value: '24/7', label: 'Support', fullLabel: 'Support Ready', icon: HiSupport },
    { value: '34', label: 'Cities', fullLabel: 'Cities Covered', icon: HiGlobeAlt },
  ]

  const industries = [
    { name: 'Manufacturing', shortName: 'Mfg', icon: HiOfficeBuilding, color: 'bg-blue-500/10 text-blue-400' },
    { name: 'Construction', shortName: 'Const', icon: HiHome, color: 'bg-orange-500/10 text-orange-400' },
    { name: 'Mining', shortName: 'Mining', icon: HiCog, color: 'bg-gray-500/10 text-gray-400' },
    { name: 'Oil & Gas', shortName: 'O&G', icon: HiBeaker, color: 'bg-red-500/10 text-red-400' },
    { name: 'Government', shortName: 'Gov', icon: HiCurrencyDollar, color: 'bg-emerald-500/10 text-emerald-400' },
  ]

  const coreValues = [
    { icon: HiShieldCheck, name: 'Trusted', color: 'text-blue-400', bgClass: 'bg-blue-500/20', hoverClass: 'hover:bg-blue-500/30', description: '500+ trusted clients' },
    { icon: HiBadgeCheck, name: 'Quality', color: 'text-green-400', bgClass: 'bg-green-500/20', hoverClass: 'hover:bg-green-500/30', description: 'ISO 9001:2021 certified' },
    { icon: HiUserGroup, name: 'Partnership', color: 'text-purple-400', bgClass: 'bg-purple-500/20', hoverClass: 'hover:bg-purple-500/30', description: 'Long-term relationships' },
    { icon: HiLightningBolt, name: 'Efficiency', color: 'text-yellow-400', bgClass: 'bg-yellow-500/20', hoverClass: 'hover:bg-yellow-500/30', description: 'Fast response & delivery' },
    { icon: HiChip, name: 'Innovation', color: 'text-cyan-400', bgClass: 'bg-cyan-500/20', hoverClass: 'hover:bg-cyan-500/30', description: 'Modern solutions' },
  ]

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
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
      <div className="container-custom relative z-10 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto lg:mx-0">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 md:mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-xs md:text-sm font-medium">
              Indonesia's Trusted Supply Partner Since 2014
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 md:mb-5"
          >
            Your Strategic 
            <span className="text-accent block md:inline"> Procurement Partner</span>
            <span className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl block md:inline md:ml-2 mt-1 md:mt-0">Across Indonesia</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed max-w-2xl"
          >
            Empowering industrial growth through reliable, efficient, 
            and innovative supply chain solutions. <span className="text-accent font-semibold">24/7 Support.</span>
          </motion.p>

          {/* Trust Signals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8"
          >
            {trustSignals.map((signal, idx) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 border border-white/10"
              >
                <signal.icon className="text-accent text-lg md:text-xl" />
                <div>
                  <p className="text-white font-bold text-base md:text-lg">{signal.value}</p>
                  <p className="text-white/50 text-xs md:text-sm hidden sm:block">{signal.fullLabel}</p>
                  <p className="text-white/50 text-xs sm:hidden">{signal.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Industries Served */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 md:mb-8"
          >
            <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Industries We Serve</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, idx) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${industry.color} backdrop-blur-sm border border-white/10`}
                >
                  <industry.icon className="text-xs md:text-sm" />
                  <span className="text-xs md:text-sm font-medium hidden sm:inline">{industry.name}</span>
                  <span className="text-xs font-medium sm:hidden">{industry.shortName}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10"
          >
            <Link 
              href="/contact" 
              className="btn-primary group w-full sm:w-auto justify-center"
            >
              <HiPhone className="group-hover:rotate-12 transition-transform" />
              <span>Request Quotation</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                className="hidden md:inline"
              >
                →
              </motion.span>
            </Link>

            <Link 
              href="/services" 
              className="btn-outline group w-full sm:w-auto justify-center"
            >
              <HiEye />
              <span>Explore Services</span>
              <HiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <p className="text-white/50 text-xs uppercase tracking-wider">Core Values</p>
              <HiInformationCircle className="text-white/30 text-xs" />
            </div>
            <div className="flex flex-wrap gap-2">
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
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${value.bgClass} ${value.hoverClass} backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300`}
                  >
                    <value.icon className={`text-xs ${value.color}`} />
                    <span className="text-white/90 text-xs md:text-sm font-medium">{value.name}</span>
                  </motion.div>

                  <AnimatePresence>
                    {activeValue === value.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 z-20"
                      >
                        <div className="bg-gray-900/95 backdrop-blur-md rounded-lg p-2 shadow-xl border border-white/10">
                          <p className="text-gray-300 text-xs leading-relaxed">
                            {value.description}
                          </p>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 rotate-45 border-r border-b border-white/10" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="group flex flex-col items-center gap-2 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-white/60 text-xs font-medium tracking-wider">SCROLL</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-accent transition-colors">
            <motion.div 
              className="w-1 h-1.5 md:w-1.5 md:h-2 bg-white rounded-full mt-1.5 md:mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
