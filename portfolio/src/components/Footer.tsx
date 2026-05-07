import { socials } from '../data/socials'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <small>
          © {new Date().getFullYear()} {profile.name || 'Your Name'}
        </small>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="transition-colors hover:text-fg"
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
