import Link from 'next/link'
import { EVENT } from '@/lib/event'

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-28">
      <div className="container-wide">
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 overflow-hidden bg-brand-night">
          {/* Aurora mesh background */}
          <div className="absolute inset-0 bg-aurora-mesh animate-aurora-shift" />
          <div className="absolute inset-0 bg-brand-night/40" />
          <div className="absolute inset-0 bg-grid bg-grid opacity-[0.2]" />

          <div className="relative grid md:grid-cols-12 gap-8 sm:gap-10 p-6 sm:p-14 lg:p-20 items-center">
            <div className="md:col-span-7">
              <span className="chip-brand mb-5">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-brand-cyan animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-brand-cyan" />
                </span>
                Cupos limitados · {EVENT.editionLabel}
              </span>
              <h2 className="font-display text-3xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[0.95] sm:leading-[0.92] text-ink-0">
                Nos vemos en
                <br />
                <span className="text-aurora">Cuenca</span>, el 5/9.
              </h2>
              <p className="mt-4 sm:mt-5 text-ink-200 text-pretty max-w-xl text-base sm:text-lg leading-relaxed">
                Registro 100% gratuito. Confirma tu lugar antes de que se llene —
                los pasados Community Day se llenaron en menos de 72 horas.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3">
              <Link
                href={EVENT.registrationUrl}
                target="_blank"
                className="btn-primary justify-center w-full text-base py-4 tap-target"
              >
                Registrarme gratis
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                href={EVENT.cfpUrl}
                target="_blank"
                className="btn-ghost justify-center w-full py-4 tap-target"
              >
                Quiero ser speaker
              </Link>
              <Link
                href={`mailto:${EVENT.sponsorEmail}`}
                className="btn-ghost justify-center w-full py-4 tap-target"
              >
                Patrocinar el evento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
