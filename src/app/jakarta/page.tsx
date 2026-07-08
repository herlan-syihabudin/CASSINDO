// src/app/jakarta/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solusi Pengadaan & Supply Chain di Jakarta | Cassindo',
  description: 'Cassindo menyediakan solusi pengadaan industri, MRO, dan distribusi logistik untuk perusahaan di Jakarta. Layanan end-to-end supply chain dengan respons cepat < 24 jam.',
  keywords: 'jasa pengadaan Jakarta, supply chain Jakarta, MRO Jakarta, distribusi industri Jakarta, vendor pengadaan Jakarta, logistik B2B Jakarta, solusi procurement Jakarta',
  alternates: {
    canonical: 'https://www.cassindo.com/jakarta',
  },
  openGraph: {
    title: 'Solusi Pengadaan & Supply Chain di Jakarta | Cassindo',
    description: 'Mitra terpercaya untuk pengadaan industri dan distribusi di Jakarta. Response cepat, harga kompetitif, dan jangkauan nasional.',
    url: 'https://www.cassindo.com/jakarta',
    type: 'website',
  },
}

export default function JakartaPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      {/* HERO SECTION */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Solusi Pengadaan & Supply Chain <br className="hidden sm:inline" />
          <span className="text-blue-500">Terpercaya di Jakarta</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cassindo adalah mitra strategis untuk kebutuhan pengadaan industri, MRO, 
          dan distribusi logistik bagi perusahaan B2B di Jakarta dan sekitarnya.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Response < 24 Jam
          </span>
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Harga Kompetitif
          </span>
          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Mitra BUMN
          </span>
        </div>
      </section>

      {/* MENGAPA JAKARTA */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Mengapa Cassindo adalah Pilihan Tepat untuk Bisnis di Jakarta?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🏙️ Pusat Bisnis & Industri</h3>
            <p className="text-gray-600">
              Jakarta adalah jantung ekonomi Indonesia. Cassindo memahami dinamika 
              bisnis di ibu kota dengan solusi pengadaan yang cepat dan efisien 
              untuk mendukung operasional perusahaan Anda.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🚚 Distribusi Cepat</h3>
            <p className="text-gray-600">
              Dengan jaringan logistik yang kuat di Jakarta, kami menjamin 
              pengiriman tepat waktu ke berbagai kawasan industri seperti 
              Pulogadung, Cakung, dan Sunter.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">🤝 Klien Terpercaya</h3>
            <p className="text-gray-600">
              Telah dipercaya oleh perusahaan besar di Jakarta seperti 
              <strong> PLN, Telkom Indonesia, Bank Mandiri, dan APTIV</strong> 
              untuk kebutuhan pengadaan dan supply chain mereka.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="font-bold text-lg mb-2">⚡ Layanan 24/7</h3>
            <p className="text-gray-600">
              Tim support kami siap membantu kapan pun dibutuhkan. Proses 
              quotation dan follow up dalam waktu kurang dari 24 jam.
            </p>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section className="mb-12 bg-blue-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Layanan Cassindo untuk Perusahaan di Jakarta
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
          Siap Optimalkan Supply Chain Perusahaan di Jakarta?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Dapatkan konsultasi gratis dan penawaran harga terbaik untuk 
          kebutuhan pengadaan industri Anda di Jakarta.
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
