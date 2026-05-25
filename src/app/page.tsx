'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProjectGallery from '@/components/ProjectGallery'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import CompanyIntro from '@/components/CompanyIntro'
import ServicesSection from '@/components/ServicesSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CompanyIntro />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectGallery />
      <CTASection />
      <Footer />
    </main>
  )
}
