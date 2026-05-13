'use client'

import { useEffect, useState } from 'react'
import { EVENT } from '@/lib/event'

type Parts = { d: number; h: number; m: number; s: number }

function diff(target: number): Parts {
  const ms = Math.max(0, target - Date.now())
  const d = Math.floor(ms / 86_400_000)
  const h = Math.floor((ms % 86_400_000) / 3_600_000)
  const m = Math.floor((ms % 3_600_000) / 60_000)
  const s = Math.floor((ms % 60_000) / 1000)
  return { d, h, m, s }
}

export default function Countdown() {
  const target = new Date(EVENT.dateISO).getTime()
  const [t, setT] = useState<Parts | null>(null)

  useEffect(() => {
    setT(diff(target))
    const id = setInterval(() => setT(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const labels = ['días', 'horas', 'min', 'seg'] as const
  const vals = t ? [t.d, t.h, t.m, t.s] : [0, 0, 0, 0]

  return (
    <div className="grid grid-cols-4 gap-2">
      {vals.map((v, i) => (
        <div
          key={labels[i]}
          className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur px-2 py-3.5 text-center overflow-hidden group"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-400/60 to-transparent" />
          <div
            suppressHydrationWarning
            className="font-display text-3xl sm:text-4xl font-semibold tabular-nums leading-none text-ink-0 tracking-tight"
          >
            {String(v).padStart(2, '0')}
          </div>
          <div className="mt-1.5 text-[9px] font-mono uppercase tracking-[0.22em] text-ink-400">
            {labels[i]}
          </div>
        </div>
      ))}
    </div>
  )
}
