import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">Shiny</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/projects" className="nav-link">Projets</Link>
          <Link to="/employees" className="nav-link">Employés</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header