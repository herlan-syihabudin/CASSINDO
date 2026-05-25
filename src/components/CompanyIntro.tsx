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
            <h2 className="section-title">Tentang <span className="text-primary">Cassindo</span></h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>PT Cassindo Sukses Mandiri</strong> berdiri sejak 2014 sebagai perusahaan general trading dan supplier terkemuka.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Visi:</strong> Menjadi mitra utama dalam ekosistem logistik dan pengadaan di Indonesia dengan standar global.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Misi:</strong> Integritas, inovasi, dan kepuasan pelanggan melalui layanan pengadaan terpercaya.
            </p>

            {/* Legalitas */}
            <div className="bg-gray rounded-2xl p-5 mt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-bold text-primary">NIB:</span> 1234567890123</div>
                <div><span className="font-bold text-primary">NPWP:</span> 01.234.567.8-123.000</div>
                <div><span className="font-bold text-primary">Sertifikasi:</span> ISO 9001:2021</div>
                <div><span className="font-bold text-primary">SKT:</span> Terdaftar</div>
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
