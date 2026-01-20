'use client'

import { useState } from 'react'
import { formatPrice } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export default function PlasterCalculator() {
  const [area, setArea] = useState(100)
  const [thickness, setThickness] = useState(20)
  const [includesCeiling, setIncludesCeiling] = useState(false)

  const PRICE_PER_SQM = 320
  const CEILING_COEFFICIENT = 1.4
  const THICKNESS_ADDON = 80 // за каждые 10 мм сверх 30 мм

  const calculatePrice = () => {
    let basePrice = area * PRICE_PER_SQM
    
    if (includesCeiling) {
      basePrice = basePrice * CEILING_COEFFICIENT
    }
    
    if (thickness > 30) {
      const extraLayers = Math.ceil((thickness - 30) / 10)
      basePrice += area * (extraLayers * THICKNESS_ADDON)
    }
    
    return basePrice
  }

  const totalPrice = calculatePrice()

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Площадь стен (м²)
            </label>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={area}
              onChange={e => setArea(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-accent-orange"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-neutral-600">10 м²</span>
              <span className="text-lg font-bold text-accent-orange">{area} м²</span>
              <span className="text-sm text-neutral-600">500 м²</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Толщина слоя (мм)
            </label>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={thickness}
              onChange={e => setThickness(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-accent-orange"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-neutral-600">10 мм</span>
              <span className="text-lg font-bold text-accent-orange">{thickness} мм</span>
              <span className="text-sm text-neutral-600">50 мм</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="ceiling"
              checked={includesCeiling}
              onChange={e => setIncludesCeiling(e.target.checked)}
              className="w-5 h-5 text-accent-orange bg-neutral-100 border-neutral-300 rounded focus:ring-accent-orange focus:ring-2"
            />
            <label htmlFor="ceiling" className="text-sm font-medium text-primary cursor-pointer">
              Включить штукатурку потолков (+40%)
            </label>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-xl p-6 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4 opacity-90">Расчёт стоимости:</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Площадь:</span>
                <span className="font-semibold">{area} м²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Базовая цена:</span>
                <span className="font-semibold">{formatPrice(PRICE_PER_SQM)}/м²</span>
              </div>
              {thickness > 30 && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Доп. слой ({thickness - 30} мм):</span>
                  <span className="font-semibold">
                    +{formatPrice(Math.ceil((thickness - 30) / 10) * THICKNESS_ADDON * area)}
                  </span>
                </div>
              )}
              {includesCeiling && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Потолки:</span>
                  <span className="font-semibold">+40%</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="border-t border-white/20 pt-4 mb-6">
              <div className="text-sm opacity-90 mb-1">Итого:</div>
              <div className="text-4xl font-bold">{formatPrice(totalPrice)}</div>
            </div>

            <button className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <span>Заказать расчёт</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-xs opacity-75 text-center mt-3">
              * Точная стоимость рассчитывается после замера
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
