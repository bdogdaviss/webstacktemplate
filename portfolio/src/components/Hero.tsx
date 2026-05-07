import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-3xl px-6 pt-24 pb-20 sm:pt-32"
    >
      <p className="mb-4 text-sm font-medium tracking-wide text-subtle uppercase">
        {profile.location || ' '}
      </p>
      <h1
        id="hero-heading"
        className="text-5xl leading-[1.05] tracking-tight sm:text-6xl"
      >
        {profile.name || 'Your Name'}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-subtle sm:text-xl">
        {profile.tagline || ' '}
      </p>
      {profile.bio && (
        <p className="mt-4 max-w-2xl text-base text-subtle">
          {profile.bio}
        </p>
      )}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/projects"
          className="inline-flex items-center rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-card"
        >
          Contact
        </Link>
      </div>
    </section>
  )
}
