'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SnowfallBackground } from '@/components/ui/snow-flakes'
import { ProductModal } from '@/components/ui/ProductModal'
import type { MenuItem } from '@/types'

const WINTER_DRINKS: MenuItem[] = [
  {
    id: 'canela-latte',
    name: 'Canela Latte',
    description: 'Leite vaporizado levemente adocicado com baunilha e canela em pó',
    price: 16.00,
    category: 'quente',
    image_url: '/canela-latte.png',
    highlight: true,
    position: 75,
  },
  {
    id: 'velvet-milk',
    name: 'Velvet Milk',
    description: 'Espresso com três leites vaporizados — leite, leite de coco e leite condensado',
    price: 17.00,
    category: 'quente',
    image_url: '/velvet-milk.png',
    highlight: true,
    position: 77,
  },
]

export function WinterSpecial() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return (
    <section className="bg-brand-mahogany pt-14 pb-20 px-6 overflow-hidden relative">
      {/* Pattern overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "url('/PATTERN.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '320px auto',
        }}
      />

      {/* Snow */}
      <div className="absolute inset-0 pointer-events-none">
        <SnowfallBackground
          count={60}
          speed={0.4}
          minSize={8}
          maxSize={22}
          minOpacity={0.15}
          maxOpacity={0.6}
          color="#F5ECD7"
          wind={true}
          zIndex={2}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="text-center">
          <span className="font-body text-xs tracking-widest uppercase text-brand-gold block mb-1">
            Novidades
          </span>
          <h2 className="font-display text-[31px] md:text-[55px] text-brand-cream">
            Inverno Crema
          </h2>
          <div className="w-10 h-px bg-brand-gold mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {WINTER_DRINKS.map((drink) => (
            <article
              key={drink.id}
              className="group rounded-2xl overflow-hidden flex flex-col text-left cursor-pointer"
              style={{
                background: 'rgba(26, 18, 10, 0.5)',
                border: '1px solid rgba(201, 169, 110, 0.3)',
              }}
              onClick={() => setSelectedItem(drink)}
            >
              {/* Image */}
              <div className="relative aspect-square md:aspect-[4/3] bg-brand-espresso overflow-hidden">
                <Image
                  src={drink.image_url!}
                  alt={drink.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 font-body text-xs tracking-widest uppercase text-brand-stone bg-white/90 px-2 py-1 rounded-md">
                  Quente
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 bg-white">
                <h3 className="font-display text-xl md:text-2xl font-bold text-brand-espresso mb-1">
                  {drink.name}
                </h3>
                <p className="font-body text-sm font-light text-brand-espresso/70 line-clamp-2 mb-3">
                  {drink.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <p className="font-black text-lg text-brand-copper">
                    R$ {drink.price.toFixed(2).replace('.', ',')}
                  </p>
                  {/* Stamp */}
                  <div className="flex-shrink-0" style={{ width: 50, height: 50, transform: 'rotate(-12deg)' }}>
                    <Image
                      src="/carimbo-edicao-limitada.png"
                      alt="Edição Limitada"
                      width={50}
                      height={50}
                      className="w-full h-full object-contain"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedItem && (
        <ProductModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}
