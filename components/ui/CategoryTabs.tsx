'use client'

import Image from 'next/image'
import type { Category } from '@/types'

interface CategoryTabsProps {
  active: Category | 'todos'
  onChange: (cat: Category | 'todos') => void
}

const CATEGORIES: { value: Category | 'todos'; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'quente', label: 'Quentes' },
  { value: 'gelado', label: 'Gelados' },
  { value: 'salgado', label: 'Salgados' },
  { value: 'doce', label: 'Doces' },
  { value: 'bebida', label: 'Bebidas' },
]

export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex items-center bg-brand-linen p-1">
      <div className="hidden sm:flex flex-1 justify-center items-center">
        <Image
          src="/copo.png"
          alt=""
          width={40}
          height={40}
          className="opacity-20 select-none pointer-events-none"
          aria-hidden
        />
      </div>

      <div role="tablist" className="flex items-center gap-1 overflow-x-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            role="tab"
            aria-selected={active === cat.value}
            onClick={() => onChange(cat.value)}
            className={`font-body text-xs tracking-widest uppercase px-4 py-2 whitespace-nowrap transition-colors ${
              active === cat.value
                ? 'bg-brand-espresso text-brand-cream'
                : 'text-brand-stone hover:text-brand-espresso'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="hidden sm:flex flex-1 justify-center items-center">
        <Image
          src="/torta.png"
          alt=""
          width={40}
          height={40}
          className="opacity-20 select-none pointer-events-none"
          aria-hidden
        />
      </div>
    </div>
  )
}
