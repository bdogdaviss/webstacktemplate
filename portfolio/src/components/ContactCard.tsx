import { socials } from '../data/socials'

export default function ContactCard() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-3xl px-6 py-16"
    >
      <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
        <h2 id="contact-heading" className="text-2xl sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-3 text-base text-subtle">{/* short prompt */} </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm text-fg transition-colors hover:bg-surface"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
