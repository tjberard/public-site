// Small pill label that sits above a section heading, e.g. "Product leader" or
// "Selected work". Used by every homepage section so they match.
function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`m-0 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground ${className}`}
    >
      <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </p>
  )
}

export default Eyebrow
