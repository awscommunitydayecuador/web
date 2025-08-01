'use client'
import { useState, useRef, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'

import { getEventData } from '../utils/siteData'

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const swiperRef = useRef<any>(null)
  
  // Memoize data to prevent unnecessary re-renders
  const eventData = useMemo(() => getEventData(), [])
  const eventPhotos = useMemo(() => eventData.photos, [eventData.photos])

  useEffect(() => {
    setIsClient(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    
    // Debounce resize listener
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkMobile, 100)
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex)
  }

  const galleryHeight = isMobile ? '180px' : '300px'

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="gradient-text">Acerca del Evento</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2">
            El AWS Community Day Ecuador es el evento más importante de la comunidad AWS en Ecuador, 
            donde expertos, entusiastas y profesionales se reúnen para compartir conocimiento y experiencias.
          </p>
        </div>

        {/* Material You Gallery */}
        <div className="relative max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Información estática */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="material-you-info">
                <p className="text-[#f8991d] font-semibold text-base sm:text-lg md:text-xl mb-3 sm:mb-4">
                  Eventos Anteriores
                </p>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  Vuelve a Vivir los Momentos
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  Conoce nuestras versiones anteriores de AWS Community Day 2024 y 2023. 
                  Revive los momentos más emocionantes, las charlas técnicas y las conexiones que han marcado nuestra comunidad.
                </p>
              </div>
            </div>

            {/* Gallery */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {isClient && (
                <Swiper
                  modules={[EffectCards, Autoplay, Pagination]}
                  effect="cards"
                  speed={400}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  onSlideChange={handleSlideChange}
                  loop={true}
                  grabCursor={true}
                  className="material-you-swiper max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                  style={{ height: galleryHeight }}
                >
                  {eventPhotos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <div className="material-you-card relative w-full h-full group">
                        {/* Imagen con efecto Material You */}
                        <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl">
                          <Image
                            src={photo.url}
                            alt={photo.title}
                            fill
                            className="object-cover transition-all duration-1000 group-hover:scale-110"
                            priority={index === 0}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 600px"
                            suppressHydrationWarning
                          />
                          
                          {/* Overlay con gradiente dinámico */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          
                          {/* Indicador de color Material You */}
                          <div className={`absolute top-4 right-4 w-4 h-4 bg-gradient-to-r ${photo.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100`}></div>
                          
                          {/* Content overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="material-you-info">
                              <div className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${photo.color} mb-2 sm:mb-3`}>
                                {photo.subtitle}
                              </div>
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{photo.title}</h3>
                              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                                {photo.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              
              {/* Fallback for SSR */}
              {!isClient && (
                <div className="max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-gray-800 rounded-2xl flex items-center justify-center" style={{ height: galleryHeight }}>
                  <div className="text-gray-400">Cargando galería...</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Charlas */}
          <div className="card-speaker group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white text-center">Charlas</h3>
            <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
              Sesiones técnicas impartidas por expertos en AWS que comparten sus experiencias, mejores prácticas y casos de uso reales.
            </p>
          </div>

          {/* Hands-on Labs */}
          <div className="card-speaker group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white text-center">Hands-on Labs</h3>
            <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
              Talleres prácticos donde podrás experimentar directamente con servicios AWS y construir soluciones reales.
            </p>
          </div>

          {/* Networking */}
          <div className="card-speaker group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white text-center">Networking</h3>
            <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
              Conecta con profesionales del sector, comparte experiencias y construye relaciones profesionales duraderas.
            </p>
          </div>

          {/* Comunidad */}
          <div className="card-speaker group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white text-center">Comunidad</h3>
            <p className="text-sm sm:text-base text-gray-300 text-center leading-relaxed">
              Únete a la creciente comunidad AWS en Ecuador y forma parte de un ecosistema de aprendizaje continuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 