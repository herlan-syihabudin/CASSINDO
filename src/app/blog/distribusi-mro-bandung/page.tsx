// src/app/blog/distribusi-mro-bandung/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Distribusi MRO Terpercaya untuk Manufaktur di Bandung | Cassindo',
  description: 'Cassindo menyediakan distribusi MRO terpercaya untuk industri manufaktur di Bandung dan Jawa Barat. Solusi pengadaan cepat, harga kompetitif, dan quality control terjamin.',
  keywords: 'distribusi MRO Bandung, MRO manufaktur Jawa Barat, pengadaan industri Bandung, Cassindo Bandung, supply chain Bandung',
  alternates: {
    canonical: 'https://www.cassindo.com/blog/distribusi-mro-bandung',
  },
}

export default function BlogBandung() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Distribusi MRO Terpercaya untuk Manufaktur di Bandung
      </h1>
      
      <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
        <span>📅 8 Juli 2026</span>
        <span>⏱️ 4 min read</span>
        <span>📍 Bandung</span>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Bandung adalah salah satu sentra manufaktur terbesar di Indonesia, 
          dengan industri tekstil, otomotif, elektronik, dan farmasi yang terus 
          berkembang. Kebutuhan akan MRO (Maintenance, Repair & Operations) 
          menjadi kunci kelancaran operasional.
        </p>

        <h2>Tantangan Manufaktur di Bandung</h2>
        <p>
          Perusahaan manufaktur di Bandung menghadapi tantangan unik, antara lain:
        </p>
        <ul>
          <li><strong>Keterbatasan supplier lokal</strong> untuk komponen spesifik</li>
          <li><strong>Fluktuasi harga bahan baku</strong> yang mempengaruhi biaya produksi</li>
          <li><strong>Kebutuhan respons cepat</strong> untuk perbaikan mesin</li>
          <li><strong>Distribusi ke kawasan industri</strong> seperti Majalaya, Dayeuhkolot, dan Cimahi</li>
        </ul>

        <h2>Cassindo: Solusi MRO Terpercaya di Bandung</h2>
        <p>
          Dengan pengalaman melayani perusahaan besar seperti <strong>Telkom 
          Indonesia</strong> dan <strong>APTIV</strong>, Cassindo menawarkan 
          solusi lengkap untuk kebutuhan manufaktur di Bandung.
        </p>

        <h3>1. Produk MRO Berkualitas</h3>
        <p>
          Kami menyediakan berbagai produk MRO mulai dari spare parts, tools, 
          safety equipment, hingga chemical & lubricants dari supplier 
          terpercaya.
        </p>

        <h3>2. Jaringan Distribusi Luas</h3>
        <p>
          Dengan coverage <strong>34 provinsi</strong>, termasuk Bandung dan 
          seluruh Jawa Barat, kami menjamin ketersediaan produk di mana pun 
          lokasi pabrik Anda.
        </p>

        <h3>3. Harga Kompetitif</h3>
        <p>
          Melalui integrasi langsung dengan 100+ trusted suppliers, kami 
          menawarkan harga terbaik yang dapat menghemat biaya pengadaan 
          <strong> hingga 30%</strong>.
        </p>

        <h2>Kawasan Industri di Bandung yang Kami Layani</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
          {['Majalaya', 'Dayeuhkolot', 'Cimahi', 'Padalarang', 'Rancaekek', 'Cileunyi', 'Soreang', 'Baleendah'].map((area) => (
            <div key={area} className="bg-blue-50 p-3 rounded-lg text-center font-medium">
              {area}
            </div>
          ))}
        </div>

        <h2>Mulai Transformasi Supply Chain Anda</h2>
        <p>
          Optimalkan operasional manufaktur Anda di Bandung dengan solusi 
          MRO terpercaya dari Cassindo. Hubungi kami sekarang.
        </p>

        <div className="bg-blue-700 text-white p-8 rounded-xl text-center mt-8">
          <p className="text-xl font-bold">📞 +62-817-7684-8333</p>
          <p className="text-blue-100">Dapatkan konsultasi gratis sekarang</p>
          <Link 
            href="/contact" 
            className="inline-block mt-4 bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Hubungi Tim Ahli
          </Link>
        </div>
      </div>
    </article>
  )
}
