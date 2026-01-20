import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Услуги строительной компании',
  description:
    'Механизированная штукатурка, вентилируемые фасады, наружная реклама. Прозрачные цены и гарантия качества.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Наши услуги</h1>
            <p className="text-xl text-neutral-200">
              Полный спектр строительных работ с фиксированными ценами и гарантией качества
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-gradient-to-br from-neutral-300 to-neutral-400 rounded-xl h-80 flex items-center justify-center">
                    <span className="text-neutral-600 font-semibold">Изображение услуги</span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="heading-3 mb-4">{service.title}</h2>
                  <p className="text-neutral-600 mb-6">{service.fullDescription}</p>

                  <div className="flex items-baseline space-x-2 mb-6">
                    {service.priceFrom ? (
                      <>
                        <span className="text-neutral-600">от</span>
                        <span className="text-4xl font-bold text-accent-orange">
                          {formatPrice(service.priceFrom)}
                        </span>
                        <span className="text-neutral-600">/{service.priceUnit}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-primary">
                        Цена по запросу
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-8">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-accent-orange mt-1">✓</span>
                        <span className="text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.slug}`} className="btn-primary inline-flex">
                    Подробнее об услуге <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
