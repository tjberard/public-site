import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

// Background + text colors for tiles without a cover image.
const tones = {
  navy: 'bg-[#0a192f] text-white',
  teal: 'bg-[#0f766e] text-white',
  slate: 'bg-[#e3e8f0] text-[#0a192f]',
  sand: 'bg-[#f3ede3] text-[#0a192f]',
}

function TileLink({ href, children, ...props }) {
  if (!href) return <div {...props}>{children}</div>
  if (href.startsWith('/')) return <Link to={href} {...props}>{children}</Link>
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  )
}

function WorkTile({ item, tabIndex }) {
  const { title, category, summary, href, image, tone = 'navy', metric, metricLabel } = item
  const hasImage = Boolean(image)

  return (
    <TileLink
      href={href}
      tabIndex={tabIndex}
      className={`group relative flex h-64 w-72 shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-6 text-left no-underline! shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-80 ${
        hasImage ? 'text-white' : tones[tone] ?? tones.navy
      }`}
    >
      {hasImage && (
        <>
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-[#0a192f]/40 to-transparent" />
        </>
      )}

      <div className="relative flex items-start justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] opacity-75">
          {category}
        </span>
        {href && (
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          />
        )}
      </div>

      <div className="relative">
        {metric && (
          <p className="m-0 mb-1 text-4xl font-semibold tracking-tight text-inherit">
            {metric}
            {metricLabel && (
              <span className="ml-2 text-sm font-medium tracking-normal opacity-75">
                {metricLabel}
              </span>
            )}
          </p>
        )}
        <h3 className="m-0 text-lg font-semibold leading-snug">{title}</h3>
        {summary && (
          <p className="m-0 mt-1 text-sm leading-relaxed text-inherit opacity-80">{summary}</p>
        )}
      </div>
    </TileLink>
  )
}

export default WorkTile
