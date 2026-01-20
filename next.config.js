/** @type {import('next').NextConfig} */
const nextConfig = {
  // Используем Next.js Server для Timeweb Cloud
  // output: 'export', - УБРАЛИ для использования next start
  
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений для совместимости
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
