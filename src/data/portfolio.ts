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
}

/**
 * Возвращает массив фото портфолио для услуги по slug.
 * Фото берутся из папки public/images/portfolio/<папка>/ после запуска npm run portfolio:sync
 */
export function getPortfolioImages(serviceSlug: string): PortfolioImageItem[] {
  const folder = PORTFOLIO_SLUG_TO_FOLDER[serviceSlug]
  const allPaths: string[] = []
  if (folder && portfolioByFolder[folder]?.length) {
    allPaths.push(...portfolioByFolder[folder])
  }
  const extra = EXTRA_FOLDERS[serviceSlug]
  if (extra) {
    for (const f of extra) {
      if (portfolioByFolder[f]?.length) allPaths.push(...portfolioByFolder[f])
    }
  }
  if (allPaths.length === 0) return []
  return allPaths.map(image => ({ image }))
}
