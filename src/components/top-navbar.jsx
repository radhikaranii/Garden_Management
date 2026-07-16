import './top-navbar.css'

function Navbar({ title = 'Garden Management', actions = null }) {
  return (
    <nav className="navbar" aria-label="Garden navigation">
      <div className="navbar-brand">
        <span className="navbar-logo">{title}</span>
      </div>
      {actions ? <div className="navbar-actions">{actions}</div> : null}
    </nav>
  )
}

export default Navbar
