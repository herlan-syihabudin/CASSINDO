'use client'

import { useState } from 'react'
import Link from 'next/link'  // ← TAMBAHKAN INI!
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  HiLightningBolt, HiTag, HiShieldCheck, 
  HiTruck, HiClipboardCheck, HiCheckCircle,
  HiUsers, HiOfficeBuilding, HiGlobeAlt,
  HiCurrencyDollar, HiClock, HiArrowRight
} from 'react-icons/hi'

const features = [
  { 
    icon: HiLightningBolt, 
    title: 'Fast Response', 
    desc: 'Quotation & follow up dalam 2x24 jam',
    stat: '< 24 jam',
    statLabel: 'Respon Rata-rata',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    icon: HiCurrencyDollar, 
    title: 'Competitive Price', 
    desc: 'Harga terbaik dari jaringan supplier langsung',
    stat: '30%',
    statLabel: 'Hemat Biaya',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    icon: HiShieldCheck, 
    title: 'Trusted Vendor', 
    desc: 'Terdaftar di e-katalog & mitra BUMN',
    stat: '50+',
    statLabel: 'Mitra Aktif',
    color: 'from-blue-500 to-indigo-500'
  },
  { 
    icon: HiTruck, 
    title: 'Nationwide Delivery', 
    desc: 'Jangkau seluruh Indonesia',
    stat: '34+',
    statLabel: 'Provinsi',
    color: 'from-purple-500 to-pink-500'
  },
  { 
    icon: HiClipboardCheck, 
    title: 'Quality Control', 
    desc: 'Inspeksi ketat sebelum pengiriman',
    stat: '100%',
    statLabel: 'Inspeksi',
    color: 'from-cyan-500 to-teal-500'
  },
]

const stats = [
  { icon: HiUsers, value: '30+', label: 'Klien Aktif', suffix: '+' },
  { icon: HiOfficeBuilding, value: '10', label: 'Tahun Pengalaman', suffix: '+' },
  { icon: HiGlobeAlt, value: '34', label: 'Provinsi Terjangkau', suffix: '' },
]

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">
            Kenapa <span className="text-primary">Memilih Cassindo?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Keunggulan kompetitif yang membuat klien terus mempercayakan kebutuhan supply chain mereka kepada kami
          </p>
        </motion.div>

        {/* Stats Row - 3 Cards */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: idx * 0.1, type: 'spring' }}
              className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-2xl text-primary" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid - 5 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative group text-center p-5 rounded-xl transition-all duration-300
                ${hoveredIndex === idx 
                  ? 'shadow-lg -translate-y-1 bg-white' 
                  : 'shadow-sm hover:shadow-md bg-white'
                }
                border border-gray-100
              `}
            >
              {/* Icon Container */}
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 
                transition-all duration-300
                ${hoveredIndex === idx ? 'bg-primary' : 'bg-primary/10'}
              `}>
                <feature.icon className={`
                  text-xl transition-all duration-300
                  ${hoveredIndex === idx ? 'text-white' : 'text-primary'}
                `} />
              </div>

              {/* Title */}
              <h3 className={`
                font-bold text-sm mb-1 transition-all duration-300
                ${hoveredIndex === idx ? 'text-primary' : 'text-gray-800'}
              `}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-xs mb-2 leading-relaxed">
                {feature.desc}
              </p>

              {/* Stat Badge */}
              <span className={`
                inline-block px-2 py-0.5 rounded-full text-[10px] font-medium transition-all duration-300
                ${hoveredIndex === idx 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-gray-100 text-gray-500'
                }
              `}>
                {feature.stat}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-gray-400 mb-3 text-sm">
            <HiCheckCircle className="text-accent" />
            <span>Siap menjadi mitra supply chain Anda?</span>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30"
          >
            <span>Konsultasi Gratis</span>
            <HiArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
