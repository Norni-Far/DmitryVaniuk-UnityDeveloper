import { content, type Locale, type Project } from '../content'
import { AppStoreIcon, ExternalArrowIcon, GooglePlayIcon, SteamIcon, YoutubeIcon } from './Icons'

type ResolvedProject = Project & { artworkUrl: string }

interface ProjectCardProps {
  project: ResolvedProject
  locale: Locale
  index: number
}

const linkIcons = {
  googlePlay: GooglePlayIcon,
  appStore: AppStoreIcon,
  steam: SteamIcon,
  youtube: YoutubeIcon,
  website: ExternalArrowIcon,
}

export function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const t = (value: Record<Locale, string>) => value[locale]

  return (
    <article className="project-card">
      <div className="project-art">
        <img src={project.artworkUrl} alt="" loading={index > 1 ? 'lazy' : 'eager'} />
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-body">
        <div className="project-heading">
          <p className="project-period">{t(project.period)}</p>
          <p className="platforms">{project.platforms.join(' · ')}</p>
          <h3>{t(project.title)}</h3>
        </div>
        <p className="project-summary">{t(project.summary)}</p>
        <div className="contributions">
          <p className="mini-label">{t(content.labels.caseStudy)}</p>
          <ul>
            {project.contributions[locale].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="project-footer">
          <ul className="tags" aria-label="Technologies">
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <div className="project-links">
            {project.links.map((link) => {
              const Icon = linkIcons[link.kind]
              return (
                <a className="project-link-button" key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  <Icon />
                  <span>{t(link.label)}</span>
                  <ExternalArrowIcon className="link-arrow" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}
