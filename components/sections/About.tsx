import { Carousel } from '@/components/ui/Carousel'

const ABOUT_SLIDES = [
  { src: '/photo.jpg', alt: 'Ambiente interno da Crema & Co. Café' },
  { src: '/@naves.jpeg', alt: 'Espaço da Crema & Co.' },
  { src: '/@naves_calebe-10.jpg.jpeg', alt: 'Detalhes do café Crema & Co.' },
  { src: '/@naves_calebe-13.jpg.jpeg', alt: 'Grãos selecionados da Crema & Co.' },
  { src: '/@naves_calebe-2.jpg.jpeg', alt: 'Espaço aconchegante da Crema & Co.' },
  { src: '/Foto 2.jpg.jpeg', alt: 'Momentos na Crema & Co.' },
]

export function About() {
  return (
    <section id="sobre" className="bg-brand-cream py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Título — aparece só no mobile, antes do carrossel */}
        <div className="md:hidden order-1">
          <span className="font-[--font-lamoric] text-sm tracking-widest uppercase text-brand-copper block mb-3">Nossa história</span>
          <h2 className="font-[--font-lamoric] font-light text-3xl text-brand-espresso leading-tight mb-4">
            Mais que um café,
            <br />
            um espaço para você.
          </h2>
          <div className="w-10 h-px bg-brand-gold" />
        </div>

        {/* Carrossel */}
        <div className="order-2 md:order-2 relative aspect-[4/5] md:aspect-[3/4] bg-brand-linen overflow-hidden rounded-2xl">
          <Carousel
            slides={ABOUT_SLIDES}
            autoPlayInterval={2500}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Texto completo — desktop mostra título + texto, mobile mostra só texto */}
        <div className="order-3 md:order-1">
          <div className="hidden md:block">
            <span className="font-[--font-lamoric] text-sm tracking-widest uppercase text-brand-copper block mb-3">Nossa história</span>
            <h2 className="font-[--font-lamoric] font-light text-3xl md:text-4xl text-brand-espresso leading-tight mb-4">
              Mais que um café,
              <br />
              um espaço para você.
            </h2>
            <div className="w-10 h-px bg-brand-gold mb-6" />
          </div>

          <p className="font-body font-light text-base text-brand-mahogany/80 leading-relaxed mb-4">
            A Crema & Co. nasceu do desejo de criar um lugar onde cada
            detalhe importa — do grão ao copo, do atendimento ao ambiente.
            Um espaço para desacelerar, conversar e saborear com calma.
          </p>
          <p className="font-body font-light text-sm text-brand-stone leading-relaxed">
            Trabalhamos com grãos selecionados e técnicas que respeitam
            cada extração. Porque um bom café é uma experiência completa.
          </p>

          <div className="mt-12 flex flex-col gap-2">
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
              className="mt-1 inline-block self-start px-5 py-2 bg-brand-espresso text-brand-stone font-body font-medium text-xs tracking-widest uppercase hover:bg-brand-mahogany transition-colors rounded-full"
            >
              Clique para avaliar
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
