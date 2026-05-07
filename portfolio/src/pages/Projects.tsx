import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="mx-auto max-w-5xl px-6 pt-16 pb-8"
    >
      <header className="mb-10">
        <h1
          id="projects-heading"
          className="text-4xl tracking-tight sm:text-5xl"
        >
          Projects
        </h1>
        <p className="mt-3 text-base text-subtle">
          {/* placeholder intro */}
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
