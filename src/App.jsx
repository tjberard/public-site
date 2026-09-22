import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

// Primary nav links: 16px, full-contrast navy, with a navy underline marking the current
// page (so state isn't conveyed by color alone) and a faint underline on hover.
const navLinkClasses = ({ isActive }) =>
  `py-2 text-base font-medium tracking-wide no-underline underline-offset-[10px] decoration-2 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-ring ${
    isActive
      ? 'text-foreground underline decoration-foreground'
      : 'text-foreground hover:decoration-foreground/30'
  }`

// The page content sits in a centered column (#root: max-width 1280px, 2rem padding),
// so the logo/Contact button sit "distance" from the screen edge, where
//   distance = max(0, (viewport - 1280px) / 2) + 2rem
// Pulling the nav outward by half of that distance halves the gap to the edge.
const NAV_EDGE_PULL = 'calc((max(0px, (100vw - 1280px) / 2) + 2rem) / -2)'

function App() {
  return (
    <BrowserRouter>
      <nav
        className="flex flex-wrap items-center justify-between gap-y-4 py-8"
        style={{ marginInline: NAV_EDGE_PULL }}
      >
        <div className="flex flex-wrap items-baseline gap-x-3">
          <Link
            to="/"
            className="text-base font-bold tracking-tight text-foreground no-underline hover:no-underline hover:text-foreground"
          >
            tylerberard.com
          </Link>
          <span className="text-sm text-slate-600">
            Driving products from concept to growth
          </span>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-4 md:w-auto md:justify-end md:gap-10">
          <NavLink to="/resume" className={navLinkClasses}>
            Resume
          </NavLink>
          <NavLink to="/case-studies" className={navLinkClasses}>
            Case Studies
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>

          <Button
            render={<Link to="/contact" />}
            nativeButton={false}
            size="lg"
            className="rounded-full! bg-[#0a192f] px-5! text-white hover:bg-[#1d3557]"
          >
            Get in Touch
          </Button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
