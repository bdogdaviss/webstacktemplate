import { posts } from '../data/posts'

export default function Blog() {
  return (
    <section
      aria-labelledby="blog-heading"
      className="mx-auto max-w-3xl px-6 pt-16 pb-8"
    >
      <header className="mb-10">
        <h1 id="blog-heading" className="text-4xl tracking-tight sm:text-5xl">
          Writing
        </h1>
        <p className="mt-3 text-base text-subtle">
          {/* placeholder intro */}
        </p>
      </header>
      <ol className="divide-y divide-border">
        {posts.map((p) => (
          <li key={p.slug} className="py-6">
            <article>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  {p.title || (
                    <span className="text-muted">Post title</span>
                  )}
                </h2>
                <time className="font-mono text-xs text-muted">
                  {p.date || ' '}
                </time>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                {p.excerpt || ' '}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
