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
