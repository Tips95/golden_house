export interface Brand {
  name: string
  image: string
  alt: string
}

export interface BrandsCategory {
  title: string
  brands: Brand[]
}

export const securityBrands: BrandsCategory[] = [
  {
    title: 'Видеонаблюдение',
    brands: [
      {
        name: 'HiWatch',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.02.jpeg',
        alt: 'HiWatch - системы видеонаблюдения',
      },
      {
        name: 'Hikvision',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.34.59.jpeg',
        alt: 'Hikvision - системы видеонаблюдения',
      },
      {
        name: 'Dahua',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.05.jpeg',
        alt: 'Dahua Technology - системы видеонаблюдения',
      },
      {
        name: 'Tantos',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.23.jpeg',
        alt: 'Tantos - системы видеонаблюдения',
      },
      {
        name: 'Reolink',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.08.jpeg',
        alt: 'Reolink - системы видеонаблюдения',
      },
      {
        name: 'Ezviz',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.17.jpeg',
        alt: 'Ezviz - системы видеонаблюдения',
      },
      {
        name: 'Axis',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.05.jpeg',
        alt: 'Axis Communications - системы видеонаблюдения',
      },
    ],
  },
  {
    title: 'Домофоны',
    brands: [
      {
        name: 'Atis',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.08.jpeg',
        alt: 'Atis - видеодомофоны',
      },
      {
        name: 'Hikvision',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.34.59.jpeg',
        alt: 'Hikvision - видеодомофоны',
      },
      {
        name: 'Eltis',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.17.jpeg',
        alt: 'Eltis - видеодомофоны',
      },
    ],
  },
  {
    title: 'Автоматика для ворот',
    brands: [
      {
        name: 'Alutech',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.02.jpeg',
        alt: 'Alutech - автоматика для ворот',
      },
      {
        name: 'DoorHan',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.23.jpeg',
        alt: 'DoorHan - автоматика для ворот',
      },
    ],
  },
  {
    title: 'СКУД',
    brands: [
      {
        name: 'Smartec',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.34.59.jpeg',
        alt: 'Smartec - системы контроля доступа',
      },
      {
        name: 'Parsec',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.02.jpeg',
        alt: 'Parsec - системы контроля доступа',
      },
      {
        name: 'Sigur',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.05.jpeg',
        alt: 'Sigur - системы контроля доступа',
      },
      {
        name: 'RusGuard',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.08.jpeg',
        alt: 'RusGuard - системы контроля доступа',
      },
      {
        name: 'Bolid',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.17.jpeg',
        alt: 'Bolid - системы контроля доступа',
      },
    ],
  },
  {
    title: 'Шлагбаумы',
    brands: [
      {
        name: 'Nice',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.23.jpeg',
        alt: 'Nice - автоматические шлагбаумы',
      },
      {
        name: 'FAAC',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.34.59.jpeg',
        alt: 'FAAC - автоматические шлагбаумы',
      },
      {
        name: 'Came',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.02.jpeg',
        alt: 'Came - автоматические шлагбаумы',
      },
      {
        name: 'BFT',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.05.jpeg',
        alt: 'BFT - автоматические шлагбаумы',
      },
      {
        name: 'DoorHan',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.23.jpeg',
        alt: 'DoorHan - автоматические шлагбаумы',
      },
    ],
  },
]
