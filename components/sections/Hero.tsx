export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        src="/herovideo2.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[60%_center] sm:object-center"
      />

      {/* Base black overlay */}
      <div className="absolute inset-0 bg-black/30" />

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

        <div className="w-16 h-px bg-brand-gold mb-6" />

        <p className="font-body font-light text-sm md:text-base text-brand-cream/80 max-w-sm mb-8 leading-relaxed">
          Espressos artesanais, doces e bons momentos.
          <br />
          Terça a sexta, das 10h às 19h.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a href="/cardapio" className="btn-primary-light rounded-full">
            Ver Cardápio
          </a>
          <a href="#localizacao" className="btn-outline-light rounded-full">
            Como Chegar
          </a>
        </div>
      </div>
    </section>
  )
}
