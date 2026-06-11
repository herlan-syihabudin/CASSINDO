'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  HiLocationMarker, HiMail, HiPhone, HiClock, 
  HiArrowRight, HiCheckCircle
} from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

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
      { href: '/services/building-material', label: 'Building Material' },
      { href: '/services/office-supply', label: 'Office Supply' },
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
    { icon: FaWhatsapp, href: 'https://wa.me/6281776848333', label: 'WhatsApp', color: '#25D366' },
    { icon: FaLinkedin, href: 'https://linkedin.com/company/cassindo', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaInstagram, href: 'https://instagram.com/cassindo', label: 'Instagram', color: '#E4405F' },
    { icon: FaYoutube, href: 'https://youtube.com/c/cassindo', label: 'YouTube', color: '#FF0000' },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#0A0F1A] to-[#06090F] text-gray-400">
      <div className="container-custom pt-16 pb-8">
        {/* Main Footer Grid - 5 kolom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Kolom 1: Logo - SUPER GEDE dengan negative margin */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4 relative z-10">
              {/* 
                Trik negative margin: logo besar tapi gak ganggu tinggi kolom
                Ukuran logo disamakan dengan navbar: 
                Mobile: 112px, Tablet: 128px, Desktop: 144px
              */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 -my-6 sm:-my-7 md:-my-8 transition-transform duration-300 hover:scale-105">
                <Image 
                  src="/images/logo/cassindo-logo.png"
                  alt="Cassindo Logo"
                  fill
                  sizes="(max-width: 768px) 112px, 144px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-4 mt-2">
              Mitra terpercaya untuk solusi pengadaan industri dan distribusi nasional.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-white/5 px-2 py-1 rounded-full">ISO 9001:2021</span>
              <span className="text-xs bg-white/5 px-2 py-1 rounded-full">Terdaftar BKPM</span>
              <span className="text-xs bg-white/5 px-2 py-1 rounded-full">Anggota ASI</span>
            </div>
          </div>

          {/* Kolom 2: Perusahaan */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 group text-gray-400 hover:text-primary">
                    <HiArrowRight className="opacity-0 group-hover:opacity-100 text-[10px] transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1 group text-gray-400 hover:text-primary">
                    <HiArrowRight className="opacity-0 group-hover:opacity-100 text-[10px] transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontak</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 group">
                <HiLocationMarker className="text-primary text-sm mt-0.5" />
                <p className="text-gray-400 text-xs">Gedung Jaya, Jakarta Pusat</p>
              </div>
              <div className="flex items-center gap-2 group">
                <HiPhone className="text-primary text-sm" />
                <a href="tel:+6281776848333" className="text-gray-400 hover:text-primary text-xs">+62 817 7684 8333</a>
              </div>
              <div className="flex items-center gap-2 group">
                <HiMail className="text-primary text-sm" />
                <a href="mailto:sales@cassindo.com" className="text-gray-400 hover:text-primary text-xs">sales@cassindo.com</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2 text-sm">Ikuti Kami</h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = social.color }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '' }}
                  >
                    <social.icon className="text-white text-sm" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Kolom 5: Tagline + Newsletter */}
          <div>
            {/* Tagline Premium */}
            <div className="mb-4">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                Ready to Optimize
              </h3>
              <p className="text-accent font-bold text-base">
                Your Supply Chain?
              </p>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mt-2 rounded-full" />
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="mt-3">
              <p className="text-gray-500 text-xs mb-2">Langganan Newsletter</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Anda"
                  className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary transition"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-1 group"
                >
                  {isSubscribed ? (
                    <>
                      <HiCheckCircle className="text-sm" />
                      <span>Terdaftar!</span>
                    </>
                  ) : (
                    <>
                      <span>Berlangganan</span>
                      <HiArrowRight className="text-xs group-hover:translate-x-0.5 transition" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-gray-500">
            &copy; {currentYear} Cassindo Core Advanced Supply Solution. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-gray-500 hover:text-primary transition">Privacy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary transition">Terms</Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-primary transition">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6281776848333"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-xl group-hover:scale-110 transition" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
          Chat via WhatsApp
        </span>
      </motion.a>
    </footer>
  )
}
