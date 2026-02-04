'use client'

import { useState } from 'react'
import { formatPrice } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const FACADE_MATERIALS = [
  { id: 'dagestan', name: 'Дагестанский камень', price: 1200 },
  { id: 'klinker', name: 'Клинкер', price: 1500 },
  { id: 'ceramic', name: 'Керамогранит', price: 3200 },
  { id: 'natural', name: 'Натуральный камень (нохчи т1улг)', price: 3500 },
  { id: 'composite', name: 'Алюкобонд (Композит)', price: 3800, hasThickness: true },
]

// Цены композита по толщине
const COMPOSITE_PRICES = {
  3: 3800,
  4: 4500,
}

export default function FacadeCalculator() {
  const [area, setArea] = useState(150)
  const [material, setMaterial] = useState(FACADE_MATERIALS[0].id)
  const [compositeThickness, setCompositeThickness] = useState<3 | 4>(3)
  const [withInsulation, setWithInsulation] = useState(false)

  const selectedMaterial = FACADE_MATERIALS.find(m => m.id === material) || FACADE_MATERIALS[0]
  const isComposite = material === 'composite'

  const calculatePrice = () => {
    // Базовая цена материала
    let pricePerSqm = isComposite 
      ? COMPOSITE_PRICES[compositeThickness] 
      : selectedMaterial.price
    
    let basePrice = area * pricePerSqm
    
    // Доплата за утепление (+200₽/м²)
    if (withInsulation) {
      basePrice += area * 200
    }
    
    return basePrice
  }

  const currentPricePerSqm = isComposite 
    ? COMPOSITE_PRICES[compositeThickness] 
    : selectedMaterial.price

  const totalPrice = calculatePrice()

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Inputs */}
        <div className="space-y-5 sm:space-y-6">
          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Площадь фасада (м²)
            </label>
            <input
              type="range"
              min="50"
              max="1000"
              step="50"
              value={area}
              onChange={e => setArea(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-accent-blue"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-neutral-600">50 м²</span>
              <span className="text-lg font-bold text-accent-blue">{area} м²</span>
              <span className="text-sm text-neutral-600">1000 м²</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Тип материала
            </label>
            <div className="space-y-2">
              {FACADE_MATERIALS.map(mat => (
                <label
                  key={mat.id}
                  className="flex items-center space-x-3 p-3 border-2 rounded-lg cursor-pointer transition-all hover:border-accent-blue"
                  style={{
                    borderColor: material === mat.id ? '#0077C8' : '#E5E5E5',
                    backgroundColor: material === mat.id ? '#0077C8' + '10' : 'transparent',
                  }}
                >
                  <input
                    type="radio"
                    name="material"
                    value={mat.id}
                    checked={material === mat.id}
                    onChange={e => setMaterial(e.target.value)}
                    className="w-4 h-4 text-accent-blue"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-primary">{mat.name}</div>
                    <div className="text-sm text-neutral-600">
                      {mat.id === 'composite' 
                        ? `от ${formatPrice(COMPOSITE_PRICES[3])}/м²`
                        : `${formatPrice(mat.price)}/м²`
                      }
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Толщина композита - показывать только для композита */}
          {isComposite && (
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">
                Толщина композита (мм)
              </label>
              <div className="flex gap-3">
                {([3, 4] as const).map(value => (
                  <button
                    key={value}
                    onClick={() => setCompositeThickness(value)}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      compositeThickness === value
                        ? 'bg-accent-blue text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    <div>{value} мм</div>
                    <div className="text-xs opacity-80">{formatPrice(COMPOSITE_PRICES[value])}/м²</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Утепление - чекбокс */}
          <div>
            <label className="flex items-center space-x-3 p-3 border-2 rounded-lg cursor-pointer transition-all hover:border-accent-orange"
              style={{
                borderColor: withInsulation ? '#F97316' : '#E5E5E5',
                backgroundColor: withInsulation ? '#F97316' + '10' : 'transparent',
              }}
            >
              <input
                type="checkbox"
                checked={withInsulation}
                onChange={e => setWithInsulation(e.target.checked)}
                className="w-5 h-5 text-accent-orange rounded"
              />
              <div className="flex-1">
                <div className="font-medium text-primary">С утеплением</div>
                <div className="text-sm text-neutral-600">+200 ₽/м²</div>
              </div>
            </label>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-accent-blue to-accent-blue/80 rounded-xl p-5 sm:p-6 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4 opacity-90">Расчёт стоимости:</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Площадь:</span>
                <span className="font-semibold">{area} м²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Материал:</span>
                <span className="font-semibold">{selectedMaterial.name}</span>
              </div>
              {isComposite && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Толщина:</span>
                  <span className="font-semibold">{compositeThickness} мм</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Цена материала:</span>
                <span className="font-semibold">{formatPrice(currentPricePerSqm)}/м²</span>
              </div>
              {withInsulation && (
                <div className="flex justify-between text-sm">
                  <span className="opacity-90">Утепление:</span>
                  <span className="font-semibold">+200 ₽/м²</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="border-t border-white/20 pt-4 mb-6">
              <div className="text-sm opacity-90 mb-1">Итого:</div>
              <div className="text-3xl sm:text-4xl font-bold">{formatPrice(totalPrice)}</div>
            </div>

            <a
              href="https://wa.me/79281958885"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <span>Заказать расчёт</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-xs opacity-75 text-center mt-3">
              * В стоимость входит: подсистема{withInsulation ? ' + утеплитель' : ''} + облицовка
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
