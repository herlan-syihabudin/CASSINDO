// src/app/page.tsx
'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProjectGallery from '@/components/ProjectGallery'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'
import FAQSection from '@/components/FAQSection'
import SolutionsSection from '@/components/SolutionsSection'
import TrustedCompanies from '@/components/TrustedCompanies'  

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SolutionsSection />
      <TrustedCompanies /> 
      <ServicesSection />     
      <WhyChooseUs />
      <ProjectGallery />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
