# Prompt 01 — Design System

> **Contexto:** Este é o primeiro módulo do projeto Crema & Co. Café.
> Execute este prompt antes de qualquer outro. Ele estabelece os fundamentos
> visuais e os componentes base que todos os outros módulos vão reutilizar.

---

## Objetivo

Configurar o design system completo do projeto:

1. Inicializar o projeto Next.js com TypeScript e Tailwind
2. Configurar as fontes da marca
3. Definir os tokens de cor e tipografia no Tailwind
4. Criar os componentes base reutilizáveis
5. Criar o `layout.tsx` raiz com metadata e fontes
6. Criar o `globals.css` com variáveis e reset

---

## 1. Inicialização do projeto

```bash
npx create-next-app@latest crema-co-site \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"
```

Instalar dependências adicionais:

```bash
npm install clsx tailwind-merge
npm install @supabase/supabase-js @supabase/ssr
```

---

## 2. Fontes da marca

Usar Google Fonts via `next/font/google`. As fontes escolhidas refletem
a identidade visual da Crema & Co.: elegância, suavidade e sofisticação.

| Papel                  | Fonte                   | Pesos        |
|------------------------|-------------------------|--------------|
| Display / script       | `Cormorant Garamond`    | 300, 400 italic |
| Títulos institucionais | `Cormorant Garamond`    | 600, 700     |
| Corpo de texto         | `Montserrat`            | 300, 400     |
| Labels e navegação     | `Montserrat`            | 500          |

Configurar em `app/layout.tsx` com `variable` para uso via CSS custom property.

---

## 3. Tailwind — `tailwind.config.ts`

Criar configuração extendida com os tokens da marca:

### Cores

```ts
colors: {
  brand: {
    espresso:  '#1A120A',  // Café escuro — textos principais, fundo dark
    mahogany:  '#3D2010',  // Marrom rico — elementos de destaque
    copper:    '#7A4A1E',  // Cobre quente — títulos e ícones
    gold:      '#C9A96E',  // Dourado creme — detalhes e linhas decorativas
    cream:     '#F5ECD7',  // Creme claro — fundo de seções quentes
    linen:     '#EDE8DC',  // Bege off-white — fundo de cards
    stone:     '#B8B0A4',  // Cinza pedra — textos secundários
    white:     '#FFFFFF',
  }
}
```

### Tipografia

```ts
fontFamily: {
  display: ['var(--font-cormorant)', 'Georgia', 'serif'],
  body:    ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
}
```

### Espaçamentos e animações

```ts
extend: {
  letterSpacing: {
    widest:  '0.25em',
    display: '0.08em',
  },
  transitionDuration: {
    DEFAULT: '300ms',
  },
}
```

---

## 4. `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-cormorant: '';  /* preenchido pelo next/font */
    --font-montserrat: '';
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white text-brand-espresso font-body antialiased;
  }

  /* Linha decorativa dourada — usada em títulos de seção */
  .gold-rule::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background-color: theme('colors.brand.gold');
    margin: 12px auto 0;
  }
}

