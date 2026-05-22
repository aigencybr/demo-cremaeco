'use client'

import { useState, useEffect, useCallback } from 'react'
import { ImageWithBlur } from '@/components/ui/ImageWithBlur'

interface CarouselSlide {
  src: string
  alt: string
}

interface CarouselProps {
  slides: CarouselSlide[]
  autoPlayInterval?: number // ms, 0 desativa
  className?: string
  sizes?: string
}

export function Carousel({
  slides,
  autoPlayInterval = 4000,
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [slides.length])

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (autoPlayInterval <= 0 || slides.length <= 1) return
    const id = setInterval(next, autoPlayInterval)
    return () => clearInterval(id)
  }, [autoPlayInterval, slides.length, next])

  if (slides.length === 0) return null

  return (
    <div className={`relative w-full h-full overflow-hidden group ${className}`}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src + i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <ImageWithBlur
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes={sizes}
          />
        </div>
      ))}

      {/* Setas — só exibe se houver mais de 1 slide */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para foto ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === current ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
