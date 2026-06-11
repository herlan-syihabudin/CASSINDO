'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { 
  FaIndustry, FaHardHat, FaOilCan, 
  FaWarehouse, FaBuilding, FaGasPump, 
  FaTools, FaSolarPanel, FaLandmark
} from 'react-icons/fa'

const solutions = [
  {
    slug: 'manufaktur',
    title: 'Manufacturing',
    description: 'Sparepart mesin & material produksi',
    icon: FaIndustry,
    iconColor: 'text-blue-400',
    image: '/images/solutions/manufaktur.jpg'
  },
  {
    slug: 'konstruksi',
    title: 'Construction',
    description: 'Material proyek & peralatan bangunan',
    icon: FaHardHat,
    iconColor: 'text-orange-400',
    image: '/images/solutions/konstruksi.jpg'
  },
  {
    slug: 'mining',
    title: 'Mining',
    description: 'Alat berat & komponen hydraulic',
    icon: FaTools,
    iconColor: 'text-gray-400',
    image: '/images/solutions/mining.jpg'
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Peralatan & safety migas',
    icon: FaGasPump,
    iconColor: 'text-red-400',
    image: '/images/solutions/oil-gas.jpg'
  },
  {
    slug: 'energy',
    title: 'Energy',
    description: 'Peralatan & komponen energi',
    icon: FaSolarPanel,
    iconColor: 'text-green-400',
    image: '/images/solutions/energy.jpg'
  },
  {
    slug: 'government',
    title: 'Government',
    description: 'Pengadaan barang/jasa tender',
    icon: FaLandmark,
    iconColor: 'text-emerald-400',
    image: '/images/solutions/government.jpg'
  },
  {
    slug: 'telecommunication',
    title: 'Telecommunication',
    description: 'Peralatan & infrastruktur telekomunikasi',
    icon: FaWarehouse,
    iconColor: 'text-purple-400',
    image: '/images/solutions/telecom.jpg'
  },
  {
    slug: 'commercial-building',
    title: 'Commercial Building',
    description: 'Perlengkapan gedung komersial',
    icon: FaBuilding,
    iconColor: 'text-amber-400',
    image: '/images/solutions/commercial.jpg'
  },
  {
    slug: 'warehouse-logistik',
    title: 'Warehouse & Logistik',
    description: 'Peralatan gudang & distribusi',
    icon: FaWarehouse,
    iconColor: 'text-cyan-400',
    image: '/images/solutions/warehouse.jpg'
  }
]

export default function SolutionsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Industri <span className="text-primary">Kami Melayani</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Mendukung berbagai industri di Indonesia dengan solusi pengadaan yang tepat
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/solutions/${sol.slug}`}
                className="group block text-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div className="mb-3">
                  <sol.icon className={`text-3xl mx-auto ${sol.iconColor} group-hover:text-primary transition-colors`} />
                </div>
                <h3 className="text-sm font-semibold text-dark group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
