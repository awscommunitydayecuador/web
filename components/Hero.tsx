'use client'

import Countdown from './Countdown'
import Link from 'next/link'
import { getEventData } from '../utils/siteData'

export default function Hero() {
  const eventData = getEventData()

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 overflow-hidden">
              {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        </div>

      <div className="relative z-40 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 animate-fade-in-up">
          <span className="gradient-text">{eventData.title}</span>
          <br />
          <span className="text-white">Ecuador 2025</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-base md:text-lg lg:text-xl text-gray-300 mb-3 animate-fade-in-up font-light">
          {eventData.date} - {eventData.location}
        </h2>

        {/* Countdown */}
        <div className="mb-6 animate-fade-in-up">
          <Countdown />
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl mx-auto animate-fade-in-up leading-relaxed">
          {eventData.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up mb-12">
          <Link href={eventData.registrationUrl} target='_blank' className="btn-primary text-base px-8 py-4">
            Registrarse Ahora
          </Link>
          <Link href="#about" className="btn-secondary text-base px-8 py-4">
            Conoce Más
          </Link>
        </div>
      </div>

      
    </section>
  )
} 