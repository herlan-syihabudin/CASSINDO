import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms & Conditions | Cassindo',
  description: 'Syarat dan ketentuan penggunaan layanan Cassindo General Supplier.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">1. Pendahuluan</h2>
              <p className="text-gray-600">
                Dengan mengakses dan menggunakan website Cassindo, Anda menyetujui untuk terikat dengan 
                syarat dan ketentuan yang berlaku. Jika Anda tidak setuju dengan bagian manapun dari 
                ketentuan ini, harap tidak menggunakan website kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">2. Layanan</h2>
              <p className="text-gray-600">
                Cassindo menyediakan layanan general supply dan trading untuk berbagai kebutuhan 
                industri, komersial, dan proyek. Kami berhak untuk mengubah, menangguhkan, atau 
                menghentikan layanan tanpa pemberitahuan sebelumnya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">3. Harga dan Pembayaran</h2>
              <p className="text-gray-600">
                Harga produk dan layanan dapat berubah sewaktu-waktu. Pembayaran harus dilakukan 
                sesuai dengan ketentuan yang disepakati dalam kontrak atau purchase order.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">4. Pengiriman</h2>
              <p className="text-gray-600">
                Waktu pengiriman bersifat estimasi dan tidak dapat dijamin. Cassindo tidak bertanggung 
                jawab atas keterlambatan yang disebabkan oleh pihak ketiga atau force majeure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">5. Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600">
                Seluruh konten pada website ini adalah hak milik Cassindo dan dilindungi oleh 
                undang-undang hak cipta. Dilarang menyalin, mendistribusikan, atau menggunakan 
                konten tanpa izin tertulis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">6. Batasan Tanggung Jawab</h2>
              <p className="text-gray-600">
                Cassindo tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau 
                konsekuensial yang timbul dari penggunaan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">7. Perubahan Ketentuan</h2>
              <p className="text-gray-600">
                Kami berhak untuk memperbarui ketentuan ini sewaktu-waktu. Perubahan akan berlaku 
                segera setelah dipublikasikan di website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">8. Kontak</h2>
              <p className="text-gray-600">
                Jika Anda memiliki pertanyaan tentang Terms & Conditions ini, silakan hubungi kami di:
                <br />
                Email: legal@cassindo.com
                <br />
                Telepon: +62 21 1234 5678
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
