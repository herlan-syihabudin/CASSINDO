'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiPhone, HiDocumentText, HiShieldCheck, 
  HiBadgeCheck, HiUserGroup, HiLightningBolt, 
  HiChip, HiArrowRight, HiInformationCircle
} from 'react-icons/hi'

export default function Hero() {
  const [activeValue, setActiveValue] = useState<string | null>(null)

  // Core Values with descriptions
  const coreValues = [
    { 
      icon: HiShieldCheck, 
      name: 'Trusted', 
      color: 'text-blue-400', 
      bg: 'bg-blue-500/20',
      hoverBg: 'bg-blue-500/30',
      description: 'Lebih dari 500+ klien mempercayakan kebutuhan supply chain mereka kepada kami sejak 2014.',
      longDesc: 'Kami berkomitmen memberikan layanan terpercaya dengan integritas tinggi.'
    },
    { 
      icon: HiBadgeCheck, 
      name: 'Quality', 
      color: 'text-green-400', 
      bg: 'bg-green-500/20',
      hoverBg: 'bg-green-500/30',
      description: 'Produk bersertifikasi ISO 9001:2021 dengan quality control ketat sebelum pengiriman.',
      longDesc: 'Setiap produk melalui inspeksi menyeluruh untuk memastikan kualitas terbaik.'
    },
    { 
      icon: HiUserGroup, 
      name: 'Partnership', 
      color: 'text-purple-400', 
      bg: 'bg-purple-500/20',
      hoverBg: 'bg-purple-500/30',
      description: 'Membangun hubungan jangka panjang dengan klien dan supplier terpercaya.',
      longDesc: 'Kami percaya kesuksesan bersama adalah kunci pertumbuhan berkelanjutan.'
    },
    { 
      icon: HiLightningBolt, 
      name: 'Efficiency', 
      color: 'text-yellow-400', 
      bg: 'bg-yellow-500/20',
      hoverBg: 'bg-yellow-500/30',
      description: 'Respon cepat &lt; 2x24 jam dengan proses yang terintegrasi dan efisien.',
      longDesc: 'Sistem manajemen modern untuk mempercepat proses pengadaan.'
    },
    { 
      icon: HiChip, 
      name: 'Innovation', 
      color: 'text-cyan-400', 
      bg: 'bg-cyan-500/20',
      hoverBg: 'bg-cyan-500/30',
      description: 'Terbuka dengan teknologi baru untuk solusi pengadaan yang lebih baik.',
      longDesc: 'Kami terus berinovasi untuk memberikan nilai lebih kepada klien.'
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge/Highlight */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Indonesia's Trusted Supply Partner</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-5"
          >
            Trusted Supply & 
            <span className="text-accent block md:inline"> Solutions Partner</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
          >
            Reliable procurement solutions for industrial, commercial, 
            and project needs across Indonesia. <span className="text-accent font-semibold">24/7 Support.</span>
          </motion.p>

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
                <HiDocumentText />
                <span>Contact Sales</span>
                <HiArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Core Values - 5 Pillars with Tooltips */}
          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <p className="text-white/60 text-sm uppercase tracking-wider">Our Core Values</p>
              <HiInformationCircle className="text-white/40 text-xs" />
            </div>
            <div className="flex flex-wrap gap-3">
              {coreValues.map((value, idx) => (
                <div
                  key={value.name}
                  className="relative"
                  onMouseEnter={() => setActiveValue(value.name)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <motion.div
                    variants={valueVariants}
                    whileHover="hover"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full ${value.bg} backdrop-blur-sm border border-white/10 cursor-pointer transition-all duration-300 hover:${value.hoverBg}`}
                  >
                    <value.icon className={`text-sm ${value.color}`} />
                    <span className="text-white text-sm font-medium">{value.name}</span>
                  </motion.div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {activeValue === value.name && (
                      <motion.div
                        variants={tooltipVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 z-20"
                      >
                        <div className="bg-gray-900/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <value.icon className={`text-sm ${value.color}`} />
                            <h4 className="text-white font-semibold text-sm">{value.name}</h4>
                          </div>
                          <p className="text-gray-300 text-xs leading-relaxed">
                            {value.description}
                          </p>
                          <div className="mt-2 pt-2 border-t border-white/10">
                            <p className="text-gray-400 text-xs italic">
                              {value.longDesc}
                            </p>
                          </div>
                          {/* Tooltip Arrow */}
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
