import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './App.css'

const navLinkClasses = ({ isActive }) =>
  `text-sm font-medium uppercase tracking-wide transition-colors ${
    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
  }`

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-center gap-8 py-6">
        <NavLink to="/" end className={navLinkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClasses}>
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
