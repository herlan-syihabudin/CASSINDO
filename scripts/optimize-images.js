// scripts/optimize-images.js
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
const glob = require('glob')

// KONFIGURASI
const QUALITY = 85 // 85% kualitas (balance antara size & quality)
const MAX_WIDTH = 1920 // Max width untuk gambar
const MAX_HEIGHT = 1080 // Max height untuk gambar

// Folder yang mau di-optimize
const IMAGE_FOLDERS = [
  './public/images/gallery',
  './public/images/products',
  './public/images/logo',
  './public/images/clients',
]

// Warna placeholder untuk blur
const PLACEHOLDER_COLOR = '#1a56db'

console.log('🚀 Starting image optimization...\n')

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  
  // Skip kalo udah WebP atau SVG
  if (ext === '.webp' || ext === '.svg') {
    return
  }

  // Skip kalo bukan gambar
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return
  }

  const outputPath = filePath.replace(ext, '.webp')
  const relativePath = path.relative(process.cwd(), filePath)
  
  try {
    const image = sharp(filePath)
    const metadata = await image.metadata()
    
    // Resize kalo terlalu besar
    let width = metadata.width
    let height = metadata.height
    
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height)
      width = Math.round(width * ratio)
      height = Math.round(height * ratio)
    }

    // Convert ke WebP dengan optimasi
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ 
        quality: QUALITY,
        effort: 6, // 0-6, makin tinggi makin lama tapi hasil lebih kecil
      })
      .toFile(outputPath)

    const originalSize = (fs.statSync(filePath).size / 1024).toFixed(1)
    const newSize = (fs.statSync(outputPath).size / 1024).toFixed(1)
    const saved = ((1 - fs.statSync(outputPath).size / fs.statSync(filePath).size) * 100).toFixed(0)

    console.log(`✅ ${relativePath}`)
    console.log(`   ${originalSize}KB → ${newSize}KB (hemat ${saved}%)`)
    
    // Opsional: hapus file asli? (comment kalo mau keep)
    // fs.unlinkSync(filePath)
    // console.log(`   🗑️  File asli dihapus: ${path.basename(filePath)}`)
    
  } catch (error) {
    console.error(`❌ Gagal optimize: ${relativePath}`)
    console.error(`   ${error.message}`)
  }
}

async function optimizeFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    console.log(`⚠️  Folder tidak ditemukan: ${folderPath}`)
    return
  }

  const files = glob.sync(`${folderPath}/**/*.{jpg,jpeg,png}`, { 
    ignore: ['**/*.webp', '**/*.svg'] 
  })
  
  if (files.length === 0) {
    console.log(`📁 ${folderPath}: Tidak ada gambar JPG/PNG`)
    return
  }

  console.log(`\n📁 Processing: ${folderPath} (${files.length} files)`)
  
  for (const file of files) {
    await optimizeImage(file)
  }
}

async function main() {
  console.log('📸 Image Optimization Script')
  console.log('============================')
  console.log(`Quality: ${QUALITY}%`)
  console.log(`Max Size: ${MAX_WIDTH}x${MAX_HEIGHT}`)
  console.log('============================\n')

  for (const folder of IMAGE_FOLDERS) {
    await optimizeFolder(folder)
  }

  console.log('\n🎉 Optimasi selesai!')
  console.log('\n📝 Catatan:')
  console.log('1. Gambar asli (JPG/PNG) masih tersimpan')
  console.log('2. File WebP baru dibuat di folder yang sama')
  console.log('3. Untuk hapus file asli, uncomment kode di optimizeImage()')
  console.log('4. Jangan lupa update <img> src ke .webp')
}

// Jalankan
main().catch(console.error)
