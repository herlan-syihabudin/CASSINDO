'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const companies = [
  { name: 'PERTAMINA', logo: '/images/clients/pertamina.png' },
  { name: 'PLN', logo: '/images/clients/pln.png' },
  { name: 'Telkom Indonesia', logo: '/images/clients/telkom.png' },
  { name: 'ASTRA', logo: '/images/clients/astra.png' },
  { name: 'WIKA', logo: '/images/clients/wika.png' },
  { name: 'Adaro', logo: '/images/clients/adaro.png' },
]

const moreCompanies = [
  'Bank Mandiri', 'BNI', 'BRI', 'Semen Indonesia', 
  'Freeport', 'Petrokimia', 'Pupuk Indonesia', 'Krakatau Steel'
]

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <HiCheckCircle className="text-accent text-xs" />
              <span className="text-primary text-xs font-semibold tracking-wide">TRUSTED PARTNERS</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-3">
              Trusted by Companies
              <span className="text-primary block"> Across Indonesia</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bergabung dengan 100+ perusahaan yang telah mempercayakan 
              kebutuhan supply chain mereka kepada Cassindo
            </p>
            
            {/* Link to see more companies */}
            <Link 
              href="/clients"
              className="inline-flex items-center gap-2 mt-4 text-primary text-sm font-medium hover:gap-3 transition-all group"
            >
              <span>Lihat semua klien kami</span>
              <HiArrowRight className="text-sm group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>

          {/* Right Side - Logos & More Companies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Logos Grid */}
            <div className="bg-gray-50/50 rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4">
                {companies.map((company, idx) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center"
                  >
                    <div className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-full">
                      <div className="h-10 flex items-center justify-center">
                        {/* Placeholder logo - ganti dengan asli */}
                        <div className="w-full text-center text-xs font-semibold text-gray-500">
                          {company.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* More Companies - Chip Style */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {moreCompanies.slice(0, 6).map((company) => (
                    <span
                      key={company}
                      className="px-2 py-1 bg-white rounded-full text-[10px] text-gray-500 shadow-sm border border-gray-100"
                    >
                      {company}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-primary/5 rounded-full text-[10px] text-primary font-medium">
                    +100+
                  </span>
                </div>
                <p className="text-center text-gray-400 text-[10px] mt-3">
                  dan perusahaan terpercaya lainnya
                </p>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex justify-center gap-4 mt-4">
              <div className="flex items-center gap-1">
                <span className="text-green-500 text-xs">✓</span>
                <span className="text-gray-400 text-[10px]">ISO 9001</span>
              </div>
              <div className="w-px h-3 bg-gray-300" />
              <div className="flex items-center gap-1">
                <span className="text-green-500 text-xs">✓</span>
                <span className="text-gray-400 text-[10px]">NIB Terdaftar</span>
              </div>
              <div className="w-px h-3 bg-gray-300" />
              <div className="flex items-center gap-1">
                <span className="text-green-500 text-xs">✓</span>
                <span className="text-gray-400 text-[10px]">100% Trusted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
