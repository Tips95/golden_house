'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  variant?: 'default' | 'compact'
  source?: string
}

export default function ContactForm({ variant = 'default', source = 'contact_form' }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет интеграция с backend/CRM
    console.log('Form submitted:', { ...formData, source })
    
    // Имитация отправки
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    
    // Сброс через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-8"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Спасибо за заявку!</h3>
        <p className="text-neutral-600">Мы свяжемся с вами в ближайшее время</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
          Ваше имя *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all outline-none text-lg hover:border-neutral-300"
          placeholder="Иван Иванов"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
          Телефон *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all outline-none text-lg hover:border-neutral-300"
          placeholder="+7 (900) 123-45-67"
        />
      </div>

      {variant === 'default' && (
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            Сообщение (опционально)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all outline-none resize-none text-lg hover:border-neutral-300"
            placeholder="Расскажите о вашем проекте..."
          />
        </div>
      )}

      <button type="submit" className="btn-primary w-full text-base py-5 text-lg font-bold">
        Отправить заявку
        <Send className="w-5 h-5 ml-2" />
      </button>

      <p className="text-xs text-neutral-500 text-center">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href="/privacy" className="text-accent-orange hover:underline">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  )
}
