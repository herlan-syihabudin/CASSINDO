import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectGallery from '@/components/ProjectGallery'

export const metadata: Metadata = {
  title: 'Proyek & Dokumentasi | Cassindo',
  description: 'Lihat dokumentasi kegiatan operasional Cassindo, mulai dari pengiriman, warehouse, hingga tim logistik profesional.',
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ProjectGallery />
      </main>
      <Footer />
    </>
  )
}
