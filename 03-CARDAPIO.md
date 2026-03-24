# Prompt 03 — Página de Cardápio

> **Contexto:** Prompts 01 e 02 já implementados.
> Design system, componentes base e homepage funcionando.
> Este prompt implementa a página `/cardapio` completa.

---

## Objetivo

Implementar a página de cardápio completo com:

1. Header da página com visual próprio
2. Tabs de filtro por categoria (client component)
3. Grid de cards do cardápio
4. Arquivo `data/menu.json` como fonte de dados
5. `lib/menu.ts` com funções utilitárias de leitura e filtragem

---

## `data/menu.json`

Fonte de dados estática do cardápio. Para atualizar o menu, editar este arquivo
e fazer deploy — nenhuma configuração de banco necessária.

Os itens abaixo são os identificados nos prints do Instagram da Crema & Co.
Quando Lucas enviar o cardápio completo, completar os campos faltantes e
adicionar os itens de doces/outros.

```json
[
  {
    "id": "espresso",
    "name": "Espresso",
    "description": "Espresso 30ml",
    "price": 7.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 10
  },
  {
    "id": "espresso-duplo",
    "name": "Espresso Duplo",
    "description": "Espresso 60ml",
    "price": 11.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 20
  },
  {
    "id": "macchiato",
    "name": "Macchiato",
    "description": "Espresso com \"manchinha\" de leite vaporizado",
    "price": 9.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 30
  },
  {
    "id": "macchiato-duplo",
    "name": "Macchiato Duplo",
    "description": "Espresso duplo com \"manchinha\" de leite vaporizado",
    "price": 13.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 40
  },
  {
    "id": "mocha",
    "name": "Mocha",
    "description": "Espresso com chocolate ao leite e leite vaporizado",
    "price": 15.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 50
  },
  {
    "id": "latte",
    "name": "Latte",
    "description": "Espresso com leite vaporizado",
    "price": 12.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 60
  },
  {
    "id": "latte-vanilla",
    "name": "Latte Vanilla",
    "description": "Espresso com leite vaporizado e xarope de baunilha",
    "price": 14.00,
    "category": "quente",
    "image_url": null,
    "highlight": true,
    "position": 70
  },
  {
    "id": "cappuccino",
    "name": "Cappuccino",
    "description": "Espresso com leite vaporizado, cacau em pó 50% e canela",
    "price": 14.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 80
  },
  {
    "id": "chocolate-quente",
    "name": "Chocolate Quente",
    "description": "Leite vaporizado com cacau em pó 50%",
    "price": 15.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 90
  },
  {
    "id": "cha",
    "name": "Chá",
    "description": "Marca Twinings. Consultar sabores disponíveis.",
    "price": 11.00,
    "category": "quente",
    "image_url": null,
    "highlight": false,
    "position": 100
  },
  {
    "id": "iced-crema",
    "name": "Iced Crema",
    "description": "Nossa assinatura: espresso, leite, gelo, xarope de vanilla e calda natural de frutas vermelhas. 400ml",
    "price": 18.00,
    "category": "gelado",
    "image_url": null,
    "highlight": true,
    "position": 10
  },
  {
    "id": "iced-latte",
    "name": "Iced Latte",
    "description": "Espresso com leite e gelo. 400ml",
    "price": 15.00,
    "category": "gelado",
    "image_url": null,
    "highlight": true,
    "position": 20
  },
  {
    "id": "iced-latte-vanilla",
    "name": "Iced Latte Vanilla",
    "description": "Espresso com leite, xarope 1883 de baunilha e gelo. 400ml",
    "price": 16.00,
    "category": "gelado",
    "image_url": null,
    "highlight": true,
    "position": 30
  },
  {
    "id": "iced-latte-caramelo",
    "name": "Iced Latte Caramelo",
    "description": "Espresso com leite, xarope 1883 de caramelo e gelo. 400ml",
    "price": 16.00,
    "category": "gelado",
    "image_url": null,
    "highlight": true,
    "position": 40
  },
  {
    "id": "orange-coffee",
    "name": "Orange Coffee",
    "description": "Espresso com suco integral de laranja, rodela de limão e gelo. 400ml",
    "price": 15.00,
    "category": "gelado",
    "image_url": null,
    "highlight": true,
    "position": 50
  }
]
```

> **Cardápio completo.** O arquivo `data/menu.json` já contém todos os itens
> nas categorias: `quente`, `gelado`, `bebida`, `salgado` e `doce`.

---

## `lib/menu.ts`

Funções utilitárias para ler e filtrar os dados do `menu.json`.
Como é um import estático, o Next.js inclui o JSON no bundle de build —
sem chamadas de rede, sem latência.

```ts
import menuData from '@/data/menu.json'
import type { MenuItem, Category } from '@/types'

const allItems = menuData as MenuItem[]

export function getAllMenuItems(): MenuItem[] {
  return allItems.sort((a, b) => a.position - b.position)
}

export function getMenuItemsByCategory(category: Category): MenuItem[] {
  return allItems
    .filter((item) => item.category === category)
    .sort((a, b) => a.position - b.position)
}

export function getHighlightedItems(limit = 6): MenuItem[] {
  return allItems
    .filter((item) => item.highlight)
    .sort((a, b) => a.position - b.position)
    .slice(0, limit)
}
```

