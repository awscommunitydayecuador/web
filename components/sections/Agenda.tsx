import { fetchAgenda, type AgendaItemDTO, type AgendaSpeakerDTO } from '@/lib/data'

const TYPE_LABEL: Record<string, string> = {
  ceremony: 'Ceremonia',
  talk: 'Charla',
  workshop: 'Taller',
  break: 'Break',
}

const TYPE_CHIP: Record<string, string> = {
  ceremony: 'chip-violet',
  talk: 'chip-brand',
  workshop: 'chip-aws',
  break: 'chip',
}

function speakerName(s: AgendaSpeakerDTO) {
  return `${s.firstName ?? ''} ${s.lastName ?? ''}`.trim()
}

function SpeakerChip({ speaker }: { speaker: AgendaSpeakerDTO }) {
  const name = speakerName(speaker)
  if (!name) return null

  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <div className="w-[30px] h-[30px] rounded-full overflow-hidden shrink-0 border border-white/10 bg-brand-navy grid place-items-center">
        {speaker.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={speaker.photoUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[11px] font-display font-semibold text-ink-200">
            {initials || '?'}
          </span>
        )}
      </div>
      <span className="min-w-0 break-words text-sm text-ink-400">{name}</span>
    </div>
  )
}

function SessionCard({ item }: { item: AgendaItemDTO }) {
  if (item.type === 'break') {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-4 flex items-center justify-between gap-4">
        <span className="font-display text-sm sm:text-base font-medium text-ink-300">
          {item.title}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 shrink-0">
          {item.startTime}–{item.endTime}
        </span>
      </div>
    )
  }

  return (
    <article className="group relative min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.05]">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className={TYPE_CHIP[item.type] ?? 'chip'}>
          {TYPE_LABEL[item.type] ?? item.type}
        </span>
        {item.locationDetail && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500 text-right min-w-0 sm:truncate">
            {item.locationDetail}
          </span>
        )}
      </div>
      <h3 className="font-display text-base sm:text-lg font-semibold leading-snug tracking-tight text-ink-0">
        {item.title}
      </h3>
      {item.speakers.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {item.speakers.map((sp, i) => (
            <SpeakerChip key={`${sp.firstName}-${sp.lastName}-${i}`} speaker={sp} />
          ))}
        </div>
      )}
    </article>
  )
}

export default async function Agenda() {
  const items = await fetchAgenda()
  const hasAgenda = items.length > 0

  const slots = Array.from(new Set(items.map((i) => i.startTime))).sort()
  const bySlot = slots.map((time) => ({
    time,
    items: items
      .filter((i) => i.startTime === time)
      .sort((a, b) => (a.locationDetail ?? '').localeCompare(b.locationDetail ?? '')),
  }))

  return (
    <section id="agenda" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="section-veil" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 sm:mb-14 items-end">
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Agenda</span>
            <h2 className="section-title">
              Un día,
              <br />
              <span className="text-aurora">múltiples tracks</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10">
            <p className="text-ink-300 text-pretty leading-relaxed">
              Charlas, talleres y espacios de networking corriendo en paralelo
              durante toda la jornada. La agenda se actualiza en vivo a medida
              que se confirman sesiones.
            </p>
          </div>
        </div>

        {hasAgenda ? (
          <div className="space-y-8 sm:space-y-10">
            {bySlot.map(({ time, items: slotItems }) => (
              <div
                key={time}
                className="grid grid-cols-[56px_1fr] sm:grid-cols-[96px_1fr] gap-4 sm:gap-6"
              >
                <div className="pt-1">
                  <div className="font-mono text-sm sm:text-base text-ink-0 font-medium">
                    {time}
                  </div>
                  <div className="mt-2 h-full w-px bg-gradient-to-b from-white/15 to-transparent ml-1 hidden sm:block" />
                </div>
                <div
                  className={`grid gap-3 sm:gap-4 ${
                    slotItems.length > 1 ? 'sm:grid-cols-2 xl:grid-cols-3' : ''
                  }`}
                >
                  {slotItems.map((item) => (
                    <SessionCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
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
                La agenda se publica{' '}
                <span className="text-brand-gradient">pronto</span>.
              </h3>
              <p className="text-ink-400 mt-4 max-w-xl mx-auto">
                Estamos cerrando el cronograma final de charlas y talleres.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
