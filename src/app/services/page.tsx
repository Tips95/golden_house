import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { services, serviceCategories } from '@/data/services'
import { formatPrice } from '@/lib/utils'

const CATEGORY_SUBTITLES: Record<string, string> = {
  construction: 'Комплексные строительные работы',
  engineering: 'Безопасность, электрика, умный дом',
  advertising: 'Наружная реклама и вывески',
}

export const metadata: Metadata = {
  title: 'Услуги строительной компании',
  description:
    'Механизированная штукатурка, вентилируемые фасады, наружная реклама. Прозрачные цены и гарантия качества.',
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[0]
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-xl shadow-sm border border-neutral-200 hover:border-accent-orange hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-accent-orange transition-colors line-clamp-2">
          {service.title}
        </h3>
        <div className="flex items-baseline space-x-1 mb-2">
          {service.priceFrom ? (
            <>
              <span className="text-xs text-neutral-400">от</span>
              <span className="text-xl font-bold text-accent-orange">
                {formatPrice(service.priceFrom)}
              </span>
              <span className="text-xs text-neutral-400">₽</span>
            </>
          ) : (
            <span className="text-sm font-semibold text-neutral-600">
              По запросу
            </span>
          )}
        </div>
        <div className="flex items-center text-accent-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Подробнее <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
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

      <section className="py-12 bg-neutral-50">
        <div className="container-custom space-y-12">
          {serviceCategories.map((category) => (
            <div key={category.id}>
              <h2 className="text-2xl font-bold text-primary mb-1">{category.name}</h2>
              <p className="text-sm text-neutral-500 mb-6">
                {CATEGORY_SUBTITLES[category.id] ?? category.description}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services
                  .filter((s) => s.category === category.id)
                  .map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
