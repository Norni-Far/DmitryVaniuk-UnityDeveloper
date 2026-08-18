import { useEffect, useState } from 'react'
import { UpArrowIcon } from './Icons'

interface BackToTopProps {
  label: string
}

export function BackToTop({ label }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > window.innerHeight * 0.7)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <button
      className={`back-to-top${isVisible ? ' is-visible' : ''}`}
      type="button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <UpArrowIcon />
    </button>
  )
}