---

## `app/cardapio/page.tsx`

Server Component. Lê todos os itens do `menu.json` via `lib/menu.ts` em
tempo de build — sem chamadas de rede, sem dependências externas.

```tsx
import { Metadata } from 'next'
import { getAllMenuItems } from '@/lib/menu'
import { CardapioHero } from '@/components/sections/CardapioHero'
import { MenuPageClient } from '@/components/sections/MenuPageClient'

export const metadata: Metadata = {
  title: 'Cardápio',
  description:
    'Conheça nosso cardápio completo: espressos, iced lattes, orange coffee, doces e muito mais.',
}

export default function CardapioPage() {
  const items = getAllMenuItems()

  return (
    <main>
      <CardapioHero />
      <MenuPageClient initialItems={items} />
    </main>
  )
}
```

---

## `components/sections/CardapioHero.tsx`

Header da página de cardápio. Mais compacto que o hero da homepage.

**Visual:**
- Fundo `brand-espresso`
- Altura: `py-24 md:py-32`
- Conteúdo centralizado

**Conteúdo:**
```
[eyebrow em gold] O que preparamos para você

[título em cream, script + serif]
  Nosso
  CARDÁPIO

[linha dourada]

[texto body light em stone]
  Feito com cuidado, servido com afeto.
```

---

## `components/sections/MenuPageClient.tsx`

`'use client'` — gerencia o estado de categoria selecionada e renderiza
o grid filtrado.

**Props:** `initialItems: MenuItem[]`

**Estado:**
```ts
const [activeCategory, setActiveCategory] = useState<Category | 'todos'>('todos')
```

**Filtragem:** feita no cliente sobre `initialItems` (sem chamada extra à API).
Usar `useMemo` para evitar recomputação desnecessária.

**Estrutura do componente:**
```
[CategoryTabs]           ← tabs de categoria
[Grid de MenuCard]       ← cards filtrados
[estado vazio]           ← se nenhum item na categoria
```

**Layout do grid:**
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3 colunas
- `gap-px bg-brand-linen` no container → cria separadores de 1px entre cards

---

## `components/ui/CategoryTabs.tsx`

`'use client'`

**Props:**
```ts
interface CategoryTabsProps {
  active: Category | 'todos'
  onChange: (cat: Category | 'todos') => void
}
```

**Categorias:**
```ts
const CATEGORIES = [
  { value: 'todos',   label: 'Todos'    },
  { value: 'quente',  label: 'Quentes'  },
  { value: 'gelado',  label: 'Gelados'  },
  { value: 'salgado', label: 'Salgados' },
  { value: 'doce',    label: 'Doces'    },
  { value: 'bebida',  label: 'Bebidas'  },
]
```

**Visual:**
- Container: `flex gap-1 p-1 bg-brand-linen rounded-none overflow-x-auto`
- Tab inativa: `font-body text-xs tracking-widest uppercase px-4 py-2 text-brand-stone transition-colors`
- Tab ativa: `bg-brand-espresso text-brand-cream`
- Sem arredondamento — estilo editorial reto
- `role="tablist"` e `aria-selected` em cada tab

---

## `components/ui/MenuCard.tsx` — versão completa

Reutilizado da homepage, mas com comportamento expandido na página de cardápio.

**Props:** `item: MenuItem`, `variant?: 'compact' | 'full'`

**Variant `full` (padrão na página de cardápio):**
- Imagem: `aspect-square md:aspect-4/3`, `object-cover`
- Badge de categoria: canto superior da imagem
- Nome: `font-display text-lg md:text-xl`
- Descrição: `font-body text-sm font-light text-brand-stone line-clamp-2`
- Preço: `font-display text-xl text-brand-copper`
- Adicional de leite vegetal exibido como nota se aplicável

**Acessibilidade:**
- `<article>` como elemento raiz
- `aria-label={item.name}` no artigo

---

## Adicional de leite vegetal

Exibir aviso padronizado no rodapé da seção de bebidas:

```tsx
<p className="font-body text-xs text-brand-stone text-center mt-8 tracking-wide">
  Adicional de leite vegetal: R$ 2,00 (quentes) · R$ 4,00 (gelados)
</p>
```

---

## Resultado esperado ao final deste prompt

- [ ] `data/menu.json` criado com todos os itens disponíveis
- [ ] `lib/menu.ts` com as três funções utilitárias
- [ ] `/cardapio` exibindo todos os itens agrupáveis por categoria
- [ ] Tabs de categoria funcionando com filtragem client-side
- [ ] Cards responsivos em 1/2/3 colunas
- [ ] Aviso de adicional de leite vegetal visível
- [ ] Metadata da página configurada
- [ ] Sem erros de TypeScript (`npx tsc --noEmit` passa)
