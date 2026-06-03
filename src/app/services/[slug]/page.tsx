import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { HiArrowLeft, HiPhone, HiMail, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Data services lengkap dengan produk dan gallery
const servicesData: Record<string, {
  title: string
  description: string
  fullDescription: string
  tags?: string[]
  products?: {
    name: string
    description: string
    image: string
    specs?: string[]
  }[]
  gallery?: {
    title: string
    image: string
  }[]
  benefits?: string[]
}> = {
  'industrial-supply': {
    title: 'Industrial Supply',
    description: 'Material fabrikasi & sparepart industri',
    fullDescription: 'Kami menyediakan berbagai material industrial seperti raw material, komponen mesin, fastener, tools, dan perlengkapan pabrik untuk mendukung operasional harian Anda.',
    tags: ['Fast Moving', 'Genuine Parts', 'Bulk Order', '24/7 Support'],
    products: [
      {
        name: 'Raw Material',
        description: 'Besi, baja, alumunium, tembaga untuk keperluan fabrikasi industri',
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600',
        specs: ['SNI Certified', 'Various Sizes', 'Competitive Price']
      },
      {
        name: 'Sparepart Mesin',
        description: 'Komponen pengganti untuk mesin produksi dan peralatan pabrik',
        image: 'https://images.unsplash.com/photo-1581092335871-5c6da6bd8ad8?w=600',
        specs: ['Genuine Parts', 'Warranty', 'Ready Stock']
      },
      {
        name: 'Fastener & Tools',
        description: 'Baut, mur, sekrup, dan peralatan workshop lengkap',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
        specs: ['High Quality', 'Bulk Discount', 'Industrial Grade']
      }
    ],
    gallery: [
      { title: 'Gudang Material', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800' },
      { title: 'Stock Inventory', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800' },
      { title: 'Quality Control', image: 'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=800' },
    ],
    benefits: [
      'Stok lengkap berbagai material industri',
      'Harga kompetitif dari supplier langsung',
      'Pengiriman cepat ke seluruh Indonesia',
      'Garansi produk 100% original'
    ]
  },
  'electrical-equipment': {
    title: 'Electrical Equipment',
    description: 'Panel, kabel, trafo & komponen listrik',
    fullDescription: 'Distributor resmi berbagai brand electrical ternama. Menyediakan kabel, panel listrik, trafo, MCB, dan kebutuhan kelistrikan industri.',
    tags: ['SNI Certified', 'Warranty', 'Installation Ready', 'Official Distributor'],
    products: [
      {
        name: 'Kabel Listrik',
        description: 'Kabel NYY, NYM, NYAF untuk instalasi rumah dan industri',
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600',
        specs: ['SNI Certified', 'Various Sizes', 'Fire Resistant']
      },
      {
        name: 'Panel Listrik',
        description: 'Panel distribusi, kontrol, dan proteksi kelistrikan',
        image: 'https://images.unsplash.com/photo-1581092335871-5c6da6bd8ad8?w=600',
        specs: ['Custom Design', 'Safety Standard', 'Easy Installation']
      },
      {
        name: 'Komponen Elektrikal',
        description: 'MCB, kontaktor, relay, dan peralatan proteksi',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
        specs: ['Original Brand', 'Warranty', 'Ready Stock']
      }
    ],
    gallery: [
      { title: 'Panel Installation', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800' },
      { title: 'Warehouse Stock', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800' },
      { title: 'Quality Testing', image: 'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=800' },
    ],
    benefits: [
      'Produk bersertifikat SNI',
      'Garansi resmi pabrik',
      'Tim teknisi berpengalaman',
      'Ready stock berbagai varian'
    ]
  },
  'mechanical-parts': {
    title: 'Mechanical Parts',
    description: 'Pompa, gearbox, valve & alat berat',
    fullDescription: 'Sparepart mekanikal untuk mesin produksi, pompa industri, gearbox, valve, dan komponen hydraulic untuk pabrik dan pertambangan.',
    tags: ['Original', 'Heavy Duty', 'Quick Ship', 'Industrial Grade'],
    products: [
      {
        name: 'Industrial Pump',
        description: 'Pompa sentrifugal, pompa diaphragm, pompa submersible',
        image: 'https://images.unsplash.com/photo-1581092335871-5c6da6bd8ad8?w=600',
        specs: ['Heavy Duty', 'Energy Efficient', 'Long Lifespan']
      },
      {
        name: 'Gearbox & Reducer',
        description: 'Reducer kecepatan untuk conveyor dan mesin produksi',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
        specs: ['High Torque', 'Precision Gear', 'Low Maintenance']
      },
      {
        name: 'Hydraulic Components',
        description: 'Valve, cylinder, pompa hydraulic untuk alat berat',
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600',
        specs: ['Heavy Duty', 'Leak Proof', 'High Pressure']
      }
    ],
    gallery: [
      { title: 'Machine Parts', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800' },
      { title: 'Workshop', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800' },
      { title: 'Quality Inspection', image: 'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=800' },
    ],
    benefits: [
      'Sparepart original berkualitas',
      'Pengiriman cepat ke seluruh Indonesia',
      'Garansi produk',
      'Tim teknis siap membantu'
    ]
  },
  'safety-equipment': {
    title: 'Safety Equipment',
    description: 'APD, fire extinguisher, rambu-rambu',
    fullDescription: 'Perlengkapan K3 lengkap mulai dari helm safety, rompi, sepatu safety, APAR, hingga rambu-rambu proyek sesuai standar SNI.',
    tags: ['K3 Certified', 'Complete Set', 'Bulk Price', 'SNI Standard'],
    products: [
      {
        name: 'Alat Pelindung Diri (APD)',
        description: 'Helm safety, sepatu safety, rompi, sarung tangan',
        image: 'https://images.unsplash.com/photo-1581092335871-5c6da6bd8ad8?w=600',
        specs: ['SNI Certified', 'Comfortable', 'Durable']
      },
      {
        name: 'Fire Extinguisher',
        description: 'APAR berbagai jenis untuk proteksi kebakaran',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
        specs: ['SNI Certified', 'Easy to Use', 'Refill Service']
      },
      {
        name: 'Safety Signage',
        description: 'Rambu-rambu K3 untuk area proyek dan pabrik',
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600',
        specs: ['Reflective', 'Weather Resistant', 'Custom Design']
      }
    ],
    gallery: [
      { title: 'Safety Equipment', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800' },
      { title: 'Warehouse Stock', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800' },
    ],
    benefits: [
      'Produk bersertifikat K3',
      'Lengkap untuk semua kebutuhan',
      'Harga bersaing',
      'Pengiriman cepat'
    ]
  },
  'building-material': {
    title: 'Building Material',
    description: 'Semen, baja ringan, cat, scaffolding',
    fullDescription: 'Material konstruksi untuk proyek gedung, perumahan, dan infrastruktur. Termasuk semen, besi beton, baja ringan, cat tembok, dan perancah.',
    tags: ['Project Grade', 'Factory Price', 'Free Delivery', 'SNI Certified'],
    products: [
      {
        name: 'Semen & Mortar',
        description: 'Semen berkualitas untuk konstruksi bangunan',
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600',
        specs: ['SNI Certified', 'Bulk Order', 'Factory Price']
      },
      {
        name: 'Besi Beton & Baja Ringan',
        description: 'Material struktur untuk proyek gedung dan rumah',
        image: 'https://images.unsplash.com/photo-1581092335871-5c6da6bd8ad8?w=600',
        specs: ['SNI Certified', 'Various Sizes', 'Cut to Size']
      },
      {
        name: 'Cat & Finishing',
        description: 'Cat tembok, cat kayu, dan material finishing',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
        specs: ['Eco Friendly', 'Various Colors', 'Durable']
      }
    ],
    gallery: [
      { title: 'Material Stock', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800' },
      { title: 'Construction Site', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800' },
    ],
    benefits: [
      'Material SNI certified',
      'Harga pabrik langsung',
      'Pengiriman ke lokasi proyek',
      'Free konsultasi material'
    ]
  },
  'office-supply': {
    title: 'Office Supply',
    description: 'ATK, furniture, perangkat IT',
    fullDescription: 'Perlengkapan kantor lengkap mulai dari alat tulis, meja kursi, printer, hingga perangkat IT untuk kebutuhan operasional perusahaan.',
    tags: ['Same Day', 'Subscription', 'After Sales', 'Ready Stock'],
    products: [
      {
        name: 'Alat Tulis Kantor',
        description: 'ATK lengkap untuk kebutuhan operasional kantor',
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600',
        specs: ['Complete Set', 'Bulk Order', 'Same Day Delivery']
      },
      {
        name: 'Furniture Kantor',
        description: 'Meja, kursi, lemari untuk kenyamanan kerja',
        image: 'https://images.unsplash.com/photo-1581092335871-5c6da6bd8ad8?w=600',
        specs: ['Ergonomic', 'Modern Design', 'Assembly Service']
      },
      {
        name: 'Perangkat IT',
        description: 'Printer, komputer, dan aksesoris IT',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
        specs: ['Branded', 'Warranty', 'Installation']
      }
    ],
    gallery: [
      { title: 'Office Supply Stock', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800' },
      { title: 'Furniture Display', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800' },
    ],
    benefits: [
      'Pengiriman same day untuk area Jabodetabek',
      'Layanan subscription berkala',
      'After sales service',
      'Harga kompetitif'
    ]
  },
  'custom-procurement': {
    title: 'Custom Procurement',
    description: 'Sourcing spesifik sesuai kebutuhan proyek',
    fullDescription: 'Layanan sourcing untuk barang khusus yang tidak tersedia di pasaran umum. Tim procurement kami akan mencari supplier terbaik untuk Anda.',
    tags: ['Tailor Made', 'Global Sourcing', 'Fast Response', 'End to End'],
    products: [
      {
        name: 'Sourcing Khusus',
        description: 'Pengadaan barang spesifik sesuai kebutuhan',
        image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600',
        specs: ['Tailor Made', 'Global Network', 'Fast Delivery']
      },
      {
        name: 'Import Services',
        description: 'Layanan impor barang dari luar negeri',
        image: 'https://images.unsplash.com/photo-1581092335871-5c6da6bd8ad8?w=600',
        specs: ['Custom Clearance', 'Door to Door', 'Document Complete']
      },
      {
        name: 'Tender Support',
        description: 'Pendukung pengadaan untuk proyek tender',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600',
        specs: ['Legalitas Lengkap', 'Pengalaman Tender', 'Dokumen Rapi']
      }
    ],
    gallery: [
      { title: 'Global Sourcing', image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800' },
      { title: 'Procurement Team', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800' },
    ],
    benefits: [
      'Sourcing dari supplier global',
      'Proses transparan',
      'Fast response & follow up',
      'Dokumen lengkap'
    ]
  }
}

// Generate static params untuk build time
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }))
}

// Metadata untuk SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]
  if (!service) return { title: 'Service Not Found' }
  
  return {
    title: `${service.title} | Cassindo General Supplier`,
    description: service.fullDescription.slice(0, 160),
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Back Button */}
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8 group"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 transition" />
            <span>Kembali ke Semua Layanan</span>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - 2/3 width */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{service.title}</h1>
              
              {/* Tags */}
              {service.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.fullDescription}
              </p>

              {/* Benefits Section */}
              {service.benefits && (
                <div className="bg-primary/5 rounded-2xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-dark mb-4">Keunggulan Layanan Kami</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                        <HiCheckCircle className="text-accent text-sm" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Section */}
              {service.products && service.products.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-dark mb-6">Produk Unggulan</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.products.map((product, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-dark text-lg mb-2">{product.name}</h3>
                          <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                          {product.specs && (
                            <div className="flex flex-wrap gap-2">
                              {product.specs.map((spec, i) => (
                                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Section */}
              {service.gallery && service.gallery.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-6">Dokumentasi</h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.gallery.map((item, idx) => (
                      <div key={idx} className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <p className="text-white text-sm font-medium">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA - 1/3 width */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sticky top-28 border border-gray-100 shadow-lg">
                <h2 className="text-xl font-bold text-dark mb-2">Butuh Penawaran?</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Hubungi tim sales kami untuk mendapatkan harga terbaik dan konsultasi gratis.
                </p>
                
                <div className="space-y-3">
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full justify-center"
                  >
                    <HiPhone /> Hubungi Sales
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-center border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition w-full font-semibold"
                  >
                    <HiMail className="inline mr-2" /> Request Quotation
                  </Link>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-400 text-center">
                    Respon dalam &lt; 2x24 jam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
