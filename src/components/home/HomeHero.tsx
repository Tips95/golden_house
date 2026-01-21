'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const BENEFITS = [
  'Работаем с 2021 года — более 500 завершённых проектов',
  'Гарантия на все виды работ от 1 до 3 лет',
  'Собственные бригады — без субподряда',
  'Фиксированная смета — цена не изменится',
]

export default function HomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-center">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/10 via-transparent to-accent-blue/10" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Floating Elements - скрыты на мобильных */}
      <div className="hidden sm:block absolute top-20 right-10 w-72 h-72 bg-accent-orange/20 rounded-full blur-3xl animate-pulse" />
      <div className="hidden sm:block absolute bottom-20 left-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container-custom py-8 sm:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-orange to-accent-orange/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 lg:mb-8 shadow-lg shadow-accent-orange/30">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="hidden sm:inline">Профессиональное строительство в Грозном и ЧР</span>
              <span className="sm:hidden">Строительство в Грозном</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8 text-balance leading-tight">
              Строительные услуги{' '}
              <span className="bg-gradient-to-r from-accent-orange to-yellow-400 bg-clip-text text-transparent">
                под ключ
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-100 mb-6 sm:mb-8 lg:mb-10 text-balance leading-relaxed">
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
                  <span className="text-sm sm:text-base text-neutral-100">{benefit}</span>
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
                className="btn-secondary-dark text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4"
              >
                Наши услуги
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-orange to-accent-blue rounded-3xl blur-xl opacity-30" />
              
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent-orange/20 to-transparent rounded-3xl" />
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-primary mb-2 sm:mb-3 relative">
                  Бесплатная консультация
                </h3>
                <p className="text-neutral-600 mb-6 sm:mb-8 text-base sm:text-lg">
                  Свяжитесь с нами в WhatsApp и получите консультацию в течение{' '}
                  <span className="font-bold text-accent-orange">15 минут</span>
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="https://wa.me/79281958885"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl px-6 sm:px-8 py-4 sm:py-5 font-bold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Написать в WhatsApp
                  </a>

                  <div className="text-center text-sm text-neutral-500">
                    Или позвоните по телефону
                  </div>

                  <a
                    href="tel:+79281958885"
                    className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-gradient-to-r from-accent-orange to-yellow-500 text-white rounded-xl px-6 sm:px-8 py-4 sm:py-5 font-bold text-base sm:text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-orange/30"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +7 (928) 195-88-85
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
