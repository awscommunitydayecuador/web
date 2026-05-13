import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const defaults: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
}

export function Twitter(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M18.244 2H21.5l-7.5 8.572L23 22h-7.094l-5.55-7.27L4 22H.74l8.022-9.169L1 2h7.25l5.014 6.63L18.244 2zm-1.244 18h1.79L7.06 4H5.18L17 20z" />
    </svg>
  )
}

export function LinkedIn(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36C21.4 7.56 22 10.13 22 13.6V22h-4.57v-7.45c0-1.78-.03-4.06-2.47-4.06-2.48 0-2.86 1.94-2.86 3.94V22H7.99V8z" />
    </svg>
  )
}

export function Github(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

export function Globe(props: IconProps) {
  return (
    <svg {...defaults} {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
    </svg>
  )
}

export function Instagram(props: IconProps) {
  return (
    <svg {...defaults} {...props} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function Facebook(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H17V4.6c-.3-.05-1.35-.15-2.55-.15-2.52 0-4.25 1.55-4.25 4.4v2.05H7.5V14h2.7v8h3.3z" />
    </svg>
  )
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...defaults} {...props} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
