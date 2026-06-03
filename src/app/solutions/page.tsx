'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiSparkles } from 'react-icons/hi'
import { 
  FaIndustry, FaTools, FaOilCan, 
  FaWarehouse, FaBuilding, FaGasPump 
} from 'react-icons/fa'

const solutions = [
  {
    slug: 'manufaktur',
    title: 'Manufaktur',
    description: 'Sparepart mesin & material produksi',
    icon: FaIndustry,
    borderColor: 'border-white/10', // Dibikin seragam soft white
    image: '/images/solutions/manufaktur.jpg'
  },
  {
    slug: 'konstruksi',
    title: 'Konstruksi',
    description: 'Material proyek & peralatan bangunan',
    icon: FaTools, // Diubah dari FaHome ke FaTools agar lebih industrial
    borderColor: 'border-white/10',
    image: '/images/solutions/konstruksi.jpg'
  },
  {
    slug: 'energy-utility',
    title: 'Energy & Utility',
    description: 'Peralatan & komponen energi',
    icon: FaOilCan,
    borderColor: 'border-white/10',
    image: '/images/solutions/energy.jpg'
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Peralatan & safety migas',
    icon: FaGasPump, // Diubah agar tidak kembar dengan ikon konstruksi lama
    borderColor: 'border-white/10',
    image: '/images/solutions/oil-gas.jpg'
  },
  {
    slug: 'commercial-building',
    title: 'Commercial Building',
    description: 'Perlengkapan gedung komersial',
    icon: FaBuilding,
    borderColor: 'border-white/10',
    image: '/images/solutions/commercial.jpg'
  },
  {
    slug: 'warehouse-logistik',
    title: 'Warehouse & Logistik',
    description: 'Peralatan gudang & distribusi',
    icon: FaWarehouse,
    borderColor: 'border-white/10',
    image: '/images/solutions/warehouse.jpg'
  },
]

export default function SolutionsSection() {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Decorations */}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
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

        {/* Grid Cards - 6 kolom dengan icon premium putih */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/solutions/${sol.slug}`}
                className={`group block relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border ${sol.borderColor} hover:border-white/30`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sol.image})` }}
                />
                {/* Dark Overlay - Konsisten & solid */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/85 to-gray-900/40 transition-colors duration-300 group-hover:from-gray-950 group-hover:via-gray-950/90" />
                
                {/* Content - Posisi di tengah */}
                <div className="relative flex flex-col items-center text-center p-5 min-h-[210px] justify-center z-10">
                  {/* Icon Premium Putih dengan efek Hover Glare */}
                  <div className="mb-4 p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-inner">
                    <sol.icon className="text-2xl text-white/80 group-hover:text-gray-900 transition-colors duration-300 filter drop-shadow-sm" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-sm font-bold text-white mb-1.5 tracking-wide transition-colors duration-300">
                    {sol.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/40 text-[10px] leading-relaxed px-1 transition-colors duration-300 group-hover:text-white/60">
                    {sol.description}
                  </p>
                  
                  {/* CTA - muncul saat hover */}
                  <div className="mt-3 flex items-center gap-1 text-white text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    <span>Pelajari</span>
                    <HiArrowRight className="text-[8px]" />
                  </div>
                </div>

                {/* Decorative Bottom Line (White/Accent Glare) */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
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
          className="text-center mt-10"
        >
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition hover:-translate-y-0.5 shadow-lg shadow-white/5 font-semibold text-sm"
          >
            <span>Lihat Semua Solusi Industri</span>
            <HiArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
