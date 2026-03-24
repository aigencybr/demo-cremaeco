# Prompt 02 — Homepage

> **Contexto:** Design system do Prompt 01 já implementado.
> Todos os tokens, fontes e componentes base estão disponíveis.
> Este prompt implementa a `app/page.tsx` e todas as suas seções.

---

## Objetivo

Implementar a homepage completa da Crema & Co. Café com as seguintes seções,
nesta ordem:

1. **Hero** — impacto visual acima da dobra
2. **About** — história e proposta da marca
3. **MenuPreview** — destaques do cardápio
4. **Hours** — horários de funcionamento
5. **Location** — endereço e mapa

---

## `app/page.tsx`

Server Component. Lê os itens em destaque do `menu.json` via `lib/menu.ts`
em tempo de build — sem chamadas de rede.

```tsx
import { getHighlightedItems } from '@/lib/menu'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { Hours } from '@/components/sections/Hours'
import { Location } from '@/components/sections/Location'

export default function HomePage() {
  const highlights = getHighlightedItems(6)

  return (
    <main>
      <Hero />
      <About />
      <MenuPreview items={highlights} />
      <Hours />
      <Location />
    </main>
  )
}
```

---

## Seção 1 — `components/sections/Hero.tsx`

**Visual:** Tela cheia com foto de fundo escura (xícara sendo servida,
ambiente do café). Overlay gradiente escuro na parte inferior. Conteúdo
centralizado.

**Comportamento:**
- Altura: `min-h-screen` com `relative`
- Imagem de fundo via `next/image` com `fill` e `object-cover`, `priority`
- Overlay: `absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60`
- Conteúdo sobre o overlay: `absolute inset-0 flex flex-col items-center justify-center`

**Conteúdo:**
```
[eyebrow] Caçapava – SP

[script italic grande]
  Um lugar para

[serif bold grande]
  RESPIRAR COM CALMA.

[linha dourada decorativa — 60px, centralizada]

[texto body light, max-w-sm, centralizado]
  Espressos artesanais, doces e bons momentos.
  Terça a sexta, das 10h às 19h.

[dois botões lado a lado]
  [btn-primary] Ver Cardápio  →  href="/cardapio"
  [btn-outline em versão clara] Como Chegar  →  href="#localizacao"
```

**Tipografia do hero:**
- "Um lugar para" — `font-display text-4xl md:text-5xl italic font-light text-brand-cream`
- "RESPIRAR COM CALMA." — `font-display text-5xl md:text-7xl font-bold tracking-display text-white`
- Texto descritivo — `font-body font-light text-sm md:text-base text-brand-cream/80`

**Nota:** A imagem do hero é um placeholder — adicionar instrução de `TODO`
indicando qual arquivo usar do Supabase Storage.

---

## Seção 2 — `components/sections/About.tsx`

**Visual:** Fundo `brand-cream`. Duas colunas no desktop — texto à esquerda,
imagem à direita. Uma coluna no mobile.

**Conteúdo:**
```
[eyebrow] Nossa história

[título]
  Mais que um café,
  um espaço para você.

[parágrafo body]
  A Crema & Co. nasceu do desejo de criar um lugar onde cada
  detalhe importa — do grão ao copo, do atendimento ao ambiente.
  Um espaço para desacelerar, conversar e saborear com calma.

[linha dourada, alinhada à esquerda]

[segunda linha de texto, menor]
  Trabalhamos com grãos selecionados e técnicas que respeitam
  cada extração. Porque um bom café é uma experiência completa.
```

**Imagem:** Foto do ambiente interno ou fachada da cafeteria.
`aspect-ratio: 4/5` no mobile, `aspect-ratio: 3/4` no desktop.
`object-cover`, `rounded-none` (sem borda arredondada — estilo editorial).

---

## Seção 3 — `components/sections/MenuPreview.tsx`

**Props:** `items: MenuItem[]`

**Visual:** Fundo `white`. Título de seção centralizado, seguido de grid
de cards, seguido de link para o cardápio completo.

