// src/components/OptimizedImage.tsx
import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  className?: string
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '',
  width,
  height,
  ...props 
}: OptimizedImageProps) {
  // Otomatis convert ke WebP
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  
  return (
    <Image
      src={webpSrc}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
      {...props}
    />
  )
}
