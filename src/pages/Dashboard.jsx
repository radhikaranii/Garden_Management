import './Dashboard.css'

function Dashboard() {
  const alerts = [
    {
      title: 'Pests',
      text: 'Check basil and mint for aphids and leaf damage.',
    },
    {
      title: 'Weather',
      text: 'Light rain expected later today. Hold off on watering.',
    },
    {
      title: 'Soil',
      text: 'Top beds are drying faster than usual.',
    },
  ]

  const activePlants = [
    { name: 'Tomatoes', status: 'Fruiting', stage: 'Week 6' },
    { name: 'Basil', status: 'Growing well', stage: 'Week 3' },
    { name: 'Mint', status: 'Needs pruning', stage: 'Week 4' },
    { name: 'Lettuce', status: 'Ready soon', stage: 'Week 5' },
  ]

  const growthLog = [
    { date: 'Mon', note: 'Pruned tomato vines and removed yellow leaves.' },
    { date: 'Wed', note: 'Added compost and checked moisture levels.' },
    { date: 'Fri', note: 'Harvested basil and watered raised bed 2.' },
  ]

  const resources = [
    'How to plant tomatoes',
    'How to maintain mint',
    'Garden layout guide',
    'Watering schedule',
  ]

  return (
    <main className="dashboard-page">
      <section className="dashboard-shell">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-kicker">Garden Management</p>
            <h1>Radhika&apos;s Home</h1>
            <p className="dashboard-subtitle">
              A simple overview of weather, plants, alerts, and care notes.
            </p>
          </div>

          <button className="dashboard-primary-button" type="button">
            + Add Plant
          </button>
        </header>

        <section className="dashboard-grid">
          <aside className="dashboard-left">
            <article className="panel panel-weather">
              <div className="panel-heading">
                <span>Weather Today</span>
                <span className="panel-badge">18°C</span>
              </div>

              <div className="weather-main">
                <div className="weather-icon">⛅</div>
                <div>
                  <h2>Partly Cloudy</h2>
                  <p>Great day for checking leaves and adjusting watering.</p>
                </div>
              </div>

              <div className="weather-stats">
                <div>
                  <strong>Humidity</strong>
                  <span>61%</span>
                </div>
                <div>
                  <strong>Rain</strong>
                  <span>20%</span>
                </div>
                <div>
                  <strong>Wind</strong>
                  <span>8 km/h</span>
                </div>
              </div>
            </article>

            <article className="panel panel-plants">
              <div className="panel-heading">
                <span>Active Plants</span>
                <span className="panel-badge">4</span>
              </div>

              <div className="plant-list">
                {activePlants.map((plant) => (
                  <button key={plant.name} className="plant-row" type="button">
                    <div>
                      <strong>{plant.name}</strong>
                      <p>{plant.status}</p>
                    </div>
                    <span>{plant.stage}</span>
                  </button>
                ))}
              </div>
            </article>
          </aside>

          <section className="dashboard-right">
            <article className="panel panel-alerts">
              <div className="panel-heading">
                <span>Alerts</span>
                <span className="panel-badge warning">3</span>
              </div>

              <div className="alert-list">
                {alerts.map((alert) => (
                  <div key={alert.title} className="alert-card">
                    <strong>{alert.title}</strong>
                    <p>{alert.text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel panel-info">
              <div className="panel-heading">
                <span>Website Info About Plants</span>
              </div>

              <p className="info-text">
                Keep all crop notes in one place. Track watering, pruning,
                pest control, and harvest timing without opening extra tabs.
              </p>
            </article>

            <article className="panel panel-log">
              <div className="panel-heading">
                <span>Growth &amp; Harvest Log</span>
              </div>

              <div className="log-list">
                {growthLog.map((entry) => (
                  <div key={entry.date} className="log-item">
                    <span className="log-date">{entry.date}</span>
                    <p>{entry.note}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel panel-resources">
              <div className="panel-heading">
                <span>Website Help / How To</span>
              </div>

              <div className="resource-grid">
                {resources.map((resource) => (
                  <button key={resource} className="resource-chip" type="button">
                    {resource}
                  </button>
                ))}
              </div>
            </article>
          </section>
        </section>
      </section>
    </main>
  )
}

export default Dashboard