import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/profile'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/"
            className="text-sm font-bold tracking-tight text-fg hover:opacity-80"
          >
            {profile.name || 'Your Name'}
          </Link>
        </div>

        <ul className="flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  [
                    'rounded-md px-3 py-1.5 transition-colors',
                    isActive ? 'text-fg' : 'text-subtle hover:text-fg',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center rounded-md border border-border px-3 py-1.5 font-display text-base italic text-fg transition-colors hover:bg-card"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
