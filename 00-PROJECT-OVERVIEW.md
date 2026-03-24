# Crema & Co. Café — Site Institucional

## Visão geral

Site institucional e vitrine digital para a **Crema & Co. Café**, localizada em Caçapava–SP.
O objetivo é apresentar a identidade sofisticada da marca, exibir o cardápio, informar
horários e localização, e facilitar o contato via WhatsApp.

---

## Stack

| Tecnologia     | Uso                                      |
|----------------|------------------------------------------|
| Next.js 14+    | Framework principal — App Router         |
| TypeScript     | Tipagem estrita em todo o projeto        |
| Tailwind CSS   | Estilização utility-first, mobile-first  |
| JSON estático  | Fonte de dados do cardápio               |
| Vercel         | Deploy e CDN                             |

---

## Estrutura de pastas

```
app/
  page.tsx                  ← Homepage (Server Component)
  layout.tsx                ← Layout raiz com fontes e metadata
  globals.css               ← Reset + variáveis CSS da marca
  loading.tsx               ← Skeleton global
  cardapio/
    page.tsx                ← Página de cardápio completo

components/
  layout/
    Header.tsx              ← Navegação + logo
    Footer.tsx              ← Endereço, redes, créditos
  sections/
    Hero.tsx                ← Seção principal acima da dobra
    About.tsx               ← Seção "Nossa história"
    MenuPreview.tsx         ← Destaques do cardápio (homepage)
    Hours.tsx               ← Horários de funcionamento
    Location.tsx            ← Endereço + mapa embed
    WhatsappCTA.tsx         ← Botão fixo e seção de contato
  ui/
    MenuCard.tsx            ← Card de item do cardápio
    CategoryTabs.tsx        ← Tabs de categoria (client)
    ImageWithBlur.tsx       ← next/image com blur placeholder
    SectionTitle.tsx        ← Título de seção com script + serif

data/
  menu.json                 ← Cardápio completo — editar aqui para atualizar

lib/
  menu.ts                   ← Funções para ler e filtrar o menu.json
  utils.ts                  ← cn(), formatPrice()

types/
  index.ts                  ← MenuItem, Category, HoursEntry
```

---

## Páginas e rotas

| Rota          | Descrição                                              |
|---------------|--------------------------------------------------------|
| `/`           | Homepage com hero, sobre, preview do cardápio, horários e localização |
| `/cardapio`   | Cardápio completo com filtros por categoria            |

---

## Módulos de desenvolvimento

O desenvolvimento está dividido em 4 prompts sequenciais:

| Arquivo                        | Módulo                                    |
|--------------------------------|-------------------------------------------|
| `01-DESIGN-SYSTEM.md`          | Tokens, fontes, cores e componentes base  |
| `02-HOMEPAGE.md`               | Todas as seções da homepage               |
| `03-CARDAPIO.md`               | Página de cardápio + dados do menu.json   |
| `04-DEPLOY-CONFIG.md`          | Configuração final, SEO e deploy          |

---

## Variáveis de ambiente

```bash
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=   # ex: 5518999999999
NEXT_PUBLIC_SITE_URL=          # ex: https://cremacafe.com.br
```

---

## Fonte de dados do cardápio

Os itens do cardápio ficam em **`data/menu.json`** — um array de objetos
`MenuItem`. Para atualizar preços, adicionar ou remover itens, basta editar
esse arquivo e fazer novo deploy (ou push para a Vercel, que redeploy automático).

```jsonc
// Estrutura de cada item em data/menu.json
{
  "id": "string",          // slug único, ex: "iced-latte"
  "name": "string",        // Nome de exibição
  "description": "string", // Descrição curta
  "price": 15.00,          // Número decimal
  "category": "gelado",    // "quente" | "gelado" | "salgado" | "doce" | "bebida"
  "image_url": null,       // Caminho local "/images/menu/..." ou null
  "highlight": true,       // Aparece na homepage
  "position": 20           // Ordem de exibição dentro da categoria
}
```

---

## Identidade visual (referência rápida)

> Detalhamento completo em `01-DESIGN-SYSTEM.md`

- **Cores primárias:** `#1A120A` (café escuro), `#7A4A1E` (cobre), `#C9A96E` (dourado)
- **Cores de fundo:** `#F5ECD7` (creme), `#EDE8DC` (bege), `#FFFFFF` (branco)
- **Tipografia display:** script caligrafia (ex: Playfair Display italic)
- **Tipografia títulos:** serif bold espaçado (ex: Cormorant Garamond)
- **Tipografia corpo:** sans-serif light (ex: Montserrat 300/400)
- **Tom:** sofisticado, acolhedor, pausado — sem excessos visuais
