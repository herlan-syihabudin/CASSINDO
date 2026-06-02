'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiOfficeBuilding, HiHome, HiCog, HiCurrencyDollar } from 'react-icons/hi'

const solutions = [
  {
    slug: 'manufaktur',
    title: 'Manufaktur',
    description: 'Sparepart mesin & material produksi',
    icon: HiOfficeBuilding,
    color: 'from-blue-500/10 to-blue-500/5'
  },
  {
    slug: 'konstruksi',
    title: 'Konstruksi',
    description: 'Material proyek & peralatan bangunan',
    icon: HiHome,
    color: 'from-orange-500/10 to-orange-500/5'
  },
  {
    slug: 'tambang',
    title: 'Tambang & Energi',
    description: 'Alat berat & komponen hydraulic',
    icon: HiCog,
    color: 'from-gray-500/10 to-gray-500/5'
  },
  {
    slug: 'pemerintah',
    title: 'Pemerintah',
    description: 'Pengadaan barang/jasa tender',
    icon: HiCurrencyDollar,
    color: 'from-emerald-500/10 to-emerald-500/5'
  },
]

export default function SolutionsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Solusi Industri
          </span>
          <h2 className="section-title">
            Solusi <span className="text-primary">Berdasarkan</span> Industri Anda
          </h2>
          <p className="section-subtitle">
            Cassindo memahami tantangan unik setiap sektor. Kami hadir dengan solusi pengadaan yang tepat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/solutions/${sol.slug}`}
                className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-4`}>
                  <sol.icon className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition">
                  {sol.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{sol.description}</p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition">
                  <span>Pelajari</span>
                  <HiArrowRight className="text-xs" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