@layer components {
  /* Botão primário — fundo escuro, texto creme */
  .btn-primary {
    @apply inline-flex items-center gap-2 px-6 py-3
           bg-brand-espresso text-brand-cream
           font-body font-medium tracking-widest text-xs uppercase
           transition-opacity hover:opacity-80
           focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none;
  }

  /* Botão secundário — borda, sem fundo */
  .btn-outline {
    @apply inline-flex items-center gap-2 px-6 py-3
           border border-brand-espresso text-brand-espresso
           font-body font-medium tracking-widest text-xs uppercase
           transition-colors hover:bg-brand-espresso hover:text-brand-cream
           focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none;
  }

  /* Título de seção padrão */
  .section-title {
    @apply font-display text-3xl md:text-4xl text-brand-espresso text-center;
  }

  /* Label / eyebrow acima do título */
  .eyebrow {
    @apply font-body text-xs tracking-widest uppercase text-brand-copper
           block mb-3;
  }
}
```

---

## 5. `app/layout.tsx`

Implementar o layout raiz com:

- Importação e configuração das fontes via `next/font/google`
- Aplicação das variáveis CSS das fontes no `<html>`
- Metadata completa (title, description, og:image, theme-color)
- Renderização de `<Header />` e `<Footer />` ao redor do `{children}`
- `<WhatsappCTA />` flutuante (botão fixo no canto inferior direito)

```tsx
// Metadata base
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
  themeColor: '#1A120A',
}
```

---

## 6. Componentes base a criar

### `components/ui/SectionTitle.tsx`

Props: `eyebrow?: string`, `title: string`, `subtitle?: string`, `centered?: boolean`

Renderiza a hierarquia tipográfica padrão das seções:
- Eyebrow em Montserrat light caps
- Título em Cormorant Garamond, com variação italic no primeiro segmento
- Linha dourada decorativa (`gold-rule`)
- Subtitle em Montserrat light

### `components/ui/ImageWithBlur.tsx`

Wrapper sobre `next/image` com:
- `placeholder="blur"` e `blurDataURL` gerado via `plaiceholder` ou base64 inline
- `sizes` responsivo configurado
- `className` passado para o container

### `components/ui/MenuCard.tsx`

Props: `item: MenuItem`

Card de item do cardápio com:
- Imagem quadrada com `object-cover`
- Nome do item em Cormorant Garamond
- Descrição em Montserrat light
- Preço formatado em `R$ XX,XX`
- Sem botão — é apenas informativo

### `components/layout/Header.tsx`

- `'use client'` — precisa detectar scroll para mudar background
- Logo "CREMA & CO" em Cormorant Garamond + "CAFÉ" em Montserrat caps
- Links de navegação: Início, Cardápio, Sobre, Contato
- Em mobile: menu hamburguer com drawer
- Fundo transparente no topo, `bg-brand-espresso/95 backdrop-blur` ao scrollar

### `components/layout/Footer.tsx`

- Fundo `#1A120A` (café escuro)
- Logo centralizado
- Endereço: Av. Carbenet Sauvignon, 15 – Res. Colinas, Caçapava–SP
- Horários resumidos
- Links para Instagram e WhatsApp
- Linha de créditos em Montserrat light 300

### `components/ui/WhatsappCTA.tsx`

- `'use client'`
- Botão fixo `fixed bottom-6 right-6` com ícone do WhatsApp (SVG inline)
- Cor: verde WhatsApp (`#25D366`) com texto branco
- `aria-label="Falar no WhatsApp"`
- Abre `https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}` em nova aba
- Micro-animação: `animate-bounce` leve ao entrar na tela

---

## 7. `lib/utils.ts`

```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
```

---

## 8. `types/index.ts`

```ts
export type Category = 'quente' | 'gelado' | 'salgado' | 'doce' | 'bebida'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: Category
  image_url: string | null
  available: boolean
  highlight: boolean
  position: number
}

export interface HoursEntry {
  days: string      // ex: "Terça à Sexta"
  open: string      // ex: "10:00"
  close: string     // ex: "19:00"
}
```

---

## Resultado esperado ao final deste prompt

- [ ] Projeto Next.js inicializado e rodando em `localhost:3000`
- [ ] Fontes Cormorant Garamond e Montserrat carregando via `next/font`
- [ ] `tailwind.config.ts` com todos os tokens da Crema & Co.
- [ ] `globals.css` com classes utilitárias da marca
- [ ] `layout.tsx` com metadata, fontes e estrutura do shell
- [ ] Todos os componentes base criados (podem ter placeholder de conteúdo)
- [ ] `lib/utils.ts` e `types/index.ts` criados
- [ ] Sem erros de TypeScript (`npx tsc --noEmit` passa)
