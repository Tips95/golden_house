import { PORTFOLIO_SLUG_TO_FOLDER } from './portfolio-folders'
import { portfolioByFolder } from './portfolio-generated'

export interface PortfolioImageItem {
  image: string
  title?: string
  description?: string
}

/** Дополнительные папки с фото для slug (объединяются с основной папкой) */
const EXTRA_FOLDERS: Record<string, string[]> = {
  'avtomatika-vorot': ['shlagbaumy', 'skud'], // Шлагбаумы и СКУД: avtomatika + shlagbaumy + skud
  'naruzhnaya-reklama': ['led-ekrany'], // Наружная реклама: добавляем LED-экраны
}

/** Кастомный порядок фото по папкам (первые элементы идут в заданной последовательности) */
const CUSTOM_ORDER_BY_FOLDER: Record<string, string[]> = {
  facade: [
    '/images/portfolio/facade/photo_1.jpg',
    '/images/portfolio/facade/photo_2.jpg',
    '/images/portfolio/facade/photo_3.jpg',
    '/images/portfolio/facade/photo_4.jpg',
    '/images/portfolio/facade/photo_5.jpg',
  ],
}

/** Не показывать промо-карточки в блоке «Фото работ» (они уже есть на карточке направления) */
function isPromoCard(path: string): boolean {
  // Любые файлы с `promo` в названии (например, *-promo.png, *-promo-2.png)
  return path.toLowerCase().includes('promo')
}

/**
 * Возвращает массив фото портфолио для услуги по slug.
 * Фото берутся из папки public/images/portfolio/<папка>/ после запуска npm run portfolio:sync
 */
function applyCustomOrder(paths: string[], folder: string): string[] {
  const order = CUSTOM_ORDER_BY_FOLDER[folder]
  if (!order) return paths
  const set = new Set(order)
  const ordered: string[] = []
  for (const p of order) {
    if (paths.includes(p)) {
      ordered.push(p)
    }
  }
  for (const p of paths) {
    if (!set.has(p)) ordered.push(p)
  }
  return ordered
}

export function getPortfolioImages(serviceSlug: string): PortfolioImageItem[] {
  const folder = PORTFOLIO_SLUG_TO_FOLDER[serviceSlug]
  const allPaths: string[] = []
  if (folder && portfolioByFolder[folder]?.length) {
    let paths = portfolioByFolder[folder].filter(p => !isPromoCard(p))
    paths = applyCustomOrder(paths, folder)
    allPaths.push(...paths)
  }
  const extra = EXTRA_FOLDERS[serviceSlug]
  if (extra) {
    for (const f of extra) {
      if (portfolioByFolder[f]?.length) {
        allPaths.push(...portfolioByFolder[f].filter(p => !isPromoCard(p)))
      }
    }
  }
  if (allPaths.length === 0) return []
  return allPaths.map(image => ({ image }))
}
