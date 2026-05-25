'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HiLocationMarker, HiMail, HiPhone, HiClock, 
  HiArrowRight, HiCheckCircle, HiMap, HiBuildingOffice 
} from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    perusahaan: [
      { href: '/about', label: 'Tentang Kami' },
      { href: '/services', label: 'Layanan' },
      { href: '/projects', label: 'Proyek' },
      { href: '/contact', label: 'Kontak' },
      { href: '/career', label: 'Karir' },
    ],
    layanan: [
      { href: '/services/industrial-supply', label: 'Industrial Supply' },
      { href: '/services/electrical-equipment', label: 'Electrical Equipment' },
      { href: '/services/mechanical-parts', label: 'Mechanical Parts' },
      { href: '/services/safety-equipment', label: 'Safety Equipment' },
      { href: '/services/custom-procurement', label: 'Custom Procurement' },
    ],
    support: [
      { href: '/faq', label: 'FAQ' },
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/sitemap', label: 'Sitemap' },
    ],
  }

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/6281234567890', label: 'WhatsApp', color: '#25D366' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/cassindo', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaInstagram, href: 'https://instagram.com/cassindo', label: 'Instagram', color: '#E4405F' },
    { icon: FaYoutube, href: 'https://youtube.com/c/cassindo', label: 'YouTube', color: '#FF0000' },
    { icon: FaTiktok, href: 'https://tiktok.com/@cassindo', label: 'TikTok', color: '#000000' },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#0A0F1A] to-[#06090F] text-gray-400">
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Company Info - 1.5 kolom */}
          <div className="lg:col-span-1.5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-2xl">C</span>
                </div>
                <div>
                  <span className="font-poppins font-bold text-2xl text-white">Cassindo</span>
                  <span className="block text-xs text-accent">General Supplier & Trading</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 mb-4">
                Mitra terpercaya untuk solusi pengadaan industri, material proyek, 
                dan distribusi nasional sejak 2014.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-white/5 px-2 py-1 rounded-full">ISO 9001:2021</span>
                <span className="text-xs bg-white/5 px-2 py-1 rounded-full">Terdaftar BKPM</span>
                <span className="text-xs bg-white/5 px-2 py-1 rounded-full">Anggota ASI</span>
              </div>
            </motion.div>
          </div>

          {/* Perusahaan Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Perusahaan</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <HiArrowRight className="opacity-0 group-hover:opacity-100 text-xs transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Layanan Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Layanan</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.layanan.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <HiArrowRight className="opacity-0 group-hover:opacity-100 text-xs transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kontak & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Kontak</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 group">
                <HiLocationMarker className="text-primary mt-0.5 group-hover:scale-110 transition" />
                <div>
                  <p>Wisma 46, Kota BNI</p>
                  <p className="text-gray-500">Jakarta Pusat, 10220</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <HiPhone className="text-primary group-hover:rotate-12 transition" />
                <a href="tel:+622112345678" className="hover:text-primary transition">+62 21 1234 5678</a>
              </div>
              <div className="flex items-center gap-3 group">
                <HiMail className="text-primary group-hover:-translate-y-0.5 transition" />
                <a href="mailto:info@cassindo.com" className="hover:text-primary transition">info@cassindo.com</a>
              </div>
              <div className="flex items-center gap-3 group">
                <HiClock className="text-primary" />
                <div>
                  <p>Senin-Jumat: 08.00-17.00</p>
                  <p className="text-gray-500">Sabtu-Minggu: Tutup</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Ikuti Kami</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = ''
                    }}
                  >
                    <social.icon className="text-white text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Langganan Newsletter</h4>
              <p className="text-gray-500 text-sm">Dapatkan info harga terbaru dan promo spesial</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                {isSubscribed ? (
                  <>
                    <HiCheckCircle className="text-lg" />
                    <span>Terdaftar!</span>
                  </>
                ) : (
                  <>
                    <span>Berlangganan</span>
                    <HiArrowRight className="group-hover:translate-x-1 transition" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500">
              &copy; {currentYear} Cassindo General Supplier. 
              <span className="hidden md:inline"> All rights reserved.</span>
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-primary transition text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-primary transition text-xs">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-primary transition text-xs">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl group-hover:scale-110 transition" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
          Chat via WhatsApp
        </span>
      </motion.a>
    </footer>
  )
}
