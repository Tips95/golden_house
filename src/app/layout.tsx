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
  title: {
    default: 'GoldenHouse Services - Строительная компания в Грозном | Механизированная штукатурка, вентфасады, вывески',
    template: '%s | GoldenHouse Services',
  },
  description:
    'Профессиональные строительные услуги в Грозном и ЧР: механизированная штукатурка от 350 ₽/м², вентилируемые фасады, наружная реклама, безопасность и автоматика. Гарантия качества.',
  keywords: [
    'строительная компания Грозный',
    'строительная компания ЧР',
    'механизированная штукатурка Грозный',
    'вентилируемые фасады Грозный',
    'вывески Грозный',
    'наружная реклама Грозный',
    'видеонаблюдение Грозный',
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
