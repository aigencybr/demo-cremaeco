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
        {/* Text */}
        <div>
          <span className="font-[--font-lamoric] text-sm tracking-widest uppercase text-brand-copper block mb-3">Nossa história</span>
          <h2 className="font-[--font-lamoric] font-light text-3xl md:text-4xl text-brand-espresso leading-tight mb-4">
            Mais que um café,
            <br />
            um espaço para você.
          </h2>
          <div className="w-10 h-px bg-brand-gold mb-6" />
          <p className="font-body font-light text-base text-brand-mahogany/80 leading-relaxed mb-4">
            A Crema & Co. nasceu do desejo de criar um lugar onde cada
            detalhe importa — do grão ao copo, do atendimento ao ambiente.
            Um espaço para desacelerar, conversar e saborear com calma.
          </p>
          <p className="font-body font-light text-sm text-brand-stone leading-relaxed">
            Trabalhamos com grãos selecionados e técnicas que respeitam
            cada extração. Porque um bom café é uma experiência completa.
          </p>
        </div>

        <div className="relative aspect-[4/5] md:aspect-[3/4] bg-brand-linen overflow-hidden rounded-2xl">
          <Carousel
            slides={ABOUT_SLIDES}
            autoPlayInterval={2500}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
