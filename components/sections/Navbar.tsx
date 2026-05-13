'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { EVENT } from '@/lib/event'

const NAV = [
  { href: '#sobre', label: 'El Evento' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#venue', label: 'Sede' },
  { href: '#comunidad', label: 'Comunidad' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const sections = NAV.map((n) => n.href.slice(1))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          current = id
          break
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-990/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-wide">
        <div
          className={`flex items-center justify-between gap-8 transition-all ${
            scrolled ? 'h-14' : 'h-16 sm:h-20'
          }`}
        >
          {/* Left: logo + nav inline */}
          <div className="flex items-center gap-8 min-w-0">
            <Link href="/" className="flex items-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-community-day.svg"
                alt="AWS Community Day"
                className="h-7 sm:h-8 w-auto select-none"
                draggable={false}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => {
                const id = item.href.slice(1)
                const isActive = active === id
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'text-ink-0'
                        : 'text-ink-400 hover:text-ink-0'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1 h-1 rounded-full bg-ember-400" />
                    )}
                  </a>
                )
              })}
            </nav>
          </div>

          {/* Right: CTA + mobile burger */}
          <div className="flex items-center gap-3">
            <Link
              href={EVENT.registrationUrl}
              target="_blank"
              className="hidden sm:inline-flex items-center gap-2.5 text-sm text-ink-0 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 px-4 py-2 transition-all"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-ember-400 animate-ping opacity-60" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-ember-400" />
              </span>
              Registro abierto
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-ink-300"
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </Link>

            <button
              aria-label="Abrir menú"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-white/15 bg-white/[0.04]"
            >
              <span className="sr-only">Menú</span>
              <div className="space-y-[5px]">
                <span
                  className={`block h-[1.5px] w-5 bg-ink-0 transition-transform ${
                    open ? 'rotate-45 translate-y-[6.5px]' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-ink-0 transition-opacity ${
                    open ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-ink-0 transition-transform ${
                    open ? '-rotate-45 -translate-y-[6.5px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-fade-up">
            <div className="rounded-3xl border border-white/10 bg-ink-990/95 backdrop-blur-xl shadow-soft p-2 grid gap-0.5">
              {NAV.map((item) => {
                const id = item.href.slice(1)
                const isActive = active === id
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-sm transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-white/[0.05] text-ink-0'
                        : 'text-ink-300 hover:bg-white/[0.04] hover:text-ink-0'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-1 h-1 rounded-full bg-ember-400" />
                      )}
                      {item.label}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-ink-500"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </a>
                )
              })}
              <Link
                href={EVENT.registrationUrl}
                target="_blank"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-ink-0 text-sm font-medium px-4 py-3.5"
              >
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-ember-400 animate-ping opacity-60" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-ember-400" />
                </span>
                Registro abierto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
