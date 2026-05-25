'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface ServiceCardProps {
  icon: IconType
  title: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="card group cursor-pointer"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="text-3xl text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  )
}
