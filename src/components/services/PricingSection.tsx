'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface PricingItem {
  name: string
  price: number | null
  unit: string
  description?: string
}

interface PricingSectionProps {
  pricing: PricingItem[]
  title?: string
}

export default function PricingSection({ pricing, title = 'Прозрачные цены' }: PricingSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">{title}</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Фиксированная стоимость без скрытых платежей. Все материалы включены в цену
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-semibold">Наименование работ</th>
                <th className="px-6 py-4 text-right font-semibold">Цена</th>
                <th className="px-6 py-4 text-left font-semibold">Что входит</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div className="font-semibold text-primary">{item.name}</div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    {item.price ? (
                      <>
                        <div className="text-2xl font-bold text-accent-orange">
                          {formatPrice(item.price)}
                        </div>
                        <div className="text-sm text-neutral-600">за {item.unit}</div>
                      </>
                    ) : (
                      <div className="text-lg font-semibold text-primary">
                        по запросу
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-neutral-600">
                      {item.description || 'Материалы + работа'}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-accent-blue/10 to-accent-orange/10 rounded-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Что входит в стоимость:</h3>
              <ul className="space-y-2">
                {[
                  'Все материалы (смеси, крепёж, расходники)',
                  'Доставка материалов на объект',
                  'Работа бригады профессионалов',
                  'Вывоз строительного мусора',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Дополнительные услуги:</h3>
              <ul className="space-y-2">
                {[
                  'Срочное выполнение работ (+20%)',
                  'Работа в выходные и праздники (+15%)',
                  'Демонтаж старых покрытий (по отдельной смете)',
                  'Дизайн-проект и 3D-визуализация',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <button className="btn-primary text-lg px-10 py-4">
            Получить точный расчёт
          </button>
          <p className="text-sm text-neutral-600 mt-4">
            Выезд замерщика бесплатно. Смета в течение 2 часов.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
