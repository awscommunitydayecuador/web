export const EVENT = {
  edition: '2026',
  editionNumber: 4,
  editionRoman: 'IV',
  editionLabel: '4ta edición',
  name: 'AWS Community Day',
  region: 'Ecuador',
  tagline: 'La comunidad AWS más grande del país, otra vez en escena.',
  description:
    'Un día completo de charlas técnicas, talleres prácticos y networking con builders, AWS Heroes y profesionales cloud de toda la región.',
  dateLabel: '5 de septiembre 2026',
  dateISO: '2026-09-05T09:00:00-05:00',
  timeLabel: '09:00 – 17:00',
  city: 'Cuenca',
  country: 'Ecuador',
  venueName: 'Universidad Politécnica Salesiana',
  venueAddress: 'Calle Turuhuayco 3-69 y Calle Vieja',
  venueShort: 'UPS Cuenca',
  mapsLinkUrl:
    'https://maps.google.com/?q=Universidad+Polit%C3%A9cnica+Salesiana+Cuenca+Turuhuayco',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Universidad+Polit%C3%A9cnica+Salesiana+Cuenca+Turuhuayco&output=embed',
  registrationUrl: 'https://ec-central-1.console.awscommunity.ec/e/awscommunitydayec2026/register',
  cfpUrl: 'https://ec-central-1.console.awscommunity.ec/e/awscommunitydayec2026/cfp',
  // Feed público (sin auth) del que se nutre el fallback de agenda.
  agendaIcsUrl:
    'https://ec-central-1.console.awscommunity.ec/e/awscommunitydayec2026/agenda.ics',
  sponsorEmail: 'hello@awsugecuador.com',
  contactEmail: 'hello@awsugecuador.com',
  social: {
    twitter: 'https://twitter.com/AWSCDEcuador',
    linkedin: 'https://www.linkedin.com/company/awsecuador/',
    instagram: 'https://www.instagram.com/ecuadoraws',
    facebook: 'https://www.facebook.com/ecuadoraws',
  },
} as const;

export type EventInfo = typeof EVENT;
