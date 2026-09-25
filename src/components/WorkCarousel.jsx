import { useState } from 'react'
import { Pause, Play } from 'lucide-react'
import WorkTile from './WorkTile.jsx'

// A continuously scrolling row of work tiles.
// - Pauses while hovered or while a tile has keyboard focus.
// - Has a visible pause/play button (needed for motion that runs longer than 5s).
// - With "reduce motion" turned on in the OS, it becomes a normal swipeable row.
//
// `speed` is seconds per full loop — bigger number = slower.
function WorkCarousel({ items, title = 'Selected work', speed = 45 }) {
  const [paused, setPaused] = useState(false)
  if (!items?.length) return null

  return (
    <section aria-labelledby="work-carousel-title" className="work-carousel mt-20 text-left">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="work-carousel-title" className="m-0 text-xl">
          {title}
        </h2>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="work-carousel-toggle inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
        >
          {paused ? <Play className="size-3.5" aria-hidden="true" /> : <Pause className="size-3.5" aria-hidden="true" />}
          {paused ? 'Play' : 'Pause'}
        </button>
      </div>

      <div className="work-carousel-viewport">
        <ul
          className="work-carousel-track"
          data-paused={paused}
          style={{ '--marquee-duration': `${speed}s` }}
        >
          {items.map((item, i) => (
            <li key={`a-${i}`}>
              <WorkTile item={item} />
            </li>
          ))}
          {/* Second copy makes the loop seamless; hidden from screen readers and tab order */}
          {items.map((item, i) => (
            <li key={`b-${i}`} aria-hidden="true" className="work-carousel-clone">
              <WorkTile item={item} tabIndex={-1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WorkCarousel
