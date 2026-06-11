'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

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
        {/* Header - Simpel & Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <HiCheckCircle className="text-accent text-xs" />
            <span className="text-primary text-xs font-semibold tracking-wide">OUR PARTNERS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">
            Dipercaya oleh <span className="text-primary">Perusahaan</span> Terkemuka
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Bergabung dengan 100+ perusahaan yang telah mempercayakan kebutuhan supply chain mereka kepada Cassindo
          </p>
        </motion.div>

        {/* Logo Grid - Compact */}
        <div className="bg-gray-50/50 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {companies.map((company, idx) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="bg-white rounded-xl p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-full">
                  <div className="h-10 md:h-12 flex items-center justify-center">
                    {/* Placeholder sementara - ganti dengan logo asli */}
                    <div className="w-full h-8 bg-gray-100 rounded flex items-center justify-center text-xs font-semibold text-gray-500">
                      {company.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Companies - Chip Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {moreCompanies.map((company) => (
                <span
                  key={company}
                  className="px-3 py-1.5 bg-white rounded-full text-xs text-gray-500 shadow-sm border border-gray-100"
                >
                  {company}
                </span>
              ))}
              <span className="px-3 py-1.5 bg-primary/5 rounded-full text-xs text-primary font-medium">
                   100+ lainnya
              </span>
            </div>
            <p className="text-center text-gray-400 text-xs mt-4">
              dan lebih banyak perusahaan terpercaya lainnya
            </p>
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full">
            <span className="text-green-500 text-lg">✓</span>
            <span className="text-gray-500 text-xs">100% Trusted Vendor</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="text-gray-500 text-xs">ISO 9001:2021</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="text-gray-500 text-xs">NIB Terdaftar</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
