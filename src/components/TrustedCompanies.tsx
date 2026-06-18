// components/TrustedCompanies.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { companies } from '@/app/data/clients'

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

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-between gap-6">
          
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="text-left">
              <h2 className="text-base md:text-lg font-semibold text-dark whitespace-nowrap">
                Trusted by Companies
              </h2>
              <p className="text-primary text-sm md:text-base font-medium whitespace-nowrap">
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
            className="flex-1 min-w-0 px-4"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out gap-4 md:gap-6"
                  style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                  {companies.map((company, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / visibleItems}% - ${(visibleItems - 1) * 24 / visibleItems}px)` }}
                    >
                      <div className="bg-gray-50/80 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100 h-full flex items-center justify-center min-h-[72px] md:min-h-[88px]">
                        {/* 🔥 UKURAN LOGO DIPERBESAR */}
                        <div className="relative w-full h-12 md:h-16 flex items-center justify-center">
                          <Image
                            src={company.logo}
                            alt={company.name}
                            fill
                            className="object-contain grayscale hover:grayscale-0 transition duration-300 p-1"
                            sizes="(max-width: 768px) 100px, 140px"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              const parent = target.parentElement
                              if (parent) {
                                const text = document.createElement('div')
                                text.className = 'text-xs md:text-sm font-bold text-gray-500 group-hover:text-primary transition-colors truncate px-1 text-center w-full'
                                text.textContent = company.name
                                parent.appendChild(text)
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {totalItems > visibleItems && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
                    aria-label="Previous slide"
                  >
                    <HiChevronLeft className="text-base" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 z-10"
                    aria-label="Next slide"
                  >
                    <HiChevronRight className="text-base" />
                  </button>
                </>
              )}

              {totalItems > visibleItems && (
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: Math.min(5, Math.ceil(totalItems / visibleItems)) }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentIndex(idx * visibleItems)
                        setIsAutoPlaying(false)
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        Math.floor(currentIndex / visibleItems) === idx
                          ? 'w-6 bg-primary'
                          : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 group text-sm font-medium whitespace-nowrap"
            >
              <span>Lihat Semua Customer</span>
              <HiArrowRight className="text-sm group-hover:translate-x-1 transition" />
            </Link>
            <p className="text-gray-400 text-xs mt-1.5">
              {companies.length}+ perusahaan terpercaya
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
