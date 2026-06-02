'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProjectGallery from '@/components/ProjectGallery'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CompanyIntro from '@/components/CompanyIntro'
import ServicesSection from '@/components/ServicesSection'
import FAQSection from '@/components/FAQSection'  // ← TAMBAHKAN IMPORT

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompanyIntro />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectGallery />
      <FAQSection />        {/* ← TAMBAHKAN DI SINI */}
      <CTASection />
      <Footer />
    </main>
  )
}
