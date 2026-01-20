import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { formatPhoneNumber } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Свяжитесь с нами: телефон, WhatsApp, email, адрес офиса в Грозном. Работаем ежедневно.',
}

const CONTACTS = {
  phone: '+79281958885',
  whatsapp: '+79281958885',
  email: 'Golden.House.Services@mail.ru',
  address: 'ЧР г.Грозный, ул. Авторханова 29',
  workHours: 'Понедельник - Воскресенье: 9:00 - 20:00',
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Контакты</h1>
            <p className="text-xl text-neutral-200">
              Свяжитесь с нами удобным способом. Ответим на все вопросы в течение 15 минут.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="heading-3 mb-8">Как с нами связаться</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Телефон</h3>
                    <a
                      href={`tel:${CONTACTS.phone}`}
                      className="text-lg text-accent-orange hover:underline"
                    >
                      {formatPhoneNumber(CONTACTS.phone)}
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">
                      Звоните ежедневно | WhatsApp:{' '}
                      <a
                        href={`https://wa.me/${CONTACTS.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-orange hover:underline"
                      >
                        {formatPhoneNumber(CONTACTS.whatsapp)}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a
                      href={`mailto:${CONTACTS.email}`}
                      className="text-lg text-accent-orange hover:underline"
                    >
                      {CONTACTS.email}
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">Ответим в течение 1 часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Адрес офиса</h3>
                    <p className="text-neutral-700">{CONTACTS.address}</p>
                    <p className="text-sm text-neutral-600 mt-1">Приём по предварительной записи</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Режим работы</h3>
                    <p className="text-neutral-700 whitespace-pre-line">{CONTACTS.workHours}</p>
                  </div>
                </div>
              </div>

              {/* Yandex Map */}
              <div className="mt-8 bg-neutral-200 rounded-xl h-64 overflow-hidden">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=45.686471,43.318496&z=16&l=map&pt=45.686471,43.318496,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-xl"
                  title="Карта офиса GoldenHouse Services"
                />
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div>
              <div className="bg-neutral-50 rounded-xl p-8">
                <h2 className="heading-3 mb-4">Свяжитесь с нами</h2>
                <p className="text-neutral-600 mb-6">
                  Напишите нам в WhatsApp, и наш менеджер ответит в течение 15 минут
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/79281958885"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl px-8 py-5 font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/30"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Написать в WhatsApp
                  </a>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-neutral-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-neutral-50 text-neutral-500">или</span>
                    </div>
                  </div>

                  <a
                    href={`tel:${CONTACTS.phone}`}
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-accent-orange to-yellow-500 text-white rounded-xl px-8 py-5 font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-accent-orange/30"
                  >
                    <Phone className="w-6 h-6" />
                    Позвонить
                  </a>

                  <a
                    href={`mailto:${CONTACTS.email}`}
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-accent-blue to-blue-600 text-white rounded-xl px-8 py-5 font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30"
                  >
                    <Mail className="w-6 h-6" />
                    Написать Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
