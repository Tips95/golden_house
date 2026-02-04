import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности GoldenHouse Services. Обработка персональных данных.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Политика конфиденциальности
            </h1>
            <p className="text-white/90 text-lg">
              GoldenHouse Services. Обработка персональных данных.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg text-neutral-700">
            <p className="lead">
              Настоящая политика определяет порядок обработки и защиты персональных данных пользователей сайта GoldenHouse Services.
            </p>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">1. Общие положения</h2>
            <p>
              Мы собираем только те данные, которые вы добровольно указываете при обращении: имя, телефон, адрес электронной почты. Эти данные используются исключительно для связи с вами и расчёта стоимости услуг.
            </p>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">2. Цели обработки</h2>
            <p>
              Персональные данные используются для обработки заявок, консультаций, составления смет и исполнения договоров. Мы не передаём ваши данные третьим лицам без вашего согласия.
            </p>
            <h2 className="text-xl font-semibold text-primary mt-8 mb-4">3. Контакты</h2>
            <p>
              По вопросам обработки персональных данных вы можете связаться с нами по телефону или через форму обратной связи на сайте.
            </p>
            <div className="mt-10 pt-6 border-t border-neutral-200">
              <Link href="/contacts" className="text-accent-orange hover:underline font-medium">
                ← Контакты
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
