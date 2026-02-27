/**
 * Соответствие slug услуги и папки с фото портфолио.
 * Кладёте 10–12 фото в public/images/portfolio/<папка>/ и запускаете npm run portfolio:sync
 */
export const PORTFOLIO_SLUG_TO_FOLDER: Record<string, string> = {
  'mekhanizirovannaya-shtukaturka': 'plaster',
  'fasadnye-raboty': 'facade',
  'remont-kvartir': 'remont',
  'stroitelstvo-domov': 'doma',
  'otoplenie-vodosnabzhenie': 'otoplenie',
  'okna-dveri-vitrazhi': 'okna',
  'gipsovye-izdeliya': 'gips',
  'podsvetka-lestnits-nish': 'podsvetka',
  'videonablyudenie': 'videonablyudenie',
  'domofony': 'domofony',
  'avtomatika-vorot': 'avtomatika',
  'naruzhnaya-reklama': 'reklama',
  'venetsianskaya-dekorativnaya-shtukaturka': 'venetsianka',
  'uteplenie-penopoliuretanom-ppu': 'ppu',
  'polusuhaya-styazhka': 'styazhka',
  'ukladka-laminata': 'laminat',
  'ukladka-plitki': 'plitka',
  'krovelnye-raboty': 'krovlya',
  'pokraska-sten': 'pokraska',
  'almaznoe-burenie-rezka': 'diamond',
  'sekcionnye-zabory-zhalyuzi': 'zabory',
  'elektrika': 'elektrika',
  'derevyannye-lestnitsy': 'lestnitsy',
  'garazhnye-vorota': 'garazhnye',
}
