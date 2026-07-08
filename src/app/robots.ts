// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.cassindo.com'
  const isProduction = process.env.NODE_ENV === 'production'

  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : '/',
      disallow: isProduction 
        ? ['/api/', '/admin/', '/private/', '/temp/'] 
        : ['/'], // Block semua di development biar nggak ke-index
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
