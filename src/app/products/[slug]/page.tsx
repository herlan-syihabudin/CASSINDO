import { notFound } from 'next/navigation'
import Link from 'next/link'
import { HiArrowLeft, HiPhone, HiMail, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Data produk LENGKAP untuk semua produk
const productsData: Record<string, {
  name: string
  description: string
  fullDescription: string
  category: string
  specs?: string[]
  benefits?: string[]
  image: string
}> = {
  // Industrial Supply
  'raw-material': {
    name: 'Raw Material',
    description: 'Besi, baja, alumunium, tembaga untuk keperluan fabrikasi industri',
    fullDescription: 'Kami menyediakan berbagai raw material berkualitas tinggi untuk kebutuhan fabrikasi industri, konstruksi, dan manufaktur. Semua material memiliki sertifikasi SNI dan tersedia dalam berbagai ukuran.',
    category: 'Industrial Supply',
    specs: ['SNI Certified', 'Various Sizes', 'Competitive Price', 'Ready Stock'],
    benefits: ['Material berkualitas SNI', 'Harga kompetitif', 'Pengiriman cepat', 'Bisa custom ukuran'],
    image: '/images/products/raw-material.jpg'
  },
  'sparepart-mesin': {
    name: 'Sparepart Mesin',
    description: 'Komponen pengganti untuk mesin produksi dan peralatan pabrik',
    fullDescription: 'Kami menyediakan sparepart mesin original untuk berbagai jenis mesin produksi. Semua sparepart memiliki garansi dan ready stock untuk kebutuhan darurat.',
    category: 'Industrial Supply',
    specs: ['Genuine Parts', 'Warranty', 'Ready Stock', 'Fast Delivery'],
    benefits: ['Sparepart original', 'Garansi produk', 'Pengiriman cepat', 'Harga bersaing'],
    image: '/images/products/sparepart-mesin.jpg'
  },
  'fastener-tools': {
    name: 'Fastener & Tools',
    description: 'Baut, mur, sekrup, dan peralatan workshop lengkap',
    fullDescription: 'Produk fastener dan tools berkualitas tinggi untuk kebutuhan workshop, perakitan, dan maintenance. Tersedia berbagai ukuran dan tipe.',
    category: 'Industrial Supply',
    specs: ['High Quality', 'Bulk Discount', 'Industrial Grade', 'Complete Set'],
    benefits: ['Kualitas terjamin', 'Diskon volume', 'Lengkap berbagai ukuran', 'Pengiriman cepat'],
    image: '/images/products/fastener-tools.jpg'
  },
  
  // Electrical Equipment
  'kabel-listrik': {
    name: 'Kabel Listrik',
    description: 'Kabel NYY, NYM, NYAF untuk instalasi rumah dan industri',
    fullDescription: 'Kabel listrik berkualitas SNI untuk kebutuhan instalasi rumah, gedung, dan industri. Tahan panas dan anti api.',
    category: 'Electrical Equipment',
    specs: ['SNI Certified', 'Various Sizes', 'Fire Resistant', 'Tembaga Murni'],
    benefits: ['SNI Certified', 'Kualitas terbaik', 'Harga kompetitif', 'Ready stock'],
    image: '/images/products/kabel-listrik.jpg'
  },
  'panel-listrik': {
    name: 'Panel Listrik',
    description: 'Panel distribusi, kontrol, dan proteksi kelistrikan',
    fullDescription: 'Panel listrik custom sesuai kebutuhan, dengan standar keamanan tinggi dan kemudahan instalasi.',
    category: 'Electrical Equipment',
    specs: ['Custom Design', 'Safety Standard', 'Easy Installation', 'Quality Material'],
    benefits: ['Custom sesuai kebutuhan', 'Standar keamanan', 'Garansi', 'Support teknis'],
    image: '/images/products/panel-listrik.jpg'
  },
  'komponen-elektrikal': {
    name: 'Komponen Elektrikal',
    description: 'MCB, kontaktor, relay, dan peralatan proteksi',
    fullDescription: 'Komponen elektrikal original dari brand ternama untuk kebutuhan proteksi dan kontrol kelistrikan.',
    category: 'Electrical Equipment',
    specs: ['Original Brand', 'Warranty', 'Ready Stock', 'Various Types'],
    benefits: ['Original product', 'Garansi resmi', 'Harga kompetitif', 'Pengiriman cepat'],
    image: '/images/products/komponen-elektrikal.jpg'
  },
  
  // Mechanical Parts
  'industrial-pump': {
    name: 'Industrial Pump',
    description: 'Pompa sentrifugal, pompa diaphragm, pompa submersible',
    fullDescription: 'Pompa industri berkualitas tinggi untuk berbagai aplikasi seperti air, minyak, dan bahan kimia.',
    category: 'Mechanical Parts',
    specs: ['Heavy Duty', 'Energy Efficient', 'Long Lifespan', 'Various Types'],
    benefits: ['Efisiensi energi', 'Daya tahan lama', 'Garansi', 'Support teknis'],
    image: '/images/products/industrial-pump.jpg'
  },
  'gearbox-reducer': {
    name: 'Gearbox & Reducer',
    description: 'Reducer kecepatan untuk conveyor dan mesin produksi',
    fullDescription: 'Gearbox dan reducer dengan presisi tinggi untuk aplikasi conveyor, mesin produksi, dan peralatan industri.',
    category: 'Mechanical Parts',
    specs: ['High Torque', 'Precision Gear', 'Low Maintenance', 'Various Ratio'],
    benefits: ['Presisi tinggi', 'Perawatan mudah', 'Daya tahan lama', 'Harga bersaing'],
    image: '/images/products/gearbox.jpg'
  },
  'hydraulic-components': {
    name: 'Hydraulic Components',
    description: 'Valve, cylinder, pompa hydraulic untuk alat berat',
    fullDescription: 'Komponen hydraulic berkualitas untuk alat berat dan mesin industri. Tahan tekanan tinggi dan bocor.',
    category: 'Mechanical Parts',
    specs: ['Heavy Duty', 'Leak Proof', 'High Pressure', 'Durable'],
    benefits: ['Tahan tekanan tinggi', 'Anti bocor', 'Daya tahan ekstra', 'Garansi'],
    image: '/images/products/hydraulic.jpg'
  },
  
  // Safety Equipment
  'apd': {
    name: 'APD (Alat Pelindung Diri)',
    description: 'Helm safety, sepatu safety, rompi, sarung tangan',
    fullDescription: 'Perlengkapan APD lengkap dengan standar K3 untuk melindungi pekerja di area proyek dan pabrik.',
    category: 'Safety Equipment',
    specs: ['SNI Certified', 'Comfortable', 'Durable', 'Various Sizes'],
    benefits: ['SNI Certified', 'Nyaman dipakai', 'Awet', 'Harga bersaing'],
    image: '/images/products/apd.jpg'
  },
  'fire-extinguisher': {
    name: 'Fire Extinguisher (APAR)',
    description: 'APAR berbagai jenis untuk proteksi kebakaran',
    fullDescription: 'Alat pemadam api ringan (APAR) dengan berbagai jenis untuk kebutuhan proteksi kebakaran di kantor, pabrik, dan area publik.',
    category: 'Safety Equipment',
    specs: ['SNI Certified', 'Easy to Use', 'Refill Service', 'Various Types'],
    benefits: ['Bersertifikat SNI', 'Mudah digunakan', 'Service berkala', 'Garansi'],
    image: '/images/products/fire-extinguisher.jpg'
  },
  'safety-signage': {
    name: 'Safety Signage',
    description: 'Rambu-rambu K3 untuk area proyek dan pabrik',
    fullDescription: 'Rambu-rambu keselamatan kerja dengan bahan reflektor dan tahan cuaca untuk area proyek dan pabrik.',
    category: 'Safety Equipment',
    specs: ['Reflective', 'Weather Resistant', 'Custom Design', 'Various Sizes'],
    benefits: ['Reflektor', 'Tahan cuaca', 'Custom design', 'Pengiriman cepat'],
    image: '/images/products/safety-signage.jpg'
  },
  
  // Building Material
  'semen-mortar': {
    name: 'Semen & Mortar',
    description: 'Semen berkualitas untuk konstruksi bangunan',
    fullDescription: 'Semen dan mortar berkualitas tinggi untuk konstruksi bangunan, dengan daya rekat kuat dan tahan lama.',
    category: 'Building Material',
    specs: ['SNI Certified', 'Bulk Order', 'Factory Price', 'Strong Bond'],
    benefits: ['Kualitas SNI', 'Harga pabrik', 'Pengiriman ke proyek', 'Free konsultasi'],
    image: '/images/products/semen.jpg'
  },
  'besi-beton': {
    name: 'Besi Beton & Baja Ringan',
    description: 'Material struktur untuk proyek gedung dan rumah',
    fullDescription: 'Besi beton dan baja ringan berkualitas SNI untuk kebutuhan struktur bangunan rumah, gedung, dan infrastruktur.',
    category: 'Building Material',
    specs: ['SNI Certified', 'Various Sizes', 'Cut to Size', 'Factory Price'],
    benefits: ['SNI Certified', 'Ukuran lengkap', 'Bisa potong sesuai kebutuhan', 'Harga bersaing'],
    image: '/images/products/besi-beton.jpg'
  },
  'cat-finishing': {
    name: 'Cat & Finishing',
    description: 'Cat tembok, cat kayu, dan material finishing',
    fullDescription: 'Cat dan material finishing berkualitas untuk interior dan eksterior bangunan, dengan berbagai pilihan warna.',
    category: 'Building Material',
    specs: ['Eco Friendly', 'Various Colors', 'Durable', 'Easy Application'],
    benefits: ['Ramah lingkungan', 'Warna lengkap', 'Awet', 'Mudah diaplikasikan'],
    image: '/images/products/cat.jpg'
  },
  
  // Office Supply
  'alat-tulis-kantor': {
    name: 'Alat Tulis Kantor',
    description: 'ATK lengkap untuk kebutuhan operasional kantor',
    fullDescription: 'Perlengkapan alat tulis kantor (ATK) lengkap untuk kebutuhan operasional harian perusahaan.',
    category: 'Office Supply',
    specs: ['Complete Set', 'Bulk Order', 'Same Day Delivery', 'Branded'],
    benefits: ['Lengkap', 'Same day delivery', 'Harga grosir', 'Garansi produk'],
    image: '/images/products/atk.jpg'
  },
  'furniture-kantor': {
    name: 'Furniture Kantor',
    description: 'Meja, kursi, lemari untuk kenyamanan kerja',
    fullDescription: 'Furniture kantor ergonomis dengan desain modern untuk kenyamanan dan produktivitas kerja.',
    category: 'Office Supply',
    specs: ['Ergonomic', 'Modern Design', 'Assembly Service', 'Durable'],
    benefits: ['Desain modern', 'Ergonomis', 'Free assembly', 'Garansi'],
    image: '/images/products/furniture.jpg'
  },
  'perangkat-it': {
    name: 'Perangkat IT',
    description: 'Printer, komputer, dan aksesoris IT',
    fullDescription: 'Perangkat IT original dengan garansi resmi untuk kebutuhan operasional dan produktivitas kantor.',
    category: 'Office Supply',
    specs: ['Branded', 'Warranty', 'Installation', 'After Sales'],
    benefits: ['Produk original', 'Garansi resmi', 'Installation service', 'After sales support'],
    image: '/images/products/it-equipment.jpg'
  },
  
  // Custom Procurement
  'sourcing-khusus': {
    name: 'Sourcing Khusus',
    description: 'Pengadaan barang spesifik sesuai kebutuhan',
    fullDescription: 'Layanan sourcing untuk barang khusus yang tidak tersedia di pasaran umum. Tim procurement kami akan mencari supplier terbaik.',
    category: 'Custom Procurement',
    specs: ['Tailor Made', 'Global Network', 'Fast Delivery', 'Document Complete'],
    benefits: ['Global sourcing', 'Transparan', 'Fast response', 'Dokumen lengkap'],
    image: '/images/products/sourcing.jpg'
  },
  'import-services': {
    name: 'Import Services',
    description: 'Layanan impor barang dari luar negeri',
    fullDescription: 'Layanan impor barang dari luar negeri dengan pengurusan dokumen lengkap dan door to door delivery.',
    category: 'Custom Procurement',
    specs: ['Custom Clearance', 'Door to Door', 'Document Complete', 'Competitive Rate'],
    benefits: ['Custom clearance', 'Door to door', 'Dokumen lengkap', 'Harga kompetitif'],
    image: '/images/products/import.jpg'
  },
  'tender-support': {
    name: 'Tender Support',
    description: 'Pendukung pengadaan untuk proyek tender',
    fullDescription: 'Layanan pendukung untuk proyek tender dengan legalitas lengkap dan pengalaman tender BUMN.',
    category: 'Custom Procurement',
    specs: ['Legalitas Lengkap', 'Pengalaman Tender', 'Dokumen Rapi', 'Fast Response'],
    benefits: ['Legalitas lengkap', 'Pengalaman tender', 'Dokumen rapi', 'Fast response'],
    image: '/images/products/tender-support.jpg'
  }
}

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug]
  if (!product) return { title: 'Product Not Found' }
  return {
    title: `${product.name} | Cassindo`,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug]
  
  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition mb-8">
            <HiArrowLeft /> Kembali ke Layanan
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400?text=' + encodeURIComponent(product.name)
                  }}
                />
              </div>
            </div>
            
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{product.name}</h1>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.fullDescription}</p>
              
              <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-dark mb-3">Spesifikasi</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specs?.map((spec) => (
                    <span key={spec} className="px-3 py-1 bg-white rounded-full text-xs">{spec}</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-dark mb-3">Keunggulan</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {product.benefits?.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm">
                      <HiCheckCircle className="text-accent text-sm flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-primary justify-center">
                  <HiPhone /> Request Quotation
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
                  Lihat Layanan Lainnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
