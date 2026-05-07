import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto max-w-3xl px-6 py-16"
    >
      <h2 id="experience-heading" className="text-2xl sm:text-3xl">
        Experience
      </h2>
      <ol className="mt-8 space-y-8">
        {experience.map((entry, i) => (
          <li key={i} className="border-l border-border pl-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                {entry.role || <span className="text-muted">Role</span>}
              </h3>
              <span className="font-mono text-xs text-muted">
                {entry.period || ' '}
              </span>
            </div>
            <p className="mt-1 flex items-center gap-2 text-sm text-subtle">
              {entry.logo && entry.companyUrl ? (
                <a
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${entry.company} website`}
                  className="shrink-0 rounded-sm transition-opacity hover:opacity-75"
                >
                  <img
                    src={entry.logo}
                    alt={`${entry.company} logo`}
                    width={24}
                    height={24}
                    loading="lazy"
                    decoding="async"
                    className="h-5 w-5 rounded-sm object-contain"
                  />
                </a>
              ) : entry.logo ? (
                <img
                  src={entry.logo}
                  alt=""
                  width={24}
                  height={24}
                  loading="lazy"
                  decoding="async"
                  className="h-5 w-5 shrink-0 rounded-sm object-contain"
                />
              ) : null}
              <span>{entry.company || ' '}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-subtle">
              {entry.description || ' '}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
