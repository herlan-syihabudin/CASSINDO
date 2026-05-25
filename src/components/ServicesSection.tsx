'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HiOutlineCog, HiOutlineLightningBolt, HiOutlineChip, 
  HiOutlineShieldCheck, HiOutlineHome, HiOutlineOfficeBuilding,
  HiOutlineClipboardList, HiArrowRight, HiCheckCircle
} from 'react-icons/hi'

const services = [
  { 
    id: 1,
    icon: HiOutlineCog, 
    title: 'Industrial Supply', 
    description: 'Material fabrikasi & sparepart industri',
    longDesc: 'Kami menyediakan berbagai material industrial seperti raw material, komponen mesin, fastener, tools, dan perlengkapan pabrik untuk mendukung operasional harian Anda.',
    tags: ['Fast Moving', 'Genuine Parts', 'Bulk Order'],
    price: 'Start from IDR 500K',
    slug: 'industrial-supply'
  },
  { 
    id: 2,
    icon: HiOutlineLightningBolt, 
    title: 'Electrical Equipment', 
    description: 'Panel, kabel, trafo & komponen listrik',
    longDesc: 'Distributor resmi berbagai brand electrical ternama. Menyediakan kabel, panel listrik, trafo, MCB, dan kebutuhan kelistrikan industri.',
    tags: ['SNI Certified', 'Warranty', 'Installation Ready'],
    price: 'Start from IDR 250K',
    slug: 'electrical-equipment'
  },
  { 
    id: 3,
    icon: HiOutlineChip, 
    title: 'Mechanical Parts', 
    description: 'Pompa, gearbox, valve & alat berat',
    longDesc: 'Sparepart mekanikal untuk mesin produksi, pompa industri, gearbox, valve, dan komponen hydraulic untuk pabrik dan pertambangan.',
    tags: ['Original', 'Heavy Duty', 'Quick Ship'],
    price: 'Custom Quote',
    slug: 'mechanical-parts'
  },
  { 
    id: 4,
    icon: HiOutlineShieldCheck, 
    title: 'Safety Equipment', 
    description: 'APD, fire extinguisher, rambu-rambu',
    longDesc: 'Perlengkapan K3 lengkap mulai dari helm safety, rompi, sepatu safety, APAR, hingga rambu-rambu proyek sesuai standar SNI.',
    tags: ['K3 Certified', 'Complete Set', 'Bulk Price'],
    price: 'Start from IDR 150K',
    slug: 'safety-equipment'
  },
  { 
    id: 5,
    icon: HiOutlineHome, 
    title: 'Building Material', 
    description: 'Semen, baja ringan, cat, scaffolding',
    longDesc: 'Material konstruksi untuk proyek gedung, perumahan, dan infrastruktur. Termasuk semen, besi beton, baja ringan, cat tembok, dan perancah.',
    tags: ['Project Grade', 'Factory Price', 'Free Delivery'],
    price: 'Start from IDR 1M',
    slug: 'building-material'
  },
  { 
    id: 6,
    icon: HiOutlineOfficeBuilding, 
    title: 'Office Supply', 
    description: 'ATK, furniture, perangkat IT',
    longDesc: 'Perlengkapan kantor lengkap mulai dari alat tulis, meja kursi, printer, hingga perangkat IT untuk kebutuhan operasional perusahaan.',
    tags: ['Same Day', 'Subscription', 'After Sales'],
    price: 'Start from IDR 50K',
    slug: 'office-supply'
  },
  { 
    id: 7,
    icon: HiOutlineClipboardList, 
    title: 'Custom Procurement', 
    description: 'Sourcing spesifik sesuai kebutuhan proyek',
    longDesc: 'Lasan sourcing untuk barang khusus yang tidak tersedia di pasaran umum. Tim procurement kami akan mencari supplier terbaik untuk Anda.',
    tags: ['Tailor Made', 'Global Sourcing', 'Fast Response'],
    price: 'Contact Us',
    slug: 'custom-procurement',
    isHighlight: true
  },
]

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header dengan statistik real */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              7+ Kategori Produk
            </span>
            <h2 className="section-title">
              Solusi <span className="text-primary">Pengadaan</span> Terlengkap
            </h2>
            <p className="section-subtitle">
              Lebih dari <span className="font-bold text-primary">500+ klien</span> telah mempercayakan 
              kebutuhan supply chain mereka kepada kami
            </p>
          </motion.div>
        </div>

        {/* Service Cards Grid - Bisa DIKLIK */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link 
                href={`/services/${service.slug}`}
                className={`block group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 
                  ${hoveredId === service.id ? 'shadow-2xl -translate-y-2' : 'shadow-lg hover:shadow-xl'}
                  ${service.isHighlight ? 'border-2 border-primary/30' : 'border border-gray-100'}`}
              >
                {/* Highlight Badge */}
                {service.isHighlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      MOST REQUESTED
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Icon dengan background dinamis */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300
                    ${hoveredId === service.id ? 'bg-primary shadow-lg' : 'bg-primary/10'}`}>
                    <service.icon className={`text-3xl transition-colors duration-300
                      ${hoveredId === service.id ? 'text-white' : 'text-primary'}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price Indicator */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400">Mulai dari</span>
                      <p className="text-sm font-semibold text-primary">{service.price}</p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                      ${hoveredId === service.id ? 'bg-primary text-white translate-x-1' : 'bg-gray-100 text-primary'}`}>
                      <HiArrowRight className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent transition-opacity duration-300 pointer-events-none
                  ${hoveredId === service.id ? 'opacity-100' : 'opacity-0'}`} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Realistik */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 mb-4">
            <HiCheckCircle className="text-accent" />
            <span className="text-sm">Tidak menemukan yang Anda cari?</span>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            <span>Konsultasi Kebutuhan Khusus</span>
            <HiArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
          <p className="text-xs text-gray-400 mt-4">
            *Tim kami akan merespon dalam &lt; 2x24 jam
          </p>
        </motion.div>
      </div>
    </section>
  )
}
