'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiPhone, HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format"
          alt="Industrial warehouse background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content - SEDERHANA & FOKUS */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/80 text-xs md:text-sm">Indonesia's Trusted Supply Partner</span>
          </motion.div>

          {/* Main Heading - SHARP & POWERFUL */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4"
          >
            Your Strategic
            <span className="text-accent block"> Procurement Partner</span>
          </motion.h1>

          {/* Description - PENDEK & FOKUS */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed max-w-xl"
          >
            One partner for procurement, MRO products, facility support, 
  and technical services across Indonesia.
          </motion.p>

          {/* CTA Buttons - CLEAN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition hover:-translate-y-0.5 shadow-lg shadow-primary/30"
            >
              <HiPhone className="text-sm" />
              <span>Request Quotation</span>
            </Link>

            <Link 
              href="/solutions" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition hover:-translate-y-0.5"
            >
              <span>Explore Solutions</span>
              <HiArrowRight className="text-sm" />
            </Link>
          </motion.div>

          {/* Trust Signals - COMPACT & ELEGAN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-white/50 text-sm">Products Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">Nationwide</span>
              <span className="text-white/50 text-sm">Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-white/50 text-sm">Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">34</span>
              <span className="text-white/50 text-sm">Cities</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="group flex flex-col items-center gap-1 cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-white/40 text-[8px] tracking-wider">SCROLL</span>
          <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center group-hover:border-accent transition">
            <motion.div 
              className="w-0.5 h-1 bg-white rounded-full mt-1.5"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
