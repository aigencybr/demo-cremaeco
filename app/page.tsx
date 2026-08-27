import { getHighlightedItems } from '@/lib/menu'
import { Hero } from '@/components/sections/Hero'
import { OrderNotice } from '@/components/sections/OrderNotice'
import { About } from '@/components/sections/About'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { CookiesCrema } from '@/components/sections/CookiesCrema'
import { Hours } from '@/components/sections/Hours'
import { Location } from '@/components/sections/Location'

export default function HomePage() {
  const highlights = getHighlightedItems(6)

  return (
    <main>
      <Hero />
      <OrderNotice />
      <CookiesCrema />
      <MenuPreview items={highlights} />
      <About />
      <Hours />
      <Location />
    </main>
  )
}
