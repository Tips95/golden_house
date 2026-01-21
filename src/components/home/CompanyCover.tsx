'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MapPin, CheckCircle } from 'lucide-react'

const COMPANY_INFO = {
  location: 'Грозный',
  distance: '10 мин. до центра',
  title: '«GOLDENHOUSE» ЭЛИТНОЕ СТРОИТЕЛЬСТВО',
  subtitle: 'Профессиональные строительные услуги под ключ – безупречное качество в любое время года',
  benefits: [
    'Работаем с 2021 года — более 500 завершённых проектов',
    'Гарантия на все виды работ от 1 до 3 лет',
    'Собственные бригады — без субподряда',
    'Фиксированная смета — цена не изменится',
  ],
}

export default function CompanyCover({ 
  onNext,
  isActive = true 
}: { 
  onNext?: () => void
  isActive?: boolean
}) {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
          />
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-light">{COMPANY_INFO.location}</span>
            <span className="text-white/80">•</span>
            <span className="text-white/90">{COMPANY_INFO.distance}</span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight"
          >
            {COMPANY_INFO.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {COMPANY_INFO.subtitle}
          </motion.p>

          {/* Benefits list */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4 mb-12 text-left max-w-2xl mx-auto"
          >
            {COMPANY_INFO.benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-accent-orange flex-shrink-0 mt-0.5" />
                <span className="text-lg text-white/90">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="https://wa.me/79281958885"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center justify-center bg-gradient-to-r from-accent-orange to-yellow-500 hover:shadow-2xl hover:shadow-accent-orange/50"
            >
              Заказать звонок
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                onNext?.()
              }}
              className="btn-secondary-dark text-lg px-10 py-4"
            >
              Наши услуги
            </a>
          </motion.div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        <button
          onClick={() => {}}
          className="w-8 h-3 rounded-full bg-white transition-all duration-300"
          aria-label="Текущий слайд: О компании"
        />
        <button
          onClick={onNext}
          className="w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300"
          aria-label="Перейти к услугам"
        />
      </div>

      {/* Floating action buttons */}
      <div className="fixed right-6 bottom-24 z-30 flex flex-col gap-4">
        {/* Gallery/Portfolio button */}
        <a
          href="/portfolio"
          className="w-14 h-14 bg-accent-blue rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform text-white"
          aria-label="Портфолио"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </a>

        {/* Call button */}
        <a
          href="tel:+79281958885"
          className="w-16 h-16 bg-gradient-to-r from-accent-orange to-yellow-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform text-white"
          aria-label="Позвонить"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
