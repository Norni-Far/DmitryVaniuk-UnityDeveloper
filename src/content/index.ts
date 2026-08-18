import { siteContent } from './site'
import type { ExternalLink, LocalizedText, Project } from './types'

const rawProjects = import.meta.glob('./projects/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, unknown>

const assetUrls = import.meta.glob('./assets/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`[content] ${message}`)
}

function validateLocalized(value: unknown, field: string): asserts value is LocalizedText {
  assert(typeof value === 'object' && value !== null, `${field} must be bilingual`)
  const text = value as Record<string, unknown>
  assert(typeof text.en === 'string' && text.en.trim().length > 0, `${field}.en is required`)
  assert(typeof text.ru === 'string' && text.ru.trim().length > 0, `${field}.ru is required`)
}

const linkKinds = ['googlePlay', 'appStore', 'steam', 'youtube', 'website'] as const
const allowedLinkHosts: Record<ExternalLink['kind'], string[]> = {
  googlePlay: ['play.google.com'],
  appStore: ['apps.apple.com'],
  steam: ['store.steampowered.com'],
  youtube: ['www.youtube.com', 'youtube.com', 'youtu.be'],
  website: [],
}

function validateExternalLink(value: unknown, field: string): asserts value is ExternalLink {
  assert(typeof value === 'object' && value !== null, `${field} must be an object`)
  const link = value as Partial<ExternalLink>
  assert(typeof link.kind === 'string' && linkKinds.includes(link.kind as ExternalLink['kind']), `${field}.kind must be one of: ${linkKinds.join(', ')}`)
  validateLocalized(link.label, `${field}.label`)
  assert(typeof link.url === 'string', `${field}.url is required`)
  let url: URL
  try {
    url = new URL(link.url)
  } catch {
    throw new Error(`[content] ${field}.url is malformed`)
  }
  assert(url.protocol === 'https:', `${field}.url must use HTTPS`)
  const hosts = allowedLinkHosts[link.kind]
  assert(hosts.length === 0 || hosts.includes(url.hostname), `${field}.url must use a valid ${link.kind} host`)
}

function validateProject(value: unknown, source: string): Project {
  assert(typeof value === 'object' && value !== null, `${source} must contain an object`)
  const project = value as Partial<Project>
  assert(typeof project.id === 'string' && /^[a-z0-9-]+$/.test(project.id), `${source}: id must be a kebab-case string`)
  assert(Number.isInteger(project.order) && (project.order ?? 0) > 0, `${source}: order must be a positive integer`)
  validateLocalized(project.title, `${source}: title`)
  validateLocalized(project.period, `${source}: period`)
  validateLocalized(project.summary, `${source}: summary`)
  assert(typeof project.contributions === 'object' && project.contributions !== null, `${source}: contributions must be bilingual`)
  for (const locale of ['en', 'ru'] as const) {
    const list = project.contributions[locale]
    assert(Array.isArray(list) && list.length > 0 && list.every((item) => typeof item === 'string' && item.trim()), `${source}: contributions.${locale} requires non-empty strings`)
  }
  assert(Array.isArray(project.technologies) && project.technologies.length > 0, `${source}: technologies are required`)
  assert(Array.isArray(project.platforms) && project.platforms.length > 0, `${source}: platforms are required`)
  assert(typeof project.artwork === 'string' && Boolean(assetUrls[project.artwork]), `${source}: missing asset "${project.artwork ?? ''}"`)
  assert(Array.isArray(project.links), `${source}: links must be an array`)
  project.links.forEach((link, index) => {
    validateExternalLink(link, `${source}: links[${index}]`)
  })
  return project as Project
}

const ids = new Set<string>()
const orders = new Set<number>()
export const projects = Object.entries(rawProjects)
  .map(([source, value]) => validateProject(value, source))
  .map((project) => {
    assert(!ids.has(project.id), `duplicate project id "${project.id}"`)
    assert(!orders.has(project.order), `duplicate project order "${project.order}"`)
    ids.add(project.id)
    orders.add(project.order)
    return { ...project, artworkUrl: assetUrls[project.artwork] }
  })
  .sort((a, b) => a.order - b.order)

assert(Boolean(assetUrls[siteContent.cv]), `missing CV asset "${siteContent.cv}"`)

export const content = {
  ...siteContent,
  cvUrl: assetUrls[siteContent.cv],
}

export type { Locale, LocalizedText, Project } from './types'
