import Link from 'next/link'
import { HiArrowRight, HiOfficeBuilding, HiHome, HiCog, HiCurrencyDollar } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const solutions = [
  {
    slug: 'manufaktur',
    title: 'Manufaktur',
    description: 'Solusi pengadaan sparepart mesin, raw material, dan kebutuhan produksi harian.',
    icon: HiOfficeBuilding,
    benefits: ['Downtime minimal', 'Fast moving sparepart', 'Bulk order discount'],
    image: '/images/manufaktur.jpg'
  },
  {
    slug: 'konstruksi',
    title: 'Konstruksi',
    description: 'Material bangunan, scaffolding, dan peralatan proyek untuk kontraktor.',
    icon: HiHome,
    benefits: ['Project grade material', 'Just-in-time delivery', 'Volume pricing'],
    image: '/images/konstruksi.jpg'
  },
  {
    slug: 'tambang',
    title: 'Tambang & Energi',
    description: 'Alat berat, komponen hydraulic, dan safety equipment untuk site tambang.',
    icon: HiCog,
    benefits: ['Heavy duty parts', 'Quick ship to site', 'Technical support'],
    image: '/images/tambang.jpg'
  },
  {
    slug: 'pemerintah',
    title: 'Pemerintah',
    description: 'Pengadaan barang/jasa dengan legalitas lengkap untuk tender.',
    icon: HiCurrencyDollar,
    benefits: ['Legalitas lengkap', 'NIB & NPWP', 'Pengalaman tender'],
    image: '/images/pemerintah.jpg'
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Solusi <span className="text-primary">Berdasarkan</span> Industri Anda
            </h1>
            <p className="text-gray-500 text-lg">
              Cassindo memahami tantangan unik setiap sektor. Kami hadir dengan solusi pengadaan yang tepat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((sol) => (
              <Link 
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <sol.icon className="text-2xl text-primary" />
                  </div>
                  <HiArrowRight className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <h2 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition">
                  {sol.title}
                </h2>
                <p className="text-gray-500 mb-4">{sol.description}</p>
                <div className="flex flex-wrap gap-2">
                  {sol.benefits.map((benefit) => (
                    <span key={benefit} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
