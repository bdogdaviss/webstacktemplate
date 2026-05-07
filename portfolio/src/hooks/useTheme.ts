import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function safeGetStored(): Theme {
  try {
    if (typeof window === 'undefined') return 'system'
    const v = window.localStorage.getItem(STORAGE_KEY)
    return v === 'light' || v === 'dark' || v === 'system' ? v : 'system'
  } catch {
    return 'system'
  }
}

function safeSetStored(theme: Theme): void {
  try {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* storage disabled / quota — ignore */
  }
}

function getSystemTheme(): ResolvedTheme {
  try {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function')
      return 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  } catch {
    return 'dark'
  }
}

function applyResolved(resolved: ResolvedTheme): void {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = resolved
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(safeGetStored)
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme)

  const resolvedTheme: ResolvedTheme = theme === 'system' ? systemTheme : theme

  // Push resolved theme to <html data-theme="…">.
  useEffect(() => {
    applyResolved(resolvedTheme)
  }, [resolvedTheme])

  // Persist user selection.
  useEffect(() => {
    safeSetStored(theme)
  }, [theme])

  // Track OS preference changes (only meaningful when theme === 'system').
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function')
      return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => setSystemTheme(mq.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const setTheme = useCallback((next: Theme) => setThemeState(next), [])

  return { theme, resolvedTheme, setTheme }
}
