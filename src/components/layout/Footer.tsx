import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'
import { services } from '@/data/services'
import { formatPhoneNumber } from '@/lib/utils'

const COMPANY_INFO = {
  phone: '+79281958885',
  email: 'Golden.House.Services@mail.ru',
  address: 'ЧР г.Грозный, ул. Авторханова 29',
  workHours: 'Пн-Вс: 9:00 - 20:00',
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6 bg-white rounded-xl p-4 inline-block">
              <Image
                src="/images/logo-goldenhouse.png"
                alt="GoldenHouse Services"
                width={280}
                height={93}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-neutral-300 text-sm mb-4">
              Профессиональные строительные услуги по СКФО и Москве. Гарантия качества и
              соблюдение сроков. Рассрочка без переплат для Чеченской Республики.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/79281958885"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 hover:scale-110 transition-all text-xs font-semibold"
                aria-label="WhatsApp"
              >
                WA
              </a>
              <a
                href="https://t.me/+79281958885"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all text-xs font-semibold"
                aria-label="Telegram"
              >
                TG
              </a>
              <a
                href="https://instagram.com/Golden_House_Services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange hover:scale-110 transition-all text-xs"
                aria-label="Phone"
              >
                📞
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-neutral-300 hover:text-accent-orange transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-neutral-300 hover:text-accent-orange transition-colors text-sm"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-neutral-300 hover:text-accent-orange transition-colors text-sm"
                >
                  Портфолио
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-300 hover:text-accent-orange transition-colors text-sm"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="text-neutral-300 hover:text-accent-orange transition-colors text-sm"
                >
                  Контакты
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-300 hover:text-accent-orange transition-colors text-sm"
                >
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start space-x-2 text-neutral-300 hover:text-accent-orange transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{formatPhoneNumber(COMPANY_INFO.phone)}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start space-x-2 text-neutral-300 hover:text-accent-orange transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-neutral-300 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start space-x-2 text-neutral-300 text-sm">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.workHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} GoldenHouse Services. Все права защищены.
            </p>
            <p className="text-neutral-400 text-sm">
              ИНН: 1234567890 | ОГРН: 1234567890123
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
