// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ===== IMAGE OPTIMIZATION =====
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // ← TAMBAHKAN: Cache gambar lebih lama
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // ===== BUILD OPTIMIZATION =====
  swcMinify: true,
  compress: true,
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ===== EXPERIMENTAL (PERFORMA LEBIH CEPAT) =====
  experimental: {
    optimizeCss: true, // ← TAMBAHKAN: Optimasi CSS
    scrollRestoration: true, // ← TAMBAHKAN: Restore scroll position
  },

  // ===== ESLINT & TYPESCRIPT =====
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ===== TRAILING SLASH =====
  trailingSlash: false, // ← TAMBAHKAN: Biar URL bersih

  // ===== POWERED BY HEADER =====
  poweredByHeader: false, // ← TAMBAHKAN: Hapus X-Powered-By

  // ===== REACT STRICT MODE =====
  reactStrictMode: true, // ← TAMBAHKAN

  // ===== HEADERS UNTUK SECURITY & CACHE =====
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security Headers
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
          // ← TAMBAHKAN: Cache Control untuk static assets
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      // ← TAMBAHKAN: Cache untuk images
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // ← TAMBAHKAN: Cache untuk static files
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // ← TAMBAHKAN: Cache untuk fonts
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // ===== WEBPACK OPTIMIZATION =====
  webpack: (config, { isServer }) => {
    // ← TAMBAHKAN: Optimasi bundle size
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
            // Pisahkan framer-motion
            framer: {
              test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 10,
            },
            // Pisahkan react-icons
            icons: {
              test: /[\\/]node_modules[\\/](react-icons)[\\/]/,
              name: 'react-icons',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
