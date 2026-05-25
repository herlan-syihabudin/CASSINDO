import Link from 'next/link'
import { HiBriefcase, HiLocationMarker, HiMail, HiCalendar, HiCheckCircle } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Karir | Cassindo',
  description: 'Bergabunglah dengan tim Cassindo. Kami mencari talenta terbaik untuk berkembang bersama.',
}

const positions = [
  {
    title: 'Sales Manager',
    location: 'Jakarta',
    type: 'Full Time',
    experience: '5+ years',
    deadline: '30 Dec 2026',
  },
  {
    title: 'Procurement Specialist',
    location: 'Jakarta',
    type: 'Full Time',
    experience: '3+ years',
    deadline: '30 Dec 2026',
  },
  {
    title: 'Logistics Coordinator',
    location: 'Surabaya',
    type: 'Full Time',
    experience: '2+ years',
    deadline: '15 Jan 2027',
  },
  {
    title: 'Warehouse Supervisor',
    location: 'Jakarta',
    type: 'Full Time',
    experience: '3+ years',
    deadline: '15 Jan 2027',
  },
]

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Karir di <span className="text-primary">Cassindo</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Bergabunglah dengan tim kami dan jadilah bagian dari perusahaan 
              general supplier terpercaya di Indonesia.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <HiBriefcase className="text-primary text-xl" />
              </div>
              <h3 className="font-semibold text-dark mb-1">Karir Berkembang</h3>
              <p className="text-gray-500 text-sm">Peluang pengembangan karir yang jelas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <HiCheckCircle className="text-primary text-xl" />
              </div>
              <h3 className="font-semibold text-dark mb-1">Lingkungan Kerja</h3>
              <p className="text-gray-500 text-sm">Tim profesional dan kolaboratif</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <HiCalendar className="text-primary text-xl" />
              </div>
              <h3 className="font-semibold text-dark mb-1">Work-Life Balance</h3>
              <p className="text-gray-500 text-sm">Fleksibilitas dan kesejahteraan karyawan</p>
            </div>
          </div>

          {/* Open Positions */}
          <h2 className="text-2xl font-bold text-dark mb-6">Lowongan Terbuka</h2>
          <div className="space-y-4">
            {positions.map((job, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><HiLocationMarker /> {job.location}</span>
                      <span className="flex items-center gap-1"><HiBriefcase /> {job.type}</span>
                      <span>Pengalaman: {job.experience}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs text-gray-400">Deadline: {job.deadline}</span>
                    <Link href="/contact" className="px-6 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary-dark transition">
                      Lamar Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kirim CV */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-dark mb-2">Tidak menemukan posisi yang tepat?</h3>
            <p className="text-gray-600 mb-4">Kirimkan CV Anda, kami akan menghubungi Anda jika ada posisi yang sesuai.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition">
              <HiMail /> Kirim CV
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
