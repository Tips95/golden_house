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

/** Для каких папок какое фото показывать первым (путь вида /images/portfolio/...) */
const FIRST_IMAGE_BY_FOLDER: Record<string, string> = {
  facade: '/images/portfolio/facade/dagestan-stone-2.png',
}

/** Не показывать промо-карточки в блоке «Фото работ» (они уже есть на карточке направления) */
function isPromoCard(path: string): boolean {
  return path.includes('-promo.')
}

/**
 * Возвращает массив фото портфолио для услуги по slug.
 * Фото берутся из папки public/images/portfolio/<папка>/ после запуска npm run portfolio:sync
 */
function putFirst(paths: string[], firstPath: string): string[] {
  const i = paths.indexOf(firstPath)
  if (i <= 0) return paths
  return [firstPath, ...paths.slice(0, i), ...paths.slice(i + 1)]
}

export function getPortfolioImages(serviceSlug: string): PortfolioImageItem[] {
  const folder = PORTFOLIO_SLUG_TO_FOLDER[serviceSlug]
  const allPaths: string[] = []
  if (folder && portfolioByFolder[folder]?.length) {
    let paths = portfolioByFolder[folder].filter(p => !isPromoCard(p))
    const first = FIRST_IMAGE_BY_FOLDER[folder]
    if (first && paths.includes(first)) paths = putFirst(paths, first)
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
