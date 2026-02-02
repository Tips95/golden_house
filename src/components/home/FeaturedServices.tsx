'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Brush, Mountain, Lightbulb, Shield } from 'lucide-react'

interface FeaturedService {
  id: string
  title: string
  description: string
  icon: typeof Brush
  price: string
  unit: string
  gradient: string
  shadowColor: string
  slug: string
  features: string[]
  image: string
  promo?: boolean
}

const featuredServices: FeaturedService[] = [
  {
    id: '1',
    title: 'Механизированная штукатурка',
    description: 'Высококачественная машинная штукатурка стен и потолков. Скорость работы в 4 раза быстрее ручной',
    icon: Brush,
    price: '350',
    unit: 'м²',
    gradient: 'from-blue-500 to-cyan-500',
    shadowColor: 'shadow-blue-500/30',
    slug: 'mekhanizirovannaya-shtukaturka',
    features: ['Идеально ровная поверхность', 'Быстрое выполнение', 'Гарантия качества'],
    image: '/images/services/plaster-hero.png',
    promo: true,
  },
  {
    id: '2',
    title: 'Вентилируемый фасад',
    description: 'Композитные панели, керамогранит, навесные системы. Долговечность более 50 лет',
    icon: Mountain,
    price: '1500',
    unit: 'м²',
    gradient: 'from-orange-500 to-red-500',
    shadowColor: 'shadow-orange-500/30',
    slug: 'fasadnye-raboty',
    features: ['Энергоэффективность', 'Современный дизайн', 'Защита от влаги'],
    image: '/images/services/security-hero.png',
    promo: false,
  },
  {
    id: '3',
    title: 'Рекламное агентство',
    description: 'Наружная реклама, светящиеся буквы, LED-экраны, подсветка лестниц и ниш',
    icon: Lightbulb,
    price: '70',
    unit: 'см',
    gradient: 'from-yellow-500 to-amber-500',
    shadowColor: 'shadow-yellow-500/30',
    slug: 'naruzhnaya-reklama',
    features: ['Яркие вывески', 'LED технологии', 'Индивидуальный дизайн'],
    image: '/images/services/outdoor-advertising.png',
    promo: false,
  },
  {
    id: '4',
    title: 'Безопасность и автоматика',
    description: 'Видеонаблюдение, домофоны, СКУД, автоматика для ворот и шлагбаумы',
    icon: Shield,
    price: 'по запросу',
    unit: '',
    gradient: 'from-purple-500 to-indigo-500',
    shadowColor: 'shadow-purple-500/30',
    slug: 'sistemy-bezopasnosti',
    features: ['Круглосуточная защита', 'Современное оборудование', 'Полная автоматизация'],
    image: '/images/services/facade-hero.png',
    promo: false,
  },
]

export default function FeaturedServices() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-accent-orange/10 to-accent-blue/10 rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-accent-orange/20"
          >
            <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
              Основные направления
            </span>
          </motion.div>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-3 sm:mb-4 lg:mb-6 text-center">
            <div className="bg-gradient-to-r from-accent-orange via-yellow-500 to-accent-orange bg-clip-text text-transparent animate-gradient">
              Golden House
            </div>
            <div className="bg-gradient-to-r from-accent-orange via-yellow-500 to-accent-orange bg-clip-text text-transparent animate-gradient">
              Services
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
            Выберите направление и получите профессиональное решение с гарантией качества
          </p>
        </motion.div>

        {/* Сетка основных услуг */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {featuredServices.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl`} />
                  
                  <div className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${service.promo ? 'ring-2 sm:ring-[3px] ring-accent-orange ring-offset-2 sm:ring-offset-3 shadow-xl shadow-accent-orange/25' : ''}`}>
                    {/* Бейдж «Акция» */}
                    {service.promo && (
                      <div className="absolute top-3 right-3 z-10 px-5 py-2.5 bg-gradient-to-r from-accent-orange to-orange-500 text-white text-base sm:text-lg font-bold uppercase tracking-widest rounded-xl shadow-xl shadow-accent-orange/50 ring-2 ring-white/90 animate-pulse">
                        Акция
                      </div>
                    )}
                    {/* Фото */}
                    {service.image ? (
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      // Если нет фото - показываем иконку
                      <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-2xl shadow-lg">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    )}
                    
                    {/* Текст под фото */}
                    <div className="p-4 sm:p-6 lg:p-8">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-primary mb-1 sm:mb-2 group-hover:text-accent-orange transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA блок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 lg:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30"
          >
            Смотреть все услуги
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <a
            href="https://wa.me/79281958885"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-lg"
          >
            Рассчитать стоимость
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
