'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator as CalcIcon } from 'lucide-react'
import PlasterCalculator from './PlasterCalculator'
import FacadeCalculator from './FacadeCalculator'
import SignageCalculator from './SignageCalculator'

interface CalculatorProps {
  type: 'plaster' | 'facade' | 'signage'
  serviceName: string
}

export default function Calculator({ type, serviceName }: CalculatorProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-accent-blue/5 to-accent-orange/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange rounded-full mb-4">
            <CalcIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="heading-2 mb-4">Калькулятор стоимости</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Рассчитайте примерную стоимость работ онлайн за 30 секунд
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {type === 'plaster' && <PlasterCalculator />}
          {type === 'facade' && <FacadeCalculator />}
          {type === 'signage' && <SignageCalculator />}
        </motion.div>
      </div>
    </section>
  )
}
