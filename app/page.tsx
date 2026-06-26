import { getHighlightedItems } from '@/lib/menu'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { WinterSpecial } from '@/components/sections/WinterSpecial'
import { Hours } from '@/components/sections/Hours'
import { Location } from '@/components/sections/Location'

export default function HomePage() {
  const highlights = getHighlightedItems(6)

  return (
    <main>
      <Hero />
      <WinterSpecial />
      <MenuPreview items={highlights} />
      <About />
      <Hours />
      <Location />
    </main>
  )
}
