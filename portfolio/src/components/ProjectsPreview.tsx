import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured)
  return (
    <section
      id="projects"
      aria-labelledby="featured-heading"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <header className="flex items-end justify-between">
        <h2 id="featured-heading" className="text-2xl sm:text-3xl">
          Featured Projects
        </h2>
        <Link
          to="/projects"
          className="text-sm text-subtle underline-offset-4 hover:text-fg hover:underline"
        >
          All projects →
        </Link>
      </header>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
