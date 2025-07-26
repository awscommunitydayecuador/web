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
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
        El evento comienza en:
      </h3>
      
      <div className="flex justify-center items-center space-x-4 md:space-x-8">
        <div className="countdown-item">
          <div className="countdown-number animate-pulse-custom">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="countdown-label">Días</div>
        </div>
        
        <div className="text-[#f8991d] text-3xl font-bold animate-pulse">:</div>
        
        <div className="countdown-item">
          <div className="countdown-number animate-pulse-custom">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="countdown-label">Horas</div>
        </div>
        
        <div className="text-[#f8991d] text-3xl font-bold animate-pulse">:</div>
        
        <div className="countdown-item">
          <div className="countdown-number animate-pulse-custom">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="countdown-label">Minutos</div>
        </div>
        
        <div className="text-[#f8991d] text-3xl font-bold animate-pulse">:</div>
        
        <div className="countdown-item">
          <div className="countdown-number animate-pulse-custom">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="countdown-label">Segundos</div>
        </div>
      </div>
    </div>
  )
} 