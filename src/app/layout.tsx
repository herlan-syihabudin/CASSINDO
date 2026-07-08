// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  // ===== TITLE & DESCRIPTION =====
  title: {
    default: 'Cassindo | Solusi Pengadaan & Supply Chain Indonesia - Jawa & Nasional',
    template: '%s | Cassindo'
  },
  description: 'Cassindo adalah mitra terpercaya untuk solusi pengadaan industri, MRO, dan distribusi nasional di Indonesia. Melayani Jakarta, Surabaya, Bandung, Semarang, Yogyakarta, dan seluruh wilayah Indonesia. Layanan end-to-end supply chain untuk perusahaan B2B.',
  keywords: 'solusi pengadaan Indonesia, supply chain Jakarta, MRO Surabaya, distribusi industri Bandung, procurement partner Semarang, industrial supply Jogja, pengadaan barang B2B, logistik industri nasional, jasa pengadaan terpercaya, vendor MRO Indonesia',
  
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
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
        
        {/* ===== STRUCTURED DATA - FAQ (BISA DITAMBAHKAN NANTI) ===== */}
        {/* 
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
                    "text": "Ya, Cassindo melayani pengiriman ke seluruh wilayah Indonesia, termasuk Surabaya, Jakarta, Bandung, Semarang, dan Yogyakarta."
                  }
                }
              ]
            })
          }}
        />
        */}
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
