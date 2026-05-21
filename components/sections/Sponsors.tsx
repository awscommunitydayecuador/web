import Link from 'next/link'
import { fetchSponsors, type SponsorDTO } from '@/lib/data'
import { EVENT } from '@/lib/event'

const TIER_LABEL: Record<SponsorDTO['tier'], string> = {
  platinum: 'Platinum',
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  community: 'Community partner',
}

const TIER_ACCENT: Record<SponsorDTO['tier'], string> = {
  platinum: 'text-ink-0',
  gold: 'text-aurora-gold',
  silver: 'text-ink-300',
  bronze: 'text-brand-cyan',
  community: 'text-brand-purple',
}

const TIER_ORDER: SponsorDTO['tier'][] = [
  'platinum',
  'gold',
  'silver',
  'bronze',
  'community',
]

function SponsorTile({ s }: { s: SponsorDTO }) {
  const inner = (
    <div className="aspect-[3/2] grid place-items-center p-6 sm:p-7 transition-transform duration-300 group-hover:scale-[1.03]">
      {s.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={s.logoUrl}
          alt={s.name}
          className="max-h-full max-w-full object-contain transition duration-500 brightness-0 invert opacity-70 group-hover:opacity-100 group-hover:filter-none"
        />
      ) : (
        <span className="font-display text-base sm:text-2xl font-semibold tracking-tight text-ink-200 text-center">
          {s.name}
        </span>
      )}
    </div>
  )
  const wrapClass =
    'group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.06]'

  return s.website ? (
    <a
      href={s.website}
      target="_blank"
      rel="noopener noreferrer"
      className={wrapClass}
    >
      {inner}
    </a>
  ) : (
    <div className={wrapClass}>{inner}</div>
  )
}

export default async function Sponsors() {
  const sponsors = await fetchSponsors()
  const grouped = TIER_ORDER.map((tier) => ({
    tier,
    items: sponsors.filter((s) => s.tier === tier),
  })).filter((g) => g.items.length > 0)

  return (
    <section id="sponsors" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="section-veil" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-magenta/10 blur-[120px] pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 sm:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Sponsors</span>
            <h2 className="section-title">
              Las marcas que creen
              <br />
              en la <span className="text-violet-gradient">comunidad</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-ink-300 text-pretty leading-relaxed">
              Patrocinar el AWS Community Day Ecuador es invertir en el talento
              cloud del país. Hay paquetes para todos los tamaños.
            </p>
            <Link
              href={`mailto:${EVENT.sponsorEmail}`}
              className="btn-primary mt-6 tap-target"
            >
              Quiero ser sponsor
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

        {grouped.length === 0 ? (
          <div className="surface-elev p-8 sm:p-16 text-center relative overflow-hidden">
            <div className="glow-orb -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/25" />
            <div className="relative">
              <div className="font-mono text-[10px] tracking-[0.3em] text-brand-cyan uppercase mb-3">
                · recruiting ·
              </div>
              <h3 className="font-display text-2xl sm:text-5xl font-semibold tracking-tighter text-ink-0">
                Tu logo podría{' '}
                <span className="text-brand-gradient">estar aquí</span>.
              </h3>
              <p className="text-ink-400 mt-4 max-w-xl mx-auto">
                Conviértete en aliado de la comunidad AWS de Ecuador y conecta
                con 500+ profesionales del ecosistema cloud.
              </p>
              <Link
                href={`mailto:${EVENT.sponsorEmail}`}
                className="btn-primary mt-7"
              >
                Escríbenos
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {grouped.map(({ tier, items }) => (
              <div key={tier}>
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className={`font-display text-sm font-semibold tracking-tight uppercase ${TIER_ACCENT[tier]}`}
                  >
                    {TIER_LABEL[tier]}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
                  <span className="font-mono text-[10px] text-ink-500 tracking-[0.22em] uppercase">
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>
                <div
                  className={`grid gap-3 sm:gap-4 ${
                    tier === 'platinum'
                      ? 'sm:grid-cols-2'
                      : tier === 'gold'
                      ? 'sm:grid-cols-2 md:grid-cols-3'
                      : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                  }`}
                >
                  {items.map((s) => (
                    <SponsorTile key={s.id} s={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
