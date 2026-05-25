'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiPhone, HiDocumentText } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Trusted General Supply & Trading Partner
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Reliable procurement solutions for industrial, commercial, and project needs across Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              <HiPhone /> Request Quotation
            </Link>
            <Link href="/services" className="btn-outline">
              <HiDocumentText /> Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-ping" />
        </div>
      </div>
    </section>
  )
}
