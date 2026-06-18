// app/clients/page.tsx
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Klien Kami | Cassindo',
  description: 'Daftar klien terpercaya Cassindo dari berbagai sektor industri di Indonesia.',
}

export default function ClientsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <section className="section-padding">
          <div className="container-custom">
            <h1 className="text-4xl font-bold text-dark mb-6">Klien Kami</h1>
            <p className="text-gray-500">Halaman ini sedang dalam pengembangan. Segera hadir!</p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
