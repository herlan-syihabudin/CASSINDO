import { notFound } from 'next/navigation'
import Link from 'next/link'
import { HiArrowLeft, HiPhone, HiMail, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const solutionsData = {
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
  },
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
  },
  tambang: {
    title: 'Solusi Tambang & Energi',
    description: 'Pasokan komponen heavy duty untuk operasional tambang dan energi.',
    benefits: [
      'Sparepart original untuk alat berat',
      'Pengiriman cepat ke site tambang',
      'Technical support 24/7',
      'Warranty resmi'
    ],
    products: ['Pompa Industri', 'Gearbox', 'Hydraulic Components', 'Safety Equipment'],
  },
  pemerintah: {
    title: 'Solusi Pemerintah',
    description: 'Mitra terpercaya untuk pengadaan barang/jasa pemerintah dengan legalitas lengkap.',
    benefits: [
      'NIB & NPWP terdaftar',
      'Pengalaman tender BUMN',
      'Dokumen administrasi lengkap',
      'Harga kompetitif'
    ],
    products: ['Office Supply', 'Furniture', 'IT Equipment', 'Logistik'],
  },
}

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }))
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutionsData[params.slug as keyof typeof solutionsData]
  
  if (!solution) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition mb-8">
            <HiArrowLeft /> Kembali ke Semua Solusi
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">{solution.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{solution.description}</p>
              
              <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-bold text-dark mb-4">Keunggulan Solusi Ini</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <HiCheckCircle className="text-accent" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-dark mb-4">Produk Terkait</h2>
              <div className="flex flex-wrap gap-2">
                {solution.products.map((product) => (
                  <span key={product} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-28 border border-gray-100 shadow-lg">
                <h2 className="text-xl font-bold text-dark mb-2">Siap Memulai?</h2>
                <p className="text-gray-500 text-sm mb-6">Konsultasikan kebutuhan industri Anda dengan tim ahli kami.</p>
                <Link href="/contact" className="btn-primary w-full justify-center"><HiPhone /> Konsultasi Gratis</Link>
                <Link href="/contact" className="block text-center border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition mt-3 font-semibold">
                  <HiMail className="inline mr-2" /> Request Quotation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
