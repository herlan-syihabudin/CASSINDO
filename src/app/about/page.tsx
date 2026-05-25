import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CompanyIntro from '@/components/CompanyIntro'

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
