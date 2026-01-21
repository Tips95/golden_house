'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Camera } from 'lucide-react'

interface PortfolioImage {
  image: string
  title?: string
  description?: string
}

interface PortfolioSectionProps {
  images: PortfolioImage[]
  title?: string
}

export default function PortfolioSection({ images, title = 'Наши работы' }: PortfolioSectionProps) {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-4">
            <Camera className="w-8 h-8 text-accent-orange" />
          </div>
          <h2 className="heading-2 mb-4">{title}</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Примеры выполненных проектов по подсветке лестниц и ниш
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80 w-full bg-neutral-100 overflow-hidden">
                {/* Логотип на заднем фоне */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <Image
                    src="/images/logo-goldenhouse.png"
                    alt="GoldenHouse Services"
                    width={200}
                    height={67}
                    className="object-contain"
                  />
                </div>
                
                <div className="absolute inset-2 z-10">
                  <Image
                    src={item.image}
                    alt={item.title || `Работа ${index + 1}`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Затемнение для лучшей читаемости текста */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-20" />
                
                {/* Текст поверх изображения */}
                {(item.title || item.description) && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-30">
                    {item.title && (
                      <h3 className="text-2xl font-extrabold mb-3 text-white drop-shadow-2xl">{item.title}</h3>
                    )}
                    {item.description && (
                      <p className="text-base font-semibold text-white drop-shadow-xl">{item.description}</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
