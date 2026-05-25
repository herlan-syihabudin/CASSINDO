import Link from 'next/link'
import { HiHome, HiInformationCircle, HiBriefcase, HiPhotograph, HiMail, HiQuestionMarkCircle, HiDocumentText } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sitemap | Cassindo',
  description: 'Peta situs Cassindo General Supplier.',
}

const siteLinks = [
  { href: '/', label: 'Beranda', icon: HiHome },
  { href: '/about', label: 'Tentang Kami', icon: HiInformationCircle },
  { href: '/services', label: 'Layanan', icon: HiBriefcase, subLinks: [
    { href: '/services/industrial-supply', label: 'Industrial Supply' },
    { href: '/services/electrical-equipment', label: 'Electrical Equipment' },
    { href: '/services/mechanical-parts', label: 'Mechanical Parts' },
    { href: '/services/safety-equipment', label: 'Safety Equipment' },
    { href: '/services/building-material', label: 'Building Material' },
    { href: '/services/office-supply', label: 'Office Supply' },
    { href: '/services/custom-procurement', label: 'Custom Procurement' },
  ] },
  { href: '/projects', label: 'Proyek', icon: HiPhotograph },
  { href: '/contact', label: 'Kontak', icon: HiMail },
  { href: '/faq', label: 'FAQ', icon: HiQuestionMarkCircle },
  { href: '/career', label: 'Karir', icon: HiBriefcase },
]

const legalLinks = [
  { href: '/terms', label: 'Terms & Conditions', icon: HiDocumentText },
  { href: '/privacy', label: 'Privacy Policy', icon: HiDocumentText },
]

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Peta <span className="text-primary">Situs</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Panduan navigasi untuk seluruh halaman di website Cassindo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteLinks.map((link) => (
              <div key={link.href} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <link.icon className="text-primary text-xl" />
                  <Link href={link.href} className="font-semibold text-dark hover:text-primary transition text-lg">
                    {link.label}
                  </Link>
                </div>
                {link.subLinks && (
                  <ul className="ml-8 space-y-2">
                    {link.subLinks.map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href} className="text-gray-500 hover:text-primary transition text-sm">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Legal Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-semibold text-dark mb-4 text-lg">Legal</h3>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex items-center gap-2 text-gray-500 hover:text-primary transition">
                      <link.icon className="text-sm" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
            <p className="text-gray-600">
              Tidak menemukan halaman yang Anda cari? 
              <Link href="/contact" className="text-primary hover:underline ml-1">
                Hubungi kami
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
