'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Pengiriman Container', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=600' },
  { id: 2, title: 'Warehouse Operasional', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600' },
  { id: 3, title: 'Stock Material', image: 'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=600' },
  { id: 4, title: 'Tim Logistik', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600' },
]

export default function ProjectGallery() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Dokumentasi <span className="text-primary">Operasional</span></h2>
          <p className="section-subtitle">Kegiatan nyata gudang, distribusi, dan kolaborasi</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className="aspect-square relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
