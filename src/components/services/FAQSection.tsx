'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
}

export default function FAQSection({ faqs, title = 'Часто задаваемые вопросы' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-neutral-100" itemScope itemType="https://schema.org/FAQPage">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-accent-orange" />
          </div>
          <h2 className="heading-2 mb-4">{title}</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы наших клиентов
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary pr-8" itemProp="name">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-accent-orange flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p className="text-neutral-600 mt-4 leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-neutral-600 mb-6">
            Позвоните нам или оставьте заявку, и наш специалист ответит на все ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79281958885" className="btn-primary">
              Позвонить сейчас
            </a>
            <a
              href="https://wa.me/79281958885"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              Задать вопрос
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
