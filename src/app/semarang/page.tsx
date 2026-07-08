// src/app/semarang/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solusi Pengadaan & Supply Chain di Semarang | Cassindo',
  description: 'Cassindo menyediakan solusi pengadaan industri, MRO, dan distribusi logistik untuk perusahaan di Semarang dan Jawa Tengah. Layanan end-to-end supply chain terpercaya.',
  keywords: 'jasa pengadaan Semarang, supply chain Semarang, MRO Semarang, distribusi industri Jawa Tengah, vendor pengadaan Semarang, solusi procurement Semarang, logistik B2B Semarang',
  alternates: {
    canonical: 'https://www.cassindo.com/semarang',
  },
  openGraph: {
    title: 'Solusi Pengadaan & Supply Chain di Semarang | Cassindo',
    description: 'Mitra terpercaya untuk pengadaan industri dan distribusi di Semarang. Melayani kawasan industri Terboyo, Genuk, dan seluruh Jawa Tengah.',
    url: 'https://www.cassindo.com/semarang',
    type: 'website',
  },
}

export default function SemarangPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      {/* HERO SECTION */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Solusi Pengadaan & Supply Chain <br className="hidden sm:inline" />
          <span className="text-blue-500">Terpercaya di Semarang</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cassindo adalah mitra strategis untuk kebutuhan pengadaan industri, MRO, 
          dan distribusi logistik bagi perusahaan B2B di Semarang dan Jawa Tengah.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Response < 24 Jam
          </span>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Harga Terbaik
          </span>
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Mitra BUMN
          </span>
        </div>
      </section>

      {/* MENGAPA SEMARANG */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Mengapa Cassindo adalah Pilihan Tepat untuk Bisnis di Semarang?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🏗️ Pusat Industri & Perdagangan</h3>
            <p className="text-gray-600">
              Semarang adalah kota industri dan perdagangan penting di Jawa Tengah. 
              Cassindo siap mendukung kebutuhan MRO dan supply chain untuk 
              berbagai sektor industri.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">📍 Kawasan Industri Strategis</h3>
            <p className="text-gray-600">
              Kami melayani berbagai kawasan industri di Semarang, termasuk 
              <strong> Kawasan Industri Terboyo, Genuk, dan Tambak Aji</strong>.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🤝 Klien Terpercaya</h3>
            <p className="text-gray-600">
              Dipercaya oleh perusahaan-perusahaan besar seperti <strong>PLN</strong>, 
              <strong> Adaro</strong>, dan <strong>INDIKA</strong> untuk kebutuhan 
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
      <section className="mb-12 bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Kawasan Industri di Semarang yang Kami Layani
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {['Terboyo', 'Genuk', 'Tambak Aji', 'Kawasan Industri Semarang', 'Kendal', 'Demak', 'Ungaran', 'Salatiga'].map((area) => (
            <div key={area} className="bg-white p-3 rounded-lg shadow">
              <p className="font-medium">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LAYANAN */}
      <section className="mb-12 bg-green-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Layanan Cassindo untuk Perusahaan di Semarang
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
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-700 text-white p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-3">
          Siap Optimalkan Supply Chain Perusahaan di Semarang?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Dapatkan konsultasi gratis dan penawaran harga terbaik untuk 
          kebutuhan pengadaan industri Anda di Semarang dan Jawa Tengah.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition"
        >
          Hubungi Tim Ahli Kami
        </Link>
      </section>
    </main>
  )
}
