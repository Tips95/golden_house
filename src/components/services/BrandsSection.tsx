'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Brand {
  name: string
  image: string
  alt: string
}

interface BrandsCategory {
  title: string
  brands: Brand[]
}

interface BrandsSectionProps {
  categories: BrandsCategory[]
}

function BrandCard({ 
  brand, 
  categoryIndex, 
  brandIndex 
}: { 
  brand: Brand
  categoryIndex: number
  brandIndex: number
}) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Пробуем разные форматы файлов
  const getImagePath = (basePath: string) => {
    // Если путь уже содержит расширение, используем его
    if (/\.(png|jpg|jpeg|svg)$/i.test(basePath)) {
      return [basePath]
    }
    // Иначе пробуем разные форматы
    const base = basePath.replace(/\.(png|jpg|jpeg|svg)$/i, '')
    return [`${base}.png`, `${base}.jpg`, `${base}.jpeg`, `${base}.svg`]
  }
  
  const imagePaths = getImagePath(brand.image)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: categoryIndex * 0.1 + brandIndex * 0.05 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-neutral-100 hover:border-accent-orange/30 transition-all duration-300 h-full flex items-center justify-center aspect-square">
        {!imageError && currentImageIndex < imagePaths.length ? (
          <div className="relative w-full h-20 md:h-24 flex items-center justify-center">
            <Image
              src={imagePaths[currentImageIndex]}
              alt={brand.alt}
              fill
              className={`object-contain object-center group-hover:scale-110 transition-transform duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              sizes="(max-width: 768px) 150px, 200px"
              unoptimized
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                if (currentImageIndex < imagePaths.length - 1) {
                  setCurrentImageIndex(currentImageIndex + 1)
                } else {
                  setImageError(true)
                }
              }}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs font-light text-neutral-400">{brand.name}</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center px-2">
            <span className="text-sm font-light text-neutral-700">{brand.name}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function BrandsSection({ categories }: BrandsSectionProps) {
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <section id="brands-section" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Работаем с ведущими брендами</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Используем только проверенное оборудование от мировых производителей
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="heading-3 mb-8 text-center">{category.title}</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                {category.brands.map((brand, brandIndex) => (
                  <BrandCard
                    key={brand.name}
                    brand={brand}
                    categoryIndex={categoryIndex}
                    brandIndex={brandIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
