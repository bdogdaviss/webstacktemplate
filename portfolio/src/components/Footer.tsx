import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

const company = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="mt-12 w-full px-6 pt-8 md:px-12 lg:px-24 text-subtle">
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-between gap-10 border-b border-border pb-10 md:flex-row">
        <div className="md:max-w-md">
          <p className="font-display text-2xl text-fg">{profile.name}</p>
          <p className="mt-3 text-sm">
            {profile.tagline}. {profile.location}.
          </p>
        </div>

        <div className="flex flex-1 items-start gap-12 sm:gap-20 md:justify-end md:gap-32">
          <div>
            <h2 className="mb-5 text-sm font-semibold text-fg uppercase tracking-wide">
              Site
            </h2>
            <ul className="space-y-2 text-sm">
              {company.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className="hover:text-fg">
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-fg"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-sm font-semibold text-fg uppercase tracking-wide">
              Get in touch
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:baronmichaeldavis@gmail.com"
                  className="hover:text-fg"
                >
                  baronmichaeldavis@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/baron-davis-ba0275292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/bdogdaviss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="pb-5 pt-4 text-center text-sm">
        Copyright {new Date().getFullYear()} © {profile.name}. All rights
        reserved.
      </p>
    </footer>
  )
}
