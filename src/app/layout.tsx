// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Cassindo | Solusi Pengadaan Industri Terpercaya',
    template: '%s | Cassindo'
  },
  description: 'Cassindo Core Advanced Supply Solution - mitra terpercaya untuk solusi pengadaan industri, MRO, dan distribusi nasional di Indonesia.',
  keywords: 'solusi pengadaan, supply chain Indonesia, MRO, distribusi industri, procurement partner',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 5, // ← HAPUS
  // userScalable: true, // ← HAPUS (default sudah true)
  // viewportFit: 'cover', // ← HAPUS
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
