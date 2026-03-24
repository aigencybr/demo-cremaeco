import type { Metadata } from 'next'
import { getAllMenuItems } from '@/lib/menu'
import { CardapioHero } from '@/components/sections/CardapioHero'
import { MenuPageClient } from '@/components/sections/MenuPageClient'

export const metadata: Metadata = {
  title: 'Cardápio',
  description:
    'Conheça nosso cardápio completo: espressos, iced lattes, orange coffee, doces e muito mais.',
}

export default function CardapioPage() {
  const items = getAllMenuItems()

  return (
    <main>
      <CardapioHero />
      <MenuPageClient initialItems={items} />
    </main>
  )
}
