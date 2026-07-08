// src/app/yogyakarta/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solusi Pengadaan & Supply Chain di Yogyakarta | Cassindo',
  description: 'Cassindo menyediakan solusi pengadaan industri, MRO, dan distribusi logistik untuk perusahaan di Yogyakarta dan sekitarnya. Layanan end-to-end supply chain terpercaya.',
  keywords: 'jasa pengadaan Yogyakarta, supply chain Jogja, MRO Yogyakarta, distribusi industri DIY, vendor pengadaan Jogja, solusi procurement Yogyakarta, logistik B2B Jogja',
  alternates: {
    canonical: 'https://www.cassindo.com/yogyakarta',
  },
  openGraph: {
    title: 'Solusi Pengadaan & Supply Chain di Yogyakarta | Cassindo',
    description: 'Mitra terpercaya untuk pengadaan industri dan distribusi di Yogyakarta. Melayani kawasan industri Piyungan, Bantul, Sleman, dan seluruh DIY.',
    url: 'https://www.cassindo.com/yogyakarta',
    type: 'website',
  },
}

export default function YogyakartaPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* HERO SECTION */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Solusi Pengadaan & Supply Chain <br className="hidden sm:inline" />
          <span className="text-blue-500">Terpercaya di Yogyakarta</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cassindo adalah mitra strategis untuk kebutuhan pengadaan industri, MRO, 
          dan distribusi logistik bagi perusahaan B2B di Yogyakarta dan sekitarnya.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Response {'<'} 24 Jam
          </span>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Harga Kompetitif
          </span>
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Jangkauan DIY & Sekitarnya
          </span>
        </div>
      </div>

      {/* MENGAPA YOGYAKARTA */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Mengapa Cassindo adalah Pilihan Tepat untuk Bisnis di Yogyakarta?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🏛️ Kota Pendidikan & Industri Kreatif</h3>
            <p className="text-gray-600">
              Yogyakarta dikenal sebagai kota pendidikan dan pusat industri kreatif. 
              Cassindo siap mendukung kebutuhan pengadaan untuk berbagai sektor 
              termasuk manufaktur, pendidikan, dan pariwisata.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">📍 Kawasan Industri Strategis</h3>
            <p className="text-gray-600">
              Kami melayani berbagai kawasan industri di Yogyakarta, termasuk
              <strong> Piyungan, Bantul, Sleman, dan Maguwoharjo</strong>.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🤝 Klien Terpercaya</h3>
            <p className="text-gray-600">
              Telah dipercaya oleh berbagai perusahaan dan institusi di Yogyakarta 
              untuk kebutuhan pengadaan dan supply chain mereka.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">⚡ Layanan 24/7</h3>
            <p className="text-gray-600">
              Tim support kami siap membantu kapan pun. Proses quotation dan 
              follow up dalam waktu kurang dari 24 jam.
            </p>
          </div>
        </div>
      </div>

      {/* KAWASAN INDUSTRI */}
      <div className="mb-12 bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Kawasan Industri di Yogyakarta yang Kami Layani
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Piyungan', 'Bantul', 'Sleman', 'Maguwoharjo', 'Godean', 'Kalasan', 'Tempel', 'Ngaglik'].map((area) => (
            <div key={area} className="bg-white p-3 rounded-lg shadow">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </div>

      {/* LAYANAN */}
      <div className="mb-12 bg-green-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Layanan Cassindo untuk Perusahaan di Yogyakarta
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Pengadaan MRO (Maintenance, Repair & Operations)',
            'Solusi Facility Support & Manajemen Gedung',
            'Distribusi Logistik & Supply Chain Management',
            'Pengadaan Barang & Jasa untuk BUMN/Swasta',
          ].map((service) => (
            <div key={service} className="bg-white p-4 rounded-lg shadow text-center">
              <p className="font-medium">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-blue-700 text-white p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-3">
          Siap Optimalkan Supply Chain Perusahaan di Yogyakarta?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Dapatkan konsultasi gratis dan penawaran harga terbaik untuk 
          kebutuhan pengadaan industri Anda di Yogyakarta dan sekitarnya.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
        >
          Hubungi Tim Ahli Kami
        </Link>
      </div>
    </div>
  )
}
