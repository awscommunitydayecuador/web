import Link from 'next/link'
import Countdown from './Countdown'
import { EVENT } from '@/lib/event'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 lg:pt-36 pb-16">
      {/* Background layers */}
      <div className="aurora-canvas" />
      <div className="absolute inset-0 -z-10 bg-grid bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="grain" />

      <div className="container-wide relative">
        {/* Edition chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-up">
          <span className="chip-ember">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-ember-400 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-ember-400" />
            </span>
            {EVENT.editionLabel} · {EVENT.editionRoman}
          </span>
          <span className="chip">{EVENT.city} · {EVENT.country}</span>
          <span className="chip">05 · 09 · 2026</span>
        </div>

        {/* Logo lockup */}
        <div className="relative mx-auto max-w-5xl text-center animate-fade-up [animation-delay:80ms]">
          {/* Glow behind logo */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-72 -z-0 pointer-events-none">
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-ember-500/30 blur-[100px]" />
            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-aurora-violet/25 blur-[100px]" />
          </div>

          <div className="relative px-4 sm:px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-community-day.svg"
              alt="AWS Community Day"
              className="w-full h-auto select-none"
              draggable={false}
            />
          </div>

          {/* Edition tagline under logo */}
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5 font-display text-sm sm:text-base text-ink-300">
            <span className="font-mono uppercase tracking-[0.32em] text-ember-300">
              {EVENT.editionRoman}
            </span>
            <span className="w-px h-4 bg-white/20" />
            <span>Ecuador {EVENT.edition}</span>
            <span className="w-px h-4 bg-white/20" />
            <span className="text-ink-0">{EVENT.city}</span>
            <span className="w-px h-4 bg-white/20" />
            <span>05 · 09 · 26</span>
          </div>

          {/* Subhead */}
          <p className="relative mt-7 mx-auto max-w-2xl text-ink-300 text-pretty text-base sm:text-lg leading-relaxed">
            {EVENT.description}
          </p>

          {/* CTAs */}
          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={EVENT.registrationUrl}
              target="_blank"
              className="btn-primary text-base px-7 py-3.5"
            >
              Registrarme gratis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="#sobre" className="btn-ghost text-base px-7 py-3.5">
              Conocer el evento
            </Link>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-12 gap-4 mt-16 animate-fade-up [animation-delay:160ms]">
          {/* Date + countdown */}
          <div className="surface-elev lg:col-span-5 p-7 sm:p-9 relative">
            <div className="glow-orb -top-20 -right-20 w-72 h-72 bg-ember-500/30" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-400 mb-3">
                  Save the date
                </div>
                <div className="font-display text-6xl sm:text-7xl font-semibold leading-none tracking-tighter text-ink-0">
                  05<span className="text-ember-400">.</span>09
                </div>
                <div className="text-ink-400 mt-2 font-mono text-xs tracking-wider uppercase">
                  sábado · {EVENT.timeLabel}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-400">
                  Edición
                </div>
                <div className="font-display text-7xl sm:text-8xl font-semibold leading-none text-ember-gradient">
                  {EVENT.editionRoman}
                </div>
              </div>
            </div>
            <div className="relative mt-8 pt-6 border-t border-white/10">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-400 mb-3">
                Cuenta regresiva
              </div>
              <Countdown />
            </div>
          </div>

          {/* Venue card */}
          <div className="surface-aurora lg:col-span-7 p-7 sm:p-9 relative flex flex-col justify-between min-h-[260px]">
            <div className="glow-orb top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-aurora-violet/20" />
            <div className="relative flex items-start gap-5">
              <div className="grid place-items-center w-14 h-14 rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur shrink-0 font-display text-base font-semibold text-ink-0">
                UPS
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-400 mb-2">
                  Sede oficial · {EVENT.city}
                </div>
                <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink-0 leading-tight">
                  Universidad Politécnica
                  <br />
                  Salesiana
                </div>
                <div className="text-sm text-ink-300 mt-2">{EVENT.venueAddress}</div>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <Stat value="500+" label="builders" accent="ember" />
              <Stat value="30+" label="sesiones" accent="violet" />
              <Stat value="IV" label="edición" accent="cyan" />
            </div>
          </div>
        </div>

        {/* Pillars row */}
        <div className="mt-4 grid sm:grid-cols-3 gap-4 animate-fade-up [animation-delay:240ms]">
          <Pill icon="lightning" title="Charlas técnicas" body="Serverless, IA generativa, datos y seguridad." />
          <Pill icon="terminal" title="Talleres hands-on" body="Build real con Bedrock, SageMaker y CDK." />
          <Pill icon="users" title="Networking" body="AWS Heroes, Community Builders y reclutadores." />
        </div>
      </div>
    </section>
  )
}

function Stat({
  value,
  label,
  accent,
}: {
  value: string
  label: string
  accent: 'ember' | 'violet' | 'cyan'
}) {
  const color =
    accent === 'ember'
      ? 'text-ember-400'
      : accent === 'violet'
      ? 'text-aurora-violet'
      : 'text-aurora-cyan'
  return (
    <div>
      <div className={`font-display text-3xl sm:text-4xl font-semibold leading-none tracking-tighter ${color}`}>
        {value}
      </div>
      <div className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.22em] text-ink-400">
        {label}
      </div>
    </div>
  )
}

function Pill({
  icon,
  title,
  body,
}: {
  icon: 'lightning' | 'terminal' | 'users'
  title: string
  body: string
}) {
  return (
    <div className="surface p-5 flex items-start gap-4">
      <div className="grid place-items-center w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 text-ember-400 shrink-0">
        <Icon name={icon} />
      </div>
      <div>
        <div className="font-display text-base font-semibold text-ink-0">
          {title}
        </div>
        <div className="text-xs text-ink-400 mt-1 leading-relaxed">{body}</div>
      </div>
    </div>
  )
}

function Icon({ name }: { name: 'lightning' | 'terminal' | 'users' }) {
  if (name === 'lightning')
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    )
  if (name === 'terminal')
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 17 6-6-6-6M12 19h8" />
      </svg>
    )
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    </svg>
  )
}
