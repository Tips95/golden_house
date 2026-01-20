'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brush, Mountain, Lightbulb, Shield } from 'lucide-react'

const featuredServices = [
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-orange/10 to-accent-blue/10 rounded-full mb-6 backdrop-blur-sm border border-accent-orange/20"
          >
            <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">
              Основные направления
            </span>
          </motion.div>
          
          <h2 className="heading-2 mb-6">
            Топ-4 услуги{' '}
            <span className="bg-gradient-to-r from-accent-orange via-yellow-500 to-accent-orange bg-clip-text text-transparent animate-gradient">
              GoldenHouse Services
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Выберите направление и получите профессиональное решение с гарантией качества
          </p>
        </motion.div>

        {/* Сетка основных услуг */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
                  className="block relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`} />
                  
                  <div className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl ${service.shadowColor} hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-neutral-200 overflow-hidden`}>
                    {/* Градиентный фон при ховере */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Иконка */}
                      <div className={`inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${service.gradient} rounded-2xl lg:rounded-3xl shadow-lg ${service.shadowColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-6`}>
                        <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                      </div>

                      {/* Заголовок */}
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-primary mb-4 group-hover:text-accent-orange transition-colors leading-tight">
                        {service.title}
                      </h3>

                      {/* Описание */}
                      <p className="text-neutral-600 mb-6 leading-relaxed text-base lg:text-lg">
                        {service.description}
                      </p>

                      {/* Преимущества */}
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`} />
                            <span className="text-sm text-neutral-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Цена и CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                        <div className="flex items-baseline gap-2">
                          {service.price !== 'по запросу' ? (
                            <>
                              <span className="text-sm text-neutral-500">от</span>
                              <span className={`text-3xl lg:text-4xl font-extrabold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                {service.price} ₽
                              </span>
                              {service.unit && (
                                <span className="text-neutral-500">/{service.unit}</span>
                              )}
                            </>
                          ) : (
                            <span className={`text-xl lg:text-2xl font-extrabold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                              Цена по запросу
                            </span>
                          )}
                        </div>

                        <div className="flex items-center text-accent-orange font-bold group-hover:translate-x-2 transition-transform text-sm lg:text-base">
                          Узнать больше
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </div>
                      </div>
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
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30"
          >
            Смотреть все услуги
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
