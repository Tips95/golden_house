'use client'

import { useState } from 'react'
import { formatPrice } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

const FACADE_MATERIALS = [
  { id: 'ceramic', name: 'Керамогранит', price: 3200 },
  { id: 'composite', name: 'Алюкобонд', price: 2800 },
  { id: 'fiber', name: 'Фиброцементные панели', price: 2400 },
  { id: 'hpl', name: 'HPL-панели', price: 3500 },
]

export default function FacadeCalculator() {
  const [area, setArea] = useState(150)
  const [material, setMaterial] = useState(FACADE_MATERIALS[0].id)
  const [insulationThickness, setInsulationThickness] = useState(100)

  const selectedMaterial = FACADE_MATERIALS.find(m => m.id === material) || FACADE_MATERIALS[0]

  const calculatePrice = () => {
    let basePrice = area * selectedMaterial.price
    
    // Доплата за утепление больше 100 мм
    if (insulationThickness > 100) {
      const extraInsulation = (insulationThickness - 100) / 50
      basePrice += area * (extraInsulation * 200)
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
                    <div className="text-sm text-neutral-600">{formatPrice(mat.price)}/м²</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-3">
              Толщина утепления (мм)
            </label>
            <div className="flex gap-2">
              {[50, 100, 150, 200].map(value => (
                <button
                  key={value}
                  onClick={() => setInsulationThickness(value)}
                  className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-all ${
                    insulationThickness === value
                      ? 'bg-accent-blue text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-accent-blue to-accent-blue/80 rounded-xl p-6 text-white flex flex-col justify-between">
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
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Цена материала:</span>
                <span className="font-semibold">{formatPrice(selectedMaterial.price)}/м²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="opacity-90">Утепление:</span>
                <span className="font-semibold">{insulationThickness} мм</span>
              </div>
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
              * В стоимость входит: подсистема + утеплитель + облицовка
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
