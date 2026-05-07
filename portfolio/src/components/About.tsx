import { profile } from '../data/profile'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-3xl px-6 py-16"
    >
      <h2 id="about-heading" className="text-2xl sm:text-3xl">
        About
      </h2>
      <div className="mt-6 grid gap-10 sm:grid-cols-[160px_1fr] sm:items-start">
        <div
          aria-hidden="true"
          className="aspect-square w-40 rounded-lg border border-border bg-card"
        />
        <p className="text-base leading-relaxed text-subtle sm:text-lg">
          {profile.bio || (
            <span className="text-muted">
              {/* placeholder bio paragraph */}
            </span>
          )}
        </p>
      </div>
    </section>
  )
}
