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
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Наши услуги</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Полный спектр строительных работ с фиксированными ценами и гарантией качества
          </p>
        </motion.div>

        {/* Категории услуг */}
        <div className="space-y-20">
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
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-orange/30">
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-primary">{category.name}</h3>
                    <p className="text-neutral-600 mt-1">{category.description}</p>
                  </div>
                </div>

                {/* Услуги категории */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryServices.map((service, index) => {
                    const Icon = iconMap[service.icon as keyof typeof iconMap] || Brush

                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full group relative border border-neutral-100 hover:border-accent-orange/30"
                        >
                          <div className="p-8 relative">
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative">
                              <div className="w-18 h-18 bg-gradient-to-br from-accent-orange via-accent-orange to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-accent-orange/30">
                                <Icon className="w-9 h-9 text-white" />
                              </div>

                              <h3 className="text-xl font-extrabold text-primary mb-4 group-hover:text-accent-orange transition-colors leading-tight">
                                {service.title}
                              </h3>

                              <p className="text-neutral-600 mb-6 line-clamp-3 leading-relaxed text-sm">
                                {service.shortDescription}
                              </p>

                              <div className="flex items-baseline space-x-2 mb-6 p-4 bg-gradient-to-r from-accent-orange/10 to-transparent rounded-xl">
                                {service.priceFrom ? (
                                  <>
                                    <span className="text-sm text-neutral-600">от</span>
                                    <span className="text-3xl font-extrabold bg-gradient-to-r from-accent-orange to-yellow-500 bg-clip-text text-transparent">
                                      {formatPrice(service.priceFrom)}
                                    </span>
                                    <span className="text-neutral-600">/{service.priceUnit}</span>
                                  </>
                                ) : (
                                  <span className="text-lg font-extrabold text-primary">
                                    Цена по запросу
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center text-accent-orange font-bold group-hover:translate-x-2 transition-transform">
                                Подробнее <ArrowRight className="w-5 h-5 ml-2" />
                              </div>
                            </div>
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
