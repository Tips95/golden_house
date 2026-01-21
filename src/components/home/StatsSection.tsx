'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '500+', label: 'Завершённых проектов' },
  { value: '4', label: 'Года на рынке' },
  { value: '98%', label: 'Довольных клиентов' },
  { value: '24/7', label: 'Поддержка клиентов' },
]

export default function StatsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-2 sm:mb-3 lg:mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-yellow-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-accent-orange to-yellow-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </div>
              <div className="text-neutral-700 font-semibold text-sm sm:text-base lg:text-lg px-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
