'use client'

import { useState } from 'react'
import { formatPrice } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const LETTER_TYPES = [
  { id: 'contour', name: 'С контражуром', pricePerLetter: 3500 },
  { id: 'face', name: 'С лицевой подсветкой', pricePerLetter: 4200 },
  { id: 'neon', name: 'Неоновые', pricePerMeter: 8000 },
  { id: 'lightbox', name: 'Световой короб', pricePerSqm: 12000 },
]

export default function SignageCalculator() {
  const [letterType, setLetterType] = useState(LETTER_TYPES[0].id)
  const [quantity, setQuantity] = useState(10)
  const [height, setHeight] = useState(50)

  const selectedType = LETTER_TYPES.find(t => t.id === letterType) || LETTER_TYPES[0]

  const calculatePrice = () => {
    if (letterType === 'lightbox') {
      // Для светового короба считаем по площади
      const area = quantity // в данном случае quantity = площадь в м²
      return area * (selectedType.pricePerSqm || 0)
    } else if (letterType === 'neon') {
      // Для неона считаем по погонным метрам
      return quantity * (selectedType.pricePerMeter || 0)
    } else {
      // Для букв считаем по количеству
      let basePrice = quantity * (selectedType.pricePerLetter || 0)
      
      // Коэффициент за размер (базовый размер 50 см)
      if (height !== 50) {
        const sizeCoef = height / 50
        basePrice *= sizeCoef
      }
      
      return basePrice
    }
  }

  const totalPrice = calculatePrice()

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Тип вывески
            </label>
            <div className="space-y-2">
              {LETTER_TYPES.map(type => (
                <label
                  key={type.id}
                  className="flex items-center space-x-3 p-3 border-2 rounded-lg cursor-pointer transition-all hover:border-accent-orange"
                  style={{
                    borderColor: letterType === type.id ? '#FF6B35' : '#E5E5E5',
                    backgroundColor: letterType === type.id ? '#FF6B35' + '10' : 'transparent',
                  }}
                >
                  <input
                    type="radio"
                    name="letterType"
                    value={type.id}
                    checked={letterType === type.id}
                    onChange={e => setLetterType(e.target.value)}
                    className="w-4 h-4 text-accent-orange"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-primary">{type.name}</div>
                    <div className="text-sm text-neutral-600">
                      {type.pricePerLetter && `${formatPrice(type.pricePerLetter)}/буква`}
                      {type.pricePerMeter && `${formatPrice(type.pricePerMeter)}/пог.м`}
                      {type.pricePerSqm && `${formatPrice(type.pricePerSqm)}/м²`}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              {letterType === 'lightbox'
                ? 'Площадь короба (м²)'
                : letterType === 'neon'
                ? 'Длина неона (пог.м)'
                : 'Количество букв'}
            </label>
            <input
              type="range"
              min={letterType === 'lightbox' ? 1 : letterType === 'neon' ? 1 : 1}
              max={letterType === 'lightbox' ? 20 : letterType === 'neon' ? 50 : 30}
              step={letterType === 'lightbox' ? 0.5 : 1}
              value={quantity}
              onChange={e => setQuantity(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-accent-orange"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-neutral-600">
                {letterType === 'lightbox' ? '1' : letterType === 'neon' ? '1' : '1'}
              </span>
              <span className="text-lg font-bold text-accent-orange">{quantity}</span>
              <span className="text-sm text-neutral-600">
                {letterType === 'lightbox' ? '20' : letterType === 'neon' ? '50' : '30'}
              </span>
            </div>
          </div>

          {letterType !== 'lightbox' && letterType !== 'neon' && (
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">
                Высота букв (см)
              </label>
              <div className="flex gap-2">
                {[30, 50, 70, 100].map(value => (
                  <button
                    key={value}
                    onClick={() => setHeight(value)}
                    className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                      height === value
                        ? 'bg-accent-orange text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {value} см
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-accent-orange to-accent-orange/80 rounded-xl p-6 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4 opacity-90">Расчёт стоимости:</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Тип:</span>
                <span className="font-semibold">{selectedType.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">
                  {letterType === 'lightbox'
                    ? 'Площадь:'
                    : letterType === 'neon'
                    ? 'Длина:'
                    : 'Количество:'}
                </span>
                <span className="font-semibold">
                  {quantity}{' '}
                  {letterType === 'lightbox' ? 'м²' : letterType === 'neon' ? 'м' : 'шт'}
                </span>
              </div>
              {letterType !== 'lightbox' && letterType !== 'neon' && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Высота:</span>
                  <span className="font-semibold">{height} см</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="border-t border-white/20 pt-4 mb-6">
              <div className="text-sm opacity-90 mb-1">Итого:</div>
              <div className="text-4xl font-bold">{formatPrice(totalPrice)}</div>
            </div>

            <a
              href="https://wa.me/79281958885"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-neutral-100 text-accent-orange font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Заказать вывеску</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-xs opacity-75 text-center mt-3">
              * Бесплатная 3D-визуализация при заказе
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
