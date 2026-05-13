import Link from 'next/link'
import { fetchSpeakers, type SpeakerDTO } from '@/lib/data'
import { EVENT } from '@/lib/event'
import { Twitter, LinkedIn, Github, Globe } from '@/components/icons/Social'

function Initials({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
  return (
    <div className="w-full aspect-square grid place-items-center bg-gradient-to-br from-ink-900 via-ink-950 to-ink-990 text-ink-0 font-display text-6xl font-semibold tracking-tighter">
      <span className="text-aurora">{initials || '?'}</span>
    </div>
  )
}

function SpeakerCard({ s }: { s: SpeakerDTO }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:-translate-y-1">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-ember-500/20 blur-3xl" />
      </div>

      <div className="aspect-[4/5] overflow-hidden relative">
        {s.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={s.photoUrl}
            alt={s.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Initials name={s.name} />
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-990 via-ink-990/40 to-transparent" />
      </div>

      <div className="relative p-5 -mt-16">
        <div className="space-y-1">
          {s.company && (
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ember-400">
              {s.company}
            </div>
          )}
          <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-ink-0">
            {s.name}
          </h3>
          {s.role && (
            <div className="text-sm text-ink-400 leading-snug">{s.role}</div>
          )}
        </div>
        <div className="flex items-center gap-1.5 mt-4">
          {s.twitter && (
            <a
              href={s.twitter}
              target="_blank"
              aria-label="X"
              className="p-1.5 rounded-lg border border-white/10 hover:border-ember-400/50 hover:text-ember-300 transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          )}
          {s.linkedin && (
            <a
              href={s.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="p-1.5 rounded-lg border border-white/10 hover:border-ember-400/50 hover:text-ember-300 transition-colors"
            >
              <LinkedIn className="w-3.5 h-3.5" />
            </a>
          )}
          {s.github && (
            <a
              href={s.github}
              target="_blank"
              aria-label="GitHub"
              className="p-1.5 rounded-lg border border-white/10 hover:border-ember-400/50 hover:text-ember-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {s.website && (
            <a
              href={s.website}
              target="_blank"
              aria-label="Web"
              className="p-1.5 rounded-lg border border-white/10 hover:border-ember-400/50 hover:text-ember-300 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default async function Speakers() {
  const speakers = await fetchSpeakers()
  const hasSpeakers = speakers.length > 0

  return (
    <section
      id="speakers"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-aurora-violet/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
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
              className="btn-primary mt-6"
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {speakers.map((s) => (
              <SpeakerCard key={s.id} s={s} />
            ))}
          </div>
        ) : (
          <div className="surface-elev p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="glow-orb -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-ember-500/25" />
            <div className="relative">
              <div className="font-mono text-[10px] tracking-[0.3em] text-ember-400 uppercase mb-3">
                · soon ·
              </div>
              <h3 className="font-display text-3xl sm:text-5xl font-semibold tracking-tighter text-ink-0">
                Los nombres se revelan{' '}
                <span className="text-ember-gradient">pronto</span>.
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
