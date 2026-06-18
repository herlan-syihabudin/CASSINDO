import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CompanyIntroFull from '@/components/CompanyIntroFull'

export const metadata: Metadata = {
  title: 'Tentang Cassindo | Mitra Solusi Pengadaan Industri Terpercaya',
  description: 'Cassindo Core Advanced Supply Solution - mitra terpercaya untuk solusi pengadaan industri, MRO, dan distribusi nasional di Indonesia.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <CompanyIntroFull />
      </div>
      <Footer />
    </main>
  )
}
