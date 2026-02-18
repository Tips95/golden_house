'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  title?: string
}

export default function ImageCarousel({ images, title = 'Галерея работ' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (images.length === 0) return null

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary mb-8 text-center">
          {title}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Основное изображение */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-xl">
            <Image
              src={images[currentIndex]}
              alt={`Фото работы ${currentIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority={currentIndex === 0}
            />
          </div>

          {/* Кнопки навигации */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                aria-label="Следующее фото"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Индикатор текущего слайда */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Миниатюры */}
        {images.length > 1 && (
          <div className="mt-6 flex gap-2 sm:gap-3 overflow-x-auto pb-2 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 sm:ring-3 ring-accent-orange scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`Миниатюра ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
