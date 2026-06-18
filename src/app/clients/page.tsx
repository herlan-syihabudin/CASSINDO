// app/clients/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image' // ← IMPORT Image
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HiUsers, HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { companies } from '@/app/data/clients'

export default function ClientsPage() {
  // Hitung unique sectors dari data
  const uniqueSectors = ['Minyak & Gas', 'Energi', 'Telekomunikasi', 'Otomotif', 'Konstruksi', 'Pertambangan', 'Pupuk', 'Semen', 'Perbankan', 'FMCG', 'Properti']

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <HiUsers className="text-primary text-sm" />
                <span className="text-primary text-sm font-semibold tracking-wide">Klien Kami</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
                Dipercaya oleh Perusahaan
                <span className="text-accent block">Terkemuka di Indonesia</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Lebih dari {companies.length}+ perusahaan terpercaya dari berbagai sektor industri 
                telah memilih Cassindo sebagai mitra pengadaan dan supply chain mereka.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{companies.length}+</p>
                <p className="text-xs text-gray-400">Perusahaan Terpercaya</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{uniqueSectors.length}+</p>
                <p className="text-xs text-gray-400">Sektor Industri</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">34</p>
                <p className="text-xs text-gray-400">Kota di Indonesia</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">99%</p>
                <p className="text-xs text-gray-400">Tingkat Kepuasan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Clients Section - FULL PAGE */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark text-center">
                Daftar Klien Kami
              </h2>
              <p className="text-gray-400 text-center mt-2">
                {companies.length} perusahaan terpercaya yang telah bekerja sama dengan Cassindo
              </p>
            </motion.div>

            {/* Grid Layout - BUKAN CAROUSEL */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {companies.map((company, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gray-50/80 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
                >
                  {/* 🔥 GANTI: Sekarang pake Image component dengan ukuran responsif */}
                  <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={120}
                      height={60}
                      className="object-contain w-full h-full grayscale hover:grayscale-0 transition duration-300"
                      onError={(e) => {
                        // Kalau gambar error, tampilkan teks sebagai fallback
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          const text = document.createElement('div')
                          text.className = 'text-xs md:text-sm font-bold text-gray-600 group-hover:text-primary transition-colors truncate px-2 text-center w-full'
                          text.textContent = company.name
                          parent.appendChild(text)
                        }
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State Placeholder untuk logo sebenarnya */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gray-50/50 rounded-2xl border border-dashed border-gray-300 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <HiCheckCircle className="text-primary" />
                <span className="text-sm">
                  {companies.length}+ perusahaan terpercaya • Sedang dalam proses penambahan data
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                *Data klien akan diperbarui secara berkala
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-br from-primary/5 via-white to-accent/5 rounded-3xl p-8 md:p-12 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  Ingin Bergabung dengan Klien Terpercaya Kami?
                </h3>
                <p className="text-gray-500 text-sm md:text-base mb-6 max-w-2xl mx-auto">
                  Dapatkan solusi pengadaan dan supply chain terbaik untuk perusahaan Anda.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                >
                  <span>Hubungi Kami Sekarang</span>
                  <HiArrowRight className="text-sm group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
