const placeholderSkills = ['', '', '', '', '', '', '', '']

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto max-w-3xl px-6 py-16"
    >
      <h2 id="skills-heading" className="text-2xl sm:text-3xl">
        Skills
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {placeholderSkills.map((s, i) => (
          <li
            key={i}
            className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-subtle"
          >
            {s || '      '}
          </li>
        ))}
      </ul>
    </section>
  )
}
