import { NavLink, useNavigate } from 'react-router-dom'
import './top-navbar.css'

function Navbar({ onLogout }){
    const navigate = useNavigate()
    
    const handleLogout = () => {
        onLogout()
        navigate('/login')
    }

    return(
      <nav className ="navbar">
        <div className ="navbar-brand">
            <span className="navbar-logo"> Garden Management</span>
      </div>

      <u1 className="navbar-links">
        <li><NavLink to="/dashboard" end>Home</NavLink></li>




        </u1>
    )






}