import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Cassindo',
  description: 'Kebijakan privasi Cassindo General Supplier.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">Informasi yang Kami Kumpulkan</h2>
              <p className="text-gray-600">
                Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, email, 
                nomor telepon, dan alamat perusahaan saat Anda menghubungi kami atau mengisi formulir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">Penggunaan Informasi</h2>
              <p className="text-gray-600">
                Informasi yang kami kumpulkan digunakan untuk:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mt-2">
                <li>Memproses permintaan quotation dan pesanan</li>
                <li>Mengirimkan informasi produk dan layanan</li>
                <li>Meningkatkan layanan dan pengalaman pengguna</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">Perlindungan Data</h2>
              <p className="text-gray-600">
                Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi 
                pribadi Anda dari akses, pengubahan, atau pengungkapan yang tidak sah.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">Berbagi Informasi</h2>
              <p className="text-gray-600">
                Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada 
                pihak ketiga tanpa pemberitahuan atau persetujuan Anda, kecuali diwajibkan oleh hukum.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">Cookie</h2>
              <p className="text-gray-600">
                Website kami menggunakan cookie untuk meningkatkan pengalaman browsing. Anda dapat 
                mengatur browser untuk menolak cookie atau memberi peringatan saat cookie dikirim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">Hak Anda</h2>
              <p className="text-gray-600">
                Anda berhak untuk mengakses, mengoreksi, atau menghapus informasi pribadi Anda 
                yang kami simpan. Silakan hubungi kami untuk permintaan tersebut.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-3">Kontak</h2>
              <p className="text-gray-600">
                Untuk pertanyaan tentang Privacy Policy, silakan hubungi:
                <br />
                Email: privacy@cassindo.com
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
