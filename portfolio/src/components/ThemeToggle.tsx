import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme, type Theme } from '../hooks/useTheme'

const order: Theme[] = ['system', 'light', 'dark']

const labels: Record<Theme, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const next = order[(order.indexOf(theme) + 1) % order.length]
  const Icon = theme === 'system' ? Monitor : theme === 'dark' ? Moon : Sun

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Theme: ${labels[theme]} — click to switch to ${labels[next]}`}
      title={`Theme: ${labels[theme]}`}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg transition-colors hover:bg-card"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}
