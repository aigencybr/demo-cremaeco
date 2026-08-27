'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ProductModal } from '@/components/ui/ProductModal'
import type { MenuItem } from '@/types'

const NEW_COOKIES: MenuItem[] = [
  {
    id: 'cookie-tradicional',
    name: 'Cookie Tradicional',
    description: 'Cookie amanteigado, crocante por fora e macio por dentro, com gotas generosas de chocolate meio amargo',
    price: 17.90,
    category: 'doce',
    image_url: '/cookie-tradicional.jpg',
    highlight: true,
    position: 80,
  },
  {
    id: 'cookie-red-velvet',
    name: 'Cookie Red Velvet',
    description: 'Cookie de massa aveludada de cacau, macio por dentro, com gotas de chocolate branco derretendo em cada mordida',
    price: 17.90,
    category: 'doce',
    image_url: '/cookie-red-velvet.jpg',
    highlight: true,
    position: 81,
  },
  {
    id: 'cookie-chocotella',
    name: 'Cookie Chocotella',
    description: 'Cookie de chocolate crocante por fora, recheado com generosa camada de Nutella derretendo por dentro',
    price: 21.90,
    category: 'doce',
    image_url: '/cookie-chocotella.jpg',
    highlight: true,
    position: 82,
  },
]

export function CookiesCrema() {
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

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="text-center">
          <span className="font-body text-xs tracking-widest uppercase text-brand-gold block mb-1">
            Novidades
          </span>
          <h2 className="font-display text-[31px] md:text-[55px] text-brand-cream">
            Cookies Crema
          </h2>
          <div className="w-10 h-px bg-brand-gold mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
          {NEW_COOKIES.map((cookie) => (
            <article
              key={cookie.id}
              className="group rounded-2xl overflow-hidden flex flex-col text-left cursor-pointer"
              style={{
                background: 'rgba(26, 18, 10, 0.5)',
                border: '1px solid rgba(201, 169, 110, 0.3)',
              }}
              onClick={() => setSelectedItem(cookie)}
            >
              {/* Image */}
              <div className="relative aspect-square bg-brand-espresso overflow-hidden">
                <Image
                  src={cookie.image_url!}
                  alt={cookie.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 font-body text-xs tracking-widest uppercase text-brand-stone bg-white/90 px-2 py-1 rounded-md">
                  Doce
                </span>
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col flex-1 bg-white">
                <h3 className="font-display text-lg md:text-xl font-bold text-brand-espresso mb-1">
                  {cookie.name}
                </h3>
                <p className="font-body text-xs font-light text-brand-espresso/70 line-clamp-2 mb-3">
                  {cookie.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <p className="font-black text-base text-brand-copper">
                    R$ {cookie.price.toFixed(2).replace('.', ',')}
                  </p>
                  {/* Stamp */}
                  <div className="flex-shrink-0" style={{ width: 42, height: 42, transform: 'rotate(-12deg)' }}>
                    <Image
                      src="/carimbo-edicao-limitada.png"
                      alt="Edição Limitada"
                      width={42}
                      height={42}
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
