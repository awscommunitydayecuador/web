'use client'
import { useState, useRef, useEffect } from 'react'

export default function Speakers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const speakers = [
    {
      id: 1,
      name: "María González",
      role: "Senior Cloud Architect",
      company: "Amazon Web Services",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "DevOps Engineer",
      company: "TechCorp Ecuador",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Data Scientist",
      company: "DataFlow Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Luis Fernández",
      role: "Security Specialist",
      company: "SecureCloud Ecuador",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 5,
      name: "Patricia López",
      role: "Solutions Architect",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 6,
      name: "Roberto Silva",
      role: "Full Stack Developer",
      company: "Startup Ecuador",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ]

  // Duplicar speakers para scroll infinito
  const infiniteSpeakers = [...speakers, ...speakers, ...speakers]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? -200 : -300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 200 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons()
      
      return () => container.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  return (
    <section id="speakers" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="gradient-text">Nuestros Speakers</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2">
            Conoce a los expertos que compartirán sus conocimientos y experiencias en el AWS Community Day Ecuador 2025
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="relative">
          {/* Scroll Buttons - Hidden on mobile */}
          <button
            onClick={scrollLeft}
            className={`hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollRight}
            className={`hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Speakers Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 sm:px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteSpeakers.map((speaker, index) => (
              <div 
                key={`${speaker.id}-${index}`} 
                className="card-speaker flex-shrink-0 snap-start min-w-[280px] sm:min-w-[320px] md:min-w-[350px]"
              >
                <div className="text-center">
                  {/* Speaker Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover rounded-full border-4 border-[#f8991d]/20"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f8991d]/20 to-transparent"></div>
                  </div>

                  {/* Speaker Info */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#f8991d] font-semibold mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                    {speaker.company}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 sm:space-x-4">
                    <a href={speaker.social.twitter} className="text-gray-400 hover:text-[#f8991d] transition-colors">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href={speaker.social.linkedin} className="text-gray-400 hover:text-[#f8991d] transition-colors">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={speaker.social.github} className="text-gray-400 hover:text-[#f8991d] transition-colors">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 