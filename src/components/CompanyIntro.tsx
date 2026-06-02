'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { 
  HiOutlineEye, HiOutlineChip, HiOutlineShieldCheck, 
  HiOutlineLightningBolt, HiArrowRight, HiTruck,
  HiCheckCircle, HiGlobeAlt, HiUsers, HiOfficeBuilding
} from 'react-icons/hi'

export default function CompanyIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: HiOfficeBuilding },  // ← GANTI
    { value: '50+', label: 'Trusted Partners', icon: HiUsers },
    { value: '34', label: 'Cities Covered', icon: HiGlobeAlt },
    { value: '100%', label: 'Satisfaction', icon: HiCheckCircle },
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

            {/* Main Title */}
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

            {/* Vision - Full width card */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <HiOutlineEye className="text-lg text-primary" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">Visi</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-14">
                  Menjadi mitra pengadaan dan supply chain terpercaya yang menghadirkan solusi 
                  terintegrasi berstandar global untuk mendukung pertumbuhan industri dan pembangunan Indonesia.
                </p>
              </div>
            </div>

            {/* Mission - List dengan border kiri */}
            <div className="mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-dark text-lg mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-accent rounded-full" />
                  Misi Kami
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <HiOutlineChip className="text-accent text-sm mt-0.5 flex-shrink-0" />
                    <p className="text-gray-500 text-sm">Menyediakan solusi pengadaan yang efisien, transparan, dan bernilai tambah</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiOutlineShieldCheck className="text-accent text-sm mt-0.5 flex-shrink-0" />
                    <p className="text-gray-500 text-sm">Menjaga kualitas produk dan layanan melalui kemitraan strategis dengan pemasok terpercaya</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <HiOutlineLightningBolt className="text-accent text-sm mt-0.5 flex-shrink-0" />
                    <p className="text-gray-500 text-sm">Mendorong inovasi dan perbaikan berkelanjutan untuk menjawab kebutuhan industri</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats - Premium Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
                >
                  <stat.icon className="text-primary text-lg mx-auto mb-1" />
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-[10px] text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Legalitas - Badge Style */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HiCheckCircle className="text-primary text-xs" />
                </div>
                <h4 className="font-semibold text-dark text-sm">Legal & Compliance</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full text-xs border border-gray-200">
                  <HiCheckCircle className="text-accent text-[10px]" />
                  NIB Terverifikasi
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full text-xs border border-gray-200">
                  <HiCheckCircle className="text-accent text-[10px]" />
                  NPWP Aktif
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full text-xs border border-gray-200">
                  <HiCheckCircle className="text-accent text-[10px]" />
                  ISO 9001:2021
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full text-xs border border-gray-200">
                  <HiCheckCircle className="text-accent text-[10px]" />
                  SKT Terdaftar
                </span>
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

          {/* Right Side - Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800" 
                alt="Warehouse Cassindo"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating Card Top Right - ISO Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <HiOutlineShieldCheck className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="text-primary font-bold text-xs">ISO 9001:2021</p>
                      <p className="text-gray-400 text-[9px]">Certified</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card Bottom Left - Client Stat */}
              <div className="absolute bottom-4 left-4 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <HiUsers className="text-accent text-base" />
                    </div>
                    <div>
                      <p className="text-dark font-bold text-sm">500+ Clients</p>
                      <p className="text-gray-400 text-[9px]">Trusted Nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card Bottom Right - Delivery */}
              <div className="absolute bottom-4 right-4 z-20">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <HiTruck className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-primary font-bold text-xs">34 Cities</p>
                      <p className="text-gray-400 text-[9px]">Nationwide</p>
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
