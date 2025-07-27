'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    )

    const imgElement = document.querySelector(`[data-src="${src}"]`)
    if (imgElement) {
      observer.observe(imgElement)
    }

    return () => observer.disconnect()
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const imageProps = {
    src,
    alt,
    className: `${className} transition-opacity duration-300 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`,
    onLoad: handleLoad,
    priority,
    sizes,
    quality,
    placeholder,
    blurDataURL,
    'data-src': src,
  }

  if (fill) {
    return (
      <div className="relative">
        <Image
          {...imageProps}
          fill
          style={{ objectFit: 'cover' }}
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      <Image
        {...imageProps}
        width={width}
        height={height}
      />
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse"
          style={{ width, height }}
        />
      )}
    </div>
  )
} 