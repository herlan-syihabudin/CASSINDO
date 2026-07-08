// src/app/blog/solusi-pengadaan-surabaya/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solusi Pengadaan Industri di Surabaya: Kenapa Cassindo Jadi Pilihan',
  description: 'Temukan solusi pengadaan industri terbaik di Surabaya bersama Cassindo. Melayani MRO, distribusi logistik, dan supply chain untuk perusahaan B2B di Jawa Timur.',
  keywords: 'pengadaan industri Surabaya, MRO Surabaya, supply chain Jawa Timur, jasa pengadaan Surabaya, Cassindo Surabaya',
  alternates: {
    canonical: 'https://www.cassindo.com/blog/solusi-pengadaan-surabaya',
  },
}

export default function BlogSurabaya() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Solusi Pengadaan Industri di Surabaya: Kenapa Cassindo Jadi Pilihan
      </h1>
      
      <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
        <span>📅 8 Juli 2026</span>
        <span>⏱️ 5 min read</span>
        <span>📍 Surabaya</span>
      </div>

      <img 
        src="/blog/surabaya-industry.jpg" 
        alt="Kawasan Industri Surabaya" 
        className="w-full rounded-xl mb-8"
      />

      <div className="prose prose-lg max-w-none">
        <p className="lead">
          Surabaya, sebagai kota industri terbesar kedua di Indonesia, memiliki 
          kebutuhan pengadaan yang kompleks dan dinamis. Cassindo hadir sebagai 
          mitra strategis untuk menjawab tantangan tersebut.
        </p>

        <h2>Mengapa Surabaya Membutuhkan Solusi Pengadaan yang Tepat?</h2>
        <p>
          Dengan kawasan industri seperti Rungkut, SIER, dan Margomulyo yang 
          menjadi rumah bagi ratusan perusahaan manufaktur, kebutuhan akan 
          <strong> MRO (Maintenance, Repair & Operations)</strong> dan 
          distribusi logistik sangat tinggi. Perusahaan di Surabaya membutuhkan 
          mitra yang dapat:
        </p>
        <ul>
          <li><strong>Menyediakan produk MRO berkualitas</strong> dengan harga kompetitif</li>
          <li><strong>Menjamin ketersediaan stok</strong> untuk menghindari downtime produksi</li>
          <li><strong>Memberikan respons cepat</strong> untuk kebutuhan mendesak</li>
          <li><strong>Mendistribusikan barang</strong> ke seluruh area Jawa Timur</li>
        </ul>

        <h2>Cassindo: Mitra Terpercaya untuk Industri di Surabaya</h2>
        <p>
          Sebagai perusahaan yang telah dipercaya oleh <strong>PLN, Adaro, 
          dan INDIKA</strong>, Cassindo memahami betul kebutuhan industri di 
          Surabaya. Berikut keunggulan kami:
        </p>

        <h3>1. Jaringan Supplier yang Luas</h3>
        <p>
          Kami memiliki lebih dari <strong>100+ trusted suppliers</strong> yang 
          terintegrasi langsung, memastikan harga terbaik dan kualitas produk 
          yang terjamin.
        </p>

        <h3>2. Distribusi Cepat ke Seluruh Surabaya</h3>
        <p>
          Dengan jaringan logistik yang kuat, kami menjamin pengiriman tepat 
          waktu ke berbagai kawasan industri di Surabaya dan sekitarnya.
        </p>

        <h3>3. Quality Control 100%</h3>
        <p>
          Setiap produk yang dikirim melalui inspeksi ketat untuk memastikan 
          kualitas terbaik sampai ke tangan pelanggan.
        </p>

        <h2>Testimoni Klien Cassindo di Surabaya</h2>
        <blockquote className="bg-blue-50 p-6 rounded-lg">
          <p className="italic">
            "Cassindo telah menjadi mitra andal kami untuk kebutuhan MRO. 
            Respons cepat dan kualitas produk yang konsisten membuat operasional 
            kami lebih efisien."
          </p>
          <footer className="mt-2 font-semibold">
            — Manajer Procurement, Perusahaan Manufaktur di SIER Surabaya
          </footer>
        </blockquote>

        <h2>Mulai Optimalisasi Supply Chain Perusahaan Anda</h2>
        <p>
          Jangan biarkan masalah pengadaan menghambat produktivitas bisnis Anda 
          di Surabaya. Hubungi tim Cassindo sekarang untuk konsultasi gratis.
        </p>

        <div className="bg-blue-700 text-white p-8 rounded-xl text-center mt-8">
          <p className="text-xl font-bold">📞 +62-817-7684-8333</p>
          <p className="text-blue-100">Tim kami siap membantu 24/7</p>
          <Link 
            href="/contact" 
            className="inline-block mt-4 bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </article>
  )
}
