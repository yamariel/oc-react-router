import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">Shiny</h1>
        <nav className="nav">
          <NavLink to="/" className="nav-link">Dashboard</NavLink>
          <NavLink to="/projects" className="nav-link">Projets</NavLink>
          <NavLink to="/employees" className="nav-link">Employés</NavLink>
          <NavLink to="/about" className="nav-link">A propos</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header