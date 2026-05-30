import { fetchCommunities, type CommunityDTO } from '@/lib/data'
import {
  Instagram,
  LinkedIn,
  Facebook,
  Twitter,
  YouTube,
  Meetup,
  WhatsApp,
  TikTok,
  Globe,
} from '@/components/icons/Social'

type SocialEntry = {
  key: keyof CommunityDTO
  label: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

const SOCIAL_LINKS: SocialEntry[] = [
  { key: 'instagramUrl', label: 'Instagram', Icon: Instagram },
  { key: 'facebookUrl', label: 'Facebook', Icon: Facebook },
  { key: 'twitterUrl', label: 'X / Twitter', Icon: Twitter },
  { key: 'tiktokUrl', label: 'TikTok', Icon: TikTok },
  { key: 'youtubeUrl', label: 'YouTube', Icon: YouTube },
  { key: 'linkedinUrl', label: 'LinkedIn', Icon: LinkedIn },
  { key: 'meetupUrl', label: 'Meetup', Icon: Meetup },
  { key: 'whatsappUrl', label: 'WhatsApp', Icon: WhatsApp },
  { key: 'websiteUrl', label: 'Sitio web', Icon: Globe },
]

export default async function Community() {
  const communities = await fetchCommunities()

  return (
    <section
      id="comunidad"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="section-veil" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-brand-blue/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-brand-magenta/10 blur-[120px] pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 sm:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Comunidad</span>
            <h2 className="section-title">
              Organizado por la comunidad,
              <br />
              para la <span className="text-aurora">comunidad</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-ink-300 text-pretty leading-relaxed">
              Detrás del Community Day están los grupos que mantienen viva la
              conversación AWS en Ecuador todo el año. Síguelos, súmate a sus
              meetups y construyamos juntos.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {communities.map((c) => (
            <article
              key={c.id}
              className="group surface p-5 sm:p-7 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start transition-all duration-300 hover:border-brand-cyan/30 hover:-translate-y-0.5"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-white/10 bg-white/[0.04] grid place-items-center shrink-0 overflow-hidden p-3">
                {c.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logoUrl}
                    alt={c.name}
                    className="max-w-full max-h-full object-contain transition duration-500 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:filter-none"
                  />
                ) : (
                  <span className="font-display text-xl sm:text-2xl font-semibold text-brand-cyan">
                    {initials(c.name)}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-ink-0 leading-tight">
                  {c.name}
                </h3>
                {c.description && (
                  <p className="text-sm text-ink-400 mt-1.5 leading-relaxed">
                    {c.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {SOCIAL_LINKS.map(({ key, label, Icon }) => {
                    const url = c[key] as string | null | undefined
                    if (!url) return null
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${c.name} · ${label}`}
                        className="p-2 rounded-lg border border-white/10 text-ink-300 hover:border-brand-cyan/50 hover:text-brand-cyan hover:bg-brand-blue/5 transition-all"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function initials(name: string) {
  return name
    .replace(/^AWS\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
}
