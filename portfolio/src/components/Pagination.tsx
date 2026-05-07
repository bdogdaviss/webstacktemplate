import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

type Page = { to: string; label: string }

const pages: Page[] = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Pagination() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const currentIndex = Math.max(
    0,
    pages.findIndex((p) => p.to === pathname),
  )

  const prev = pages[currentIndex - 1]
  const next = pages[currentIndex + 1]

  const baseLink =
    'inline-flex h-11 items-center justify-center rounded-md border border-border text-sm font-medium text-fg transition-colors'
  const number = `${baseLink} w-11`
  const arrow = `${baseLink} px-4 gap-1.5`
  const interactive = 'hover:bg-card cursor-pointer'
  const disabled = 'pointer-events-none opacity-40'

  return (
    <nav
      aria-label="Pagination"
      className="mx-auto flex max-w-5xl justify-center px-6 py-12"
    >
      <ul className="flex items-center gap-2 text-base">
        <li>
          {prev ? (
            <Link
              to={prev.to}
              className={`${arrow} ${interactive}`}
              aria-label={`Previous page: ${prev.label}`}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              <span>Previous</span>
            </Link>
          ) : (
            <span className={`${arrow} ${disabled}`} aria-hidden="true">
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </span>
          )}
        </li>

        {pages.map((p, i) => {
          const isActive = i === currentIndex
          return (
            <li key={p.to}>
              <button
                type="button"
                onClick={() => navigate(p.to)}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Go to ${p.label}`}
                className={[
                  number,
                  isActive ? 'bg-fg text-bg' : interactive,
                ].join(' ')}
              >
                {i + 1}
              </button>
            </li>
          )
        })}

        <li>
          {next ? (
            <Link
              to={next.to}
              className={`${arrow} ${interactive}`}
              aria-label={`Next page: ${next.label}`}
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          ) : (
            <span className={`${arrow} ${disabled}`} aria-hidden="true">
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  )
}
