'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brush, Mountain, Lightbulb, Shield, Building2, Home, Flame } from 'lucide-react'
import { serviceCategories } from '@/data/services'

const MAIN_SERVICES = [
  {
    id: '1',
    title: 'Механизированная штукатурка',
    description: 'Высококачественная машинная штукатурка стен и потолков',
    icon: Brush,
    price: 'от 350 ₽/м²',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: '2',
    title: 'Вентилируемые фасады',
    description: 'Керамогранит, композит, дагестанский камень',
    icon: Mountain,
    price: 'от 750 ₽/м²',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: '3',
    title: 'Наружная реклама',
    description: 'Светящиеся буквы, LED-экраны, подсветка',
    icon: Lightbulb,
    price: 'от 70 ₽/см',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    id: '4',
    title: 'Системы безопасности',
    description: 'Видеонаблюдение, домофоны, СКУД, автоматика',
    icon: Shield,
    price: 'по запросу',
    gradient: 'from-purple-500 to-indigo-500',
  },
]

const ADVANTAGES = [
  {
    icon: Building2,
    title: 'Собственные бригады',
    description: 'Работаем без субподряда. Все мастера в штате',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Официальный договор с гарантией от 1 до 3 лет',
  },
  {
    icon: Home,
    title: '500+ проектов',
    description: 'Более 500 завершённых проектов с 2021 года',
  },
  {
    icon: Flame,
    title: 'Фиксированная смета',
    description: 'Цена не изменится в процессе работы',
  },
]

export default function ServicesCover({ 
  onPrev,
  isActive = true 
}: { 
  onPrev?: () => void
  isActive?: boolean
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-orange/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-32">
        {/* Header */}
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
            <span className="text-sm font-light text-primary uppercase tracking-wider">
              Наши направления
            </span>
          </motion.div>

          <h2 className="heading-2 mb-6">
            Чем занимается{' '}
            <span className="bg-gradient-to-r from-accent-orange via-yellow-500 to-accent-orange bg-clip-text text-transparent animate-gradient">
              GoldenHouse Services
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Комплексные строительные услуги под ключ с гарантией качества
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {MAIN_SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 blur-xl`} />
                
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-neutral-200">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-primary mb-3 group-hover:text-accent-orange transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <span className={`text-2xl font-light bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                    <ArrowRight className="w-5 h-5 text-accent-orange group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="heading-3 text-center mb-12">Наши преимущества</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ADVANTAGES.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-orange to-accent-blue rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                  
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border-2 border-neutral-100 hover:border-accent-orange/30 transition-all h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-accent-orange/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h4 className="text-lg font-light text-primary mb-2 group-hover:text-accent-orange transition-colors">
                      {advantage.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl font-light text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/30"
          >
            Смотреть все услуги
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => {
              if (index === 0) onPrev?.()
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === 1
                ? 'bg-accent-orange w-8'
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
