'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FiLightning, FiActivity, FiShield, 
  FiTruck, FiCheckSquare, FiArrowRight 
} from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'

const features = [
  { 
    icon: FiLightning, 
    title: 'Fast Response', 
    desc: 'Quotation & follow up dalam waktu kurang dari 24 jam.',
    stat: '< 24 Jam',
    badgeColor: 'bg-amber-50 text-amber-600 border-amber-200'
  },
  { 
    icon: FiActivity, 
    title: 'Competitive Price', 
    desc: 'Harga terbaik dari jaringan supplier langsung terintegrasi.',
    stat: '30% Hemat',
    badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  },
  { 
    icon: FiShield, 
    title: 'Trusted Vendor', 
    desc: 'Terdaftar resmi di e-katalog & mitra BUMN.',
    stat: 'Mitra BUMN',
    badgeColor: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  { 
    icon: FiTruck, 
    title: 'Nationwide Delivery', 
    desc: 'Distribusi logistik ke seluruh wilayah Indonesia.',
    stat: '34 Provinsi',
    badgeColor: 'bg-purple-50 text-purple-600 border-purple-200'
  },
  { 
    icon: FiCheckSquare, 
    title: 'Quality Control', 
    desc: 'Inspeksi ketat sebelum pengiriman.',
    stat: '100% QC',
    badgeColor: 'bg-cyan-50 text-cyan-600 border-cyan-200'
  },
]

const stats = [
  { value: '30+', label: 'Klien Aktif' },
  { value: '100+', label: 'Trusted Suppliers' },
  { value: '24/7', label: 'Support System' },
  { value: '34', label: 'Provinsi Coverage' },
]

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="relative py-24 bg-gray-50/50 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
            Kenapa Memilih <span className="text-primary">Cassindo?</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-base">
            Keunggulan kompetitif yang memastikan supply chain perusahaan Anda berjalan efisien.
          </p>
        </div>

        {/* Stats Row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 text-center mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-center p-2">
              <span className="text-3xl md:text-4xl font-extrabold text-dark tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-white rounded-xl p-5 border border-gray-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Border Gradient */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 ${hoveredIndex === idx ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-gray-50 text-primary'}`}>
                  <feature.icon className="text-2xl" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-dark text-sm mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {feature.desc}
                </p>
              </div>

              {/* Badge */}
              <div className="pt-2">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${feature.badgeColor}`}>
                  {feature.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Dark Navy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-dark rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <HiCheckCircle className="text-accent text-xl" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">
                Siap mengoptimalkan supply chain perusahaan Anda?
              </h4>
              <p className="text-white/50 text-xs mt-0.5">
                Dapatkan penawaran harga terbaik & konsultasi gratis sekarang.
              </p>
            </div>
          </div>

          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:-translate-y-0.5 shrink-0"
          >
            <span>Hubungi Tim Ahli Kami</span>
            <FiArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
