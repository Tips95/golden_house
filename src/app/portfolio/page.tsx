import { Metadata } from 'next'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Портфолио проектов',
  description:
    'Наши завершённые проекты: механизированная штукатурка, вентфасады, вывески. Фотографии объектов и отзывы клиентов.',
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
    </>
  )
}
