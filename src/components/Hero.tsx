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
  HiOfficeBuilding, HiCog, HiHome, HiBeaker, HiBanknotes
} from 'react-icons/hi'

export default function Hero() {
  const [activeValue, setActiveValue] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle tooltip toggle for mobile
  const handleValueClick = (valueName: string) => {
    if (isMobile) {
      setActiveValue(activeValue === valueName ? null : valueName)
    }
  }

  // Trust Signals
  const trustSignals = [
    { value: '500+', label: 'Projects Delivered', icon: HiBriefcase },
    { value: '12+', label: 'Years Experience', icon: HiCalendar },
    { value: '24/7', label: 'Support Ready', icon: HiSupport },
    { value: '34', label: 'Cities Covered', icon: HiGlobeAlt },
  ]

  // Industries Served
  const industries = [
    { name: 'Manufacturing', icon: HiOfficeBuilding, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
    { name: 'Construction', icon: HiHome, color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
    { name: 'Mining', icon: HiCog, color: 'bg-gray-500/10 text-gray-400 border-gray-500/20' },
    { name: 'Oil & Gas', icon: HiBeaker, color: 'bg-red-500/10 text-red-400 border-red-500/20' },
    { name: 'Government', icon: HiBanknotes, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  ]

  // Core Values with SHORT descriptions & STATIC classes (no dynamic Tailwind)
  const coreValues = [
    { 
      icon: HiShieldCheck, 
      name: 'Trusted', 
      color: 'text-blue-400', 
      bgClass: 'bg-blue-500/20',
      hoverClass: 'hover:bg-blue-500/30',
      description: '500+ trusted clients nationwide',
    },
    { 
      icon: HiBadgeCheck, 
      name: 'Quality', 
      color: 'text-green-400', 
      bgClass: 'bg-green-500/20',
      hoverClass: 'hover:bg-green-500/30',
      description: 'ISO 9001:2021 certified',
    },
    { 
      icon: HiUserGroup, 
      name: 'Partnership', 
      color: 'text-purple-400', 
      bgClass: 'bg-purple-500/20',
      hoverClass: 'hover:bg-purple-500/30',
      description: 'Long-term client relationships',
    },
    { 
      icon: HiLightningBolt, 
      name: 'Efficiency', 
      color: 'text-yellow-400', 
      bgClass: 'bg-yellow-500/20',
      hoverClass: 'hover:bg-yellow-500/30',
      description: 'Fast response & delivery',
    },
    { 
      icon: HiChip, 
      name: 'Innovation', 
      color: 'text-cyan-400', 
      bgClass: 'bg-cyan-500/20',
      hoverClass: 'hover:bg-cyan-500/30',
      description: 'Modern procurement solutions',
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  }

  const valueVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  }

  const tooltipVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.95,
      transition: { duration: 0.15 }
    },
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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge/Highlight */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Indonesia's Trusted Supply Partner Since 2014</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-5"
          >
            Your Strategic 
            <span className="text-accent block"> Procurement Partner</span>
            <span className="text-white/80 text-2xl md:text-3xl block mt-2">Across Indonesia</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl"
          >
            Empowering industrial growth through reliable, efficient, 
            and innovative supply chain solutions.
          </motion.p>

          {/* Trust Signals */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
          >
            {trustSignals.map((signal, idx) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10"
              >
                <signal.icon className="text-accent text-xl" />
                <div>
                  <p className="text-white font-bold text-lg">{signal.value}</p>
                  <p className="text-white/50 text-xs">{signal.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Industries Served - NEW SECTION */}
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Industries We Serve</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, idx) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.05 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${industry.color} backdrop-blur-sm border`}
                >
                  <industry.icon className="text-xs" />
                  <span className="text-xs font-medium">{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="/contact" 
                className="btn-primary group"
                aria-label="Request a quotation"
              >
                <HiPhone className="group-hover:rotate-12 transition-transform" />
                <span>Request Quotation</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  className="hidden sm:inline"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link 
                href="/services" 
                className="btn-outline group"
                aria-label="View our services"
              >
                <HiEye />
                <span>Explore Services</span>
                <HiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Core Values - FIXED Tailwind classes (no dynamic) */}
          <motion.div 
            variants={itemVariants}
            className="mt-10"
          >
            <div className="flex items-center gap-2 mb-3">
              <p className="text-white/50 text-xs uppercase tracking-wider">Our Core Values</p>
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
                    variants={valueVariants}
                    whileHover="hover"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${value.bgClass} ${value.hoverClass} backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300`}
                  >
                    <value.icon className={`text-xs ${value.color}`} />
                    <span className="text-white text-xs font-medium">{value.name}</span>
                  </motion.div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {activeValue === value.name && (
                      <motion.div
                        variants={tooltipVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 z-20"
                      >
                        <div className="bg-gray-900/95 backdrop-blur-md rounded-lg p-2.5 shadow-xl border border-white/10">
                          <div className="flex items-center gap-1.5">
                            <value.icon className={`text-xs ${value.color}`} />
                            <h4 className="text-white font-semibold text-xs">{value.name}</h4>
                          </div>
                          <p className="text-gray-300 text-xs leading-relaxed mt-1">
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
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="group flex flex-col items-center gap-2 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-white/70 text-xs font-medium tracking-wider">SCROLL</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-accent transition-colors">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
