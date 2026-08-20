import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { DownloadIcon, EmailIcon, ExternalArrowIcon, GameplayIcon, GitHubIcon, LinkedInIcon, LiveIcon, PerformanceIcon, TelegramIcon, UpArrowIcon, YoutubeIcon } from './components/Icons'
import { content, projects, type Locale } from './content'
import { useLocale } from './hooks/useLocale'
import './App.css'

const expertiseIcons = { gameplay: GameplayIcon, live: LiveIcon, performance: PerformanceIcon }
const socialIcons = { email: EmailIcon, linkedin: LinkedInIcon, github: GitHubIcon, telegram: TelegramIcon }

function App() {
  const { locale, toggleLocale } = useLocale()
  const [showTop, setShowTop] = useState(false)
  const t = (value: Record<Locale, string>) => value[locale]

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > window.innerHeight * 0.7)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })

  return (
    <div className="site-shell">
      <Header locale={locale} onToggleLocale={toggleLocale} />
      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">{t(content.hero.eyebrow)}</p>
              <div className="hero-title-wrap"><span className="hero-glow" aria-hidden="true" /><h1 id="hero-title">{t(content.hero.title)}</h1></div>
              <p className="hero-summary">{t(content.hero.summary)}</p>
              <div className="hero-actions">
                <a className="button primary telegram-action" href={content.contact.primary.url} target="_blank" rel="noreferrer"><TelegramIcon /><span>{t(content.contact.primary.label)}</span></a>
                <a className="button secondary" href={content.cvUrl} download><DownloadIcon />{t(content.labels.downloadCv)}</a>
              </div>
            </div>
            <aside className="hero-panel">
              <div className="availability"><span />{t(content.hero.availability)}</div>
              <div className="code-window" aria-hidden="true">
                <div className="code-top"><i /><i /><i /></div>
                <pre><code><b>public</b> <em>sealed class</em> Developer{'\n'}{'{'}{'\n'}  Stack = <q>{content.heroPanel.stack}</q>;{'\n'}  Platforms = <q>{content.heroPanel.platforms}</q>;{'\n'}  Focus = <q>{t(content.heroPanel.focus)}</q>;{'\n'}  Mode = <q>{t(content.heroPanel.mode)}</q>;{'\n'}{'}'}</code></pre>
              </div>
              <p className="hero-location">{content.profile.timezone} <span>•</span> {t(content.profile.location)}</p>
            </aside>
          </div>
        </section>

        <section className="metrics-section" aria-label="Impact metrics"><div className="container metrics-grid">{content.metrics.map((metric) => <div className="metric" key={metric.value + metric.label.en}><strong>{metric.value}</strong><span>{t(metric.label)}</span></div>)}</div></section>

        <section className="section projects-section" id="work" aria-labelledby="work-title">
          <div className="container"><div className="section-heading"><div><p className="section-number">{t(content.sectionKickers.work)}</p><h2 id="work-title">{t(content.sectionTitles.work)}</h2></div><p>{t(content.sectionTitles.workIntro)}</p></div><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} locale={locale} index={index} />)}</div></div>
        </section>

        <section className="section demos-section" aria-labelledby="demos-title">
          <div className="container demos-layout">
            <div className="demos-copy"><p className="section-number">{t(content.sectionKickers.demos)} <YoutubeIcon className="section-icon" /></p><h2 id="demos-title">{t(content.youtube.title)}</h2><p>{t(content.youtube.description)}</p><a className="button video-link" href={content.youtube.url} target="_blank" rel="noreferrer"><YoutubeIcon />{t(content.youtube.fallbackLabel)}<ExternalArrowIcon /></a></div>
            <div className="video-frame"><iframe title={t(content.youtube.title)} src={content.youtube.embedUrl} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="container"><div className="experience-intro"><div><p className="section-number">{t(content.sectionKickers.experience)}</p><h2 id="experience-title">{t(content.sectionTitles.experience)}</h2></div><strong className="experience-years"><span className="experience-years-value">4+</span><span className="experience-years-label">{locale === 'en' ? 'years building production Unity systems' : 'года создаю production-системы в Unity'}</span></strong></div><div className="experience-grid">{content.experience.map((item, index) => <article className="experience-card" key={item.period.en}><span className="experience-number">0{index + 1}</span><p className="timeline-period">{t(item.period)}</p><h3>{t(item.role)}</h3><p className="company">{t(item.company)}</p><p>{t(item.description)}</p>{item.website && <a className="company-link" href={item.website.url} target="_blank" rel="noreferrer">{t(item.website.label)}<ExternalArrowIcon /></a>}</article>)}</div></div>
        </section>

        <section className="section expertise-section" id="expertise" aria-labelledby="expertise-title">
          <div className="container"><div className="section-heading compact"><div><p className="section-number">{t(content.sectionKickers.expertise)}</p><h2 id="expertise-title">{t(content.sectionTitles.expertise)}</h2></div></div><div className="expertise-grid">{content.expertise.map((item, index) => { const Icon = expertiseIcons[item.icon]; return <article className="expertise-card" key={item.title.en}><div className="expertise-top"><span className="expertise-icon"><Icon /></span><span className="expertise-number">0{index + 1}</span></div><h3>{t(item.title)}</h3><p>{t(item.description)}</p><ul className="tags">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article> })}</div></div>
        </section>

        <section className="section credentials-section" aria-labelledby="credentials-title"><div className="container"><div className="section-heading compact"><div><p className="section-number">{t(content.sectionKickers.education)}</p><h2 id="credentials-title">{t(content.sectionTitles.education)}</h2></div></div><div className="credentials-grid"><article className="education-card"><p className="mini-label">{t(content.sectionTitles.education)}</p><h3>{t(content.education.degree)}</h3><p>{t(content.education.university)}</p><span>{content.education.period}</span></article><article className="languages-card"><p className="mini-label">{t(content.labels.languages)}</p>{content.languages.map((language) => <h3 key={language.name.en}>{t(language.name)}</h3>)}</article></div></div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-layout"><div><p className="section-number">{t(content.sectionKickers.contact)}</p><h2 id="contact-title">{t(content.contact.title)}</h2><p>{t(content.contact.description)}</p></div><div className="contact-actions"><a className="telegram-card" href={content.contact.primary.url} target="_blank" rel="noreferrer"><TelegramIcon /><div><span>{t(content.contact.primary.responseNote)}</span><strong>{content.contact.primary.value}</strong></div><ExternalArrowIcon /></a><div className="social-grid">{content.contact.socials.map((item) => { const Icon = socialIcons[item.kind]; return <a key={item.kind} className="social-card" href={item.url} target={item.kind === 'email' ? undefined : '_blank'} rel={item.kind === 'email' ? undefined : 'noreferrer'}><Icon /><div><span>{t(item.label)}</span><strong>{item.value}</strong></div></a> })}</div></div></div></section>
      </main>
      <footer><div className="container footer-inner"><p>© 2022–2026 {content.profile.name}. {t(content.labels.footerRights)}</p></div></footer>
      <button className={showTop ? 'back-to-top is-visible' : 'back-to-top'} type="button" onClick={scrollTop} aria-label={t(content.labels.backToTop)}><UpArrowIcon /></button>
    </div>
  )
}

export default App
