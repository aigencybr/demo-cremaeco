'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#localizacao', label: 'Contato' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 flex justify-center"
      style={{ padding: '16px 24px 0', pointerEvents: 'none' }}
    >
      <div
        className="header-pill flex w-full items-center justify-between gap-6"
        style={{
          maxWidth: '1200px',
          padding: '9px 24px',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          pointerEvents: 'auto',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image
            src="/logo-2.png"
            alt="Crema & Co. Café"
            height={72}
            width={240}
            style={{ width: 'auto', height: '36px' }}
            className="md:!h-[48px]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 md:flex md:justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs tracking-widest uppercase text-brand-cream/80 hover:text-brand-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span
            className={`block w-5 h-px bg-brand-cream transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-brand-cream transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-brand-cream transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="absolute top-full left-6 right-6 mt-2 md:hidden"
          style={{
            background: 'rgba(26, 18, 10, 0.92)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(201, 169, 110, 0.25)',
            borderRadius: '16px',
            pointerEvents: 'auto',
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-xs tracking-widest uppercase text-brand-cream/80 hover:text-brand-gold transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        .header-pill {
          background: rgba(26, 18, 10, 0.55);
          border: 1px solid rgba(201, 169, 110, 0.25);
          border-radius: 9999px;
        }
      `}</style>
    </header>
  )
}
