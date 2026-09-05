/** @type {import('next').NextConfig} */

// Bundle analyzer
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config

const nextConfig = {
  // Amplify inyecta las variables de entorno en el BUILD, pero NO en el runtime
  // de la compute SSR: al revalidar el ISR (cada 60s) `process.env` llegaba
  // vacío, fetchAgenda caía al fallback .ics y se perdían fotos, cargos y el
  // tipo real de sesión. Declararlas aquí las fija en el bundle de servidor en
  // tiempo de build, que es la vía soportada en Amplify.
  //
  // AGENDA_API_PASS queda dentro del artefacto de build. Es aceptable porque el
  // artefacto no se sirve al navegador y la credencial es de solo lectura y
  // acotada a un evento; `import 'server-only'` en lib/data.ts hace que el build
  // FALLE si algún día se importa ese módulo desde un componente de cliente,
  // en vez de filtrar la clave al bundle público.
  env: {
    AGENDA_API_URL: process.env.AGENDA_API_URL,
    AGENDA_API_USER: process.env.AGENDA_API_USER,
    AGENDA_API_PASS: process.env.AGENDA_API_PASS,
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
    // `error` y `warn` se conservan a propósito. Son los avisos de por qué la
    // agenda se quedó vacía; borrándolos en el build, un fallo del API vuelve
    // a ser invisible en producción y la sección solo dice "se publica pronto".
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
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