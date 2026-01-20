'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Механизированная или ручная штукатурка: что выбрать в 2024 году',
    excerpt:
      'Сравниваем технологии, рассчитываем стоимость и сроки. Узнайте, когда машинная штукатурка экономит до 40% бюджета.',
    category: 'Штукатурка',
    date: '15 января 2024',
    readTime: '5 мин',
    slug: 'mekhanizirovannaya-vs-ruchnaya-shtukaturka',
  },
  {
    id: 2,
    title: 'Топ-5 ошибок при монтаже вентилируемых фасадов',
    excerpt:
      'Разбираем типичные просчёты, которые приводят к промерзанию стен и отслоению облицовки. Как их избежать?',
    category: 'Фасады',
    date: '10 января 2024',
    readTime: '7 мин',
    slug: 'oshibki-montazha-ventfasadov',
  },
  {
    id: 3,
    title: 'Как согласовать вывеску в Москве: пошаговая инструкция 2024',
    excerpt:
      'Актуальный регламент согласования наружной рекламы. Какие документы нужны и сколько это стоит.',
    category: 'Вывески',
    date: '5 января 2024',
    readTime: '6 мин',
    slug: 'soglasovanie-vyveski-v-moskve',
  },
  {
    id: 4,
    title: 'Керамогранит vs алюкобонд: что лучше для фасада офиса',
    excerpt:
      'Сравниваем материалы по цене, долговечности и внешнему виду. Считаем TCO на 20 лет эксплуатации.',
    category: 'Фасады',
    date: '28 декабря 2023',
    readTime: '8 мин',
    slug: 'keramogranit-vs-alukobond',
  },
  {
    id: 5,
    title: 'LED vs неон: какую подсветку выбрать для вывески',
    excerpt:
      'Разбираем плюсы и минусы LED-модулей и гибкого неона. Сравниваем срок службы и энергопотребление.',
    category: 'Вывески',
    date: '20 декабря 2023',
    readTime: '4 мин',
    slug: 'led-vs-neon-podsvetka',
  },
  {
    id: 6,
    title: 'Как подготовить квартиру к машинной штукатурке',
    excerpt:
      'Чек-лист из 10 пунктов: от защиты пола до отключения электричества. Что сделать до приезда бригады.',
    category: 'Штукатурка',
    date: '15 декабря 2023',
    readTime: '5 мин',
    slug: 'podgotovka-k-mashinnoy-shtukaturke',
  },
]

export default function BlogList() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-accent-orange bg-accent-orange/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 hover:text-accent-orange transition-colors cursor-pointer">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <div className="flex items-center text-sm text-neutral-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-accent-orange font-semibold hover:translate-x-1 transition-transform"
                  >
                    Читать <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
