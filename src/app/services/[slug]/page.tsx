'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { HiArrowLeft, HiPhone, HiMail } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Data services (sama kayak di atas)
const servicesData = {
  'industrial-supply': {
    title: 'Industrial Supply',
    description: 'Material fabrikasi & sparepart industri',
    fullDescription: 'Kami menyediakan berbagai material industrial seperti raw material, komponen mesin, fastener, tools, dan perlengkapan pabrik untuk mendukung operasional harian Anda.',
  },
  'electrical-equipment': {
    title: 'Electrical Equipment',
    description: 'Panel, kabel, trafo & komponen listrik',
    fullDescription: 'Distributor resmi berbagai brand electrical ternama. Menyediakan kabel, panel listrik, trafo, MCB, dan kebutuhan kelistrikan industri.',
  },
  // ... tambahkan lainnya
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <HiArrowLeft /> Kembali ke Layanan
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{service.fullDescription}</p>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Butuh Penawaran?</h2>
              <p className="text-gray-600 mb-6">Hubungi tim sales kami untuk mendapatkan harga terbaik.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary"><HiPhone /> Hubungi Sales</Link>
                <Link href="/contact" className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition"><HiMail /> Request Quotation</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
