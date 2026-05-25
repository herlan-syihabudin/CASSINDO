'use client'

import { motion } from 'framer-motion'
import { 
  HiLightningBolt, HiTag, HiShieldCheck, 
  HiTruck, HiClipboardCheck 
} from 'react-icons/hi'

const features = [
  { icon: HiLightningBolt, title: 'Fast Response', desc: 'Quotation & follow up dalam 2x24 jam' },
  { icon: HiTag, title: 'Competitive Price', desc: 'Harga terbaik dari jaringan supplier langsung' },
  { icon: HiShieldCheck, title: 'Trusted Vendor', desc: 'Terdaftar di e-katalog & mitra BUMN' },
  { icon: HiTruck, title: 'Nationwide Delivery', desc: 'Jangkau seluruh Indonesia' },
  { icon: HiClipboardCheck, title: 'Quality Control', desc: 'Inspeksi ketat sebelum pengiriman' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Kenapa <span className="text-primary">Pilih Kami?</span></h2>
          <p className="section-subtitle">Keunggulan kompetitif yang membuat klien terus percaya</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <feature.icon className="text-4xl text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
