import { notFound } from 'next/navigation'
import Link from 'next/link'
import { HiArrowLeft, HiPhone, HiMail, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Data produk (sementara, nanti bisa diambil dari API)
const productsData: Record<string, {
  name: string
  description: string
  fullDescription: string
  category: string
  specs?: string[]
  benefits?: string[]
  image: string
}> = {
  'raw-material': {
    name: 'Raw Material',
    description: 'Besi, baja, alumunium, tembaga untuk keperluan fabrikasi industri',
    fullDescription: 'Kami menyediakan berbagai raw material berkualitas tinggi untuk kebutuhan fabrikasi industri, konstruksi, dan manufaktur. Semua material memiliki sertifikasi SNI dan tersedia dalam berbagai ukuran.',
    category: 'Industrial Supply',
    specs: ['SNI Certified', 'Various Sizes', 'Competitive Price', 'Ready Stock'],
    benefits: [
      'Material berkualitas SNI',
      'Harga kompetitif',
      'Pengiriman cepat',
      'Bisa custom ukuran'
    ],
    image: '/images/products/raw-material.jpg'
  },
  // Tambahkan produk lainnya sesuai kebutuhan
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
                <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
              </div>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{product.name}</h1>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <p className="text-gray-600 mb-6">{product.fullDescription}</p>
              
              <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-dark mb-3">Spesifikasi</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specs?.map((spec) => (
                    <span key={spec} className="px-3 py-1 bg-white rounded-full text-sm">{spec}</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/5 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-dark mb-3">Keunggulan</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {product.benefits?.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <HiCheckCircle className="text-accent" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link href="/contact" className="btn-primary w-full justify-center">
                <HiPhone /> Request Quotation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
