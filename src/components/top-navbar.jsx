import './top-navbar.css'

function Navbar({ title = 'Garden Management', actions = null }) {
  
  return (
    <nav className="navbar" aria-label="Garden navigation">
      <div className="navbar-brand">
        <span className="navbar-logo">{title}</span>
      </div>
      <div className="navbar-links">
        <a href="/dashboard" className="navbar-link">Home</a>
        <a href="/plants" className="navbar-link">Plants</a>
        <a href="#alerts" className="navbar-link">Alerts</a>
        <a href="#resources" className="navbar-link">Resources</a>
      </div>

      {actions ? <div className="navbar-actions">{actions}</div> : null}
    </nav>
  )
}

export default Navbar
