const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статическая генерация для Timeweb Cloud Frontend Apps
  output: 'export',
  
  // Trailing slash для лучшей совместимости со статическим хостингом
  trailingSlash: true,
  
  // Timeweb часто деплоит с NODE_ENV=production и может не установить devDependencies,
  // из-за чего next build падает на этапе ESLint. Отключаем ESLint во время build.
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true, // Обязательно для статического экспорта
  },
  
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Production optimizations (compress не работает со статическим экспортом)
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Explicit webpack configuration for path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    }
    return config
  },
}

module.exports = nextConfig
