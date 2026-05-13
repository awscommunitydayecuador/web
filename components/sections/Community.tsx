import { fetchCommunities } from '@/lib/data'
import { Instagram, LinkedIn, Facebook, Globe } from '@/components/icons/Social'

export default async function Community() {
  const communities = await fetchCommunities()

  return (
    <section
      id="comunidad"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-aurora-lime/10 blur-[120px] pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
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

        <div className="grid md:grid-cols-2 gap-4">
          {communities.map((c) => (
            <article
              key={c.id}
              className="group surface p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-start sm:items-center transition-all duration-300 hover:border-white/25 hover:-translate-y-0.5"
            >
              <div className="relative w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.04] grid place-items-center shrink-0 overflow-hidden p-3">
                {c.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.logoUrl}
                    alt={c.name}
                    className="max-w-full max-h-full object-contain transition duration-500 brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:filter-none"
                  />
                ) : (
                  <span className="font-display text-xs text-center text-ink-300">
                    {c.name}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink-0 leading-tight">
                  {c.name}
                </h3>
                {c.description && (
                  <p className="text-sm text-ink-400 mt-1.5 leading-relaxed">
                    {c.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {c.instagramUrl && (
                    <a
                      href={c.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-2 rounded-lg border border-white/10 text-ink-300 hover:border-ember-400/50 hover:text-ember-300 hover:bg-ember-500/5 transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {c.linkedinUrl && (
                    <a
                      href={c.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 rounded-lg border border-white/10 text-ink-300 hover:border-ember-400/50 hover:text-ember-300 hover:bg-ember-500/5 transition-all"
                    >
                      <LinkedIn className="w-4 h-4" />
                    </a>
                  )}
                  {c.facebookUrl && (
                    <a
                      href={c.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-2 rounded-lg border border-white/10 text-ink-300 hover:border-ember-400/50 hover:text-ember-300 hover:bg-ember-500/5 transition-all"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {c.websiteUrl && (
                    <a
                      href={c.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Web"
                      className="p-2 rounded-lg border border-white/10 text-ink-300 hover:border-ember-400/50 hover:text-ember-300 hover:bg-ember-500/5 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
