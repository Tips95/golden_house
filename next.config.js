const path = require('path')

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
  
  // Explicit webpack configuration for path aliases (ensures Docker builds work correctly)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    }
    return config
  },
}

module.exports = nextConfig
