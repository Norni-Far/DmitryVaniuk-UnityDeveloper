export type Locale = 'en' | 'ru'
export type LocalizedText = Record<Locale, string>

export interface ExternalLink {
  kind: 'googlePlay' | 'appStore' | 'steam' | 'youtube' | 'website'
  label: LocalizedText
  url: string
}

export interface Project {
  id: string
  order: number
  title: LocalizedText
  period: LocalizedText
  summary: LocalizedText
  contributions: Record<Locale, string[]>
  technologies: string[]
  platforms: string[]
  artwork: string
  links: ExternalLink[]
}

export interface Experience {
  company: LocalizedText
  role: LocalizedText
  period: LocalizedText
  description: LocalizedText
  website?: ExternalLink
}

export interface SiteContent {
  profile: {
    name: string
    role: LocalizedText
    location: LocalizedText
    timezone: string
  }
  nav: Record<string, LocalizedText>
  hero: {
    eyebrow: LocalizedText
    title: LocalizedText
    summary: LocalizedText
    availability: LocalizedText
  }
  metrics: Array<{ value: string; label: LocalizedText }>
  sectionTitles: Record<string, LocalizedText>
  sectionKickers: Record<string, LocalizedText>
  heroPanel: {
    platforms: string
    stack: string
    focus: LocalizedText
    mode: LocalizedText
  }
  experience: Experience[]
  expertise: Array<{ icon: 'gameplay' | 'live' | 'performance'; title: LocalizedText; description: LocalizedText; tags: string[] }>
  workflow: {
    title: LocalizedText
    intro: LocalizedText
    practices: Array<{ title: LocalizedText; description: LocalizedText }>
    tools: string[]
  }
  education: {
    degree: LocalizedText
    university: LocalizedText
    period: string
  }
  languages: Array<{ name: LocalizedText }>
  contact: {
    title: LocalizedText
    description: LocalizedText
    primary: { label: LocalizedText; value: string; url: string; responseNote: LocalizedText }
    socials: Array<{ kind: 'telegram' | 'email' | 'linkedin' | 'github'; label: LocalizedText; value: string; url: string }>
  }
  youtube: { title: LocalizedText; description: LocalizedText; embedUrl: string; url: string; fallbackLabel: LocalizedText }
  labels: Record<string, LocalizedText>
  cv: string
}
