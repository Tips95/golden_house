'use client'

import { motion } from 'framer-motion'
import { Camera, DoorOpen, DoorClosed, Shield, MoveHorizontal, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Brand {
  name: string
  image: string
  alt: string
}

interface Direction {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  brands: Brand[]
}

const directions: Direction[] = [
  {
    id: 'video',
    title: 'Видеонаблюдение',
    description: 'IP-камеры, видеорегистраторы, удалённый доступ',
    icon: Camera,
    brands: [
      {
        name: 'HiWatch',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.02.jpeg',
        alt: 'HiWatch',
      },
      {
        name: 'Hikvision',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.34.59.jpeg',
        alt: 'Hikvision',
      },
      {
        name: 'Dahua',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.05.jpeg',
        alt: 'Dahua',
      },
      {
        name: 'Tantos',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.23.jpeg',
        alt: 'Tantos',
      },
      {
        name: 'Reolink',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.08.jpeg',
        alt: 'Reolink',
      },
      {
        name: 'Ezviz',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.17.jpeg',
        alt: 'Ezviz',
      },
      {
        name: 'Axis',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.05.jpeg',
        alt: 'Axis',
      },
    ],
  },
  {
    id: 'intercom',
    title: 'Домофоны',
    description: 'Видеодомофоны, аудиодомофоны, управление доступом',
    icon: DoorOpen,
    brands: [
      {
        name: 'Atis',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.08.jpeg',
        alt: 'Atis',
      },
      {
        name: 'Hikvision',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.34.59.jpeg',
        alt: 'Hikvision',
      },
      {
        name: 'Eltis',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.17.jpeg',
        alt: 'Eltis',
      },
    ],
  },
  {
    id: 'gates',
    title: 'Автоматика для ворот',
    description: 'Автоматические ворота, приводы, дистанционное управление',
    icon: DoorClosed,
    brands: [
      {
        name: 'Alutech',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.02.jpeg',
        alt: 'Alutech',
      },
      {
        name: 'DoorHan',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.23.jpeg',
        alt: 'DoorHan',
      },
    ],
  },
  {
    id: 'access',
    title: 'СКУД',
    description: 'Системы контроля доступа, карты, биометрия',
    icon: Shield,
    brands: [
      {
        name: 'Smartec',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.34.59.jpeg',
        alt: 'Smartec',
      },
      {
        name: 'Parsec',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.02.jpeg',
        alt: 'Parsec',
      },
      {
        name: 'Sigur',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.05.jpeg',
        alt: 'Sigur',
      },
      {
        name: 'RusGuard',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.08.jpeg',
        alt: 'RusGuard',
      },
      {
        name: 'Bolid',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.17.jpeg',
        alt: 'Bolid',
      },
    ],
  },
  {
    id: 'barriers',
    title: 'Шлагбаумы',
    description: 'Автоматические шлагбаумы, управление парковкой',
    icon: MoveHorizontal,
    brands: [
      {
        name: 'Nice',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.23.jpeg',
        alt: 'Nice',
      },
      {
        name: 'FAAC',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.34.59.jpeg',
        alt: 'FAAC',
      },
      {
        name: 'Came',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.02.jpeg',
        alt: 'Came',
      },
      {
        name: 'BFT',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.05.jpeg',
        alt: 'BFT',
      },
      {
        name: 'DoorHan',
        image: '/images/brands/WhatsApp Image 2026-01-21 at 13.35.23.jpeg',
        alt: 'DoorHan',
      },
    ],
  },
]

export default function MainDirections() {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.querySelector('.directions-scroll-container') as HTMLDivElement
    if (!container) return
    
    const scrollAmount = 400
    const currentScroll = container.scrollLeft
    const newPosition = direction === 'right' 
      ? currentScroll + scrollAmount 
      : currentScroll - scrollAmount
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    })
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="heading-2 text-center mb-4">Основные направления</h2>
          <p className="text-xl text-neutral-600 text-center max-w-3xl mx-auto">
            Комплексные решения для безопасности и автоматизации
          </p>
        </motion.div>

        {/* Scrollable container */}
        <div className="relative">
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg border-2 border-neutral-200 hover:border-accent-orange transition-all hover:scale-110 hidden lg:flex items-center justify-center"
            aria-label="Прокрутить влево"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          {/* Scrollable content */}
          <div
            className="directions-scroll-container overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-6 lg:gap-8 min-w-max px-2">
              {directions.map((direction, index) => {
                const Icon = direction.icon
                return (
                  <motion.div
                    key={direction.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-[320px] lg:w-[380px]"
                  >
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-neutral-100 hover:border-accent-orange/30 transition-all duration-300 overflow-hidden h-full">
                      {/* Header */}
                      <div className="p-6 lg:p-8 border-b border-neutral-100">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent-orange/30 flex-shrink-0">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl font-light text-primary mb-2">
                              {direction.title}
                            </h3>
                            <p className="text-sm text-neutral-600">
                              {direction.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Brands */}
                      <div className="p-6 lg:p-8">
                        <div className="grid grid-cols-3 gap-4">
                          {direction.brands.map((brand, brandIndex) => (
                            <motion.div
                              key={brand.name}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + brandIndex * 0.05 }}
                              className="relative aspect-square bg-neutral-50 rounded-lg p-3 flex items-center justify-center group hover:bg-white transition-colors"
                            >
                              <Image
                                src={brand.image}
                                alt={brand.alt}
                                fill
                                className="object-contain object-center group-hover:scale-110 transition-transform duration-300"
                                sizes="100px"
                                unoptimized
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg border-2 border-neutral-200 hover:border-accent-orange transition-all hover:scale-110 hidden lg:flex items-center justify-center"
            aria-label="Прокрутить вправо"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

      </div>
    </section>
  )
}
