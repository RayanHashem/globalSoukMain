import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="header">
      <h1 className="header-brand">Global Souk</h1>
      <nav className="header-nav">
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <NavLink to="/" className="btn-explore">Explore</NavLink>
      </nav>
    </header>
  )
}
