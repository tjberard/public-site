import { useEffect, useRef, useState } from 'react'

// Shared entrance animation for the whole site.
//
// Every section uses the same motion: each piece fades up out of a soft blur, one after
// another. Use `useInView` on the section, then wrap each piece in <Reveal> with a step
// number — step 0 appears first, step 1 a moment later, and so on. Keeping every section
// on the same step size is what makes the page feel like one system.
//
// The look itself (blur, distance, easing, duration) lives in App.css under `.reveal`.
// With "reduce motion" turned on in the OS, everything appears instantly.

// Time between one step and the next, in milliseconds.
export const REVEAL_STEP_MS = 100

// How soon after the page appears a section counts as "already on screen at load".
const ON_LOAD_WINDOW_MS = 300

// Becomes true once `ref` has scrolled into view, then stays true.
// Returns [ref, inView, startStep].
//
// `startStep` lets a lower section wait its turn: if it's already visible when the page
// loads (e.g. on a tall screen), it starts after `waitSteps` steps so it follows the
// section above instead of animating at the same time. If it's scrolled to later, it
// starts immediately (startStep = 0). Pass it to <Reveal start={startStep}>.
export function useInView({ threshold = 0.15, waitSteps = 0 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [startStep, setStartStep] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const mountedAt = performance.now()
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (performance.now() - mountedAt < ON_LOAD_WINDOW_MS) setStartStep(waitSteps)
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, waitSteps])

  return [ref, inView, startStep]
}

// Wraps its children in the entrance animation.
//   show   start the animation (usually the `inView` value from useInView)
//   step   position in the sequence: 0, 1, 2… (fractions like 1.5 are fine)
//   start  extra steps to wait before this section's sequence begins (see useInView)
export function Reveal({ show, step = 0, start = 0, className = '', children }) {
  return (
    <div
      className={`reveal ${className}`}
      data-visible={show}
      style={{ '--reveal-delay': `${Math.round((start + step) * REVEAL_STEP_MS)}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
