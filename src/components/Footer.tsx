import Link from 'next/link'
import { HiLocationMarker, HiMail, HiPhone, HiClock } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1A] text-gray-400 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-poppins font-bold text-xl text-white">Cassindo</span>
            </div>
            <p className="text-sm leading-relaxed">
              General Supplier & Trading Company terpercaya di Indonesia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3"><HiLocationMarker className="text-primary" /> Jakarta, Indonesia</div>
              <div className="flex items-center gap-3"><HiPhone className="text-primary" /> +62 21 1234 5678</div>
              <div className="flex items-center gap-3"><HiMail className="text-primary" /> info@cassindo.com</div>
              <div className="flex items-center gap-3"><HiClock className="text-primary" /> Senin-Jumat: 08.00-17.00</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition">Tentang Kami</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">Layanan</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition">Proyek</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"><FaWhatsapp className="text-white" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"><FaLinkedin className="text-white" /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition"><FaInstagram className="text-white" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; 2026 Cassindo General Supplier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
