import Link from 'next/link'
import { fetchVenue } from '@/lib/data'
import { EVENT } from '@/lib/event'

export default async function Venue() {
  const v = await fetchVenue()
  const name = v?.name || EVENT.venueName
  const address = v?.address || EVENT.venueAddress
  const city = v?.city || EVENT.city
  const country = v?.country || EVENT.country
  const date = v?.eventDate || EVENT.dateLabel
  const time = v?.eventTime || EVENT.timeLabel
  const mapsEmbed = v?.mapsEmbedUrl || EVENT.mapsEmbedUrl
  const mapsLink = v?.mapsLinkUrl || EVENT.mapsLinkUrl
  const description =
    v?.description ||
    'La UPS Cuenca es la nueva sede del Community Day. Auditorios equipados, espacios abiertos para networking y una de las universidades más activas de la región.'

  return (
    <section
      id="venue"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="section-veil" />
      <div className="absolute -top-32 left-0 w-[600px] h-[400px] bg-brand-cyan/12 blur-[120px] pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-14">
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Sede · {EVENT.editionRoman} edición</span>
            <h2 className="section-title">
              Aterrizamos en
              <br />
              <span className="text-aurora">Cuenca</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-ink-300 text-pretty leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4">
          {/* Map */}
          <div className="relative lg:col-span-7 rounded-3xl border border-white/10 overflow-hidden bg-brand-night aspect-[16/12] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[520px] group">
            <iframe
              title="Mapa del venue"
              src={mapsEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[60%] contrast-110 brightness-[0.85] transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
            />
            {/* Corner pin */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 pointer-events-none inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 bg-brand-night/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-brand-sky shadow-[0_8px_24px_-6px_rgba(2,8,36,0.7)]">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-brand-cyan">
                <circle cx="12" cy="12" r="6" />
              </svg>
              UPS Cuenca
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 grid gap-4">
            <div className="surface-elev p-6 sm:p-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-400 mb-3">
                Sede oficial
              </div>
              <div className="font-display text-xl sm:text-3xl font-semibold tracking-tight text-ink-0 leading-tight">
                {name}
              </div>
              <div className="text-ink-300 mt-2 text-sm sm:text-base">{address}</div>
              <div className="text-ink-500 text-sm mt-1">
                {city}, {country}
              </div>
            </div>

            <div className="surface-brand p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-brand-magenta/40 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] mb-3 text-white/80">
                  Fecha
                </div>
                <div className="font-display text-xl sm:text-3xl font-semibold tracking-tight text-white">
                  {date}
                </div>
                <div className="text-white/80 mt-2 font-mono text-xs tracking-wider uppercase">
                  {time}
                </div>
              </div>
            </div>

            <Link
              href={mapsLink}
              target="_blank"
              className="group surface-elev p-5 sm:p-7 flex items-center justify-between gap-4 hover:border-brand-cyan/30 transition-colors tap-target"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-400 mb-1">
                  Cómo llegar
                </div>
                <div className="font-display text-base sm:text-lg font-semibold text-ink-0">
                  Abrir en Google Maps
                </div>
              </div>
              <span className="grid place-items-center w-10 h-10 rounded-full border border-white/15 text-ink-0 group-hover:border-brand-cyan/60 group-hover:bg-brand-blue/10 transition-all">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
