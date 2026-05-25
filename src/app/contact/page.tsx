import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Hubungi Kami</h1>
            <p className="text-gray-500 text-lg">Siap membantu kebutuhan supply Anda</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <form className="space-y-5">
                <div>
                  <label className="block text-dark font-medium mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-dark font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-dark font-medium mb-2">No. Telepon</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-dark font-medium mb-2">Perusahaan</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-dark font-medium mb-2">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-dark mb-4">Informasi Kontak</h3>
                <div className="space-y-3 text-gray-600">
                  <p>📍 Gedung Office, Lantai 8, Jakarta Selatan</p>
                  <p>📞 +62 21 1234 5678</p>
                  <p>📱 +62 812 3456 7890 (WhatsApp)</p>
                  <p>✉️ info@cassindo.com</p>
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-dark mb-4">Jam Operasional</h3>
                <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
                <p className="text-gray-600">Sabtu: 08.00 - 12.00 WIB</p>
                <p className="text-gray-600">Minggu & Hari Libur: Tutup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
