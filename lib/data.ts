import { EVENT } from './event'

export type SpeakerDTO = {
  id: string
  name: string
  role?: string | null
  company?: string | null
  photoUrl?: string | null
  twitter?: string | null
  linkedin?: string | null
  github?: string | null
  website?: string | null
}

export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'community'

export type SponsorDTO = {
  id: string
  name: string
  tier: SponsorTier
  logoUrl?: string | null
  website?: string | null
}

export type CommunityDTO = {
  id: string
  name: string
  description?: string | null
  logoUrl?: string | null
  instagramUrl?: string | null
  linkedinUrl?: string | null
  facebookUrl?: string | null
  twitterUrl?: string | null
  youtubeUrl?: string | null
  meetupUrl?: string | null
  whatsappUrl?: string | null
  tiktokUrl?: string | null
  websiteUrl?: string | null
}

export type VenueDTO = {
  name: string
  address: string
  city: string
  country: string
  eventDate: string
  eventTime: string
  mapsEmbedUrl: string
  mapsLinkUrl: string
  description?: string | null
}

export type AgendaSpeakerDTO = {
  firstName: string
  lastName: string
  company?: string | null
  jobTitle?: string | null
  photoUrl?: string | null
}

export type AgendaItemType =
  | 'ceremony'
  | 'talk'
  | 'workshop'
  | 'break'
  | string

export type AgendaItemDTO = {
  id: string
  title: string
  description?: string | null
  date: string
  startTime: string
  endTime: string
  locationDetail?: string | null
  type: AgendaItemType
  speakers: AgendaSpeakerDTO[]
}

/* ── Data sources ─────────────────────────────────────────────── */

export async function fetchSpeakers(): Promise<SpeakerDTO[]> {
  const agenda = await fetchAgenda()
  const seen = new Set<string>()
  const speakers: SpeakerDTO[] = []

  for (const item of agenda) {
    for (const sp of item.speakers) {
      const name = `${sp.firstName ?? ''} ${sp.lastName ?? ''}`.trim()
      if (!name) continue

      const key = name.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)

      speakers.push({
        id: key.replace(/\s+/g, '-'),
        name,
        role: sp.jobTitle ?? null,
        company: sp.company ?? null,
        photoUrl: sp.photoUrl ?? null,
      })
    }
  }

  return speakers
}

export async function fetchSponsors(): Promise<SponsorDTO[]> {
  // 2026 sponsors pending announcement.
  return []
}

