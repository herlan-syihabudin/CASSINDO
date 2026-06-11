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
  { name: 'Bank Mandiri', logo: '/images/clients/mandiri.png' },
  { name: 'BNI', logo: '/images/clients/bni.png' },
]

export default function TrustedCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(carouselRef, { once: true, amount: 0.3 })

  const itemsPerView = {
    mobile: 2,
    tablet: 4,
    desktop: 5,
    large: 6
  }

  const [visibleItems, setVisibleItems] = useState(6)

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
  const maxIndex = totalItems - visibleItems

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev + visibleItems >= totalItems) return 0
      return prev + 1
    })
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return Math.max(0, totalItems - visibleItems)
      return prev - 1
    })
    setIsAutoPlaying(false)
  }

  // Auto play carousel
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

  // Reset auto play when carousel comes into view
  useEffect(() => {
    if (isInView) {
      setIsAutoPlaying(true)
    }
  }, [isInView])

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="text-left">
              <h2 className="text-sm md:text-base font-semibold text-dark whitespace-nowrap">
                Trusted by Companies
              </h2>
              <p className="text-primary text-xs md:text-sm font-medium whitespace-nowrap">
                Across Indonesia
              </p>
            </div>
          </motion.div>

          {/* Center - Carousel Logos */}
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0 px-2"
          >
            <div className="relative">
              {/* Carousel Container */}
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
                      <div className="bg-gray-50/80 rounded-xl p-3 md:p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group border border-gray-100">
                        <div className="h-10 md:h-12 flex items-center justify-center">
                          <div className="text-center w-full">
                            <div className="text-[11px] md:text-xs font-bold text-gray-500 group-hover:text-primary transition-colors truncate px-1">
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
              {totalItems > visibleItems && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-7 h-7 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
                  >
                    <HiChevronLeft className="text-sm" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-7 h-7 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
                  >
                    <HiChevronRight className="text-sm" />
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {totalItems > visibleItems && (
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
                          ? 'w-5 bg-primary'
                          : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Side - CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0 text-right"
          >
            <Link 
              href="/clients"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 group text-xs font-medium whitespace-nowrap"
            >
              <span>Lihat Semua Customer</span>
              <HiArrowRight className="text-xs group-hover:translate-x-0.5 transition" />
            </Link>
            <p className="text-gray-400 text-[9px] mt-1">
              100+ perusahaan terpercaya
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
