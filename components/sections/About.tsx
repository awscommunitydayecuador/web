import { EVENT } from '@/lib/event'

const PILLARS = [
  {
    tag: '01',
    title: 'Charlas técnicas',
    body:
      'Sesiones de 30–45 min sobre arquitectura serverless, IA generativa, datos, seguridad y DevOps en AWS.',
    accent: 'cyan' as const,
    icon: (
      <path
        d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    tag: '02',
    title: 'Talleres hands-on',
    body:
      'Pon manos al teclado: builds reales con SageMaker, Bedrock, Lambda, CDK y más, guiados por expertos.',
    accent: 'violet' as const,
    icon: (
      <path
        d="m4 17 6-6-6-6M12 19h8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    tag: '03',
    title: 'Networking',
    body:
      'Conecta con AWS Heroes, Community Builders, equipos de empresas locales y reclutadores cloud.',
    accent: 'blue' as const,
    icon: (
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    tag: '04',
    title: '100% gratis',
    body:
      'Cero costo, organizado por la comunidad. Beneficios extra para estudiantes y profesionales en transición.',
    accent: 'sky' as const,
    icon: (
      <path
        d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
]

const ACCENT_STYLES = {
  cyan: {
    chip: 'text-brand-cyan border-brand-cyan/40 bg-brand-cyan/10',
    icon: 'text-brand-cyan bg-brand-cyan/10 border-brand-cyan/30',
    glow: 'bg-brand-cyan/30',
  },
  violet: {
    chip: 'text-brand-purple border-brand-magenta/40 bg-brand-magenta/10',
    icon: 'text-brand-magenta bg-brand-magenta/10 border-brand-magenta/30',
    glow: 'bg-brand-magenta/30',
  },
  blue: {
    chip: 'text-brand-sky border-brand-blue/40 bg-brand-blue/10',
    icon: 'text-brand-sky bg-brand-blue/10 border-brand-blue/30',
    glow: 'bg-brand-blue/30',
  },
  sky: {
    chip: 'text-brand-sky border-brand-sky/40 bg-brand-sky/10',
    icon: 'text-brand-sky bg-brand-sky/10 border-brand-sky/30',
    glow: 'bg-brand-sky/25',
  },
}

export default function About() {
  return (
    <section id="sobre" className="relative py-20 sm:py-32">
      <div className="section-veil" />
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 sm:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Sobre el evento · {EVENT.editionRoman}</span>
            <h2 className="section-title">
              Un día para hacer{' '}
              <span className="text-brand-gradient">build</span>,
              <br />
              no para mirar slides.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-base sm:text-lg text-ink-300 text-pretty leading-relaxed">
              {EVENT.name} {EVENT.region} reúne a la comunidad cloud del país en
              su{' '}
              <span className="text-ink-0 font-medium">
                {EVENT.editionLabel}
              </span>
              . Después de dos ediciones en{' '}
              <span className="text-ink-0">Guayaquil</span> y una en{' '}
              <span className="text-ink-0">Quito</span>, aterrizamos en{' '}
              <span className="text-brand-cyan">Cuenca</span> con formato
              renovado, más prácticas y más comunidad.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p) => {
            const styles = ACCENT_STYLES[p.accent]
            return (
              <article
                key={p.tag}
                className="group relative surface p-6 sm:p-7 min-h-[240px] sm:min-h-[260px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className={`glow-orb -top-12 -right-12 w-44 h-44 ${styles.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative flex items-center justify-between">
                  <div
                    className={`grid place-items-center w-11 h-11 rounded-xl border ${styles.icon}`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {p.icon}
                    </svg>
                  </div>
                  <span
                    className={`font-mono text-[10px] tracking-[0.22em] uppercase px-2 py-1 rounded-full border ${styles.chip}`}
                  >
                    /{p.tag}
                  </span>
                </div>
                <div className="relative mt-6">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink-0 leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-400 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
