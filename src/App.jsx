import { useEffect, useState } from 'react'
import Login from './pages/Login.jsx'
import './App.css'

const LOGIN_PATH = '/login'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    if (window.location.pathname !== LOGIN_PATH) {
      window.history.replaceState({}, '', LOGIN_PATH)
      setPathname(LOGIN_PATH)
    }

    const handleLocationChange = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  if (pathname === LOGIN_PATH) {
    return <Login />
  }

  return null
}

export default App
