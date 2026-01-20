/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Export для TimeWeb Cloud Frontend Apps
  output: 'export',
  
  // Для статического экспорта нужно отключить оптимизацию изображений
  images: {
    unoptimized: true,
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
