'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ServiceHeroProps {
  title: string
  subtitle: string
  priceFrom: number | null
  priceUnit: string
  benefits: string[]
  image: string
}

export default function ServiceHero({
  title,
  subtitle,
  priceFrom,
  priceUnit,
  benefits,
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container-custom py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {priceFrom && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-orange to-accent-orange/80 px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-lg shadow-accent-orange/30">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                от {priceFrom} ₽/{priceUnit}
              </div>
            )}
            {!priceFrom && (
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-blue to-accent-blue/80 px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-lg shadow-accent-blue/30">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Цена по запросу
              </div>
            )}
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance">
              {title}
            </h1>
            
            <p className="text-xl text-neutral-200 mb-8 text-balance">
              {subtitle}
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.slice(0, 4).map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-accent-orange flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-100">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/79281958885"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 inline-flex items-center justify-center"
              >
                Получить расчёт <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/portfolio"
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary text-base px-8 py-4 inline-flex items-center justify-center"
              >
                Смотреть портфолио
              </a>
            </div>
          </motion.div>

          {/* WhatsApp Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Бесплатный расчёт стоимости
              </h3>
              <p className="text-neutral-600 mb-6">
                Свяжитесь с нами в WhatsApp, и наш специалист ответит в течение 15 минут
              </p>
              
              <div className="space-y-3">
                <a
                  href="https://wa.me/79281958885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl px-6 py-4 font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Написать в WhatsApp
                </a>

                <a
                  href="tel:+79281958885"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-accent-orange to-yellow-500 text-white rounded-xl px-6 py-4 font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-orange/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 (928) 195-88-85
                </a>
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
