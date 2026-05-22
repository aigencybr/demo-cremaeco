import type { HoursEntry } from '@/types'

const HOURS_DATA: HoursEntry[] = [
  { days: 'Terça à Sexta', open: '10:00', close: '19:00' },
  { days: 'Sábado', open: '14:00', close: '19:00' },
]

export function Hours() {
  return (
    <section className="bg-brand-espresso py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">


        <h2 className="font-[--font-lamoric]  text-3xl md:text-5xl text-brand-cream leading-tight">
          Nossos Horários
        </h2>

        <div className="w-10 h-px bg-brand-gold mx-auto mt-4 mb-10" />

        {/* Hours grid */}
        <div className="grid grid-cols-2 divide-x divide-brand-gold/40">
          {HOURS_DATA.map((entry) => (
            <div key={entry.days} className="px-8 py-4">
              <p className="font-body text-xs tracking-widest uppercase text-brand-gold mb-2">
                {entry.days}
              </p>
              <p className="font-black text-xl md:text-2xl text-brand-cream">
                {entry.open}
                <span className="font-body text-xs text-brand-stone/60 mx-1">
                  às
                </span>
                {entry.close}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-brand-gold/20 my-8" />

        <p className="font-body font-light text-sm text-brand-stone">
          Não abrimos aos domingos e segundas-feiras.
        </p>

        <p className="font-body font-light text-xs text-brand-stone/50 mt-3">
          Av. Carbenet Sauvignon, 15 – Res. Colinas, Caçapava–SP
        </p>
      </div>
    </section>
  )
}
