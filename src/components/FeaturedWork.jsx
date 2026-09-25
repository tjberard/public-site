import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal, useInView } from '@/components/Reveal.jsx'
import Eyebrow from '@/components/Eyebrow.jsx'

// Homepage "Selected work" section: a centered intro above three static cards.
// Layout inspired by shadcn/studio "Portfolio 14".
// The cards come from src/data/featuredWork.js (the first three entries are shown).
//
// Entrance animation: the same one the hero uses (see Reveal.jsx). When this section
// scrolls into view, the label, heading, intro and button appear in turn, then the cards.

const content = {
  eyebrow: 'Selected work',
  title: 'Work that moves the numbers',
  intro:
    'A few recent projects, from first concept through launch and growth. Each one started with a customer problem and ended with a measurable result.',
  ctaLabel: 'See all work',
  ctaHref: '/my-work',
}

// Background + text colors for the preview panel when a card has no cover image.
const tones = {
  navy: 'bg-[#0a192f] text-white',
  teal: 'bg-[#0f766e] text-white',
  slate: 'bg-[#e3e8f0] text-[#0a192f]',
  sand: 'bg-[#f3ede3] text-[#0a192f]',
}

function CardLink({ href, children, ...props }) {
  if (!href) return <div {...props}>{children}</div>
  if (href.startsWith('/')) return <Link to={href} {...props}>{children}</Link>
  return (
    <a href={href} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  )
}

// The top of the card: the cover image if there is one, otherwise a colored panel
// that shows the headline metric.
function CardPreview({ item }) {
  const { image, title, tone = 'navy', category, metric, metricLabel } = item

  if (image) {
    return (
      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-lg p-5 ${
        tones[tone] ?? tones.navy
      }`}
    >
      {/* Soft decorative circle that grows slightly on hover */}
      <div
        aria-hidden="true"
        className="absolute -right-10 -bottom-10 size-40 rounded-full bg-current opacity-[0.07] transition-transform duration-500 group-hover:scale-125"
      />
      <span className="relative text-xs font-semibold uppercase tracking-[0.14em] opacity-75">
        {category}
      </span>
      {metric && (
        <div className="relative transition-transform duration-300 group-hover:scale-105 origin-bottom-left">
          <span className="block text-5xl font-semibold tracking-tight">{metric}</span>
          {metricLabel && (
            <span className="mt-1 block text-sm font-medium opacity-75">{metricLabel}</span>
          )}
        </div>
      )}
    </div>
  )
}

function WorkCard({ item }) {
  const { title, summary, href } = item

  return (
    <CardLink
      href={href}
      className="group flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-5 text-left text-foreground no-underline! transition-shadow duration-300 hover:text-foreground hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <CardPreview item={item} />
      <div className="space-y-2">
        <h3 className="m-0 flex items-start justify-between gap-3 text-xl leading-tight font-semibold">
          {title}
          {href && (
            <ArrowUpRight
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            />
          )}
        </h3>
        {summary && <p className="m-0 max-w-none text-base leading-relaxed">{summary}</p>}
      </div>
    </CardLink>
  )
}

function FeaturedWork({ items }) {
  // If this section is already visible on load, let the hero (4 steps) play first.
  const [ref, inView, start] = useInView({ waitSteps: 4 })
  const cards = (items ?? []).slice(0, 3)
  if (!cards.length) return null

  return (
    <section ref={ref} aria-labelledby="featured-work-title" className="mt-24 lg:mt-32">
      <div className="mb-12 space-y-4 text-center md:mb-16">
        <Reveal show={inView} start={start} step={0}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal show={inView} start={start} step={1}>
          <h2 id="featured-work-title" className="m-0 text-3xl lg:text-4xl">
            {content.title}
          </h2>
        </Reveal>
        <Reveal show={inView} start={start} step={2}>
          <p className="m-0 mx-auto max-w-2xl text-lg">{content.intro}</p>
        </Reveal>
        <Reveal show={inView} start={start} step={3}>
          <Button
            render={<Link to={content.ctaHref} />}
            nativeButton={false}
            size="lg"
            className="group rounded-full! bg-[#0a192f] px-5! text-white hover:bg-[#1d3557]"
          >
            {content.ctaLabel}
            <ArrowRight
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
        </Reveal>
      </div>

      <ul className="m-0 grid list-none gap-6 p-0 md:grid-cols-3">
        {cards.map((item, i) => (
          <li key={item.title}>
            <Reveal show={inView} start={start} step={4 + i} className="h-full">
              <WorkCard item={item} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeaturedWork
