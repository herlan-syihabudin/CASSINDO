// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // ← TAMBAHKAN
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // ← TAMBAHKAN
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // ← TAMBAHKAN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  compress: true, // ← TAMBAHKAN
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // TAMBAHKAN HEADERS UNTUK SECURITY
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
