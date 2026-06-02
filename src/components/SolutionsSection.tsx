'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiOfficeBuilding, HiHome, HiCog, HiCurrencyDollar, HiSparkles } from 'react-icons/hi'

const solutions = [
  {
    slug: 'manufaktur',
    title: 'Manufaktur',
    description: 'Sparepart mesin & material produksi',
    icon: HiOfficeBuilding,
    gradient: 'from-blue-600 to-blue-400',
    bgGradient: 'from-blue-500/20 to-blue-600/10',
    borderColor: 'border-blue-500/30',
    iconBg: 'bg-blue-500/20'
  },
  {
    slug: 'konstruksi',
    title: 'Konstruksi',
    description: 'Material proyek & peralatan bangunan',
    icon: HiHome,
    gradient: 'from-orange-500 to-orange-400',
    bgGradient: 'from-orange-500/20 to-orange-600/10',
    borderColor: 'border-orange-500/30',
    iconBg: 'bg-orange-500/20'
  },
  {
    slug: 'tambang',
    title: 'Tambang & Energi',
    description: 'Alat berat & komponen hydraulic',
    icon: HiCog,
    gradient: 'from-gray-600 to-gray-500',
    bgGradient: 'from-gray-500/20 to-gray-600/10',
    borderColor: 'border-gray-500/30',
    iconBg: 'bg-gray-500/20'
  },
  {
    slug: 'pemerintah',
    title: 'Pemerintah',
    description: 'Pengadaan barang/jasa tender',
    icon: HiCurrencyDollar,
    gradient: 'from-emerald-600 to-emerald-400',
    bgGradient: 'from-emerald-500/20 to-emerald-600/10',
    borderColor: 'border-emerald-500/30',
    iconBg: 'bg-emerald-500/20'
  },
]

export default function SolutionsSection() {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Premium Dark Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header - Kontras dengan CompanyInfo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Badge dengan gaya berbeda */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <HiSparkles className="text-accent text-xs" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Industry Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Solusi <span className="text-accent">Berdasarkan</span> Industri Anda
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Cassindo memahami tantangan unik setiap sektor. Kami hadir dengan solusi pengadaan yang tepat.
          </p>
        </motion.div>

        {/* Grid Cards - Premium & Kontras */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/solutions/${sol.slug}`}
                className={`group block relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 border ${sol.borderColor} hover:shadow-2xl hover:shadow-primary/20 overflow-hidden`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sol.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className={`relative w-14 h-14 rounded-xl ${sol.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <sol.icon className="text-2xl text-white" />
                </div>
                
                {/* Title */}
                <h3 className="relative text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {sol.title}
                </h3>
                
                {/* Description */}
                <p className="relative text-white/60 text-sm mb-4">
                  {sol.description}
                </p>
                
                {/* CTA */}
                <div className="relative flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  <span>Pelajari</span>
                  <HiArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
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
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition hover:-translate-y-0.5 shadow-lg shadow-white/10 font-semibold"
          >
            <span>Lihat Semua Solusi Industri</span>
            <HiArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
