import { Reveal, useInView } from '@/components/Reveal.jsx'

// "Coming soon" panel, used below the homepage hero and on pages that aren't ready yet.
// Uses the same entrance animation as the rest of the site (see Reveal.jsx).
//   waitSteps  if already on screen at load, wait this many steps (lets the hero go first)
//   as         heading level: 'h2' under the hero, 'h1' when it's the whole page
function ComingSoon({
  title = 'More coming soon',
  message = 'I’m putting together case studies, my background and more. Check back soon.',
  waitSteps = 0,
  as: Heading = 'h2',
  className = '',
}) {
  const [ref, inView, start] = useInView({ waitSteps })

  return (
    <section
      ref={ref}
      className={`mx-auto max-w-2xl rounded-2xl border border-dashed border-border px-6 py-12 text-center sm:px-10 ${className}`}
    >
      <Reveal show={inView} start={start} step={0}>
        <Heading className="m-0 mb-4 text-3xl lg:text-4xl">{title}</Heading>
      </Reveal>
      <Reveal show={inView} start={start} step={1}>
        <p className="m-0 mx-auto text-lg">{message}</p>
      </Reveal>
    </section>
  )
}

export default ComingSoon
