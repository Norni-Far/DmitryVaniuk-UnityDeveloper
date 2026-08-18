import { useEffect, useState } from 'react'
import type { Locale } from '../content'

const STORAGE_KEY = 'dmitry-portfolio-locale'

function getInitialLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'ru' ? 'ru' : 'en'
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  return {
    locale,
    toggleLocale: () => setLocale((current) => (current === 'en' ? 'ru' : 'en')),
  }
}
