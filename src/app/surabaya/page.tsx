// src/app/surabaya/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solusi Pengadaan & Supply Chain di Surabaya | Cassindo',
  description: 'Cassindo menyediakan solusi pengadaan industri, MRO, dan distribusi logistik untuk perusahaan di Surabaya dan Jawa Timur. Layanan end-to-end supply chain terpercaya.',
  keywords: 'jasa pengadaan Surabaya, supply chain Surabaya, MRO Surabaya, distribusi industri Jawa Timur, vendor pengadaan Surabaya, logistik B2B Surabaya',
  alternates: {
    canonical: 'https://www.cassindo.com/surabaya',
  },
  openGraph: {
    title: 'Solusi Pengadaan & Supply Chain di Surabaya | Cassindo',
    description: 'Mitra terpercaya untuk pengadaan industri dan distribusi di Surabaya. Melayani kawasan industri Rungkut, SIER, dan seluruh Jawa Timur.',
    url: 'https://www.cassindo.com/surabaya',
    type: 'website',
  },
}

export default function SurabayaPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      {/* HERO */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Solusi Pengadaan & Supply Chain <br className="hidden sm:inline" />
          <span className="text-blue-500">Terpercaya di Surabaya</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cassindo hadir sebagai mitra strategis untuk kebutuhan pengadaan industri, 
          MRO, dan distribusi logistik bagi perusahaan B2B di Surabaya dan Jawa Timur.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Jangkauan Jawa Timur
          </span>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Harga Terbaik
          </span>
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Terdaftar E-Katalog
          </span>
        </div>
      </section>

      {/* MENGAPA SURABAYA */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Mengapa Cassindo adalah Pilihan Tepat untuk Bisnis di Surabaya?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🏭 Pusat Industri Manufaktur</h3>
            <p className="text-gray-600">
              Surabaya adalah kota industri terbesar kedua di Indonesia. Cassindo 
              siap mendukung kebutuhan MRO dan supply chain untuk kawasan industri 
              Rungkut, SIER, dan Margomulyo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🚢 Distribusi & Logistik</h3>
            <p className="text-gray-600">
              Dengan posisi strategis sebagai kota pelabuhan, Cassindo memastikan 
              distribusi logistik yang efisien ke seluruh area Surabaya dan 
              sekitarnya.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🤝 Klien Terpercaya</h3>
            <p className="text-gray-600">
              Dipercaya oleh perusahaan-perusahaan besar di Jawa Timur seperti 
              <strong> PT PLN, PT Adaro, dan PT INDIKA</strong> untuk kebutuhan 
              pengadaan dan distribusi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">⚡ Quality Control</h3>
            <p className="text-gray-600">
              Kami menerapkan inspeksi ketat (100% QC) sebelum pengiriman untuk 
              memastikan kualitas produk yang sampai ke tangan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* KAWASAN INDUSTRI */}
      <section className="mb-12 bg-green-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Kawasan Industri di Surabaya yang Kami Layani
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Rungkut', 'SIER', 'Margomulyo', 'Wonokromo', 'Gresik', 'Sidoarjo', 'Mojokerto', 'Pasuruan'].map((area) => (
            <div key={area} className="bg-white p-3 rounded-lg shadow">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-700 text-white p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-3">
          Butuh Solusi Pengadaan di Surabaya?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Hubungi tim Cassindo sekarang dan dapatkan penawaran terbaik untuk 
          kebutuhan industri Anda di Surabaya dan Jawa Timur.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
        >
          Konsultasi Gratis
        </Link>
      </section>
    </main>
  )
}
