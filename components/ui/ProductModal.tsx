'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import type { MenuItem } from '@/types'
import { formatPrice } from '@/lib/utils'

const CATEGORY_LABELS: Record<string, string> = {
  quente: 'Quente',
  gelado: 'Gelado',
  salgado: 'Salgado',
  doce: 'Doce',
  bebida: 'Bebida',
}

interface ProductModalProps {
  item: MenuItem
  onClose: () => void
}

export function ProductModal({ item, onClose }: ProductModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(26, 18, 10, 0.7)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-x-hidden overflow-y-auto flex flex-col md:flex-row"
        style={{ background: '#F5ECD7', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors"
          aria-label="Fechar"
        >
          <span className="text-white text-sm leading-none">✕</span>
        </button>

        {/* Image */}
        <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[400px] flex-shrink-0 bg-brand-linen">
          {item.image_url ? (
            <Image
              src={item.image_url}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-display text-6xl text-brand-gold/40">☕</span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center px-8 py-10 md:py-12 gap-4">
          <span className="font-body text-xs tracking-widest uppercase text-brand-stone">
            {CATEGORY_LABELS[item.category] ?? item.category}
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-espresso leading-tight">
            {item.name}
          </h2>

          <div className="w-10 h-px bg-brand-gold" />

          {item.description && (
            <p className="font-body font-light text-sm md:text-base text-brand-espresso/70 leading-relaxed">
              {item.description}
            </p>
          )}

          <p className="font-body font-black text-2xl text-brand-copper mt-2">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>
    </div>
  )
}
