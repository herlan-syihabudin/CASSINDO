'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  HiLightningBolt, HiTag, HiShieldCheck, 
  HiTruck, HiClipboardCheck, HiCheckCircle,
  HiUsers, HiOfficeBuilding, HiGlobeAlt,
  HiCurrencyDollar, HiClock
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
  { icon: HiUsers, value: '500+', label: 'Klien Aktif', suffix: '+' },
  { icon: HiOfficeBuilding, value: '10', label: 'Tahun Pengalaman', suffix: '+' },
  { icon: HiGlobeAlt, value: '34', label: 'Provinsi Terjangkau', suffix: '' },
]

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Header dengan Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <HiCheckCircle className="text-accent" />
            Mengapa Perusahaan Mempercayai Kami
          </span>
          <h2 className="section-title">
            Kenapa <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pilih Kami?</span>
          </h2>
          <p className="section-subtitle">
            Keunggulan kompetitif yang membuat <span className="font-semibold text-primary">500+ klien</span> terus mempercayakan 
            kebutuhan supply chain mereka kepada kami
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: idx * 0.1, type: 'spring' }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-2xl text-primary" />
              </div>
              <motion.p 
                className="text-3xl md:text-4xl font-bold text-primary mb-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: idx * 0.1 + 0.2 }}
              >
                {stat.value}{stat.suffix}
              </motion.p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid - 5 Kolom Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative group text-center p-6 rounded-2xl transition-all duration-500
                ${hoveredIndex === idx 
                  ? 'shadow-2xl -translate-y-2 bg-white' 
                  : 'shadow-md hover:shadow-xl bg-white'
                }
                border border-gray-100 overflow-hidden
              `}
            >
              {/* Animated Gradient Background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                animate={{ opacity: hoveredIndex === idx ? 0.05 : 0 }}
              />
              
              {/* Icon Container */}
              <motion.div 
                className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 
                  transition-all duration-500 relative
                  ${hoveredIndex === idx ? 'bg-primary shadow-lg' : 'bg-primary/10'}
                `}
                animate={{ 
                  rotate: hoveredIndex === idx ? 5 : 0,
                  scale: hoveredIndex === idx ? 1.05 : 1
                }}
              >
                <feature.icon className={`
                  text-3xl transition-all duration-300
                  ${hoveredIndex === idx ? 'text-white scale-110' : 'text-primary'}
                `} />
                
                {/* Ripple Effect */}
                {hoveredIndex === idx && (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0.6 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute inset-0 bg-primary rounded-2xl"
                  />
                )}
              </motion.div>

              {/* Title */}
              <h3 className={`
                font-bold text-lg mb-2 transition-all duration-300
                ${hoveredIndex === idx ? 'text-primary' : 'text-gray-900'}
              `}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                {feature.desc}
              </p>

              {/* Stat Badge */}
              <div className={`
                inline-block px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300
                ${hoveredIndex === idx 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-gray-100 text-gray-500'
                }
              `}>
                {feature.stat} • {feature.statLabel}
              </div>

              {/* Decorative Line */}
              <motion.div 
                className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                animate={{ 
                  width: hoveredIndex === idx ? '40%' : '0%',
                  x: hoveredIndex === idx ? '-50%' : '-50%'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-500 mb-4">
            Bergabung dengan <span className="font-semibold text-primary">500+ perusahaan</span> yang telah mempercayakan kebutuhan supply chain mereka
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30"
          >
            Konsultasi Gratis
            <HiLightningBolt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
