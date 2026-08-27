import { OrderNotice } from '@/components/sections/OrderNotice'

export function CardapioHero() {
  return (
    <section className="bg-brand-espresso pt-36 md:pt-48 text-center">
      <div className="px-6">
        <span className="font-body text-xs tracking-widest uppercase text-brand-gold block mb-3">
          O que preparamos para você
        </span>

        <h1 className="font-display text-3xl md:text-5xl text-brand-cream leading-tight">
          <span className="italic font-light">Nosso</span>
          <br />
          <span className="font-bold tracking-display">CARDÁPIO</span>
        </h1>

        <div className="w-10 h-px bg-brand-gold mx-auto mt-5 mb-6" />

        <p className="font-body font-light text-sm text-brand-stone pb-16 md:pb-20">
          Café, aconchego e boas conversas
        </p>
      </div>

      <OrderNotice />
    </section>
  )
}
