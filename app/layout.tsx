import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Crema & Co. Café — Caçapava, SP',
    template: '%s | Crema & Co. Café',
  },
  description:
    'Cafeteria premium em Caçapava-SP. Espressos artesanais, iced lattes, doces e um espaço para respirar com calma.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Crema & Co. Café',
  },
}

export const viewport: Viewport = {
  themeColor: '#1A120A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
