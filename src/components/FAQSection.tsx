'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus, HiChevronRight } from 'react-icons/hi'

const faqs = [
  {
    question: 'Apa saja produk yang Cassindo supply?',
    answer: 'Kami menyediakan berbagai produk industrial seperti Industrial Supply, Electrical Equipment, Mechanical Parts, Safety Equipment, Building Material, Office Supply, dan Custom Procurement sesuai kebutuhan proyek Anda.',
  },
  {
    question: 'Apakah Cassindo melayani pengiriman ke seluruh Indonesia?',
    answer: 'Ya, kami melayani pengiriman ke seluruh wilayah Indonesia melalui jaringan logistik nasional yang terpercaya, termasuk area terpencil.',
  },
  {
    question: 'Berapa lama waktu respon untuk request quotation?',
    answer: 'Tim sales kami akan merespon request quotation dalam waktu kurang dari 2x24 jam kerja.',
  },
  {
    question: 'Apakah Cassindo memiliki sertifikasi resmi?',
    answer: 'Ya, Cassindo telah tersertifikasi ISO 9001:2021, terdaftar di BKPM, dan menjadi anggota Asosiasi Supplier Indonesia (ASI).',
  },
  {
    question: 'Apakah melayani pengadaan untuk proyek pemerintah?',
    answer: 'Ya, kami melayani pengadaan untuk proyek pemerintah dan BUMN dengan legalitas lengkap termasuk NIB, NPWP, dan akta perusahaan.',
  },
  {
    question: 'Bagaimana cara memesan produk?',
    answer: 'Anda dapat menghubungi tim sales kami melalui halaman Kontak, atau mengirim email ke sales@cassindo.com untuk konsultasi kebutuhan Anda.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="section-title">
            Pertanyaan <span className="text-primary">Umum</span>
          </h2>
          <p className="section-subtitle">
            Temukan jawaban atas pertanyaan yang sering diajukan tentang layanan kami
          </p>
        </motion.div>

        {/* FAQ Grid - 2 kolom di desktop */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <div 
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-dark pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <HiMinus className="text-primary flex-shrink-0 text-lg" />
                    ) : (
                      <HiPlus className="text-primary flex-shrink-0 text-lg" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA - Lihat Semua FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link 
              href="/faq" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
            >
              <span>Lihat semua pertanyaan</span>
              <HiChevronRight className="group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
