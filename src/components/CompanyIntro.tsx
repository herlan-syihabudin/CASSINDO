'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight, HiOutlineEye } from 'react-icons/hi'

export default function CompanyIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-sm font-semibold tracking-wide">Tentang Cassindo</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 leading-tight"
          >
            Driving Reliable Procurement &
            <span className="text-accent block"> Supply Chain Solutions</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6"
          >
            <strong className="text-primary font-semibold">PT Catur Sarana Solusindo (Cassindo)</strong> adalah 
            perusahaan pengadaan dan solusi supply chain yang berkomitmen mendukung kebutuhan industri, 
            konstruksi, komersial, dan proyek strategis di seluruh Indonesia.
          </motion.p>

          {/* Vision - 1 kalimat simple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-primary/5 rounded-full mb-8"
          >
            <HiOutlineEye className="text-primary text-sm" />
            <span className="text-dark text-sm">
              Visi: <span className="text-gray-500">Mitra pengadaan terpercaya berstandar global</span>
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              <span>Pelajari lebih lanjut tentang Cassindo</span>
              <HiArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
