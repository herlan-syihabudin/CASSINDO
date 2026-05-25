import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cassindo | General Supplier & Trading Company',
  description: 'Cassindo provides trusted industrial supply, procurement, and trading solutions for commercial and project needs across Indonesia.',
  keywords: 'general supplier, general trading, industrial supply, procurement Indonesia, B2B supply chain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  )
}
