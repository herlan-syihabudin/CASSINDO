// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cassindo.com'
  const now = new Date()

  // Semua route dalam 1 object biar gampang di-maintain
  const routes = [
    // Main Pages - priority tinggi
    { path: '', freq: 'daily', priority: 1 },
    { path: '/about', freq: 'monthly', priority: 0.8 },
    { path: '/services', freq: 'monthly', priority: 0.9 },
    { path: '/clients', freq: 'monthly', priority: 0.7 },
    { path: '/contact', freq: 'monthly', priority: 0.7 },
    
    // Location Pages - fokus Jawa
    { path: '/jakarta', freq: 'weekly', priority: 0.9 },
    { path: '/surabaya', freq: 'weekly', priority: 0.9 },
    { path: '/bandung', freq: 'weekly', priority: 0.9 },
    { path: '/semarang', freq: 'weekly', priority: 0.9 },
    { path: '/yogyakarta', freq: 'weekly', priority: 0.9 },
    
    // Blog Posts
    { path: '/blog/solusi-pengadaan-surabaya', freq: 'monthly', priority: 0.7 },
    { path: '/blog/distribusi-mro-bandung', freq: 'monthly', priority: 0.7 },
    { path: '/blog/supply-chain-jakarta', freq: 'monthly', priority: 0.7 },
    { path: '/blog/jasa-pengadaan-semarang', freq: 'monthly', priority: 0.7 },
    { path: '/blog/vendor-pengadaan-jogja', freq: 'monthly', priority: 0.7 },
    { path: '/blog/manufaktur-bandung-mro', freq: 'monthly', priority: 0.6 },
    { path: '/blog/supply-chain-industri-jakarta', freq: 'monthly', priority: 0.6 },
    { path: '/blog/procurement-bumn-semarang', freq: 'monthly', priority: 0.6 },
    
    // Service Pages
    { path: '/services/mro', freq: 'monthly', priority: 0.8 },
    { path: '/services/distribusi-logistik', freq: 'monthly', priority: 0.8 },
    { path: '/services/facility-support', freq: 'monthly', priority: 0.8 },
    { path: '/services/procurement', freq: 'monthly', priority: 0.8 },
    
    // Industry Pages
    { path: '/industries/manufaktur', freq: 'monthly', priority: 0.7 },
    { path: '/industries/energi', freq: 'monthly', priority: 0.7 },
    { path: '/industries/tambang', freq: 'monthly', priority: 0.7 },
    { path: '/industries/telekomunikasi', freq: 'monthly', priority: 0.7 },
    { path: '/industries/perhotelan', freq: 'monthly', priority: 0.7 },
    { path: '/industries/farmasi', freq: 'monthly', priority: 0.7 },
    
    // Resource Pages
    { path: '/resources/case-studies', freq: 'monthly', priority: 0.6 },
    { path: '/resources/faq', freq: 'monthly', priority: 0.6 },
    { path: '/resources/whitepaper', freq: 'monthly', priority: 0.5 },
  ]

  // Mapping ke format sitemap
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.freq as 'daily' | 'weekly' | 'monthly',
    priority: route.priority,
  }))
}
