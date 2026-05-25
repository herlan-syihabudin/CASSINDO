'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  HiLocationMarker, HiMail, HiPhone, HiClock, 
  HiCheckCircle, HiArrowRight, HiOfficeBuilding,
  HiUser, HiChatAlt, HiDeviceMobile
} from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi'
    if (!formData.email.trim()) newErrors.email = 'Email wajib diisi'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email tidak valid'
    if (!formData.phone.trim()) newErrors.phone = 'Nomor telepon wajib diisi'
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: HiLocationMarker, title: 'Alamat', content: 'Wisma 46, Kota BNI, Jakarta Selatan 10220' },
    { icon: HiPhone, title: 'Telepon', content: '+62 21 1234 5678', link: 'tel:+622112345678' },
    { icon: HiDeviceMobile, title: 'WhatsApp', content: '+62 812 3456 7890', link: 'https://wa.me/6281234567890' },
    { icon: HiMail, title: 'Email', content: 'info@cassindo.com', link: 'mailto:info@cassindo.com' },
    { icon: HiClock, title: 'Jam Operasional', content: 'Senin-Jumat: 08.00-17.00 WIB' },
  ]

  const officeHours = [
    { day: 'Senin - Jumat', hours: '08.00 - 17.00 WIB', status: 'Buka' },
    { day: 'Sabtu', hours: '08.00 - 12.00 WIB', status: 'Buka' },
    { day: 'Minggu & Hari Libur', hours: 'Tutup', status: 'Tutup' },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <HiChatAlt />
              Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Siap Membantu <span className="text-primary">Kebutuhan Supply</span> Anda
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Tim kami siap memberikan solusi terbaik untuk kebutuhan pengadaan Anda.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl shadow-xl p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-dark mb-6">Kirim Pesan</h2>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center gap-3"
                >
                  <HiCheckCircle className="text-xl" />
                  <span>Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-dark font-medium mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-500' : 'border-gray-200'
                      } focus:border-primary focus:outline-none transition`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } focus:border-primary focus:outline-none transition`}
                      placeholder="john@company.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    No. Telepon <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <HiDeviceMobile className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      } focus:border-primary focus:outline-none transition`}
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">Perusahaan</label>
                  <div className="relative">
                    <HiOfficeBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none transition"
                      placeholder="PT. Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } focus:border-primary focus:outline-none transition resize-none`}
                    placeholder="Ceritakan kebutuhan supply Anda..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <HiArrowRight className="group-hover:translate-x-1 transition" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid gap-4">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition">
                        <info.icon className="text-xl text-primary group-hover:text-white transition" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dark">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-gray-600 hover:text-primary transition">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                  <HiClock className="text-primary" />
                  Jam Operasional
                </h3>
                <div className="space-y-3">
                  {officeHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{item.day}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-dark font-medium">{item.hours}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'Buka' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-primary text-white rounded-2xl p-6 text-center">
                <HiCheckCircle className="text-3xl mx-auto mb-2 text-accent" />
                <h3 className="font-bold text-lg mb-1">Respon Cepat</h3>
                <p className="text-white/80 text-sm">
                  Tim sales kami akan merespon dalam &lt; 2x24 jam kerja
                </p>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <div className="bg-gray-200 rounded-3xl overflow-hidden shadow-lg h-80 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5710423003196!2d106.822489!3d-6.208759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f39c7c1a7a2b%3A0x4e8c3f5e6d8f9a2c!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
