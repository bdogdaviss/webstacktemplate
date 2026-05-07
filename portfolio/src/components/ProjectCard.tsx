import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`project-${project.slug}-title`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:bg-surface"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-bg">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} landing page`}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-surface to-bg" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3
          id={`project-${project.slug}-title`}
          className="text-lg font-semibold tracking-tight"
        >
          {project.title || (
            <span className="text-muted">Project Title</span>
          )}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-subtle">
          {project.description || ' '}
        </p>
        {project.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded border border-border px-2 py-0.5 font-mono text-xs text-subtle"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex w-fit items-center text-sm text-fg underline-offset-4 hover:underline"
        >
          View →
        </a>
      </div>
    </article>
  )
}
