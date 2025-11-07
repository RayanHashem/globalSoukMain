import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="header">
      <NavLink to="/" className="header-brand">
        <img src="/globallogo.png" alt="Global Souk" className="header-logo" />
      </NavLink>
      <nav className="header-nav">
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/" className="btn-explore">Explore</NavLink>
      </nav>
    </header>
  )
}
