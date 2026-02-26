'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Редирект: услуга СКУД объединена с «Шлагбаумы и СКУД» (avtomatika-vorot).
 */
export default function SkudRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/services/avtomatika-vorot/')
  }, [router])

  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <p className="text-neutral-500">Перенаправление на страницу услуги…</p>
    </div>
  )
}
