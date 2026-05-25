'use client'

import { useState } from 'react'
import { HiPlus, HiMinus, HiMail, HiPhone } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const faqs = [
  {
    question: 'Apa saja produk yang Cassindo supply?',
    answer: 'Kami menyediakan berbagai produk industrial seperti Industrial Supply, Electrical Equipment, Mechanical Parts, Safety Equipment, Building Material, Office Supply, dan Custom Procurement sesuai kebutuhan proyek Anda.'
  },
  {
    question: 'Apakah Cassindo melayani pengiriman ke seluruh Indonesia?',
    answer: 'Ya, kami melayani pengiriman ke seluruh wilayah Indonesia melalui jaringan logistik nasional yang terpercaya, termasuk area terpencil.'
  },
  {
    question: 'Berapa lama waktu respon untuk request quotation?',
    answer: 'Tim sales kami akan merespon request quotation dalam waktu kurang dari 2x24 jam kerja.'
  },
  {
    question: 'Apakah Cassindo memiliki sertifikasi resmi?',
    answer: 'Ya, Cassindo telah tersertifikasi ISO 9001:2021, terdaftar di BKPM, dan menjadi anggota Asosiasi Supplier Indonesia (ASI).'
  },
  {
    question: 'Apakah melayani pengadaan untuk proyek pemerintah?',
    answer: 'Ya, kami melayani pengadaan untuk proyek pemerintah dan BUMN dengan legalitas lengkap termasuk NIB, NPWP, dan akta perusahaan.'
  },
  {
    question: 'Bagaimana cara memesan produk?',
    answer: 'Anda dapat menghubungi tim sales kami melalui halaman Kontak, atau mengirim email ke info@cassindo.com untuk konsultasi kebutuhan Anda.'
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Temukan jawaban atas pertanyaan umum seputar layanan kami.
            </p>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-dark">{faq.question}</span>
                  {openIndex === index ? (
                    <HiMinus className="text-primary flex-shrink-0" />
                  ) : (
                    <HiPlus className="text-primary flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-dark mb-2">Masih punya pertanyaan?</h3>
            <p className="text-gray-600 mb-6">Tim kami siap membantu Anda.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                <HiMail /> Hubungi Kami
              </Link>
              <a href="tel:+622112345678" className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
                <HiPhone /> +62 21 1234 5678
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
