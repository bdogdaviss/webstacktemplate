export default function Divider() {
  return (
    <div
      className="mx-auto max-w-3xl px-6"
      role="separator"
      aria-orientation="horizontal"
    >
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
        <span
          aria-hidden="true"
          className="h-1.5 w-12 rounded-full bg-border"
        />
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>
    </div>
  )
}
