'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const companies = [
  { name: 'PERTAMINA', logo: '/images/clients/pertamina.png' },
  { name: 'PLN', logo: '/images/clients/pln.png' },
  { name: 'Telkom Indonesia', logo: '/images/clients/telkom.png' },
  { name: 'ASTRA', logo: '/images/clients/astra.png' },
  { name: 'Wika', logo: '/images/clients/wika.png' },
  { name: 'Adaro', logo: '/images/clients/adaro.png' },
]

export default function TrustedCompanies() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-lg md:text-xl font-semibold text-dark mb-2">
            Trusted by Companies Across Indonesia
          </h3>
          <p className="text-gray-400 text-sm">
            Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, idx) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
                <div className="w-24 h-12 relative">
                  {/* Placeholder - ganti dengan logo asli */}
                  <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                    {company.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            dan lebih banyak perusahaan lainnya
          </p>
        </motion.div>
      </div>
    </section>
  )
}
