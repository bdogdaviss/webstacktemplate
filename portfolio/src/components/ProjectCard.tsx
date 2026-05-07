import * as AlertDialog from '@radix-ui/react-alert-dialog'
import type { Project } from '../data/projects'

function getHostname(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  const hostname = getHostname(project.href)
  const isExternal = project.href && project.href !== '#'

  const goExternal = () => {
    if (!isExternal) return
    window.open(project.href, '_blank', 'noopener,noreferrer')
  }

  return (
    <article
      aria-labelledby={`project-${project.slug}-title`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:bg-surface"
    >
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button
            type="button"
            aria-label={`Open ${project.title || 'project'}`}
            className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden border-b border-border bg-bg p-0 focus-visible:outline-none"
          >
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
          </button>
        </AlertDialog.Trigger>

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
          <AlertDialog.Trigger asChild>
            <button
              type="button"
              className="mt-2 inline-flex w-fit cursor-pointer items-center bg-transparent p-0 text-sm text-fg underline-offset-4 hover:underline"
            >
              View →
            </button>
          </AlertDialog.Trigger>
        </div>

        <AlertDialog.Portal>
          <AlertDialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=closed]:animate-overlay-out data-[state=open]:animate-overlay-in" />
          <AlertDialog.Content className="fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-2xl data-[state=closed]:animate-content-out data-[state=open]:animate-content-in">
            <AlertDialog.Title className="text-lg font-semibold tracking-tight">
              Leaving the portfolio
            </AlertDialog.Title>
            <AlertDialog.Description className="mt-2 text-sm leading-relaxed text-subtle">
              You're about to visit{' '}
              <span className="text-fg">{project.title}</span>
              {hostname && (
                <>
                  {' '}
                  at{' '}
                  <span className="font-mono text-fg">{hostname}</span>
                </>
              )}
              . The site will open in a new tab.
            </AlertDialog.Description>
            <div className="mt-6 flex justify-end gap-3">
              <AlertDialog.Cancel className="cursor-pointer rounded-md border border-border bg-transparent px-4 py-2 text-sm text-fg transition-colors hover:bg-surface">
                Cancel
              </AlertDialog.Cancel>
              <AlertDialog.Action
                onClick={goExternal}
                className="cursor-pointer rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                Continue
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </article>
  )
}
