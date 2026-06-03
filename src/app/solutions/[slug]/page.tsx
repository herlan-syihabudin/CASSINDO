import { notFound } from 'next/navigation'
import Link from 'next/link'
import { HiArrowLeft, HiPhone, HiMail, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const solutionsData = {
  // 1. Manufaktur
  manufaktur: {
    title: 'Solusi Manufaktur',
    description: 'Optimalkan produksi pabrik Anda dengan pengadaan sparepart dan material yang tepat waktu.',
    benefits: [
      'Fast moving sparepart selalu ready stock',
      'Pengiriman dalam 1x24 jam untuk area Jawa',
      'Harga kompetitif dari supplier langsung',
      'Tim teknis siap konsultasi'
    ],
    products: ['Sparepart Mesin', 'Raw Material', 'Fastener & Tools', 'Safety Equipment'],
    image: '/images/solutions/manufaktur.jpg'
  },
  
  // 2. Konstruksi
  konstruksi: {
    title: 'Solusi Konstruksi',
    description: 'Dukung proyek konstruksi Anda dengan material berkualitas dan pengiriman tepat jadwal.',
    benefits: [
      'Material SNI certified',
      'Just-in-time delivery system',
      'Volume pricing untuk proyek besar',
      'Koordinasi dengan jadwal proyek'
    ],
    products: ['Besi Beton', 'Semen', 'Baja Ringan', 'Scaffolding', 'Cat Tembok'],
    image: '/images/solutions/konstruksi.jpg'
  },
  
  // 3. Energy & Utility
  'energy-utility': {
    title: 'Solusi Energy & Utility',
    description: 'Pasokan komponen dan peralatan untuk sektor energi dan utilitas.',
    benefits: [
      'Komponen berkualitas industri',
      'Pengiriman tepat waktu',
      'Technical support 24/7',
      'Garansi produk resmi'
    ],
    products: ['Generator Set', 'Panel Listrik', 'Kabel Power', 'Trafo', 'UPS'],
    image: '/images/solutions/energy.jpg'
  },
  
  // 4. Oil & Gas
  'oil-gas': {
    title: 'Solusi Oil & Gas',
    description: 'Peralatan dan safety equipment untuk industri migas.',
    benefits: [
      'Produk bersertifikasi migas',
      'Pengiriman ke site terpencil',
      'Safety equipment lengkap',
      'Dokumen lengkap'
    ],
    products: ['Safety Equipment', 'Peralatan Pipa', 'Valve & Fitting', 'Alat Berat', 'PPE'],
    image: '/images/solutions/oil-gas.jpg'
  },
  
  // 5. Commercial Building
  'commercial-building': {
    title: 'Solusi Commercial Building',
    description: 'Perlengkapan dan peralatan untuk gedung komersial dan perkantoran.',
    benefits: [
      'Produk ready stock',
      'Pengiriman cepat',
      'After sales service',
      'Garansi produk'
    ],
    products: ['AC & HVAC', 'Lighting', 'Furniture', 'Office Supply', 'Safety Equipment'],
    image: '/images/solutions/commercial.jpg'
  },
  
  // 6. Warehouse & Logistik
  'warehouse-logistik': {
    title: 'Solusi Warehouse & Logistik',
    description: 'Peralatan gudang dan solusi logistik untuk operasional distribusi.',
    benefits: [
      'Rak gudang ready stock',
      'Forklift & material handling',
      'Sistem inventaris',
      'Pengiriman nasional'
    ],
    products: ['Rak Gudang', 'Forklift', 'Pallet', 'Packaging', 'Labeling System'],
    image: '/images/solutions/warehouse.jpg'
  },
}

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const solution = solutionsData[params.slug as keyof typeof solutionsData]
  if (!solution) return { title: 'Solusi Tidak Ditemukan' }
  return {
    title: `${solution.title} | Cassindo`,
    description: solution.description,
  }
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutionsData[params.slug as keyof typeof solutionsData]
  
  if (!solution) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Back Button */}
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition" />
            <span>Kembali ke Semua Solusi</span>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">{solution.title}</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {solution.description}
              </p>
              
              {/* Benefits Section */}
              <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-bold text-dark mb-4">Keunggulan Solusi Ini</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <HiCheckCircle className="text-accent text-sm flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Products Section */}
              <h2 className="text-xl font-bold text-dark mb-4">Produk Terkait</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {solution.products.map((product) => (
                  <span key={product} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {product}
                  </span>
                ))}
              </div>

              {/* CTA to Contact */}
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                >
                  <span>Butuh konsultasi lebih lanjut?</span>
                  <HiArrowRight className="group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sticky top-28 border border-gray-100 shadow-lg">
                <h2 className="text-xl font-bold text-dark mb-2">Siap Memulai?</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Konsultasikan kebutuhan industri Anda dengan tim ahli kami.
                </p>
                <div className="space-y-3">
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full justify-center"
                  >
                    <HiPhone className="text-sm" /> Konsultasi Gratis
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-center border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition w-full font-semibold text-sm"
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
