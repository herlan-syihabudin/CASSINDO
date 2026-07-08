// scripts/convert-to-webp.js
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const QUALITY = 85
const DIRS = [
  './public/images/gallery',
  './public/images/products',
  './public/images/logo',
  './public/images/clients',
]

async function convertImages() {
  console.log('🔄 Converting images to WebP...\n')

  for (const dir of DIRS) {
    if (!fs.existsSync(dir)) continue

    const files = fs.readdirSync(dir)
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase()
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

      const inputPath = path.join(dir, file)
      const outputPath = path.join(dir, file.replace(ext, '.webp'))

      try {
        await sharp(inputPath)
          .webp({ quality: QUALITY })
          .toFile(outputPath)

        const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(1)
        const newSize = (fs.statSync(outputPath).size / 1024).toFixed(1)
        
        console.log(`✅ ${file} → ${file.replace(ext, '.webp')}`)
        console.log(`   ${originalSize}KB → ${newSize}KB`)
      } catch (error) {
        console.error(`❌ ${file}: ${error.message}`)
      }
    }
  }

  console.log('\n🎉 All images converted!')
}

convertImages()
