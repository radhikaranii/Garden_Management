import { useEffect, useState } from 'react'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './App.css'

const LOGIN_PATH = '/login'
const DASHBOARD_PATH = '/dashboard'
const VALID_PATHS = new Set([LOGIN_PATH, DASHBOARD_PATH])

function getCurrentPathname() {
  const { pathname } = window.location

  if (VALID_PATHS.has(pathname)) {
    return pathname
  }

  window.history.replaceState({}, '', LOGIN_PATH)
  return LOGIN_PATH
}

function App() {
  const [pathname, setPathname] = useState(getCurrentPathname)

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(getCurrentPathname())
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  if (pathname === LOGIN_PATH) {
    return <Login />
  }

  if (pathname === DASHBOARD_PATH) {
    return <Dashboard />
  }

  return null
}

export default App
