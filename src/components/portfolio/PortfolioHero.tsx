'use client'

import { motion } from 'framer-motion'

export default function PortfolioHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="heading-1 mb-6">Наши проекты</h1>
          <p className="text-xl text-neutral-200">
            Более 500 завершённых объектов в Грозном и ЧР. Смотрите реальные фотографии работ
            и читайте отзывы клиентов.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
