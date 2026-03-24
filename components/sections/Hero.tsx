import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — placeholder escuro até ter foto real do Supabase Storage */}
      {/* TODO: substituir por <ImageWithBlur fill priority src="/images/hero.jpg" alt="Ambiente Crema & Co." className="object-cover" /> */}
      <div className="absolute inset-0 bg-brand-espresso" />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        <span className="font-body text-xs tracking-widest uppercase text-brand-gold block mb-6">
          Caçapava – SP
        </span>

        <p className="font-display text-4xl md:text-5xl italic font-light text-brand-cream leading-tight">
          Um lugar para
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-display text-white leading-none mt-2 mb-6">
          RESPIRAR COM CALMA.
        </h1>

        {/* Linha dourada decorativa */}
        <div className="w-16 h-px bg-brand-gold mb-6" />

        <p className="font-body font-light text-sm md:text-base text-brand-cream/80 max-w-sm mb-8 leading-relaxed">
          Espressos artesanais, doces e bons momentos.
          <br />
          Terça a sexta, das 10h às 19h.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/cardapio" className="btn-primary-light">
            Ver Cardápio
          </Link>
          <Link href="#localizacao" className="btn-outline-light">
            Como Chegar
          </Link>
        </div>
      </div>
    </section>
  )
}
