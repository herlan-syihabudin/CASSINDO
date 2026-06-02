'use client'

import Link from 'next/link'
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
    shortDesc: 'Material fabrikasi & sparepart industri',
    description: 'Raw material, komponen mesin, fastener, tools, dan perlengkapan pabrik.',
    tags: ['Fast Moving', 'Genuine Parts', 'Bulk Order'],
    price: 'IDR 500K+',
    slug: 'industrial-supply'
  },
  { 
    id: 2,
    icon: HiOutlineLightningBolt, 
    title: 'Electrical Equipment', 
    shortDesc: 'Panel, kabel, trafo & komponen listrik',
    description: 'Kabel, panel listrik, trafo, MCB, dan kebutuhan kelistrikan industri.',
    tags: ['SNI Certified', 'Warranty', 'Installation Ready'],
    price: 'IDR 250K+',
    slug: 'electrical-equipment'
  },
  { 
    id: 3,
    icon: HiOutlineChip, 
    title: 'Mechanical Parts', 
    shortDesc: 'Pompa, gearbox, valve & alat berat',
    description: 'Sparepart mekanikal untuk mesin produksi, pompa industri, gearbox, valve, dan komponen hydraulic.',
    tags: ['Original', 'Heavy Duty', 'Quick Ship'],
    price: 'Custom Quote',
    slug: 'mechanical-parts'
  },
  { 
    id: 4,
    icon: HiOutlineShieldCheck, 
    title: 'Safety Equipment', 
    shortDesc: 'APD, fire extinguisher, rambu-rambu',
    description: 'Helm safety, rompi, sepatu safety, APAR, dan rambu-rambu proyek sesuai SNI.',
    tags: ['K3 Certified', 'Complete Set', 'Bulk Price'],
    price: 'IDR 150K+',
    slug: 'safety-equipment'
  },
  { 
    id: 5,
    icon: HiOutlineHome, 
    title: 'Building Material', 
    shortDesc: 'Semen, baja ringan, cat, scaffolding',
    description: 'Material konstruksi untuk proyek gedung, perumahan, dan infrastruktur.',
    tags: ['Project Grade', 'Factory Price', 'Free Delivery'],
    price: 'IDR 1M+',
    slug: 'building-material'
  },
  { 
    id: 6,
    icon: HiOutlineOfficeBuilding, 
    title: 'Office Supply', 
    shortDesc: 'ATK, furniture, perangkat IT',
    description: 'Alat tulis, meja kursi, printer, dan perangkat IT untuk kantor.',
    tags: ['Same Day', 'Subscription', 'After Sales'],
    price: 'IDR 50K+',
    slug: 'office-supply'
  },
  { 
    id: 7,
    icon: HiOutlineClipboardList, 
    title: 'Custom Procurement', 
    shortDesc: 'Sourcing spesifik sesuai kebutuhan',
    description: 'Layanan sourcing untuk barang khusus yang tidak tersedia di pasaran umum.',
    tags: ['Tailor Made', 'Global Sourcing', 'Fast Response'],
    price: 'Contact Us',
    slug: 'custom-procurement',
    isHighlight: true
  },
]

// Animation variants untuk performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
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

        {/* Service Cards Grid - Pure CSS hover (no JS state) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              custom={idx}
            >
              <Link 
                href={`/services/${service.slug}`}
                aria-label={`Lihat layanan ${service.title} - ${service.price}`}
                className={`
                  group block relative bg-white rounded-2xl overflow-hidden 
                  transition-all duration-300 ease-out
                  hover:shadow-2xl hover:-translate-y-2
                  active:scale-[0.98] touch-manipulation
                  ${service.isHighlight ? 'border-2 border-primary/30 ring-2 ring-primary/20' : 'border border-gray-100'}
                `}
              >
                {/* Highlight Badge */}
                {service.isHighlight && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
                      ★ POPULER
                    </span>
                  </div>
                )}

                <div className="p-5 md:p-6">
                  {/* Icon - Pure CSS hover */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary transition-all duration-300 group-hover:shadow-lg">
                    <service.icon className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Title + Price inline (anchor visual) - SCANABILITY IMPROVED */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-sm font-bold text-primary whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  
                  {/* Short Description - Less cognitive load */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">
                    {service.shortDesc}
                  </p>

                  {/* Tags - Compact */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {service.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow indicator - Pure CSS */}
                  <div className="flex items-center justify-end pt-3 border-t border-gray-50">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-100 text-primary group-hover:bg-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                      <HiArrowRight className="text-sm" />
                    </div>
                  </div>
                </div>

                {/* Hover gradient - Pure CSS */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 mb-3">
            <HiCheckCircle className="text-accent" />
            <span className="text-sm">Tidak menemukan yang Anda cari?</span>
          </div>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 group active:scale-[0.98] touch-manipulation"
          >
            <span>Konsultasi Kebutuhan Khusus</span>
            <HiArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            *Tim kami akan merespon dalam &lt; 2x24 jam
          </p>
        </motion.div>
      </div>

      {/* Reduced motion support - Global CSS (tambahkan di globals.css) */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
