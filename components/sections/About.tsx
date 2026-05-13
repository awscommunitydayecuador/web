import { EVENT } from '@/lib/event'

const PILLARS = [
  {
    tag: '01',
    title: 'Charlas técnicas',
    body:
      'Sesiones de 30–45 min sobre arquitectura serverless, IA generativa, datos, seguridad y DevOps en AWS.',
    accent: 'ember' as const,
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
    accent: 'cyan' as const,
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
    accent: 'lime' as const,
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
  ember: {
    chip: 'text-ember-300 border-ember-400/40 bg-ember-500/10',
    icon: 'text-ember-400 bg-ember-500/10 border-ember-400/30',
    glow: 'bg-ember-500/30',
  },
  violet: {
    chip: 'text-aurora-violet border-aurora-violet/40 bg-aurora-violet/10',
    icon: 'text-aurora-violet bg-aurora-violet/10 border-aurora-violet/30',
    glow: 'bg-aurora-violet/30',
  },
  cyan: {
    chip: 'text-aurora-cyan border-aurora-cyan/40 bg-aurora-cyan/10',
    icon: 'text-aurora-cyan bg-aurora-cyan/10 border-aurora-cyan/30',
    glow: 'bg-aurora-cyan/30',
  },
  lime: {
    chip: 'text-aurora-lime border-aurora-lime/40 bg-aurora-lime/10',
    icon: 'text-aurora-lime bg-aurora-lime/10 border-aurora-lime/30',
    glow: 'bg-aurora-lime/25',
  },
}

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Sobre el evento · {EVENT.editionRoman}</span>
            <h2 className="section-title">
              Un día para hacer{' '}
              <span className="text-ember-gradient">build</span>,
              <br />
              no para mirar slides.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-lg text-ink-300 text-pretty leading-relaxed">
              {EVENT.name} {EVENT.region} reúne a la comunidad cloud del país en
              su{' '}
              <span className="text-ink-0 font-medium">
                {EVENT.editionLabel}
              </span>
              . Después de dos ediciones en{' '}
              <span className="text-ink-0">Guayaquil</span> y una en{' '}
              <span className="text-ink-0">Quito</span>, aterrizamos en{' '}
              <span className="text-ember-300">Cuenca</span> con formato
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
                className="group relative surface p-6 sm:p-7 min-h-[260px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
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
                <div className="relative">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-0 leading-tight">
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
