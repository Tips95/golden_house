'use client'

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
          <p className="text-xl text-neutral-200 mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              <Home className="w-5 h-5 mr-2" />
              На главную
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
