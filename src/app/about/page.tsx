import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CompanyIntro from '@/components/CompanyIntro'

export const metadata: Metadata = {
  title: 'Tentang Cassindo | General Supplier & Trading Company',
  description: 'PT Cassindo Sukses Mandiri - perusahaan general trading dan supplier terpercaya di Indonesia sejak 2014.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <CompanyIntro />
      </div>
      <Footer />
    </main>
  )
}
