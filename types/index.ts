export type Category = 'quente' | 'gelado' | 'salgado' | 'doce' | 'bebida'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: Category
  image_url: string | null
  available?: boolean
  highlight: boolean
  position: number
}

export interface HoursEntry {
  days: string
  open: string
  close: string
}
