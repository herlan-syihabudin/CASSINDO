'use client'

import { motion } from 'framer-motion'

export default function CompanyIntro() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Established 2014
            </span>
            
            <h2 className="section-title">
              Tentang <span className="text-primary">Cassindo</span>
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong className="text-primary">PT Catur Sarana Solusindo</strong> berdiri sejak 2021 
              sebagai perusahaan general trading dan supplier terkemuka yang telah melayani 
              berbagai kebutuhan industri dan proyek di seluruh Indonesia.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-primary text-xl">🎯</span>
                </div>
                <h3 className="font-bold text-dark mb-1">Visi</h3>
                <p className="text-gray-500 text-sm">
                  Mitra utama dalam ekosistem logistik dan pengadaan di Indonesia dengan standar global.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-accent text-xl">⭐</span>
                </div>
                <h3 className="font-bold text-dark mb-1">Misi</h3>
                <p className="text-gray-500 text-sm">
                  Integritas, inovasi, dan kepuasan pelanggan melalui layanan pengadaan terpercaya.
                </p>
              </div>
            </div>

            {/* Legalitas */}
            <div className="bg-gray-50 rounded-2xl p-5 mt-4">
              <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                <span className="text-primary">📜</span>
                Legalitas & Sertifikasi
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span><span className="font-bold text-primary">NIB:</span> 1234567890123</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span><span className="font-bold text-primary">NPWP:</span> 63.541.230.7-021.000</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span><span className="font-bold text-primary">ISO 9001:</span> 2021</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span><span className="font-bold text-primary">SKT:</span> Terdaftar</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800" 
              alt="Warehouse Cassindo"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
