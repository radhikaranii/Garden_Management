import './Plants.css'
import Navbar from '../components/top-navbar'

function Plants() {
  const plants = [
    {
      name: 'Tomatoes',
      status: 'Fruiting',
      care: 'Water deeply every 2 days and check for yellow leaves.',
    },
    {
      name: 'Basil',
      status: 'Growing well',
      care: 'Pinch flower buds and harvest from the top leaves.',
    },
    {
      name: 'Mint',
      status: 'Needs pruning',
      care: 'Trim long stems and keep soil lightly moist.',
    },
    {
      name: 'Lettuce',
      status: 'Ready soon',
      care: 'Harvest outer leaves first and protect from harsh afternoon sun.',
    },
  ]

  return (
    <main className="plants-page">
      <section className="plants-shell">
        <Navbar />

        <header className="plants-header">
          <div>
            <h1>Plants</h1>
            <p>Track each plant, its current growth stage, and the next care step.</p>
          </div>
          <button className="plants-add-button" type="button">
            + Add Plant
          </button>
        </header>

        <section className="plants-grid" aria-label="Plant list">
          {plants.map((plant) => (
            <article className="plant-card" key={plant.name}>
              <div>
                <span className="plant-status">{plant.status}</span>
                <h2>{plant.name}</h2>
              </div>
              <p>{plant.care}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}

export default Plants

