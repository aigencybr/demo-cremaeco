export function Location() {
  return (
    <section id="localizacao" className="bg-brand-linen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Map — mobile first */}
        <div className="order-1 md:order-2 h-64 md:h-full min-h-[300px]">
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
          <span className="eyebrow">Onde estamos</span>

          <h2 className="font-display text-3xl md:text-4xl text-brand-espresso leading-tight mb-4">
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
            className="font-body font-medium text-xs tracking-widest uppercase text-brand-copper underline underline-offset-4 hover:text-brand-mahogany transition-colors mb-8"
          >
            Abrir no Google Maps →
          </a>

          <div className="w-full h-px bg-brand-gold/30 mb-8" />

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <a
              href="https://instagram.com/cremacafeteria"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-brand-espresso hover:text-brand-copper transition-colors"
            >
              Instagram:{' '}
              <span className="font-medium">@cremacafeteria</span>
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-brand-espresso hover:text-brand-copper transition-colors"
            >
              WhatsApp:{' '}
              <span className="font-medium">Fale conosco →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
