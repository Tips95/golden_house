'use client'

import { motion } from 'framer-motion'

export default function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="heading-1 mb-6">Блог</h1>
          <p className="text-xl text-neutral-200">
            Полезные статьи о строительстве, ремонте и отделке. Советы экспертов, обзоры
            материалов и технологий.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
