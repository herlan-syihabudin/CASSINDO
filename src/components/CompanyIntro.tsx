'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiOutlineEye, HiSparkles } from 'react-icons/hi'

export default function CompanyIntro() {
  return (
    <section className="relative section-padding overflow-hidden bg-white">
      {/* Premium Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-white" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E5EFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 shadow-lg shadow-primary/5 mb-6 relative"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-sm font-semibold tracking-wider">Tentang Cassindo</span>
            <HiSparkles className="text-accent text-xs opacity-70" />
          </motion.div>

          {/* Main Title with Gradient Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 leading-[1.2]"
          >
            <span className="text-dark">Driving Reliable</span>
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent block">
              Procurement & Supply Chain
            </span>
            <span className="text-accent">Solutions</span>
          </motion.h2>

          {/* Description with Elegant Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto pt-4">
              <strong className="text-primary font-semibold">PT Catur Sarana Solusindo (Cassindo)</strong> adalah 
              perusahaan pengadaan dan solusi supply chain yang berkomitmen mendukung kebutuhan industri, 
              konstruksi, komersial, dan proyek strategis di seluruh Indonesia.
            </p>
          </motion.div>

          {/* Vision Card - Premium Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mb-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl blur-xl" />
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 shadow-lg shadow-primary/5 inline-flex items-center gap-3 px-6 py-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <HiOutlineEye className="text-primary text-base" />
              </div>
              <span className="text-dark text-sm md:text-base font-medium">
                Visi: <span className="text-gray-500 font-normal">Mitra pengadaan terpercaya berstandar global</span>
              </span>
            </div>
          </motion.div>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/about" 
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Pelajari lebih lanjut tentang Cassindo</span>
              <HiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center gap-1 mt-8"
          >
            <div className="w-1 h-1 rounded-full bg-primary/30" />
            <div className="w-1 h-1 rounded-full bg-primary/50" />
            <div className="w-3 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
            <div className="w-1 h-1 rounded-full bg-primary/50" />
            <div className="w-1 h-1 rounded-full bg-primary/30" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
