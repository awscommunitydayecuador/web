import siteData from '../data/site-data.json'

export interface EventPhoto {
  url: string
  title: string
  description: string
  subtitle: string
  color: string
}

export interface EventData {
  title: string
  date: string
  location: string
  description: string
  registrationUrl: string
  photos: EventPhoto[]
}

export interface SocialMedia {
  url: string
  handle: string
  color: string
}

export interface Community {
  name: string
  description: string
  logo: string
  socialMedia: {
    instagram: SocialMedia
    linkedin: SocialMedia
    facebook: SocialMedia
    website: SocialMedia
  }
}

export interface Speaker {
  id: number
  name: string
  role: string
  company: string
  image: string
  social: {
    twitter: string
    linkedin: string
    github: string
  }
}

export interface CallForSpeakers {
  title: string
  description: string
  benefits?: string[]
  topics?: string[]
  ctaText: string
  ctaUrl: string
}

export interface Sponsor {
  id: number
  name: string
  tier: string
  logo: string
  website: string
}

export interface CallForSponsors {
  title: string
  description: string
  benefits?: string[]
  tiers?: string[]
  ctaText: string
  ctaUrl: string
  kitUrl?: string
  kitText?: string
}

export interface SiteData {
  event: EventData
  communities: {
    awsUserGroup: Community
    awsWomen: Community
  }
  speakers: {
    callForSpeakers: CallForSpeakers
    confirmed: Speaker[]
  }
  sponsors: {
    callForSponsors: CallForSponsors
    confirmed: Sponsor[]
  }
  contact: {
    email: string
    location: string
    socialMedia: {
      twitter: string
      linkedin: string
      facebook: string
      instagram: string
    }
  }
  navigation: {
    links: Array<{
      href: string
      text: string
    }>
  }
}

// Exportar los datos tipados
export const data: SiteData = siteData

// Funciones de utilidad para acceder a datos específicos
export const getEventData = () => data.event
export const getCommunities = () => data.communities
export const getSpeakers = () => data.speakers
export const getSponsors = () => data.sponsors
export const getContact = () => data.contact
export const getNavigation = () => data.navigation

// Función para obtener redes sociales de una comunidad específica
export const getCommunitySocialMedia = (communityKey: 'awsUserGroup' | 'awsWomen') => {
  return data.communities[communityKey].socialMedia
}

// Función para obtener speakers confirmados
export const getConfirmedSpeakers = () => data.speakers.confirmed

// Función para obtener sponsors confirmados
export const getConfirmedSponsors = () => data.sponsors.confirmed

// Función para obtener sponsors por tier
export const getSponsorsByTier = (tier: string) => {
  return data.sponsors.confirmed.filter(sponsor => sponsor.tier === tier)
} 