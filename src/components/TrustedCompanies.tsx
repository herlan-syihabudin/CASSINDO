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

  useEffect(() => {
    if (isInView) {
      setIsAutoPlaying(true)
    }
  }, [isInView])

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-6">
          
          {/* Left Side - Title (ukuran kecil) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="text-left">
              <h2 className="text-sm md:text-base font-semibold text-dark">
                Trusted by Companies
              </h2>
              <p className="text-primary text-xs md:text-sm font-medium">
                Across Indonesia
              </p>
            </div>
          </motion.div>

          {/* Center - Carousel Logos (flexible) */}
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0"
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out gap-3 md:gap-4"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                  {companies.map((company, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * 3 / visibleItems}px)` }}
                    >
                      <div className="bg-gray-50 rounded-lg p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="h-8 md:h-10 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-[10px] md:text-xs font-semibold text-gray-500 group-hover:text-primary transition-colors whitespace-nowrap">
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
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                      currentIndex === 0 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-primary hover:text-white'
                    }`}
                  >
                    <HiChevronLeft className="text-xs" />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex >= maxIndex}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${
                      currentIndex >= maxIndex 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-primary hover:text-white'
                    }`}
                  >
                    <HiChevronRight className="text-xs" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              <div className="flex justify-center gap-1 mt-3">
                {Array.from({ length: Math.min(3, Math.ceil(totalItems / visibleItems)) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentIndex(idx * visibleItems)
                      setIsAutoPlaying(false)
                    }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / visibleItems) === idx
                        ? 'w-4 bg-primary'
                        : 'w-1 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - CTA Button (ukuran kecil) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Link 
              href="/clients"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 group text-xs font-medium whitespace-nowrap"
            >
              <span>Lihat Semua Customer</span>
              <HiArrowRight className="text-xs group-hover:translate-x-0.5 transition" />
            </Link>
            <p className="text-gray-400 text-[9px] mt-1 text-center whitespace-nowrap">
              100+ perusahaan terpercaya
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
