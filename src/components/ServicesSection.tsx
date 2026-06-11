'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const services = [
  { 
    id: 1,
    title: 'Industrial Supply', 
    shortDesc: 'Material fabrikasi & sparepart industri',
    description: 'Raw material, komponen mesin, fastener, tools, dan perlengkapan pabrik.',
    tags: ['Fast Moving', 'Genuine Parts', 'Bulk Order'],
    slug: 'industrial-supply',
    image: '/images/products/industrial-supply.jpg',
  },
  { 
    id: 2,
    title: 'Electrical Equipment', 
    shortDesc: 'Panel, kabel, trafo & komponen listrik',
    description: 'Kabel, panel listrik, trafo, MCB, dan kebutuhan kelistrikan industri.',
    tags: ['SNI Certified', 'Warranty', 'Installation Ready'],
    slug: 'electrical-equipment',
    image: '/images/products/electrical.jpg',
  },
  { 
    id: 3,
    title: 'Mechanical Parts', 
    shortDesc: 'Pompa, gearbox, valve & alat berat',
    description: 'Sparepart mekanikal untuk mesin produksi, pompa industri, gearbox, valve.',
    tags: ['Original', 'Heavy Duty', 'Quick Ship'],
    slug: 'mechanical-parts',
    image: '/images/products/mechanical.jpg',
  },
  { 
    id: 4,
    title: 'Safety Equipment', 
    shortDesc: 'APD, fire extinguisher, rambu-rambu',
    description: 'Helm safety, rompi, sepatu safety, APAR, dan rambu-rambu proyek.',
    tags: ['K3 Certified', 'Complete Set', 'Bulk Price'],
    slug: 'safety-equipment',
    image: '/images/products/safety.jpg',
  },
  { 
    id: 5,
    title: 'Building Material', 
    shortDesc: 'Semen, baja ringan, cat, scaffolding',
    description: 'Material konstruksi untuk proyek gedung, perumahan, dan infrastruktur.',
    tags: ['Project Grade', 'Factory Price', 'Free Delivery'],
    slug: 'building-material',
    image: '/images/products/building.jpg',
  },
  { 
    id: 6,
    title: 'Office Supply', 
    shortDesc: 'ATK, furniture, perangkat IT',
    description: 'Alat tulis, meja kursi, printer, dan perangkat IT untuk kantor.',
    tags: ['Same Day', 'Subscription', 'After Sales'],
    slug: 'office-supply',
    image: '/images/products/office.jpg',
  },
  { 
    id: 7,
    title: 'Custom Procurement', 
    shortDesc: 'Sourcing spesifik sesuai kebutuhan',
    description: 'Layanan sourcing untuk barang khusus yang tidak tersedia di pasaran umum.',
    tags: ['Tailor Made', 'Global Sourcing', 'Fast Response'],
    slug: 'custom-procurement',
    image: '/images/products/custom.jpg',
    isHighlight: true
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
            Katalog Produk
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">
            Produk <span className="text-primary">Unggulan</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lebih dari 500+ klien telah mempercayakan kebutuhan supply chain mereka kepada kami
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
            >
              <Link 
                href={`/services/${service.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Highlight Badge */}
                  {service.isHighlight && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                        ★ POPULER
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section - Tanpa Harga */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <span className="text-xs text-gray-400">Detail produk</span>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      <HiArrowRight className="text-sm" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 text-gray-400 mb-3 text-sm">
            <HiCheckCircle className="text-accent" />
            <span>Tidak menemukan produk yang Anda cari?</span>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30"
          >
            <span>Konsultasi Kebutuhan Khusus</span>
            <HiArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
