'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProjectGallery from '@/components/ProjectGallery'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CompanyIntro from '@/components/CompanyIntro'
import ServicesSection from '@/components/ServicesSection'
import FAQSection from '@/components/FAQSection'
import SolutionsSection from '@/components/SolutionsSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompanyIntro />
      <SolutionsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectGallery />
      <FAQSection />        {/* ← TAMBAHKAN DI SINI */}
      <CTASection />
      <Footer />
    </main>
  )
}
