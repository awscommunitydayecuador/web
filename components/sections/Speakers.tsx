import Link from 'next/link'
import { fetchSpeakers, type SpeakerDTO } from '@/lib/data'
import { EVENT } from '@/lib/event'

function Initials({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
  return (
    <div className="w-full h-full grid place-items-center bg-gradient-to-br from-brand-electric via-brand-navy to-brand-night text-ink-0 font-display text-lg font-semibold">
      <span className="text-aurora">{initials || '?'}</span>
    </div>
  )
}

function SpeakerCard({ s }: { s: SpeakerDTO }) {
  const meta = [s.role, s.company].filter(Boolean).join(' · ')

  return (
    <div className="group flex flex-col items-center text-center gap-2.5">
      <div className="w-full aspect-square rounded-full overflow-hidden border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-brand-cyan/40">
        {s.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={s.photoUrl}
            alt={s.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Initials name={s.name} />
        )}
      </div>
      <div>
        <h3 className="font-display text-sm font-semibold leading-tight tracking-tight text-ink-0">
          {s.name}
        </h3>
        {meta && (
          <p className="text-[11px] text-ink-500 leading-snug mt-0.5">
            {meta}
          </p>
        )}
      </div>
    </div>
  )
}

export default async function Speakers() {
  const speakers = await fetchSpeakers()
  const hasSpeakers = speakers.length > 0

  return (
    <section
      id="speakers"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="section-veil" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-10 sm:mb-12 items-end">
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Speakers</span>
            <h2 className="section-title">
              Builders, AWS Heroes
              <br />y <span className="text-aurora">voces nuevas</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-ink-300 text-pretty leading-relaxed">
              Estamos terminando de cerrar el line-up de la {EVENT.editionLabel}.
              Si tienes algo que contar sobre la nube, las puertas siguen
              abiertas.
            </p>
            <Link
              href={EVENT.cfpUrl}
              target="_blank"
              className="btn-primary mt-6 tap-target"
            >
              Aplicar como speaker
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {hasSpeakers ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-9">
            {speakers.map((s) => (
              <SpeakerCard key={s.id} s={s} />
            ))}
          </div>
        ) : (
          <div className="surface-elev p-8 sm:p-16 text-center relative overflow-hidden">
            <div className="glow-orb -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/25" />
            <div className="relative">
              <div className="font-mono text-[10px] tracking-[0.3em] text-brand-cyan uppercase mb-3">
                · soon ·
              </div>
              <h3 className="font-display text-2xl sm:text-5xl font-semibold tracking-tighter text-ink-0">
                Los nombres se revelan{' '}
                <span className="text-brand-gradient">pronto</span>.
              </h3>
              <p className="text-ink-400 mt-4 max-w-xl mx-auto">
                ¿Quieres ser uno de ellos? El CFP está abierto.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
