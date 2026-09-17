import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="site-nav">
        <NavLink to="/" end className="text-red-500 underline text-2xl">
          Home
        </NavLink>
        <NavLink to="/about" className="text-red-500 underline text-2xl">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
