'use client'

import { useState, useMemo } from 'react'
import type { MenuItem, Category } from '@/types'
import { CategoryTabs } from '@/components/ui/CategoryTabs'
import { MenuCard } from '@/components/ui/MenuCard'

interface MenuPageClientProps {
  initialItems: MenuItem[]
}

const DRINK_CATEGORIES: (Category | 'todos')[] = ['quente', 'gelado', 'bebida']

export function MenuPageClient({ initialItems }: MenuPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<Category | 'todos'>('todos')

  const filtered = useMemo(() => {
    if (activeCategory === 'todos') return initialItems
    return initialItems.filter((item) => item.category === activeCategory)
  }, [initialItems, activeCategory])

  const showDrinkNote = activeCategory === 'todos' || DRINK_CATEGORIES.includes(activeCategory)

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      <div className="mt-px">
        {filtered.length === 0 ? (
          <p className="text-center font-body font-light text-brand-stone py-16">
            Nenhum item nesta categoria por enquanto.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-linen mt-px">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} variant="full" />
            ))}
          </div>
        )}
      </div>

      {showDrinkNote && (
        <p className="font-body text-xs text-brand-stone text-center mt-8 tracking-wide">
          Adicional de leite vegetal: R$ 2,00 (quentes) · R$ 4,00 (gelados)
        </p>
      )}
    </section>
  )
}
