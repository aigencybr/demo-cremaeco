'use client'

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
    <div
      role="tablist"
      className="flex gap-1 p-1 bg-brand-linen overflow-x-auto"
    >
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
  )
}
