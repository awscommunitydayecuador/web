import Link from 'next/link'
import { EVENT } from '@/lib/event'
import { Instagram, LinkedIn, Facebook, Twitter } from '@/components/icons/Social'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-night/80 backdrop-blur-xl overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute -top-32 right-0 w-[500px] h-[300px] bg-brand-magenta/10 blur-[120px] pointer-events-none" />

      <div className="container-wide relative py-14 sm:py-20">
        {/* Wordmark */}
        <div className="mb-10 sm:mb-14">
          <div className="font-display font-semibold tracking-tighter leading-[0.95] sm:leading-[0.9] text-[clamp(1rem,4.5vw,4rem)] text-ink-0">
            AWS Community Day
            <span className="block text-brand-gradient">Ecuador {EVENT.edition}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <p className="text-ink-300 max-w-md text-sm leading-relaxed">
              Organizado por la comunidad AWS de Ecuador. AWS y los logos
              relacionados son marcas registradas de Amazon.com, Inc.
            </p>
            <div className="flex items-center gap-1.5 mt-6">
              <a
                href={EVENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl border border-white/10 text-ink-300 hover:border-brand-cyan/50 hover:text-brand-cyan hover:bg-brand-blue/5 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={EVENT.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl border border-white/10 text-ink-300 hover:border-brand-cyan/50 hover:text-brand-cyan hover:bg-brand-blue/5 transition-all"
              >
                <LinkedIn className="w-4 h-4" />
              </a>
              <a
                href={EVENT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl border border-white/10 text-ink-300 hover:border-brand-cyan/50 hover:text-brand-cyan hover:bg-brand-blue/5 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={EVENT.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="p-2.5 rounded-xl border border-white/10 text-ink-300 hover:border-brand-cyan/50 hover:text-brand-cyan hover:bg-brand-blue/5 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-500 mb-4">
              Evento
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#sobre"
                  className="text-ink-300 hover:text-brand-cyan transition-colors"
                >
                  Sobre el evento
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="text-ink-300 hover:text-brand-cyan transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="text-ink-300 hover:text-brand-cyan transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#venue"
                  className="text-ink-300 hover:text-brand-cyan transition-colors"
                >
                  Sede
                </a>
              </li>
              <li>
                <a
                  href="#comunidad"
                  className="text-ink-300 hover:text-brand-cyan transition-colors"
                >
                  Comunidad
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-500 mb-4">
              Contacto
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${EVENT.contactEmail}`}
                  className="text-ink-200 hover:text-brand-cyan transition-colors break-all"
                >
                  {EVENT.contactEmail}
                </a>
              </li>
              <li className="text-ink-400">
                {EVENT.city}, {EVENT.country}
              </li>
              <li className="text-ink-400 font-mono text-xs tracking-wider">
                {EVENT.dateLabel}
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-xs text-ink-600 hover:text-brand-cyan transition-colors inline-flex items-center gap-1"
                >
                  Panel admin
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-ink-500">
          <div>© {new Date().getFullYear()} AWS User Group Ecuador.</div>
          <div className="font-mono tracking-wider">
            build/{EVENT.edition}.{EVENT.editionNumber}
          </div>
        </div>
      </div>
    </footer>
  )
}
