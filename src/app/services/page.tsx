import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'

export const metadata: Metadata = {
  title: 'Layanan & Produk | Cassindo General Supplier',
  description: 'Cassindo menyediakan berbagai layanan general supply untuk industri, meliputi Industrial Supply, Electrical Equipment, Mechanical Parts, Safety Equipment, Building Material, Office Supply, dan Custom Procurement.',
  keywords: 'industrial supply, electrical equipment, mechanical parts, safety equipment, building material, office supply, custom procurement',
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
