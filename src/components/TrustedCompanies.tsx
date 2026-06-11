'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const companies = [
  { name: 'PERTAMINA', logo: '/images/clients/pertamina.png' },
  { name: 'PLN', logo: '/images/clients/pln.png' },
  { name: 'Telkom Indonesia', logo: '/images/clients/telkom.png' },
  { name: 'ASTRA', logo: '/images/clients/astra.png' },
  { name: 'WIKA', logo: '/images/clients/wika.png' },
  { name: 'Adaro', logo: '/images/clients/adaro.png' },
  { name: 'Freeport', logo: '/images/clients/freeport.png' },
  { name: 'Petrokimia', logo: '/images/clients/petrokimia.png' },
  { name: 'Pupuk Indonesia', logo: '/images/clients/pupuk.png' },
  { name: 'Semen Indonesia', logo: '/images/clients/semen.png' },
]

export default function TrustedCompanies() {
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

  const [visibleItems, setVisibleItems] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1280) setVisibleItems(itemsPerView.large)
      else if (width >= 1024) setVisibleItems(itemsPerView.desktop)
      else if (width >= 768) setVisibleItems(itemsPerView.tablet)
      else setVisibleItems(itemsPerView.mobile)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalItems = companies.length
  const maxIndex = totalItems - visibleItems

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
    setIsAutoPlaying(false)
  }

  // Auto play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0
        return prev + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  // Reset auto play when carousel comes into view
  useEffect(() => {
    if (isInView) {
      setIsAutoPlaying(true)
    }
  }, [isInView])

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="text-primary text-[10px] font-semibold tracking-wide">OUR CLIENTS</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark leading-tight">
              Trusted by Companies
              <span className="text-primary block"> Across Indonesia</span>
            </h2>
          </motion.div>

          {/* Center - Carousel Logos */}
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                  {companies.map((company, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * 4 / visibleItems}px)` }}
                    >
                      <div className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                        <div className="h-12 flex items-center justify-center">
                          {/* Placeholder logo - ganti dengan logo asli */}
                          <div className="text-center">
                            <div className="text-xs font-bold text-gray-400 group-hover:text-primary transition-colors">
                              {company.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {maxIndex > 0 && (
                <>
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                      currentIndex === 0 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-primary hover:text-white'
                    }`}
                  >
                    <HiChevronLeft className="text-sm" />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                      currentIndex >= maxIndex 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-primary hover:text-white'
                    }`}
                  >
                    <HiChevronRight className="text-sm" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              <div className="flex justify-center gap-1.5 mt-4">
                {Array.from({ length: Math.min(5, Math.ceil(totalItems / visibleItems)) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx * visibleItems)
                      setIsAutoPlaying(false)
                    }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / visibleItems) === idx
                        ? 'w-6 bg-primary'
                        : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 text-center lg:text-right"
          >
            <Link 
              href="/clients"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 group text-sm font-medium"
            >
              <span>Lihat Semua Customer Kami</span>
              <HiArrowRight className="text-sm group-hover:translate-x-1 transition" />
            </Link>
            <p className="text-gray-400 text-xs mt-3">
              100+ perusahaan telah mempercayakan kebutuhan supply chain mereka
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
