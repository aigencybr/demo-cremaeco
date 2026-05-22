import Link from 'next/link'
import type { MenuItem } from '@/types'
import { MenuCard } from '@/components/ui/MenuCard'
import { SectionTitle } from '@/components/ui/SectionTitle'

interface MenuPreviewProps {
  items: MenuItem[]
}

export function MenuPreview({ items }: MenuPreviewProps) {
  return (
    <section className="relative bg-white py-20 px-6 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "url('/PATTERN.png')", backgroundRepeat: "repeat", backgroundSize: "320px auto", opacity: 0.18, mixBlendMode: "multiply" }}
      />
      <div className="relative max-w-6xl mx-auto">
        <SectionTitle eyebrow="Cardápio" title="Nossos destaques" />

        <div className="mt-12">
          {items.length === 0 ? (
            <p className="text-center font-body font-light text-brand-stone py-12">
              Em breve nosso cardápio completo.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-linen">
              {items.map((item) => (
                <MenuCard key={item.id} item={item} variant="compact" />
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/cardapio"
            className="font-body font-medium text-xs tracking-widest uppercase text-brand-espresso underline underline-offset-4 hover:text-brand-copper transition-colors"
          >
            Ver cardápio completo →
          </Link>
        </div>
      </div>
    </section>
  )
}
