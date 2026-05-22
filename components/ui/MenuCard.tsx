import Image from 'next/image'
import type { MenuItem } from '@/types'
import { formatPrice } from '@/lib/utils'

interface MenuCardProps {
  item: MenuItem
  variant?: 'compact' | 'full'
}

const CATEGORY_LABELS: Record<string, string> = {
  quente: 'Quente',
  gelado: 'Gelado',
  salgado: 'Salgado',
  doce: 'Doce',
  bebida: 'Bebida',
}

export function MenuCard({ item, variant = 'full' }: MenuCardProps) {
  return (
    <article
      aria-label={item.name}
      className="group bg-white overflow-hidden rounded-xl"
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-brand-linen rounded-xl ${
          variant === 'compact' ? 'aspect-[4/3]' : 'aspect-square md:aspect-[4/3]'
        }`}
      >
        {item.image_url ? (
          <Image
            src={item.image_url}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-brand-linen transition-transform duration-500 group-hover:scale-105">
            <span className="font-display text-4xl text-brand-gold/40 select-none">
              ☕
            </span>
          </div>
        )}
        {/* Category badge */}
        <span className="absolute top-3 left-3 font-body text-xs tracking-widest uppercase text-brand-stone bg-white/90 px-2 py-1 rounded-md">
          {CATEGORY_LABELS[item.category] ?? item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display text-xl md:text-2xl font-bold text-brand-espresso mb-1">
          {item.name}
        </h3>
        {item.description && (
          <p className="font-body text-sm font-light text-brand-espresso/70 line-clamp-2 mb-3">
            {item.description}
          </p>
        )}
        <p className="font-black text-lg text-brand-copper">
          {formatPrice(item.price)}
        </p>
      </div>
    </article>
  )
}
