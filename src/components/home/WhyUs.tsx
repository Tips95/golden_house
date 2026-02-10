'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Users, Clock, Award, TrendingUp, Headphones, CreditCard } from 'lucide-react'

const FEATURES = [
  {
    icon: Shield,
    title: 'Гарантия качества',
    description:
      'Официальный договор с гарантией на работы от 1 до 3 лет. При сервисном договоре — до 5 лет (работа + материал).',
  },
  {
    icon: Users,
    title: 'Свои бригады',
    description: 'Работаем без субподряда. Все мастера — в штате с опытом от 5 лет.',
  },
  {
    icon: Clock,
    title: 'Соблюдение сроков',
    description: 'Фиксируем даты в договоре. Гарантируем выполнение работ в срок.',
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
  {
    icon: CreditCard,
    title: 'Рассрочка',
    description: 'Рассрочка без переплат для клиентов из Чеченской Республики. Удобные условия оплаты.',
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
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-primary mb-3 sm:mb-4">Почему выбирают нас</h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
            Более 500 довольных клиентов доверили нам свои объекты
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-orange to-accent-blue rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

              <div className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg border-2 border-neutral-100 hover:border-accent-orange/30 transition-all h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-accent-orange/30 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-2 sm:mb-4 group-hover:text-accent-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Блок сервисной гарантии 5 лет с изображением */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 bg-neutral-50 rounded-2xl p-5 sm:p-6 lg:p-8 border border-accent-orange/20 shadow-md">
            <div className="w-full md:w-1/3 max-w-xs mx-auto">
              <Image
                src="/images/service-warranty-5-years.png"
                alt="Сервисная гарантия 5 лет: работа + материал"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-3">
                Сервисная гарантия до 5 лет по договору
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 mb-3 sm:mb-4 leading-relaxed">
                Стандартно мы даём гарантию на работы от 1 до 3 лет. Если вы заключаете сервисный договор, можно
                оформить расширенную гарантию до 5 лет на работу и материалы под ключ.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600">
                * Стоимость работ по сервисному договору выше на 20–30%, но включает материалы, расширенную гарантию и
                сопровождение на весь срок.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