**Estrutura:**
```
[SectionTitle eyebrow="Cardápio" title="Nossos destaques"]

[grid de cards]
  - Mobile: 1 coluna
  - Tablet: 2 colunas
  - Desktop: 3 colunas
  - Gap: 1px (efeito de grade com linhas sutis usando bg-brand-linen no container)

[link centralizado]
  "Ver cardápio completo →"  — href="/cardapio"
  Estilo: Montserrat medium, tracking-widest, underline sutil
```

**`MenuCard` nesta página:**
- Imagem: aspect `4/3`, `object-cover`
- Fundo do card: `bg-white`
- Hover: `group-hover:scale-105` na imagem (transition suave)
- Preço: `text-brand-copper font-display text-xl`
- Categoria exibida como badge: `text-xs tracking-wider uppercase text-brand-stone`

**Estado de loading / empty:**
- Se `items` vier vazio, mostrar mensagem "Em breve nosso cardápio completo."
- Sem skeleton animado nesta versão — manter simples

---

## Seção 4 — `components/sections/Hours.tsx`

**Visual:** Fundo `brand-espresso` (café escuro). Texto em creme e dourado.
Atmosfera de quadro-negro sofisticado.

**Conteúdo:**
```
[eyebrow em brand-gold] Quando nos encontrar

[título em brand-cream]
  Nossos
  Horários

[linha dourada]

[grade 2 colunas, dividida por linha vertical dourada]
  TERÇA À SEXTA          |  SÁBADO
  10:00 às 19:00         |  14:00 às 19:00

[linha horizontal dourada, fina]

[texto centralizado, menor, em brand-stone]
  Não abrimos aos domingos e segundas-feiras.

[endereço, menor ainda]
  Av. Carbenet Sauvignon, 15 – Res. Colinas, Caçapava–SP
```

**Implementação:**
- Os dados de horário devem vir de um array `HOURS_DATA` constante definido
  no próprio componente (sem banco de dados nesta versão)
- Fácil de editar manualmente quando necessário

```ts
const HOURS_DATA: HoursEntry[] = [
  { days: 'Terça à Sexta', open: '10:00', close: '19:00' },
  { days: 'Sábado',        open: '14:00', close: '19:00' },
]
```

---

## Seção 5 — `components/sections/Location.tsx`

**id:** `id="localizacao"` — para o link "Como Chegar" do hero funcionar

**Visual:** Fundo `brand-linen`. Duas colunas no desktop — info à esquerda,
mapa à direita. Uma coluna no mobile (mapa primeiro para contexto visual).

**Coluna de informações:**
```
[eyebrow] Onde estamos

[título] Venha nos visitar

[endereço completo]
  Av. Carbenet Sauvignon, 15
  Res. Colinas — Caçapava, SP

[link Google Maps — abre em nova aba]
  "Abrir no Google Maps →"
  rel="noopener noreferrer"

[separador]

[bloco de contato]
  Instagram: @cremacafeteria
  WhatsApp: [botão direto]
```

**Mapa:**
- Embed do Google Maps via `<iframe>` com `loading="lazy"`
- Altura: `h-64 md:h-full` (mínimo 300px no desktop)
- Sem bordas arredondadas — estilo editorial
- Atributo `title="Mapa — Crema & Co. Café"` para acessibilidade

**Nota:** Gerar a URL do embed do Google Maps com o endereço correto:
```
https://maps.google.com/maps?q=Av.+Carbenet+Sauvignon,+15,+Caçapava,+SP&output=embed
```

---

## Resultado esperado ao final deste prompt

- [ ] `app/page.tsx` fazendo fetch server-side dos destaques
- [ ] Todas as 5 seções implementadas e responsivas
- [ ] Hero com overlay e tipografia de impacto
- [ ] MenuPreview renderizando os cards corretamente (ou mensagem de fallback)
- [ ] Seção de horários com fundo escuro e visual de impacto
- [ ] Seção de localização com iframe do mapa
- [ ] Sem erros de TypeScript
- [ ] Visual coerente com a identidade da Crema & Co. em todos os breakpoints
