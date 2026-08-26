import { useEffect, useState } from 'react'
import { content, type Locale } from '../content'

interface HeaderProps {
  locale: Locale
  onToggleLocale: () => void
}

const trackCvDownload = () => window.dispatchEvent(new Event('goatcounter-download-cv'))

export function Header({ locale, onToggleLocale }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const t = (value: Record<Locale, string>) => value[locale]

  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])

  const links = [
    ['work', content.nav.work],
    ['experience', content.nav.experience],
    ['expertise', content.nav.expertise],
    ['aimcp', content.nav.aimcp],
    ['contact', content.nav.contact],
  ] as const

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label={content.profile.name}>
          <span className="brand-mark">DV</span>
          <span className="brand-name">{content.profile.name}</span>
        </a>
        <nav id="primary-navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{t(label)}</a>
          ))}
          <a className="nav-cv" href={content.cvUrl} download onClick={trackCvDownload}>{t(content.labels.downloadCv)}</a>
        </nav>
        <div className="header-actions">
          <button className="language-toggle" type="button" onClick={onToggleLocale} aria-label={t(content.labels.language)}>
            <span className={locale === 'en' ? 'active' : ''}>EN</span>
            <span aria-hidden="true">/</span>
            <span className={locale === 'ru' ? 'active' : ''}>RU</span>
          </button>
          <button
            className={open ? 'menu-toggle is-open' : 'menu-toggle'}
            type="button"
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? t(content.labels.close) : t(content.labels.menu)}
            onClick={() => setOpen((value) => !value)}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
