import Link from 'next/link'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { 
  FaIndustry, FaTools, FaOilCan, 
  FaWarehouse, FaBuilding, FaGasPump 
} from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const solutions = [
  {
    slug: 'manufaktur',
    title: 'Manufaktur',
    description: 'Sparepart mesin & material produksi',
    fullDesc: 'Kami menyediakan sparepart mesin, raw material, fastener, tools, dan perlengkapan produksi untuk menjaga operasional pabrik Anda tetap berjalan.',
    icon: FaIndustry,
    benefits: ['Fast moving sparepart', 'Bulk order discount', 'Tim teknis siap membantu'],
    image: '/images/solutions/manufaktur.jpg',
    stats: '500+ SKU tersedia'
  },
  {
    slug: 'konstruksi',
    title: 'Konstruksi',
    description: 'Material proyek & peralatan bangunan',
    fullDesc: 'Material berkualitas untuk proyek konstruksi Anda. Kami memasok besi beton, semen, scaffolding, cat, dan semua material bangunan.',
    icon: FaTools,
    benefits: ['Project grade material', 'Just-in-time delivery', 'Volume pricing'],
    image: '/images/solutions/konstruksi.jpg',
    stats: 'Pengiriman tepat jadwal'
  },
  {
    slug: 'energy-utility',
    title: 'Energy & Utility',
    description: 'Peralatan & komponen energi',
    fullDesc: 'Pasokan komponen dan peralatan untuk sektor energi dan utilitas. Generator, panel listrik, kabel power, trafo, dan UPS.',
    icon: FaOilCan,
    benefits: ['Komponen berkualitas', 'Pengiriman tepat waktu', 'Technical support'],
    image: '/images/solutions/energy.jpg',
    stats: 'Ready stock'
  },
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    description: 'Peralatan & safety migas',
    fullDesc: 'Peralatan dan safety equipment untuk industri migas. Produk bersertifikasi, pengiriman ke site terpencil, dan dokumentasi lengkap.',
    icon: FaGasPump,
    benefits: ['Sertifikasi migas', 'Pengiriman ke site', 'Safety equipment lengkap'],
    image: '/images/solutions/oil-gas.jpg',
    stats: 'Safety terjamin'
  },
  {
    slug: 'commercial-building',
    title: 'Commercial Building',
    description: 'Perlengkapan gedung komersial',
    fullDesc: 'Perlengkapan dan peralatan untuk gedung komersial dan perkantoran. AC, lighting, furniture, office supply, dan safety equipment.',
    icon: FaBuilding,
    benefits: ['Ready stock', 'Pengiriman cepat', 'After sales service'],
    image: '/images/solutions/commercial.jpg',
    stats: 'Garansi produk'
  },
  {
    slug: 'warehouse-logistik',
    title: 'Warehouse & Logistik',
    description: 'Peralatan gudang & distribusi',
    fullDesc: 'Peralatan gudang dan solusi logistik untuk operasional distribusi. Rak gudang, forklift, pallet, packaging, dan labeling system.',
    icon: FaWarehouse,
    benefits: ['Rak gudang ready', 'Material handling', 'Pengiriman nasional'],
    image: '/images/solutions/warehouse.jpg',
    stats: 'Forklift tersedia'
  },
]

export const metadata = {
  title: 'Solusi Berdasarkan Industri | Cassindo',
  description: 'Cassindo menyediakan solusi pengadaan untuk industri manufaktur, konstruksi, energi, oil & gas, commercial building, warehouse & logistik.',
}

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="text-accent text-xs">✦</span>
              <span className="text-white/80 text-sm font-medium tracking-wide">Industry Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Solusi <span className="text-accent">Berdasarkan</span> Industri Anda
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Cassindo memahami tantangan unik setiap sektor. Kami hadir dengan solusi pengadaan yang tepat.
            </p>
          </div>

          {/* Solutions Grid - Sama kaya homepage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <Link 
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group block relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-48 md:h-auto overflow-hidden bg-gray-800">
                    <img 
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition">
                      <sol.icon className="text-2xl text-white" />
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition">
                      {sol.title}
                    </h2>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed">
                      {sol.fullDesc}
                    </p>
                    
                    {/* Benefits */}
                    <div className="space-y-1.5 mb-4">
                      {sol.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <HiCheckCircle className="text-accent text-sm" />
                          <span className="text-white/50 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats Badge */}
                    <div className="inline-flex items-center gap-2 text-xs text-accent/70 bg-accent/10 px-3 py-1 rounded-full mb-4">
                      <span>{sol.stats}</span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                      <span>Pelajari selengkapnya</span>
                      <HiArrowRight className="text-sm" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-white/40 mb-3 text-sm">
              <span>✦</span>
              <span>Butuh solusi untuk industri lain?</span>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition hover:-translate-y-0.5 shadow-lg shadow-white/10 font-semibold"
            >
              <span>Konsultasi Kebutuhan Khusus</span>
              <HiArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
