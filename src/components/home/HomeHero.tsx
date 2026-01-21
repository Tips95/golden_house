'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const BENEFITS = [
  'Работаем с 2019 года — более 500 завершённых проектов',
  'Гарантия на все виды работ от 1 до 3 лет',
  'Собственные бригады — без субподряда',
  'Фиксированная смета — цена не изменится',
  'Рассрочка без переплат для Чеченской Республики',
]

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-center bg-neutral-900">
      {/* Фоновое изображение - дом в процессе строительства */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/Gemini_Generated_Image_d28ahhd28ahhd28a.png"
          alt="Строительство дома"
          fill
          className="object-cover object-right"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>
      
      {/* Градиентный оверлей: темнее слева (где текст), светлее справа (где фон) */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/85 via-neutral-900/60 to-neutral-900/20" />
      
      {/* Размытие под текстом для читаемости */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/40 via-transparent to-transparent backdrop-blur-[2px]" />

      <div className="container-custom py-8 sm:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - слева */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:max-w-2xl"
          >
            {/* Дополнительное размытие и затемнение под текстовым блоком */}
            <div className="absolute -inset-6 bg-neutral-900/30 backdrop-blur-md rounded-2xl -z-10" />
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 lg:mb-8 text-white">
              <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
              <span className="hidden lg:inline">Профессиональное строительство по СКФО и Москве</span>
              <span className="hidden sm:inline lg:hidden">Строительство по СКФО и Москве</span>
              <span className="sm:hidden">Строительство по СКФО</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8 text-balance leading-tight text-white">
              Строительные услуги{' '}
              <span className="bg-gradient-to-r from-accent-orange to-yellow-400 bg-clip-text text-transparent">
                под ключ
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-200 mb-6 sm:mb-8 lg:mb-10 text-balance leading-relaxed">
              Механизированная штукатурка, вентилируемые фасады, наружная реклама. Работаем быстро,
              качественно, с гарантией.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 lg:mb-10">
              {BENEFITS.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-2 sm:space-x-3"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-neutral-200">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://wa.me/79281958885"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 inline-flex items-center justify-center"
              >
                Рассчитать стоимость <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 active:scale-95"
              >
                Наши услуги
              </a>
            </div>
          </motion.div>

          {/* Правая сторона - фон виден, без карточки */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            className="opacity-100"
          />
        </svg>
      </div>
    </section>
  )
}
