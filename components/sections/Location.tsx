export function Location() {
  return (
    <section
      id="localizacao"
      className="bg-brand-linen"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Map — mobile first */}
        <div className="order-1 md:order-2 h-80 md:h-full min-h-[500px]">
          <iframe
            title="Mapa — Crema & Co. Café"
            src="https://maps.google.com/maps?q=Av.+Carbenet+Sauvignon,+15,+Caçapava,+SP&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Info */}
        <div className="order-2 md:order-1 py-16 px-8 md:px-12 flex flex-col justify-center">
          <span className="font-[--font-lamoric] text-sm tracking-widest uppercase text-brand-copper flex items-center gap-1.5 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Localização
          </span>

          <h2 className="font-[--font-lamoric] font-light text-3xl md:text-4xl text-brand-espresso leading-tight mb-4">
            Venha nos visitar
          </h2>

          <div className="w-10 h-px bg-brand-gold mb-6" />

          <address className="not-italic font-body font-light text-base text-brand-mahogany/80 leading-relaxed mb-4">
            Av. Carbenet Sauvignon, 15
            <br />
            Res. Colinas — Caçapava, SP
          </address>

          <a
            href="https://maps.google.com/?q=Av.+Carbenet+Sauvignon,+15,+Caçapava,+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-medium text-xs tracking-widest uppercase text-brand-copper underline underline-offset-4 hover:text-brand-mahogany transition-colors"
          >
            Abrir no Google Maps →
          </a>
        </div>
      </div>
    </section>
  )
}
