'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, Shield, Lightbulb, Brush, Mountain, Home, Flame, Building, DoorOpen, Crown, Zap } from 'lucide-react'
import { serviceCategories, getServicesByCategory } from '@/data/services'
import { formatPrice } from '@/lib/utils'

const iconMap = {
  Brush,
  Building2,
  Lightbulb,
  Mountain,
  Crown,
  Home,
  Flame,
  Building,
  DoorOpen,
  Zap,
  Shield,
}

const categoryIcons = {
  Building2,
  Shield,
  Lightbulb,
}

export default function ServicesByCategory() {
  return (
    <section id="services" className="section-padding bg-neutral-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-primary mb-3 sm:mb-4">Все наши услуги</h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto px-4">
            Полный спектр строительных и инженерных работ с фиксированными ценами
          </p>
        </motion.div>

        {/* Категории услуг */}
        <div className="space-y-12">
          {serviceCategories.map((category, catIndex) => {
            const CategoryIcon = categoryIcons[category.icon as keyof typeof categoryIcons] || Building2
            const categoryServices = getServicesByCategory(category.id as any)

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.2 }}
              >
                {/* Заголовок категории */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-accent-orange/30 flex-shrink-0">
                    <CategoryIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-primary truncate">{category.name}</h3>
                    <p className="text-neutral-600 text-xs sm:text-sm mt-1 line-clamp-1 sm:line-clamp-2">{category.description}</p>
                  </div>
                </div>

                {/* Услуги категории - компактный список */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {categoryServices.map((service, index) => {
                    const Icon = iconMap[service.icon as keyof typeof iconMap] || Brush

                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="block bg-white rounded-lg sm:rounded-xl p-3 sm:p-5 hover:shadow-lg transition-all duration-300 group border border-neutral-200 hover:border-accent-orange"
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            {/* Иконка */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>

                            {/* Контент */}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-light text-base sm:text-lg text-primary group-hover:text-accent-orange transition-colors mb-0.5 sm:mb-1 truncate">
                                {service.title}
                              </h4>
                              <div className="flex items-baseline gap-1 sm:gap-1.5">
                                {service.priceFrom ? (
                                  <>
                                    <span className="text-xs text-neutral-500">от</span>
                                    <span className="text-accent-orange font-semibold">
                                      {formatPrice(service.priceFrom)} ₽
                                    </span>
                                    <span className="text-xs text-neutral-500">/{service.priceUnit}</span>
                                  </>
                                ) : (
                                  <span className="text-sm text-neutral-600">
                                    Цена по запросу
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Стрелка */}
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 group-hover:text-accent-orange group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
