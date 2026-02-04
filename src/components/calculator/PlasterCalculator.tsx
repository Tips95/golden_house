'use client'

import { useState } from 'react'
import { formatPrice } from '@/lib/utils'
import { ArrowRight, Package } from 'lucide-react'

export default function PlasterCalculator() {
  const [area, setArea] = useState(100)
  const [thickness, setThickness] = useState(20)
  const [includesCeiling, setIncludesCeiling] = useState(false)
  const [withMaterial, setWithMaterial] = useState(false)
  const [priceWithMaterial, setPriceWithMaterial] = useState(550) // цена с материалом по умолчанию
  const [withDiagonals, setWithDiagonals] = useState(false)

  const PRICE_PER_SQM = 350 // цена за работу без материала
  const CEILING_COEFFICIENT = 1.4
  const DIAGONAL_ADD_PER_SQM = 150 // работа с диагоналями под 90°
  const STANDARD_THICKNESS = 20 // стандартная толщина слоя в мм
  const BAGS_PER_2SQM = 1 // 1 мешок на 2 кв.м при стандартной толщине
  const OVERSPEND_COEFFICIENT = 1.3 // перерасход 30% при толщине > 20 мм

  const calculateMaterials = () => {
    // Базовое количество мешков (1 мешок на 2 кв.м)
    let bagsNeeded = area / 2
    
    // Если толщина больше 20 мм, добавляем перерасход
    if (thickness > STANDARD_THICKNESS) {
      const overspendMultiplier = 1 + ((thickness - STANDARD_THICKNESS) / STANDARD_THICKNESS) * 0.5
      bagsNeeded = bagsNeeded * overspendMultiplier
    }
    
    if (includesCeiling) {
      bagsNeeded = bagsNeeded * CEILING_COEFFICIENT
    }
    
    return Math.ceil(bagsNeeded)
  }

  const calculatePrice = () => {
    // Выбираем базовую цену в зависимости от выбора "с материалом" или "без"
    const basePricePerSqm = withMaterial ? priceWithMaterial : PRICE_PER_SQM
    let basePrice = area * basePricePerSqm
    
    if (includesCeiling) {
      basePrice = basePrice * CEILING_COEFFICIENT
    }
    
    // Доплата за перерасход материала при толщине > 20 мм
    if (thickness > STANDARD_THICKNESS) {
      const extraCostPercent = ((thickness - STANDARD_THICKNESS) / STANDARD_THICKNESS) * 0.3
      basePrice = basePrice * (1 + extraCostPercent)
    }

    // Работа с диагоналями под 90°: +150 ₽/м²
    if (withDiagonals) {
      basePrice += area * DIAGONAL_ADD_PER_SQM
    }
    
    return basePrice
  }

  const getBasePricePerSqm = () => {
    return withMaterial ? priceWithMaterial : PRICE_PER_SQM
  }

  const totalBags = calculateMaterials()
  const totalPrice = calculatePrice()
  const hasOverspend = thickness > STANDARD_THICKNESS

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Inputs */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">
              Площадь стен (м²)
            </label>
            <input
              type="range"
              min="10"
              max="2000"
              step="10"
              value={area}
              onChange={e => setArea(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-accent-orange"
            />
            <div className="flex justify-between mt-1 sm:mt-2">
              <span className="text-xs sm:text-sm text-neutral-600">10 м²</span>
              <span className="text-base sm:text-lg font-bold text-accent-orange">{area} м²</span>
              <span className="text-xs sm:text-sm text-neutral-600">2000 м²</span>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">
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
            <div className="flex justify-between mt-1 sm:mt-2">
              <span className="text-xs sm:text-sm text-neutral-600">10 мм</span>
              <span className="text-base sm:text-lg font-bold text-accent-orange">{thickness} мм</span>
              <span className="text-xs sm:text-sm text-neutral-600">50 мм</span>
            </div>
            {hasOverspend && (
              <p className="text-xs text-amber-600 mt-1 sm:mt-2 flex items-center gap-1">
                <Package className="w-3 h-3" />
                Перерасход материала при слое &gt; 20 мм
              </p>
            )}
          </div>

          <div className="flex items-start space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              id="ceiling"
              checked={includesCeiling}
              onChange={e => setIncludesCeiling(e.target.checked)}
              className="w-4 h-4 sm:w-5 sm:h-5 text-accent-orange bg-neutral-100 border-neutral-300 rounded focus:ring-accent-orange focus:ring-2 mt-0.5"
            />
            <label htmlFor="ceiling" className="text-xs sm:text-sm font-medium text-primary cursor-pointer">
              Включить штукатурку потолков (+40%)
            </label>
          </div>

          <div className="flex items-start space-x-2 sm:space-x-3">
            <input
              type="checkbox"
              id="diagonals"
              checked={withDiagonals}
              onChange={e => setWithDiagonals(e.target.checked)}
              className="w-4 h-4 sm:w-5 sm:h-5 text-accent-orange bg-neutral-100 border-neutral-300 rounded focus:ring-accent-orange focus:ring-2 mt-0.5"
            />
            <label htmlFor="diagonals" className="text-xs sm:text-sm font-medium text-primary cursor-pointer">
              Работа с диагоналями под 90° (+150 ₽/м²)
            </label>
          </div>

          <div className="border-t border-neutral-200 pt-4 sm:pt-6 space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <input
                type="checkbox"
                id="withMaterial"
                checked={withMaterial}
                onChange={e => setWithMaterial(e.target.checked)}
                className="w-4 h-4 sm:w-5 sm:h-5 text-accent-orange bg-neutral-100 border-neutral-300 rounded focus:ring-accent-orange focus:ring-2 mt-0.5"
              />
              <label htmlFor="withMaterial" className="text-xs sm:text-sm font-medium text-primary cursor-pointer">
                Расчёт с материалом
              </label>
            </div>

            {withMaterial && (
              <div className="ml-6 sm:ml-8">
                <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">
                  Цена с материалом (₽/м²)
                </label>
                <input
                  type="number"
                  min="350"
                  max="2000"
                  step="10"
                  value={priceWithMaterial}
                  onChange={e => setPriceWithMaterial(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-accent-orange text-sm"
                  placeholder="550"
                />
                <p className="text-xs text-neutral-500 mt-1">
                  Текущая цена: {formatPrice(PRICE_PER_SQM)}/м² (без материала)
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg sm:rounded-xl p-5 sm:p-6 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 opacity-90">Расчёт стоимости:</h3>
            
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Площадь:</span>
                <span className="font-semibold">{area} м²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Толщина слоя:</span>
                <span className="font-semibold">{thickness} мм</span>
              </div>
              <div className="flex justify-between text-sm items-center">
                <span className="opacity-90 flex items-center gap-1">
                  <Package className="w-4 h-4" />
                  Мешков материала:
                </span>
                <span className="font-semibold">{totalBags} шт</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">
                  {withMaterial ? 'Цена с материалом:' : 'Цена за работу:'}
                </span>
                <span className="font-semibold">{formatPrice(getBasePricePerSqm())}/м²</span>
              </div>
              {hasOverspend && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Перерасход ({thickness - STANDARD_THICKNESS} мм):</span>
                  <span className="font-semibold text-amber-300">
                    +{Math.round(((thickness - STANDARD_THICKNESS) / STANDARD_THICKNESS) * 30)}%
                  </span>
                </div>
              )}
              {includesCeiling && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Потолки:</span>
                  <span className="font-semibold">+40%</span>
                </div>
              )}
              {withDiagonals && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Диагонали 90°:</span>
                  <span className="font-semibold">+{formatPrice(DIAGONAL_ADD_PER_SQM)}/м²</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="border-t border-white/20 pt-3 sm:pt-4 mb-4 sm:mb-6">
              <div className="text-xs sm:text-sm opacity-90 mb-1">Итого:</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">{formatPrice(totalPrice)}</div>
              <div className="text-xs opacity-75 mt-1 sm:mt-2">
                1 мешок = 2 м² (стандарт)
              </div>
            </div>

            <a
              href="https://wa.me/79281958885"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <span>Заказать расчёт</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <p className="text-xs opacity-75 text-center mt-2 sm:mt-3">
              * Точная стоимость рассчитывается после замера
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
