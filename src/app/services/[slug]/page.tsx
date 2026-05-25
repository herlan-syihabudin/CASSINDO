import { notFound } from 'next/navigation'
import Link from 'next/link'
import { HiArrowLeft, HiPhone, HiMail } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Data services lengkap untuk semua slug
const servicesData: Record<string, {
  title: string
  description: string
  fullDescription: string
  tags?: string[]
  image?: string
}> = {
  'industrial-supply': {
    title: 'Industrial Supply',
    description: 'Material fabrikasi & sparepart industri',
    fullDescription: 'Kami menyediakan berbagai material industrial seperti raw material, komponen mesin, fastener, tools, dan perlengkapan pabrik untuk mendukung operasional harian Anda.',
    tags: ['Fast Moving', 'Genuine Parts', 'Bulk Order'],
  },
  'electrical-equipment': {
    title: 'Electrical Equipment',
    description: 'Panel, kabel, trafo & komponen listrik',
    fullDescription: 'Distributor resmi berbagai brand electrical ternama. Menyediakan kabel, panel listrik, trafo, MCB, dan kebutuhan kelistrikan industri.',
    tags: ['SNI Certified', 'Warranty', 'Installation Ready'],
  },
  'mechanical-parts': {
    title: 'Mechanical Parts',
    description: 'Pompa, gearbox, valve & alat berat',
    fullDescription: 'Sparepart mekanikal untuk mesin produksi, pompa industri, gearbox, valve, dan komponen hydraulic untuk pabrik dan pertambangan.',
    tags: ['Original', 'Heavy Duty', 'Quick Ship'],
  },
  'safety-equipment': {
    title: 'Safety Equipment',
    description: 'APD, fire extinguisher, rambu-rambu',
    fullDescription: 'Perlengkapan K3 lengkap mulai dari helm safety, rompi, sepatu safety, APAR, hingga rambu-rambu proyek sesuai standar SNI.',
    tags: ['K3 Certified', 'Complete Set', 'Bulk Price'],
  },
  'building-material': {
    title: 'Building Material',
    description: 'Semen, baja ringan, cat, scaffolding',
    fullDescription: 'Material konstruksi untuk proyek gedung, perumahan, dan infrastruktur. Termasuk semen, besi beton, baja ringan, cat tembok, dan perancah.',
    tags: ['Project Grade', 'Factory Price', 'Free Delivery'],
  },
  'office-supply': {
    title: 'Office Supply',
    description: 'ATK, furniture, perangkat IT',
    fullDescription: 'Perlengkapan kantor lengkap mulai dari alat tulis, meja kursi, printer, hingga perangkat IT untuk kebutuhan operasional perusahaan.',
    tags: ['Same Day', 'Subscription', 'After Sales'],
  },
  'custom-procurement': {
    title: 'Custom Procurement',
    description: 'Sourcing spesifik sesuai kebutuhan proyek',
    fullDescription: 'Layanan sourcing untuk barang khusus yang tidak tersedia di pasaran umum. Tim procurement kami akan mencari supplier terbaik untuk Anda.',
    tags: ['Tailor Made', 'Global Sourcing', 'Fast Response'],
  },
}

// Generate static params untuk build time
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }))
}

// Metadata untuk SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]
  if (!service) return { title: 'Service Not Found' }
  
  return {
    title: `${service.title} | Cassindo General Supplier`,
    description: service.fullDescription.slice(0, 160),
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Back Button */}
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition" />
            <span>Kembali ke Semua Layanan</span>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - 2/3 width */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{service.title}</h1>
              
              {/* Tags */}
              {service.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.fullDescription}
              </p>
              
              <p className="text-gray-500">
                Butuh informasi lebih detail? Tim kami siap membantu Anda dengan solusi terbaik.
              </p>
            </div>

            {/* Sidebar CTA - 1/3 width */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sticky top-28 border border-gray-100 shadow-lg">
                <h2 className="text-xl font-bold text-dark mb-2">Butuh Penawaran?</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Hubungi tim sales kami untuk mendapatkan harga terbaik dan konsultasi gratis.
                </p>
                
                <div className="space-y-3">
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full justify-center"
                  >
                    <HiPhone /> Hubungi Sales
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-center border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition w-full font-semibold"
                  >
                    <HiMail className="inline mr-2" /> Request Quotation
                  </Link>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-400 text-center">
                    Respon dalam &lt; 2x24 jam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
