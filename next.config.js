/** @type {import('next').NextConfig} */

// Bundle analyzer
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: false, // Keep optimization enabled for Amplify
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize for Amplify
  output: 'standalone',
  trailingSlash: false,
  // Remove headers since Amplify handles them
  async headers() {
    return []
  },
  // Optimize bundle
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          swiper: {
            test: /[\\/]node_modules[\\/]swiper[\\/]/,
            name: 'swiper',
            chunks: 'all',
            priority: 10,
          },
        },
      }
    }
    
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig) 