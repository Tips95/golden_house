import { Metadata } from 'next'
import BlogHero from '@/components/blog/BlogHero'
import BlogList from '@/components/blog/BlogList'

export const metadata: Metadata = {
  title: 'Блог о строительстве',
  description:
    'Полезные статьи о механизированной штукатурке, вентфасадах, наружной рекламе. Советы экспертов и кейсы.',
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
    </>
  )
}
