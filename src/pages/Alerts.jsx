import './Alerts.css'
import Navbar from '../components/top-navbar'

function Alerts() {
  const alerts = [
    {
      title: 'Pest Check',
      level: 'High',
      detail: 'Inspect basil and mint leaves for aphids this evening.',
    },
    {
      title: 'Rain Expected',
      level: 'Medium',
      detail: 'Skip watering if the soil is still damp after rainfall.',
    },
    {
      title: 'Dry Soil',
      level: 'Low',
      detail: 'Raised bed 2 may need compost and mulch this week.',
    },
  ]

  return (
    <main className="alerts-page">
      <section className="alerts-shell">
        <Navbar />

        <header className="alerts-header">
          <div>
            <h1>Alerts</h1>
            <p>Review garden tasks that need attention soon.</p>
          </div>
        </header>

        <section className="alerts-list" aria-label="Garden alerts">
          {alerts.map((alert) => (
            <article className="garden-alert" key={alert.title}>
              <div>
                <span className={`alert-level alert-level-${alert.level.toLowerCase()}`}>
                  {alert.level}
                </span>
                <h2>{alert.title}</h2>
              </div>
              <p>{alert.detail}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}

export default Alerts
