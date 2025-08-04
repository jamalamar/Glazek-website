'use client'

import { useState } from 'react'

interface ImagePlaceholderProps {
  src?: string
  alt: string
  className?: string
  fallbackText?: string
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall'
  placeholderIcon?: string
  placeholderText?: string
  gradientFrom?: string
  gradientTo?: string
}

export default function ImagePlaceholder({ 
  src, 
  alt, 
  className = '', 
  fallbackText,
  aspectRatio = 'video',
  placeholderIcon = '🏗️',
  placeholderText,
  gradientFrom = 'blue-50',
  gradientTo = 'gray-100'
}: ImagePlaceholderProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video', 
    wide: 'aspect-[3/1]',
    tall: 'aspect-[3/4]'
  }

  const shouldShowPlaceholder = !src || imageError || !imageLoaded

  const displayText = placeholderText || fallbackText || 'Project Image'
  
  return (
    <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-${gradientFrom} to-${gradientTo} ${aspectRatioClasses[aspectRatio]} ${className}`}>
      {src && !imageError && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}
      
      {shouldShowPlaceholder && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl">{placeholderIcon}</span>
          </div>
          <div className="text-sm font-medium text-gray-700 mb-2">
            {displayText}
          </div>
          <div className="text-xs text-gray-500">
            Glazek LLC - Building Excellence
          </div>
        </div>
      )}
    </div>
  )
}