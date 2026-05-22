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
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
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

          <div className="mt-8 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span className="text-amber-400 text-2xl leading-none">★★★★★</span>
            </div>
            <p className="font-body font-light text-sm text-brand-mahogany/70">
              Nos avalie no Google, sua opinião é importante!
            </p>
            <a
              href="https://www.google.com/search?sca_esv=1683bac0e7c4926b&hl=en-BR&sxsrf=ANbL-n45Pt0w1fmA7WcLBr-bAfRmWQOCVQ:1779476786094&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOW2glOc3k5ifGRFsl_Az3b2WsgFtxw3vFppkt4t2wKafQ9naVYFLHmigraXyVKE3WwAwJzjRurBfrCTUZdci4sln-7hfZJ5w-Qd0EG9s_1GLxkFWVg%3D%3D&q=Crema+%26+Co.+Caf%C3%A9+Reviews&sa=X&ved=2ahUKEwiunOLNy82UAxWDK7kGHQBNLRsQ0bkNegQIIhAF&biw=1912&bih=922&dpr=1#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block self-start px-5 py-2 bg-brand-espresso text-brand-stone font-body font-medium text-xs tracking-widest uppercase hover:bg-brand-mahogany transition-colors"
            >
              Clique para avaliar
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
