'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Clock, Award, TrendingUp, Headphones } from 'lucide-react'

const FEATURES = [
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Официальный договор с гарантией на работы от 1 до 3 лет. Страхование объектов.',
  },
  {
    icon: Users,
    title: 'Свои бригады',
    description: 'Работаем без субподряда. Все мастера — в штате с опытом от 5 лет.',
  },
  {
    icon: Clock,
    title: 'Соблюдение сроков',
    description: 'Фиксируем даты в договоре. За каждый день просрочки — компенсация 1% от суммы.',
  },
  {
    icon: Award,
    title: 'Сертификаты',
    description: 'Работаем с проверенными материалами: Knauf, Rockwool, Технониколь.',
  },
  {
    icon: TrendingUp,
    title: 'Прозрачная смета',
    description: 'Детальный расчёт с ценами за материалы и работу. Без скрытых доплат.',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Личный менеджер на связи. Контроль качества на каждом этапе.',
  },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="heading-2 mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Более 500 довольных клиентов доверили нам свои объекты
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-orange to-accent-blue rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-neutral-100 hover:border-accent-orange/30 transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-accent-orange/30 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-extrabold text-primary mb-4 group-hover:text-accent-orange transition-colors">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
