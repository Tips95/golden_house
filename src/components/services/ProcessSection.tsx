'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle } from 'lucide-react'

interface ProcessStep {
  title: string
  description: string
  duration: string
}

interface ProcessSectionProps {
  steps: ProcessStep[]
  title?: string
}

export default function ProcessSection({ steps, title = 'Как мы работаем' }: ProcessSectionProps) {
  return (
    <section className="section-padding bg-neutral-100">
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
            Прозрачный процесс работы с контролем на каждом этапе
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-accent-orange/30 z-0" />
              )}

              <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow z-10">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-accent-orange/80 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="flex items-center space-x-2 text-accent-orange">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">{step.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Гарантируем результат
              </h3>
              <p className="text-neutral-600">
                Работаем по договору с фиксацией сроков. Гарантия на все виды работ от 1 до 3 лет.
              </p>
            </div>
            <a
              href="https://wa.me/79281958885"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap inline-block"
            >
              Обсудить проект
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
