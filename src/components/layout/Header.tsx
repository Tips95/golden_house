'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { services } from '@/data/services'
import { formatPhoneNumber } from '@/lib/utils'

const COMPANY_PHONE = '+79281958885'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setIsScrolled(currentScrollY > 20)

          // Логика скрытия/показа шапки на мобильных устройствах
          if (window.innerWidth < 1024) { // lg breakpoint
            const scrollDifference = Math.abs(currentScrollY - lastScrollY)
            
            // Минимальный порог прокрутки для срабатывания (5px)
            if (scrollDifference < 5) {
              ticking = false
              return
            }

            if (currentScrollY < 10) {
              // В самом верху - всегда показываем
              setIsHeaderVisible(true)
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
              // Прокрутка вниз и уже проскроллили больше 50px - скрываем
              setIsHeaderVisible(false)
            } else if (currentScrollY < lastScrollY) {
              // Прокрутка вверх - показываем
              setIsHeaderVisible(true)
            }
          } else {
            // На десктопе всегда показываем
            setIsHeaderVisible(true)
          }

          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navigation = [
    { name: 'Услуги', href: '/services', hasDropdown: true },
    { name: 'Портфолио', href: '/portfolio' },
    { name: 'Блог', href: '/blog' },
    { name: 'О компании', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-xl shadow-neutral-900/5' : 'bg-white/95 backdrop-blur-md'
      } ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-transform hover:scale-105">
            <Image
              src="/images/logo-goldenhouse.png"
              alt="GoldenHouse Services"
              width={320}
              height={107}
              priority
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map(item => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-neutral-700 hover:text-accent-orange transition-colors font-medium"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-neutral-200 overflow-hidden"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {services.map(service => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block px-4 py-3 hover:bg-neutral-100 transition-colors border-b border-neutral-100 last:border-0"
                            >
                              <div className="font-medium text-primary text-sm">
                                {service.title}
                              </div>
                              <div className="text-xs text-neutral-600 mt-1">
                                от {service.priceFrom} ₽/{service.priceUnit}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-neutral-700 hover:text-accent-orange transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_PHONE}`}
              className="flex items-center space-x-2 text-primary hover:text-accent-orange transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">{formatPhoneNumber(COMPANY_PHONE)}</span>
            </a>
            <a
              href="https://wa.me/79281958885"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Получить смету
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:bg-neutral-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-neutral-200 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map(item => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors font-medium"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              {services.map(service => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block px-8 py-2 text-sm text-neutral-600 hover:text-accent-orange"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4 space-y-3 border-t border-neutral-200">
                  <a
                    href={`tel:${COMPANY_PHONE}`}
                    className="flex items-center space-x-2 text-primary"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">{formatPhoneNumber(COMPANY_PHONE)}</span>
                  </a>
                  <a
                    href="https://wa.me/79281958885"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full block text-center"
                  >
                    Получить смету
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
