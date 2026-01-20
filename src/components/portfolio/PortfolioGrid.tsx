'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

const CATEGORIES = ['Все проекты', 'Штукатурка', 'Фасады', 'Вывески']

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'ЖК "Скандинавия" - 180 м²',
    category: 'Штукатурка',
    location: 'Москва, ул. Новая',
    date: 'Декабрь 2023',
    description: 'Механизированная штукатурка трёхкомнатной квартиры',
    image: '/images/portfolio/1.jpg',
  },
  {
    id: 2,
    title: 'Офисное здание "Технопарк"',
    category: 'Фасады',
    location: 'Московская обл., Одинцово',
    date: 'Октябрь 2023',
    description: 'Вентилируемый фасад с керамогранитом, 850 м²',
    image: '/images/portfolio/2.jpg',
  },
  {
    id: 3,
    title: 'Кафе "Вкусно и точка"',
    category: 'Вывески',
    location: 'Москва, ТЦ "Европейский"',
    date: 'Сентябрь 2023',
    description: 'Объёмные буквы с контражуром, 15 букв',
    image: '/images/portfolio/3.jpg',
  },
  {
    id: 4,
    title: 'Загородный дом, 250 м²',
    category: 'Штукатурка',
    location: 'Новая Рига',
    date: 'Август 2023',
    description: 'Штукатурка и финишная отделка коттеджа',
    image: '/images/portfolio/4.jpg',
  },
  {
    id: 5,
    title: 'Автосалон "Премиум Авто"',
    category: 'Вывески',
    location: 'Москва, Ленинградское шоссе',
    date: 'Июль 2023',
    description: 'Световой короб 6x2 м + объёмные буквы',
    image: '/images/portfolio/5.jpg',
  },
  {
    id: 6,
    title: 'Жилой комплекс "Новые горизонты"',
    category: 'Фасады',
    location: 'Подмосковье',
    date: 'Июнь 2023',
    description: 'Фасад с фиброцементными панелями, 1200 м²',
    image: '/images/portfolio/6.jpg',
  },
]

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('Все проекты')

  const filteredItems =
    activeCategory === 'Все проекты'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory)

  return (
    <section className="section-padding bg-neutral-100">
      <div className="container-custom">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-accent-orange text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-neutral-300 to-neutral-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-600 font-semibold">Фото проекта</span>
                </div>
                <div className="absolute top-4 right-4 bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{item.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 mr-2 text-accent-orange" />
                    {item.location}
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Calendar className="w-4 h-4 mr-2 text-accent-orange" />
                    {item.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
