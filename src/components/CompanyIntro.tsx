'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { 
  HiOutlineEye, HiOutlineStar, HiOutlineChip, 
  HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineLightningBolt,
  HiArrowRight, HiCheckCircle, HiTruck
} from 'react-icons/hi'

export default function CompanyIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Trusted Partners' },
    { value: '34', label: 'Cities Covered' },
    { value: '100%', label: 'Satisfaction' },
  ]

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Subheading */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-primary text-sm font-semibold tracking-wide">Tentang Cassindo</span>
            </div>

            {/* Main Title - Baru */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 leading-tight">
              Driving Reliable Procurement &
              <span className="text-accent block"> Supply Chain Solutions</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong className="text-primary font-semibold">PT Catur Sarana Solusindo (Cassindo)</strong> adalah 
              perusahaan pengadaan dan solusi supply chain yang berkomitmen mendukung kebutuhan industri, 
              konstruksi, komersial, dan proyek strategis di seluruh Indonesia.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Dengan jaringan pemasok yang luas serta pemahaman mendalam terhadap kebutuhan pasar, 
              kami membantu pelanggan memperoleh solusi pengadaan yang lebih efektif untuk mendukung 
              keberlangsungan dan pertumbuhan bisnis mereka.
            </p>

            {/* Vision & Mission Cards - SEDERHANA */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Vision Card */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <HiOutlineEye className="text-xl text-primary" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">Visi</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Menjadi mitra pengadaan dan supply chain terpercaya yang menghadirkan solusi 
                  terintegrasi berstandar global.
                </p>
              </div>

              {/* Mission Card */}
              <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <HiOutlineStar className="text-xl text-accent" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">Misi</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-gray-500 text-xs">
                    <HiOutlineChip className="text-accent text-xs mt-0.5 flex-shrink-0" />
                    <span>Solusi pengadaan efisien & transparan</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-500 text-xs">
                    <HiOutlineShieldCheck className="text-accent text-xs mt-0.5 flex-shrink-0" />
                    <span>Kualitas melalui mitra terpercaya</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-500 text-xs">
                    <HiOutlineLightningBolt className="text-accent text-xs mt-0.5 flex-shrink-0" />
                    <span>Inovasi berkelanjutan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - Tanpa Icon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Legalitas - Simplified */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <h4 className="font-semibold text-dark mb-3 text-sm">Legalitas & Sertifikasi</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="font-medium text-dark">NIB:</span> <span className="text-gray-500">1234567890123</span></div>
                <div><span className="font-medium text-dark">NPWP:</span> <span className="text-gray-500">63.541.230.7-021.000</span></div>
                <div><span className="font-medium text-dark">ISO 9001:</span> <span className="text-gray-500">2021</span></div>
                <div><span className="font-medium text-dark">SKT:</span> <span className="text-gray-500">Terdaftar</span></div>
              </div>
            </div>

            {/* CTA Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6"
            >
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                <span>Pelajari lebih lanjut</span>
                <HiArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800" 
                alt="Warehouse Cassindo"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Badge overlay - Simplified */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <HiTruck className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-xs">Nationwide Delivery</p>
                      <p className="text-white/60 text-[10px]">Jangkau 34 provinsi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
