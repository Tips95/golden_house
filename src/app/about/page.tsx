import { Metadata } from 'next'
import { Award, Users, TrendingUp, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'О компании',
  description: 'Строительная компания GoldenHouse Services работает с 2021 года. Более 500 завершённых проектов.',
}

const FEATURES = [
  {
    icon: Award,
    title: '4 года на рынке',
    description: 'Работаем с 2021 года, постоянно совершенствуем технологии',
  },
  {
    icon: Users,
    title: '50+ специалистов',
    description: 'Команда опытных мастеров и инженеров',
  },
  {
    icon: TrendingUp,
    title: '500+ проектов',
    description: 'Успешно завершённых объектов по СКФО и Москве',
  },
  {
    icon: Target,
    title: '98% рекомендаций',
    description: 'Довольных клиентов, готовых рекомендовать нас',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight">О компании GoldenHouse Services</h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Профессиональные строительные услуги с гарантией качества и соблюдением сроков
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-accent-orange" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-neutral-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8 text-center">Наша история</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-700 mb-4">
                Компания GoldenHouse Services основана в 2021 году группой опытных строителей, которые решили
                создать сервис европейского уровня на российском рынке. За 4 года работы мы выполнили
                более 500 проектов — от отделки квартир до фасадов коммерческих зданий.
              </p>
              <p className="text-neutral-700 mb-4">
                Мы первыми в регионе внедрили технологию механизированной штукатурки, что позволило
                сократить сроки работ в 3-5 раз и снизить стоимость для клиентов на 30-40%.
              </p>
              <p className="text-neutral-700">
                Сегодня GoldenHouse Services — это команда из 50+ специалистов, собственное оборудование и
                налаженные поставки материалов от ведущих производителей. Мы гордимся тем, что 98%
                наших клиентов рекомендуют нас своим друзьям и коллегам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">Наши ценности</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Качество</h3>
              <p className="text-neutral-600">
                Используем только проверенные материалы и современное оборудование
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Честность</h3>
              <p className="text-neutral-600">
                Прозрачное ценообразование без скрытых доплат и изменения стоимости
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Ответственность</h3>
              <p className="text-neutral-600">
                Гарантия на работы до 3 лет, компенсация за несоблюдение сроков
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
