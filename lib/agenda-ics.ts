import type { AgendaItemDTO, AgendaItemType, AgendaSpeakerDTO } from './data'
import { EVENT } from './event'

/**
 * Fallback de agenda: el feed `.ics` público del evento.
 *
 * El API externo (`/api/v1/external/agenda/...`) exige HTTP Basic y es la
 * fuente buena: trae tipo de sesión, foto, cargo y empresa de cada speaker.
 * Pero si sus credenciales no están configuradas —o el API se cae en pleno
 * evento— el sitio se quedaba sin agenda y mostraba "se publica pronto".
 *
 * El `.ics` es público y sale de la misma tabla de agenda, así que sirve de
 * red de seguridad. Lo que NO trae, y por eso esto es un fallback y no la
 * fuente principal:
 *   - el `type` real de la sesión (se infiere del título),
 *   - foto, cargo y empresa de los speakers (solo el nombre).
 */

const ICS_UNESCAPE = /\\([\;,nN])/g

/** Deshace el escapado de RFC 5545 (`\n`, `\,`, `\;`, `\\`) en una pasada. */
function unescapeIcsText(value: string): string {
  return value.replace(ICS_UNESCAPE, (_, char: string) =>
    char === 'n' || char === 'N' ? '\n' : char
  )
}

/**
 * Deshace el "folding": el RFC parte las líneas largas insertando un salto
 * seguido de un espacio o tab. Sin esto, los títulos y descripciones largos
 * llegan cortados a la mitad.
 */
function unfold(raw: string): string {
  return raw.replace(/\r\n|\r/g, '\n').replace(/\n[ \t]/g, '')
}

/**
 * `20260905T090000` → `{ date: '2026-09-05', time: '09:00' }`.
 *
 * El feed usa `TZID=America/Guayaquil` con hora local, que es justo lo que
 * queremos pintar. Un valor en UTC (sufijo `Z`) se corre a -05:00 a mano:
 * Ecuador no tiene horario de verano, así que el offset es fijo.
 */
function parseIcsDateTime(value: string): { date: string; time: string } | null {
  const match = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})?(Z)?$/.exec(value.trim())
  if (!match) return null

  const [, year, month, day, hour, minute, , isUtc] = match

  if (!isUtc) {
    return { date: `${year}-${month}-${day}`, time: `${hour}:${minute}` }
  }

  const shifted = new Date(
    Date.UTC(+year, +month - 1, +day, +hour, +minute) - 5 * 60 * 60 * 1000
  )
  const pad = (n: number) => String(n).padStart(2, '0')

  return {
    date: `${shifted.getUTCFullYear()}-${pad(shifted.getUTCMonth() + 1)}-${pad(shifted.getUTCDate())}`,
    time: `${pad(shifted.getUTCHours())}:${pad(shifted.getUTCMinutes())}`,
  }
}

/**
 * Extrae las propiedades de un bloque VEVENT. Una línea es
 * `NOMBRE;PARAM=valor:contenido`, así que el nombre va hasta el primer `;`
 * o `:`, y el contenido después del primer `:`.
 */
function parseProperties(block: string): Map<string, string> {
  const props = new Map<string, string>()

  for (const line of block.split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue

    const name = line.slice(0, colon).split(';')[0].trim().toUpperCase()
    if (name && !props.has(name)) {
      props.set(name, line.slice(colon + 1))
    }
  }

  return props
}

/**
 * El backend pega los speakers al final de la descripción como
 * `\n\nSpeakers: Nombre Uno, Nombre Dos` (ver CalendarController::downloadAgenda).
 * Devuelve la descripción limpia y los nombres por separado.
 *
 * Solo hay nombre completo, no viene partido en first/last: se pone entero en
 * `firstName` porque la UI pinta `firstName + ' ' + lastName`, así que el
 * nombre sale idéntico sin arriesgarse a partir mal apellidos compuestos.
 */
function splitSpeakers(description: string): {
  description: string
  speakers: AgendaSpeakerDTO[]
} {
  const match = /\n\nSpeakers:[ \t]*([^\n]+)$/.exec(description)
  if (!match) return { description: description.trim(), speakers: [] }

  const speakers = match[1]
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => ({
      firstName: name,
      lastName: '',
      company: null,
      jobTitle: null,
      photoUrl: null,
    }))

  return { description: description.slice(0, match.index).trim(), speakers }
}

/**
 * El `.ics` no lleva el tipo de sesión, así que se deduce del título. Solo
 * cambia el color del chip y si la tarjeta se pinta como break, no hay nada
 * funcional colgando de esto; ante la duda, `talk`.
 */
function inferType(title: string): AgendaItemType {
  const normalized = title.toLowerCase()

  if (/break|coffee|almuerzo|lunch|receso/.test(normalized)) return 'break'
  if (/apertura|clausura|inauguraci|bienvenida|cierre/.test(normalized)) return 'ceremony'
  if (/taller|workshop|hands ?-?on|\blab\b/.test(normalized)) return 'workshop'

  return 'talk'
}

export async function fetchAgendaFromIcs(): Promise<AgendaItemDTO[]> {
  const url = EVENT.agendaIcsUrl
  if (!url) return []

  let raw: string

  try {
    // Mismo motivo que en lib/data.ts: sin esto, el Data Cache de Next
    // persiste entre builds en Amplify y este fallback también queda pegado.
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      console.error(`[agenda] fallback .ics respondió ${res.status} en ${url}`)
      return []
    }
    raw = await res.text()
  } catch (error) {
    console.error('[agenda] no se pudo leer el fallback .ics:', error)
    return []
  }

  const blocks = unfold(raw).split('BEGIN:VEVENT').slice(1)
  const items: AgendaItemDTO[] = []

  blocks.forEach((block, index) => {
    const props = parseProperties(block.split('END:VEVENT')[0])

    const title = unescapeIcsText(props.get('SUMMARY') ?? '').trim()
    const start = parseIcsDateTime(props.get('DTSTART') ?? '')
    if (!title || !start) return

    const end = parseIcsDateTime(props.get('DTEND') ?? '')
    const location = unescapeIcsText(props.get('LOCATION') ?? '').trim()
    const { description, speakers } = splitSpeakers(
      unescapeIcsText(props.get('DESCRIPTION') ?? '')
    )

    items.push({
      id: `ics-${start.date}-${start.time}-${index}`,
      title,
      description: description || null,
      date: start.date,
      startTime: start.time,
      endTime: end?.time ?? start.time,
      locationDetail: location || null,
      type: inferType(title),
      speakers,
    })
  })

  return items
}
