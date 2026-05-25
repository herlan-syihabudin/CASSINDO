'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  HiCalendar, HiCheckCircle, HiBuildingOffice, 
  HiGlobeAlt, HiUsers, HiTruck, HiShieldCheck,
  HiArrowRight, HiPlay
} from 'react-icons/hi'

const milestones = [
  { year: 2014, event: 'Pendirian PT Cassindo Sukses Mandiri', icon: HiBuildingOffice },
  { year: 2016, event: 'Memperoleh sertifikasi ISO 9001', icon: HiShieldCheck },
  { year: 2018, event: 'Ekspasi ke 20 provinsi', icon: HiGlobeAlt },
  { year: 2020, event: 'Mitra resmi e-katalog', icon: HiCheckCircle },
  { year: 2024, event: '500+ klien aktif', icon: HiUsers },
]

const stats = [
  { value: '500+', label: 'Klien Aktif', icon: HiUsers },
  { value: '50+', label: 'Supplier Partner', icon: HiBuildingOffice },
  { value: '34', label: 'Provinsi', icon: HiGlobeAlt },
  { value: '100%', label: 'Kepuasan Klien', icon: HiCheckCircle },
]

export default function CompanyIntro() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <HiCalendar className="text-accent" />
              Established 2014
            </span>
            
            <h2 className="section-title">
              Tentang <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Cassindo</span>
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong className="text-primary">PT Cassindo Sukses Mandiri</strong> adalah perusahaan general trading 
              dan supplier terkemuka yang telah berpengalaman lebih dari satu dekade dalam memenuhi 
              kebutuhan industri, proyek, dan korporasi di seluruh Indonesia.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <HiGlobeAlt className="text-primary text-xl" />
                </div>
                <h3 className="font-bold text-dark mb-1">Visi</h3>
                <p className="text-gray-500 text-sm">
                  Mitra utama dalam ekosistem logistik dan pengadaan di Indonesia dengan standar global.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <HiCheckCircle className="text-accent text-xl" />
                </div>
                <h3 className="font-bold text-dark mb-1">Misi</h3>
                <p className="text-gray-500 text-sm">
                  Integritas, inovasi, dan kepuasan pelanggan melalui layanan pengadaan terpercaya.
                </p>
              </div>
            </div>

            {/* Legalitas - More Detailed */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-5 mt-4">
              <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                <HiShieldCheck className="text-primary" />
                Legalitas & Sertifikasi
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span><span className="font-semibold text-primary">NIB:</span> 1234567890123</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span><span className="font-semibold text-primary">NPWP:</span> 01.234.567.8-123.000</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span><span className="font-semibold text-primary">ISO 9001:</span> 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span><span className="font-semibold text-primary">SKT:</span> Terdaftar</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <a 
                href="/about" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Pelajari Lebih Lanjut
                <HiArrowRight className="group-hover:translate-x-1 transition" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Main Image with Play Button */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl mb-6 group">
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800" 
                alt="Warehouse Cassindo"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Play Button Overlay */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                  <HiPlay className="text-primary text-2xl ml-1" />
                </div>
              </button>
            </div>

            {/* Stats Grid */}
            <div ref={ref} className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: idx * 0.1, type: 'spring' }}
                  className="bg-white p-4 rounded-xl text-center shadow-sm border border-gray-100"
                >
                  <stat.icon className="text-primary text-2xl mx-auto mb-2" />
                  <motion.p 
                    className="text-2xl font-bold text-primary"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Milestone Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <h3 className="text-center text-lg font-semibold text-dark mb-8">Perjalanan Kami</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative z-10"
                >
                  <div className="w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                    <milestone.icon className="text-primary text-sm" />
                  </div>
                  <p className="font-bold text-primary text-sm">{milestone.year}</p>
                  <p className="text-gray-500 text-xs mt-1 hidden md:block">{milestone.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-2xl"
            >
              ✕
            </button>
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Company Profile Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
