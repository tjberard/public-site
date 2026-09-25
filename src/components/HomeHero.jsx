import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Homepage hero: greeting, photo, short intro and two calls to action.
// Edit the `content` object below to change the words.
// For the photo, drop an image at /public/headshot.jpg (square, ~800x800 works well).
const content = {
  eyebrow: 'Product leader',
  greeting: "Hi, I'm Tyler.",
  headline: 'I turn early ideas into products people rely on.',
  intro:
    'For the past several years I’ve led products from first concept through launch and growth — pairing customer research with sharp prioritization to ship work that moves the numbers that matter.',
  photo: '/headshot.jpg',
  photoAlt: 'Portrait of Tyler Berard',
  initials: 'TB',
}

function HeroPhoto({ src, alt, initials }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative mx-auto w-56 shrink-0 sm:w-64 lg:mx-0 lg:w-80">
      {/* Offset accent block behind the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[#0f766e]/15"
      />
      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#0a192f] shadow-lg ring-1 ring-black/5">
        {src && !failed ? (
          <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          // Placeholder shown until a headshot is added
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white">
            <span className="text-6xl font-semibold tracking-tight">{initials}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/60">Photo</span>
          </div>
        )}
      </div>
    </div>
  )
}

function HomeHero() {
  return (
    <section className="flex flex-col-reverse items-center gap-12 pt-8 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:pt-16 lg:text-left">
      <div className="max-w-2xl">
        <p className="m-0 mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground lg:mx-0">
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          {content.eyebrow}
        </p>

        <h1 className="m-0 mb-5">
          <span className="block text-primary">
            {content.greeting}{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </span>
          {content.headline}
        </h1>

        <p className="mb-8 text-lg lg:mx-0">{content.intro}</p>

        <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
          <Button
            render={<Link to="/case-studies" />}
            nativeButton={false}
            size="lg"
            className="rounded-full! bg-[#0a192f] px-5! text-white hover:bg-[#1d3557]"
          >
            View my work
            <ArrowRight aria-hidden="true" />
          </Button>
          <Button
            render={<Link to="/resume" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-full! px-5!"
          >
            Resume
          </Button>
        </div>
      </div>

      <HeroPhoto src={content.photo} alt={content.photoAlt} initials={content.initials} />
    </section>
  )
}

export default HomeHero
