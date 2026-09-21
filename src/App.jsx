import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

const navLinkClasses = ({ isActive }) =>
  `text-sm sm:text-sm font-medium tracking-wide no-underline transition-colors ${
    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
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
        className="flex flex-wrap items-center justify-between gap-y-4 py-8 md:grid md:grid-cols-[1fr_auto_1fr]"
        style={{ marginInline: NAV_EDGE_PULL }}
      >
        <Link to="/" aria-label="Home" className="justify-self-start">
          <img src="/logo-navy.svg" alt="" className="h-12 w-12" />
        </Link>

        <div className="order-3 flex w-full justify-center gap-4 md:order-none md:w-auto md:gap-6">
          <NavLink to="/resume" className={navLinkClasses}>
            Resume
          </NavLink>
          <NavLink to="/case-studies" className={navLinkClasses}>
            Case Studies
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </div>

        <Button
          render={<Link to="/contact" />}
          nativeButton={false}
          size="lg"
          className="justify-self-end rounded-full! bg-[#0a192f] px-5! text-white hover:bg-[#1d3557]"
        >
          Get in Touch
        </Button>
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
