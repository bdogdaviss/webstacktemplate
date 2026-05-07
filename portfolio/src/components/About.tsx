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
      <div className="mt-6 grid gap-10 sm:grid-cols-[192px_1fr] sm:items-start">
        <img
          src="/profile.jpg"
          alt={profile.name}
          width={400}
          height={400}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full rounded-lg border border-border object-cover"
        />
        <p className="text-base leading-relaxed text-subtle sm:text-lg">
          {profile.bio}
        </p>
      </div>
    </section>
  )
}
