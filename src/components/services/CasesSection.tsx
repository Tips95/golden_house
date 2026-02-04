'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp } from 'lucide-react'

interface CaseStudy {
  title: string
  description: string
  image: string
  metrics: { label: string; value: string }[]
}

interface CasesSectionProps {
  cases: CaseStudy[]
}

export default function CasesSection({ cases }: CasesSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-accent-orange" />
          </div>
          <h2 className="heading-2 mb-4">Наши проекты</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Реальные кейсы выполненных работ с фотографиями и результатами
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-neutral-200">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-300 to-neutral-400">
                  <span className="text-neutral-600 font-semibold">Фото проекта</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{caseItem.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{caseItem.description}</p>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
                  {caseItem.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-accent-orange">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-600 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="/portfolio" className="btn-secondary text-lg px-10 py-4 inline-block">
            Смотреть все проекты
          </a>
        </motion.div>
      </div>
    </section>
  )
}
