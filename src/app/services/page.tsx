import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'

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
