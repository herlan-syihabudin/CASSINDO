'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  HiPhone, HiDocumentText, HiShieldCheck, 
  HiBadgeCheck, HiHandshake, HiLightningBolt, 
  HiChip, HiArrowRight 
} from 'react-icons/hi'

export default function Hero() {
  // Core Values
  const coreValues = [
    { icon: HiShieldCheck, name: 'Trusted', color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { icon: HiBadgeCheck, name: 'Quality', color: 'text-green-400', bg: 'bg-green-500/20' },
    { icon: HiHandshake, name: 'Partnership', color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { icon: HiLightningBolt, name: 'Efficiency', color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
    { icon: HiChip, name: 'Innovation', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
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

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Next.js Image optimization */}
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

          {/* Core Values - 5 Pillars */}
          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
            <p className="text-white/60 text-sm uppercase tracking-wider mb-4">Our Core Values</p>
            <div className="flex flex-wrap gap-3">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={value.name}
                  variants={valueVariants}
                  whileHover="hover"
                  custom={idx}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${value.bg} backdrop-blur-sm border border-white/10`}
                >
                  <value.icon className={`text-sm ${value.color}`} />
                  <span className="text-white text-sm font-medium">{value.name}</span>
                </motion.div>
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

      {/* Gradient overlay at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
