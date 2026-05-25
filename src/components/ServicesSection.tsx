'use client'

import ServiceCard from './ServiceCard'
import { 
  HiOutlineCog, HiOutlineLightningBolt, HiOutlineChip, 
  HiOutlineShieldCheck, HiOutlineHome, HiOutlineOfficeBuilding,
  HiOutlineClipboardList 
} from 'react-icons/hi'

const services = [
  { icon: HiOutlineCog, title: 'Industrial Supply', description: 'Material fabrikasi & sparepart industri' },
  { icon: HiOutlineLightningBolt, title: 'Electrical Equipment', description: 'Panel, kabel, trafo & komponen listrik' },
  { icon: HiOutlineChip, title: 'Mechanical Parts', description: 'Pompa, gearbox, valve & alat berat' },
  { icon: HiOutlineShieldCheck, title: 'Safety Equipment', description: 'APD, fire extinguisher, rambu-rambu' },
  { icon: HiOutlineHome, title: 'Building Material', description: 'Semen, baja ringan, cat, scaffolding' },
  { icon: HiOutlineOfficeBuilding, title: 'Office Supply', description: 'ATK, furniture, perangkat IT' },
  { icon: HiOutlineClipboardList, title: 'Custom Procurement', description: 'Sourcing spesifik sesuai kebutuhan proyek' },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Kategori <span className="text-primary">Produk & Layanan</span></h2>
          <p className="section-subtitle">Solusi one-stop procurement untuk berbagai kebutuhan</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
