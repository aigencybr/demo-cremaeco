import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-brand-espresso py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <div className="flex flex-col leading-none items-center">
          <span className="font-display text-2xl font-semibold tracking-display text-brand-cream">
            CREMA & CO
          </span>
          <span className="font-body text-[9px] tracking-widest uppercase text-brand-gold -mt-0.5">
            CAFÉ
          </span>
        </div>

        {/* Separator */}
        <div className="w-10 h-px bg-brand-gold" />

        {/* Address */}
        <address className="not-italic font-body font-light text-sm text-brand-stone leading-relaxed">
          Av. Carbenet Sauvignon, 15 – Res. Colinas
          <br />
          Caçapava – SP
        </address>

        {/* Horários */}
        <p className="font-body text-xs tracking-wide text-brand-stone/70">
          Terça a Sexta: 10h–19h &nbsp;·&nbsp; Sábado: 14h–19h
        </p>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/cremacafeteria"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-brand-stone hover:text-brand-gold transition-colors"
            aria-label="Instagram da Crema & Co."
          >
            Instagram
          </a>
          <span className="text-brand-gold text-xs">·</span>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-brand-stone hover:text-brand-gold transition-colors"
            aria-label="WhatsApp da Crema & Co."
          >
            WhatsApp
          </a>
        </div>

        {/* Credits */}
        <p className="font-body font-light text-xs text-brand-stone/40 mt-2">
          © {new Date().getFullYear()} Crema & Co. Café — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
