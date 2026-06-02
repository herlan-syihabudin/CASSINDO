import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cassindo | General Supplier & Trading Company',
  description: 'Cassindo provides trusted industrial supply, procurement, and trading solutions for commercial and project needs across Indonesia.',
  keywords: 'general supplier, general trading, industrial supply, procurement Indonesia, B2B supply chain',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
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
