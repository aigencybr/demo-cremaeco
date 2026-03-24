interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <span
          className={`font-body text-xs tracking-widest uppercase block mb-3 ${
            light ? 'text-brand-gold' : 'text-brand-copper'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl ${
          light ? 'text-brand-cream' : 'text-brand-espresso'
        } ${centered ? 'gold-rule' : 'gold-rule-left'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body font-light text-sm md:text-base mt-4 max-w-md ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-brand-stone' : 'text-brand-stone'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
