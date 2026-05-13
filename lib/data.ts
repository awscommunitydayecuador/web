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

/* ── Data sources ─────────────────────────────────────────────── */

export async function fetchSpeakers(): Promise<SpeakerDTO[]> {
  // 2026 line-up pending announcement.
  return []
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
      description:
        'Comunidad principal de AWS en Ecuador. Meetups, charlas y workshops todo el año.',
      logoUrl: '/logo-aws-ug-ecuador.svg',
      instagramUrl: 'https://www.instagram.com/ecuadoraws',
      linkedinUrl: 'https://www.linkedin.com/company/awsecuador/',
      facebookUrl: 'https://www.facebook.com/ecuadoraws',
      websiteUrl: 'https://www.awsugecuador.com/',
    },
    {
      id: 'aws-women-ecuador',
      name: 'AWS Women Ecuador',
      description:
        'Comunidad de mujeres en AWS Ecuador. Networking, mentoría y crecimiento profesional en cloud.',
      logoUrl: '/logo-aws-woman-ecuador.svg',
      instagramUrl: 'https://www.instagram.com/awswomenecuador',
      linkedinUrl: 'https://www.linkedin.com/company/aws-women-ecuador/',
      facebookUrl: 'https://www.facebook.com/groups/awswomenecuador',
      websiteUrl: 'https://linktr.ee/awswomenecuador',
    },
  ]
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
