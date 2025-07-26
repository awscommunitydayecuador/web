'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-aws-dark-blue/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-8 sm:w-44 sm:h-12">
                <Image
                  src="/logo-community-day.svg"
                  alt="AWS Community Day Ecuador"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link href="#about" className="text-white hover:text-[#f8991d] transition-colors text-sm xl:text-base">
                Acerca de
              </Link>
              <Link href="#speakers" className="text-white hover:text-[#f8991d] transition-colors text-sm xl:text-base">
                Speakers
              </Link>
              <Link href="#sponsors" className="text-white hover:text-[#f8991d] transition-colors text-sm xl:text-base">
                Sponsors
              </Link>
              <Link href="#venue" className="text-white hover:text-[#f8991d] transition-colors text-sm xl:text-base">
                Lugar
              </Link>
              <Link href="#community" className="text-white hover:text-[#f8991d] transition-colors text-sm xl:text-base">
                Comunidad
              </Link>
              <Link 
                href="https://awscommunitydayec.eventbrite.com/" 
                target='_blank'
                className="btn-primary-sm text-sm xl:text-base"
              >
                Registrarse
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <Link 
                href="https://awscommunitydayec.eventbrite.com/" 
                target='_blank'
                className="btn-primary-sm text-sm hidden sm:block"
              >
                Registrarse
              </Link>
              <button
                className="text-white p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Separated from navbar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-aws-dark-blue/98 backdrop-blur-md z-[9999]">
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
            <button
              className="absolute top-4 right-4 text-white p-2 hover:text-[#f8991d] transition-colors"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <Link href="#about" className="text-white text-lg sm:text-xl hover:text-[#f8991d] transition-colors text-center" onClick={closeMobileMenu}>
              Acerca de
            </Link>
            <Link href="#speakers" className="text-white text-lg sm:text-xl hover:text-[#f8991d] transition-colors text-center" onClick={closeMobileMenu}>
              Speakers
            </Link>
            <Link href="#sponsors" className="text-white text-lg sm:text-xl hover:text-[#f8991d] transition-colors text-center" onClick={closeMobileMenu}>
              Sponsors
            </Link>
            <Link href="#venue" className="text-white text-lg sm:text-xl hover:text-[#f8991d] transition-colors text-center" onClick={closeMobileMenu}>
              Lugar
            </Link>
            <Link href="#community" className="text-white text-lg sm:text-xl hover:text-[#f8991d] transition-colors text-center" onClick={closeMobileMenu}>
              Comunidad
            </Link>
            <Link 
              href="https://awscommunitydayec.eventbrite.com/" 
              target='_blank'
              className="btn-primary-sm text-base mt-4"
              onClick={closeMobileMenu}
            >
              Registrarse
            </Link>
          </div>
        </div>
      )}
    </>
  )
} 