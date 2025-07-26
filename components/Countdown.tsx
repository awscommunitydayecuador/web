'use client'

import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-10-25T08:00:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-4 text-center px-2">
        El evento comienza en:
      </h3>
      
      <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8">
        <div className="countdown-item">
          <div className="countdown-number animate-pulse-custom text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="countdown-label text-xs sm:text-sm md:text-base">Días</div>
        </div>
        
        <div className="text-[#f8991d] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold animate-pulse">:</div>
        
        <div className="countdown-item">
          <div className="countdown-number animate-pulse-custom text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="countdown-label text-xs sm:text-sm md:text-base">Horas</div>
        </div>
        
        <div className="text-[#f8991d] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold animate-pulse">:</div>
        
        <div className="countdown-item">
          <div className="countdown-number animate-pulse-custom text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="countdown-label text-xs sm:text-sm md:text-base">Minutos</div>
        </div>
        
        <div className="text-[#f8991d] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold animate-pulse">:</div>
        
        <div className="countdown-item">
          <div className="countdown-number animate-pulse-custom text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="countdown-label text-xs sm:text-sm md:text-base">Segundos</div>
        </div>
      </div>
    </div>
  )
} 