'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Редирект: услуга LED-экраны объединена с «Наружная реклама и вывески».
 */
export default function LedScreensRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/services/naruzhnaya-reklama/')
  }, [router])

  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="text-neutral-500">Перенаправление на обновлённую услугу…</p>
    </div>
  )
}
