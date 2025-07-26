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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-aws-dark-blue/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-44 h-12">
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
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-white hover:text-[#f8991d] transition-colors">
              Acerca de
            </Link>
            <Link href="#speakers" className="text-white hover:text-[#f8991d] transition-colors">
              Speakers
            </Link>
            <Link href="#sponsors" className="text-white hover:text-[#f8991d] transition-colors">
              Sponsors
            </Link>
            <Link href="#venue" className="text-white hover:text-[#f8991d] transition-colors">
              Lugar
            </Link>
            <Link href="#community" className="text-white hover:text-[#f8991d] transition-colors">
              Comunidad
            </Link>
            <Link 
              href="https://awscommunitydayec.eventbrite.com/" 
              target='_blank'
              className="btn-primary-sm"
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-aws-dark-blue/95 backdrop-blur-md transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <Link href="#about" className="text-white text-xl hover:text-[#f8991d] transition-colors" onClick={closeMobileMenu}>
            Acerca de
          </Link>
          <Link href="#speakers" className="text-white text-xl hover:text-[#f8991d] transition-colors" onClick={closeMobileMenu}>
            Speakers
          </Link>
          <Link href="#sponsors" className="text-white text-xl hover:text-[#f8991d] transition-colors" onClick={closeMobileMenu}>
            Sponsors
          </Link>
          <Link href="#venue" className="text-white text-xl hover:text-[#f8991d] transition-colors" onClick={closeMobileMenu}>
            Lugar
          </Link>
          <Link href="#community" className="text-white text-xl hover:text-[#f8991d] transition-colors" onClick={closeMobileMenu}>
            Comunidad
          </Link>
          <Link 
            href="#register" 
            className="btn-primary-sm"
            onClick={closeMobileMenu}
          >
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  )
} 