'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HiX, HiArrowLeft, HiArrowRight, HiEye, 
  HiCalendar, HiLocationMarker, HiUsers 
} from 'react-icons/hi'

const projects = [
  { 
    id: 1, 
    title: 'Pengiriman Container', 
    description: 'Proses pengiriman container menuju pelabuhan Tanjung Priok untuk pengiriman ke luar Jawa.',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400',
    category: 'Logistik',
    date: 'Jan 2026',
    location: 'Jakarta',
    stats: { containers: '50+', team: '12' }
  },
  { 
    id: 2, 
    title: 'Warehouse Operasional', 
    description: 'Area penyimpanan material dengan sistem manajemen inventaris modern.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400',
    category: 'Warehouse',
    date: 'Feb 2026',
    location: 'Surabaya',
    stats: { area: '5.000m²', capacity: '10.000+ unit' }
  },
  { 
    id: 3, 
    title: 'Stock Material', 
    description: 'Persediaan material industrial yang siap didistribusikan ke seluruh Indonesia.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=400',
    category: 'Inventory',
    date: 'Mar 2026',
    location: 'Jakarta',
    stats: { items: '500+ SKU', turnover: '95%' }
  },
  { 
    id: 4, 
    title: 'Tim Logistik', 
    description: 'Tim profesional yang siap mengelola distribusi dan pengiriman tepat waktu.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400',
    category: 'Team',
    date: 'Apr 2026',
    location: 'Nasional',
    stats: { members: '25+', experience: '8+ years' }
  },
  { 
    id: 5, 
    title: 'Pengiriman Darat', 
    description: 'Armada truk untuk distribusi antar kota dengan sistem tracking real-time.',
    image: 'https://images.unsplash.com/photo-1590279921182-2f4d1a30372c?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1590279921182-2f4d1a30372c?w=400',
    category: 'Logistik',
    date: 'Mei 2026',
    location: 'Jawa',
    stats: { fleet: '15+ unit', coverage: '50+ kota' }
  },
  { 
    id: 6, 
    title: 'Kontrol Kualitas', 
    description: 'Proses quality control sebelum material dikirim ke klien.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
    category: 'Quality',
    date: 'Jun 2026',
    location: 'Jakarta',
    stats: { inspection: '100%', standard: 'ISO 9001' }
  }
]

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [filter, setFilter] = useState('Semua')
  const [currentIndex, setCurrentIndex] = useState(0)

  const categories = ['Semua', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const openLightbox = (project: typeof projects[0], index: number) => {
    setSelectedProject(project)
    setCurrentIndex(index)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredProjects.length
    setCurrentIndex(nextIndex)
    setSelectedProject(filteredProjects[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
    setCurrentIndex(prevIndex)
    setSelectedProject(filteredProjects[prevIndex])
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Galeri Aktivitas
            </span>
            <h2 className="section-title">
              Dokumentasi <span className="text-primary">Operasional</span>
            </h2>
            <p className="section-subtitle">
              Kegiatan nyata gudang, distribusi, dan kolaborasi bersama klien
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(project, idx)}
                className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <p className="text-xs text-accent font-semibold mb-1">{project.category}</p>
                    <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-white/70">
                      <span className="flex items-center gap-1">
                        <HiCalendar className="text-accent" /> {project.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="text-accent" /> {project.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <HiEye className="text-white text-lg" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-primary/90 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button 
              onClick={() => setFilter('Semua')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30"
            >
              Lihat Semua Dokumentasi
              <HiArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition z-10"
            >
              <HiX className="text-3xl" />
            </button>

            {/* Navigation Buttons */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-6 text-white/70 hover:text-white transition z-10"
                >
                  <HiArrowLeft className="text-4xl" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-6 text-white/70 hover:text-white transition z-10"
                >
                  <HiArrowRight className="text-4xl" />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto rounded-2xl"
              />

              {/* Info Panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <div className="flex flex-wrap justify-between items-end gap-4">
                  <div>
                    <p className="text-accent text-sm font-semibold mb-1">{selectedProject.category}</p>
                    <h3 className="text-white text-2xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-white/70 text-sm max-w-md">{selectedProject.description}</p>
                    <div className="flex gap-4 mt-3 text-sm text-white/60">
                      <span className="flex items-center gap-1"><HiCalendar /> {selectedProject.date}</span>
                      <span className="flex items-center gap-1"><HiLocationMarker /> {selectedProject.location}</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-4">
                    {Object.entries(selectedProject.stats).map(([key, value]) => (
                      <div key={key} className="text-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <p className="text-white font-bold">{value}</p>
                        <p className="text-white/50 text-xs capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
