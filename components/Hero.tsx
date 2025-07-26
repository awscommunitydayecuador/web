'use client'

import Countdown from './Countdown'
import Link from 'next/link'
import { getEventData } from '../utils/siteData'

export default function Hero() {
  const eventData = getEventData()

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
      </div>

      <div className="relative z-40 max-w-6xl mx-auto w-full">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 animate-fade-in-up leading-tight">
          <span className="gradient-text">{eventData.title}</span>
          <br />
          <span className="text-white">{eventData.subtitle}</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-3 sm:mb-4 animate-fade-in-up font-light px-2">
          {eventData.date} - {eventData.location}
        </h2>

        {/* Countdown */}
        <div className="mb-4 sm:mb-6 animate-fade-in-up">
          <Countdown />
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 max-w-lg sm:max-w-xl mx-auto animate-fade-in-up leading-relaxed px-2">
          {eventData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center animate-fade-in-up mb-8 sm:mb-12 px-4">
          <Link 
            href={eventData.registrationUrl} 
            target='_blank' 
            className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
          >
            Registrarse Ahora
          </Link>
          <Link 
            href="#about" 
            className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
          >
            Conoce Más
          </Link>
        </div>
      </div>
    </section>
  )
} 