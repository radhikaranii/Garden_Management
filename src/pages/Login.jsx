import { useState } from "react";
import "../pages/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    window.history.pushState({}, '', '/dashboard')
    window.dispatchEvent(new PopStateEvent('popstate')
    )
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="login-tag">💐🌺🌷🌼Garden Management🌼🌷🌺💐</p>
        <h1>Welcome Back</h1>
        <p className="login-text">Enter your email and password to continue</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address🌱</label>
            <input 
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password🌱</label>
            <input 
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </section>
    </main>
  )
}

export default Login
