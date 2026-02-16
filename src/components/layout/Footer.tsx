'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Instagram, ChevronDown } from 'lucide-react'
import { services } from '@/data/services'
import { formatPhoneNumber } from '@/lib/utils'

const COMPANY_INFO = {
  phone: '+79281958885',
  email: 'Golden.House.Services@mail.ru',
  address: 'ЧР г.Грозный, ул. Авторханова 29',
  workHours: 'Пн-Вс: 9:00–20:00',
}

const COMPANY_LINKS = [
  { href: '/about', label: 'О компании' },
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/blog', label: 'Блог' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/privacy', label: 'Конфиденциальность' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Лого + соцсети */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4">
            <Link href="/" className="bg-white rounded-lg p-2.5 inline-flex shrink-0">
              <Image
                src="/images/logo-goldenhouse.png"
                alt="GoldenHouse Services"
                width={200}
                height={66}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 text-xs max-w-xs leading-relaxed hidden sm:block lg:block">
              Строительные услуги по СКФО и Москве. Гарантия и рассрочка.
            </p>
            <div className="flex gap-2">
              <a
                href="https://wa.me/79281958885"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-green-500 transition-colors text-[10px] font-semibold"
                aria-label="WhatsApp"
              >
                WA
              </a>
              <a
                href="https://t.me/+79281958885"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-blue-500 transition-colors text-[10px] font-semibold"
                aria-label="Telegram"
              >
                TG
              </a>
              <a
                href="https://instagram.com/Golden_House_Services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center hover:bg-accent-orange transition-colors text-xs"
                aria-label="Позвонить"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Услуги — аккордеон с превью */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/90 py-2.5">Услуги</p>
            
            {/* Всегда видимые услуги */}
            <ul className="space-y-1 mb-2">
              {services.slice(0, 5).map(service => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 hover:text-accent-orange transition-colors text-xs block py-0.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Остальные услуги при раскрытии */}
            {services.length > 5 && (
              <>
                <div
                  className="overflow-hidden transition-[max-height] duration-300 ease-out"
                  style={{
                    maxHeight: servicesOpen ? '2000px' : '0',
                    transitionTimingFunction: 'ease-out'
                  }}
                >
                  <ul
                    id="footer-services-list"
                    role="region"
                    aria-labelledby="footer-services-toggle"
                    className="space-y-1"
                  >
                    {services.slice(5).map(service => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-white/60 hover:text-accent-orange transition-colors text-xs block py-0.5"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    setServicesOpen(prev => !prev)
                  }}
                  className="flex items-center gap-1.5 text-white/70 hover:text-accent-orange transition-colors text-xs mt-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange rounded cursor-pointer"
                  aria-expanded={servicesOpen}
                  aria-controls="footer-services-list"
                  id="footer-services-toggle"
                >
                  {servicesOpen ? 'Скрыть' : `Ещё ${services.length - 5}`}
                  <ChevronDown
                    className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
              </>
            )}
          </div>

          {/* Компания — аккордеон */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setCompanyOpen(prev => !prev)
              }}
              className="flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-white/90 hover:text-accent-orange transition-colors py-2.5 px-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange rounded cursor-pointer touch-manipulation"
              aria-expanded={companyOpen}
              aria-controls="footer-company-list"
              id="footer-company-toggle"
            >
              Компания
              <ChevronDown
                className={`w-4 h-4 shrink-0 ml-1 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                aria-hidden
              />
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-out"
              style={{
                maxHeight: companyOpen ? '1000px' : '0',
                transitionTimingFunction: 'ease-out'
              }}
            >
              <ul
                id="footer-company-list"
                role="region"
                aria-labelledby="footer-company-toggle"
                className="space-y-1 pt-2"
              >
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-accent-orange transition-colors text-xs block py-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              </ul>
            </div>
          </div>

          {/* Контакты — компактный блок */}
          <div className="lg:col-span-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/90">Контакты</p>
            <ul className="space-y-1.5 text-xs text-white/70">
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-accent-orange transition-colors">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  {formatPhoneNumber(COMPANY_INFO.phone)}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-accent-orange transition-colors truncate">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                {COMPANY_INFO.workHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-white/50 text-xs">
            <span>© {currentYear} GoldenHouse Services</span>
            <span className="hidden sm:inline">·</span>
            <span>ИНН 1234567890 · ОГРН 1234567890123</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