export async function fetchCommunities(): Promise<CommunityDTO[]> {
  return [
    {
      id: 'aws-ug-ecuador',
      name: 'AWS User Group Ecuador',
      logoUrl: '/logo-aws-ug-ecuador.svg',
      instagramUrl: 'https://www.instagram.com/ecuadoraws',
      facebookUrl: 'https://www.facebook.com/ecuadoraws',
      twitterUrl: 'https://x.com/awsecuador',
      youtubeUrl: 'https://www.youtube.com/@awsugecuador4610',
      linkedinUrl: 'https://www.linkedin.com/company/awsecuador/',
      meetupUrl: 'https://www.meetup.com/es-es/aws-ecuador/',
      websiteUrl: 'https://www.awsugecuador.com/',
    },
    {
      id: 'aws-ug-quito',
      name: 'AWS User Group Quito',
      instagramUrl: 'https://www.instagram.com/awsugquito',
      twitterUrl: 'https://x.com/awsugquito',
      youtubeUrl: 'https://www.youtube.com/@awsugquito',
      linkedinUrl: 'https://www.linkedin.com/company/awsugquito/',
      meetupUrl: 'https://www.meetup.com/aws-user-group-quito/',
      whatsappUrl: 'https://chat.whatsapp.com/CKVja1AhL9e0x47GSIsLQc',
      websiteUrl: 'https://www.awsugquito.com/',
    },
    {
      id: 'aws-women-ecuador',
      name: 'AWS Women Ecuador',
      logoUrl: '/logo-aws-woman-ecuador.svg',
      instagramUrl: 'https://www.instagram.com/awswomenecuador',
      facebookUrl: 'https://www.facebook.com/groups/awswomenecuador',
      websiteUrl: 'https://linktr.ee/awswomenecuador',
    },
    {
      id: 'aws-security-ecuador',
      name: 'AWS User Group Security Ecuador',
      instagramUrl: 'https://www.instagram.com/awssecurityecuador',
      whatsappUrl: 'https://chat.whatsapp.com/LXb1Gg9TgEY3Dx6q0mtPJn',
      websiteUrl: 'https://www.awssecurityecuador.com/',
    },
    {
      id: 'aws-sbg-ug',
      name: 'AWS Student Builders at UG',
      instagramUrl: 'https://www.instagram.com/aws_sbg_ug',
      meetupUrl: 'https://www.meetup.com/aws-sbg-at-universidad-de-guayaquil',
      whatsappUrl: 'https://chat.whatsapp.com/JcP04n8PYVkJtsconrsy0e?mode=gi_t',
    },
    {
      id: 'aws-sbg-manta',
      name: 'AWS Student Builders at Manta',
      instagramUrl: 'https://www.instagram.com/awssbglmanta',
      whatsappUrl: 'https://chat.whatsapp.com/CIRaJNPBoajLwlT60AzHYG',
      websiteUrl: 'https://linktr.ee/awsmanta',
    },
    {
      id: 'aws-sbg-espol',
      name: 'AWS Student Builder at ESPOL',
      instagramUrl: 'https://www.instagram.com/aws.sbg.espol',
      twitterUrl: 'https://x.com/aws_sbg_espol',
      youtubeUrl: 'https://www.youtube.com/@aws_sbg_espol',
      linkedinUrl: 'https://www.linkedin.com/company/student-builder-group-at-espol',
      meetupUrl: 'https://www.meetup.com/aws-sbg-at-escuela-superior-politecnica-del-litoral-espol',
      whatsappUrl: 'https://chat.whatsapp.com/Ek8cwkm5bzTHfHSKfUXvAg',
      websiteUrl: 'https://linktr.ee/aws.sbg.espol',
    },
    {
      id: 'aws-sbg-ucuenca',
      name: 'AWS Student Builder at UCuenca',
      instagramUrl: 'https://www.instagram.com/aws.ucuenca',
      twitterUrl: 'https://x.com/aws.ucuenca',
      linkedinUrl: 'https://www.linkedin.com/company/aws-student-builder-group-universidad-de-cuenca/',
      meetupUrl: 'https://www.meetup.com/es-es/aws-cloud-club-at-universidad-de-cuenca/',
      whatsappUrl: 'https://chat.whatsapp.com/LqqNGmzy0Ti4seISeiV4Bi',
      websiteUrl: 'https://linktr.ee/awsclub.ucuenca',
    },
    {
      id: 'aws-sbg-itb',
      name: 'AWS Student Builder at ITB',
      instagramUrl: 'https://www.instagram.com/aws.itb',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61590435900354',
      twitterUrl: 'https://x.com/aws_itb',
      youtubeUrl: 'https://www.youtube.com/@aws-itb',
      whatsappUrl: 'https://chat.whatsapp.com/GDrxU8QQVdaEAhvET1fnwt',
      websiteUrl: 'https://warkos27.github.io/awws-builders-itb/',
    },
    {
      id: 'aws-sbg-uide',
      name: 'AWS Student Builder at UIDE',
      instagramUrl: 'https://www.instagram.com/aws_sbg_uide',
      meetupUrl: 'https://www.meetup.com/aws-sbg-at-international-university-of-ecuador',
      whatsappUrl: 'https://chat.whatsapp.com/IBITRvbUiQZLWrEmJNlRgz',
    },
    {
      id: 'aws-sbg-puce',
      name: 'AWS Student Builder at PUCE',
      instagramUrl: 'https://www.instagram.com/aws_puce',
      twitterUrl: 'https://x.com/aws_puce',
      linkedinUrl: 'https://linkedin.com/company/aws_puce',
    },
  ]
}

export async function fetchAgenda(): Promise<AgendaItemDTO[]> {
  const url = process.env.AGENDA_API_URL
  const user = process.env.AGENDA_API_USER
  const pass = process.env.AGENDA_API_PASS
  if (!url || !user || !pass) return []

  try {
    const auth = Buffer.from(`${user}:${pass}`).toString('base64')
    const res = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
      next: { revalidate: 300 },
    })
    if (!res.ok) return []

    const data = await res.json()
    const agenda = Array.isArray(data?.agenda) ? data.agenda : []

    return agenda.map((item: any) => ({
      id: String(item.id),
      title: item.title,
      description: item.description ?? null,
      date: item.date,
      startTime: item.start_time,
      endTime: item.end_time,
      locationDetail: item.location_detail ?? null,
      type: item.type,
      speakers: Array.isArray(item.speakers)
        ? item.speakers.map((sp: any) => ({
            firstName: sp.first_name,
            lastName: sp.last_name,
            company: sp.company ?? null,
            jobTitle: sp.job_title ?? null,
            photoUrl: sp.photo_url ?? null,
          }))
        : [],
    }))
  } catch {
    return []
  }
}

export async function fetchVenue(): Promise<VenueDTO | null> {
  return {
    name: EVENT.venueName,
    address: EVENT.venueAddress,
    city: EVENT.city,
    country: EVENT.country,
    eventDate: EVENT.dateLabel,
    eventTime: EVENT.timeLabel,
    mapsEmbedUrl: EVENT.mapsEmbedUrl,
    mapsLinkUrl: EVENT.mapsLinkUrl,
    description:
      'La UPS Cuenca es la nueva sede del Community Day. Auditorios equipados, espacios abiertos para networking y una de las universidades más activas de la región.',
  }
}
