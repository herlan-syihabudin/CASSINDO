// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google' // ← TAMBAHKAN: next/font
import './globals.css'

// ===== FONT OPTIMIZATION =====
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // ← PENTING: Biar teks muncul cepat
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter', // ← TAMBAHKAN: CSS variable
})

export const metadata: Metadata = {
  // ===== TITLE & DESCRIPTION =====
  title: {
    default: 'Cassindo | Solusi Pengadaan & Supply Chain Indonesia - Jawa & Nasional',
    template: '%s | Cassindo'
  },
  description: 'Cassindo adalah mitra terpercaya untuk solusi pengadaan industri, MRO, dan distribusi nasional di Indonesia. Melayani Jakarta, Surabaya, Bandung, Semarang, Yogyakarta, dan seluruh wilayah Indonesia. Layanan end-to-end supply chain untuk perusahaan B2B.',
  keywords: 'solusi pengadaan Indonesia, supply chain Jakarta, MRO Surabaya, distribusi industri Bandung, procurement partner Semarang, industrial supply Jogja, pengadaan barang B2B, logistik industri nasional, jasa pengadaan terpercaya, vendor MRO Indonesia, solusi supply chain Jawa, jasa procurement Jakarta, distributor MRO Surabaya, pengadaan industri Bandung, supply chain Semarang, vendor industri Jogja',
  
  // ===== CANONICAL URL =====
  metadataBase: new URL('https://www.cassindo.com'),
  alternates: {
    canonical: '/',
    languages: {
      'id': '/',
      'en': '/en',
    },
  },
  
  // ===== OPEN GRAPH (OG) - UNTUK SOCIAL MEDIA =====
  openGraph: {
    title: 'Cassindo | Solusi Pengadaan & Supply Chain - Jawa & Nasional',
    description: 'Mitra terpercaya untuk solusi pengadaan industri, MRO, dan distribusi di Jakarta, Surabaya, Bandung, Semarang, Jogja, dan seluruh Indonesia.',
    url: 'https://www.cassindo.com',
    siteName: 'Cassindo',
    images: [
      {
        url: 'https://www.cassindo.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cassindo - Solusi Pengadaan Industri Terpercaya di Jawa & Indonesia',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  
  // ===== TWITTER CARDS =====
  twitter: {
    card: 'summary_large_image',
    title: 'Cassindo | Solusi Pengadaan & Supply Chain - Jawa & Nasional',
    description: 'Mitra terpercaya untuk solusi pengadaan industri di Jakarta, Surabaya, Bandung, Semarang, Jogja, dan seluruh Indonesia.',
    images: ['https://www.cassindo.com/og-image.jpg'],
  },
  
  // ===== ROBOTS =====
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // ===== OTHER META =====
  authors: [{ name: 'Cassindo' }],
  creator: 'Cassindo',
  publisher: 'Cassindo',
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  
  // ===== VERIFICATION =====
  verification: {
    google: '_yAiab3dgXQZKknrDxLYcqJCH15KrMT0yjcSjXqSdzs', // ← GANTI DENGAN KODE VERIFIKASI GOOGLE
  },
  
  // ===== CATEGORY =====
  category: 'Industrial Supply & Procurement',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // ===== TAMBAHKAN: Theme color untuk mobile =====
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* ===== FAVICON ===== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* ===== PRELOAD FONT ===== */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* ===== TAMBAHKAN: Preconnect ke CDN ===== */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        {/* ===== TAMBAHKAN: Preload Critical Images ===== */}
        <link
          rel="preload"
          as="image"
          href="/images/logo/cassindo-logo.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.webp"
          fetchPriority="high"
        />
        
        {/* ===== TAMBAHKAN: DNS Prefetch ===== */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* ===== STRUCTURED DATA (JSON-LD) - ORGANIZATION ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cassindo",
              "description": "Mitra terpercaya untuk solusi pengadaan industri, MRO, dan distribusi nasional di Indonesia. Melayani Jakarta, Surabaya, Bandung, Semarang, Yogyakarta, dan seluruh Indonesia.",
              "url": "https://www.cassindo.com",
              "logo": "https://www.cassindo.com/logo.png",
              "image": "https://www.cassindo.com/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-817-7684-8333",
                "contactType": "sales",
                "availableLanguage": ["Indonesian", "English"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/cassindo",
                "https://www.instagram.com/cassindo",
                "https://www.youtube.com/c/cassindo"
              ]
            })
          }}
        />
        
        {/* ===== STRUCTURED DATA - LOCAL BUSINESS (JAWA FOCUS) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cassindo",
              "description": "Penyedia solusi pengadaan dan supply chain di Pulau Jawa dan seluruh Indonesia.",
              "url": "https://www.cassindo.com",
              "telephone": "+62-817-7684-8333",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.2088,
                "longitude": 106.8456
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Jakarta"
                },
                {
                  "@type": "City",
                  "name": "Surabaya"
                },
                {
                  "@type": "City",
                  "name": "Bandung"
                },
                {
                  "@type": "City",
                  "name": "Semarang"
                },
                {
                  "@type": "City",
                  "name": "Yogyakarta"
                },
                {
                  "@type": "Country",
                  "name": "Indonesia"
                }
              ]
            })
          }}
        />
        
        {/* ===== STRUCTURED DATA - BREADCRUMB ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.cassindo.com"
                }
              ]
            })
          }}
        />
        
        {/* ===== STRUCTURED DATA - FAQ (JAWA FOCUS) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Apakah Cassindo melayani pengiriman ke Surabaya?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, Cassindo melayani pengiriman ke seluruh wilayah Indonesia, termasuk Surabaya, Jakarta, Bandung, Semarang, dan Yogyakarta. Kami memiliki jaringan distribusi yang kuat di Pulau Jawa."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Berapa lama waktu respons untuk permintaan quotation di Jakarta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cassindo memberikan respons quotation dan follow up dalam waktu kurang dari 24 jam untuk seluruh wilayah, termasuk Jakarta, Surabaya, Bandung, Semarang, dan Yogyakarta."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Apakah Cassindo terdaftar di e-katalog untuk perusahaan BUMN di Jawa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, Cassindo terdaftar resmi di e-katalog dan merupakan mitra terpercaya BUMN di seluruh Indonesia, termasuk di Pulau Jawa."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Industri apa saja yang dilayani Cassindo di Bandung?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cassindo melayani berbagai industri di Bandung dan Jawa Barat, termasuk manufaktur tekstil, otomotif, elektronik, farmasi, dan food & beverage."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Apakah Cassindo memiliki layanan quality control sebelum pengiriman ke Semarang?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, Cassindo menerapkan inspeksi ketat (100% Quality Control) sebelum pengiriman ke seluruh wilayah, termasuk Semarang dan Jawa Tengah."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Bagaimana cara menghubungi Cassindo untuk kebutuhan pengadaan di Yogyakarta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Anda dapat menghubungi tim Cassindo melalui telepon +62-817-7684-8333 atau melalui form kontak di website kami. Tim kami siap membantu 24/7 untuk kebutuhan pengadaan di Yogyakarta dan seluruh Indonesia."
                  }
                }
              ]
            })
          }}
        />
        
        {/* ===== TAMBAHKAN: Script untuk menghapus console.log di production ===== */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Hapus console.log di production
                if (typeof window !== 'undefined') {
                  const noop = () => {};
                  console.log = noop;
                  console.warn = noop;
                  console.error = noop;
                }
              `
            }}
          />
        )}
      </head>
      <body 
        suppressHydrationWarning
        className="antialiased" // ← TAMBAHKAN: Anti-aliased font
      >
        {children}
      </body>
    </html>
  )
}
