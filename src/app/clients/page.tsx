// app/clients/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { HiArrowRight, HiChevronLeft, HiChevronRight, HiUsers } from 'react-icons/hi'
import { companies } from '@/app/data/clients' // ← import dari 1 sumber

export default function ClientsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(carouselRef, { once: true, amount: 0.3 })

  const itemsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
    large: 5
  }

  const [visibleItems, setVisibleItems] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1536) setVisibleItems(itemsPerView.large)
      else if (width >= 1024) setVisibleItems(itemsPerView.desktop)
      else if (width >= 768) setVisibleItems(itemsPerView.tablet)
      else setVisibleItems(itemsPerView.mobile)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalItems = companies.length
  const maxIndex = Math.max(0, totalItems - visibleItems)

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + visibleItems >= totalItems) return 0
      return prev + 1
    })
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex
      return prev - 1
    })
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + visibleItems >= totalItems) return 0
        return prev + 1
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, visibleItems, totalItems])

  useEffect(() => {
    if (isInView) {
      setIsAutoPlaying(true)
    }
  }, [isInView])

  // Hitung unique sectors (contoh)
  const uniqueSectors = ['Minyak & Gas', 'Energi', 'Telekomunikasi', 'Otomotif', 'Konstruksi', 'Pertambangan', 'Pupuk', 'Semen', 'Perbankan', 'FMCG', 'Properti']

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16 md:py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <HiUsers className="text-primary text-sm" />
                <span className="text-primary text-sm font-semibold tracking-wide">Klien Kami</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
                Dipercaya oleh Perusahaan
                <span className="text-accent block">Terkemuka di Indonesia</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Lebih dari {companies.length}+ perusahaan terpercaya dari berbagai sektor industri 
                telah memilih Cassindo sebagai mitra pengadaan dan supply chain mereka.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <motion.div
              ref={carouselRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-out gap-3 md:gap-4"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                  >
                    {companies.map((company, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0"
                        style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * 16 / visibleItems}px)` }}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="bg-gray-50/80 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
                        >
                          <div className="h-16 md:h-20 flex items-center justify-center">
                            <div className="text-center w-full">
                              <div className="text-xs md:text-sm font-bold text-gray-600 group-hover:text-primary transition-colors truncate px-2">
                                {company.name}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>

                {totalItems > visibleItems && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
                    >
                      <HiChevronLeft className="text-lg" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
                    >
                      <HiChevronRight className="text-lg" />
                    </button>
                  </>
                )}

                {totalItems > visibleItems && (
                  <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.min(5, Math.ceil(totalItems / visibleItems)) }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentIndex(Math.min(idx * visibleItems, maxIndex))
                          setIsAutoPlaying(false)
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          Math.floor(currentIndex / visibleItems) === idx
                            ? 'w-8 bg-primary'
                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Bottom Section - Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-100"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{companies.length}+</p>
                  <p className="text-xs text-gray-400">Perusahaan Terpercaya</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{uniqueSectors.length}+</p>
                  <p className="text-xs text-gray-400">Sektor Industri</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">34</p>
                  <p className="text-xs text-gray-400">Kota di Indonesia</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">99%</p>
                  <p className="text-xs text-gray-400">Tingkat Kepuasan</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition shadow-lg shadow-primary/30"
                >
                  <span>Bergabung dengan Klien Terpercaya Kami</span>
                  <HiArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
