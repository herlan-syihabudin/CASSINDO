'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

interface ServiceCardProps {
  icon: IconType
  title: string
  description: string
  delay?: number
  tags?: string[]
  price?: string
  isHighlight?: boolean
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0,
  tags = [],
  price,
  isHighlight = false
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group cursor-pointer rounded-2xl transition-all duration-500
        ${isHighlight 
          ? 'bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/30 shadow-xl' 
          : 'bg-white border border-gray-100 shadow-lg hover:shadow-2xl'
        }
        ${isHovered ? '-translate-y-2' : 'translate-y-0'}
      `}
    >
      {/* Highlight Badge */}
      {isHighlight && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ★ POPULER
          </span>
        </div>
      )}

      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rotate-45 transform origin-top-right transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative z-0">
        {/* Icon Container with Animation */}
        <motion.div 
          className={`
            w-16 h-16 rounded-2xl flex items-center justify-center mb-5 
            transition-all duration-500 relative overflow-hidden
            ${isHovered ? 'bg-primary shadow-lg' : 'bg-primary/10'}
          `}
          whileHover={{ rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {/* Ripple Effect on Hover */}
          {isHovered && (
            <motion.span
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-white rounded-2xl"
            />
          )}
          <Icon className={`
            text-3xl transition-all duration-300 z-10
            ${isHovered ? 'text-white scale-110' : 'text-primary'}
          `} />
        </motion.div>

        {/* Title with Gradient on Hover */}
        <h3 className={`
          text-xl md:text-2xl font-bold mb-2 transition-all duration-300
          ${isHovered ? 'text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-gray-900'}
        `}>
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-500 leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.span 
                key={i} 
                className={`
                  text-xs px-2 py-1 rounded-full transition-all duration-300
                  ${isHovered ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'}
                `}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}

        {/* Price & CTA Row */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          {price && (
            <div>
              <span className="text-xs text-gray-400">Mulai dari</span>
              <p className="text-sm font-bold text-primary">{price}</p>
            </div>
          )}
          
          {/* Learn More Link */}
          <motion.div 
            className={`
              flex items-center gap-2 text-sm font-medium transition-all duration-300
              ${isHovered ? 'text-primary gap-3' : 'text-gray-400'}
            `}
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <span>Pelajari</span>
            <HiArrowRight className="text-sm" />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Border on Hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
