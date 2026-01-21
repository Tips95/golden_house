import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tips95-golden-house-dccb.twc1.net'),
  title: {
    default: 'GoldenHouse Services - Строительная компания по СКФО и Москве | Механизированная штукатурка, вентфасады, вывески',
    template: '%s | GoldenHouse Services',
  },
  description:
    'Профессиональные строительные услуги по СКФО и Москве: механизированная штукатурка от 350 ₽/м², вентилируемые фасады, наружная реклама, безопасность и автоматика. Гарантия качества. Рассрочка без переплат для Чеченской Республики.',
  keywords: [
    'строительная компания СКФО',
    'строительная компания Москва',
    'строительная компания Грозный',
    'механизированная штукатурка СКФО',
    'вентилируемые фасады Москва',
    'вывески СКФО',
    'наружная реклама Москва',
    'видеонаблюдение СКФО',
  ],
  authors: [{ name: 'GoldenHouse Services' }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'GoldenHouse Services',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
