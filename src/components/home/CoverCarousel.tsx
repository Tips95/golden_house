'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CompanyCover from './CompanyCover'
import ServicesCover from './ServicesCover'

export default function CoverCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 2)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const handleNext = () => {
    setCurrentSlide(1)
    // Scroll to top to show the services cover
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePrev = () => {
    setCurrentSlide(0)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          <motion.div
            key="company"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <CompanyCover onNext={handleNext} />
          </motion.div>
        ) : (
          <motion.div
            key="services"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <ServicesCover onPrev={handlePrev} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
