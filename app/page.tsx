export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-panel">
        <h1 className="section-title">Culture Escrow Portal</h1>
        <p>
          The official website is being upgraded into a unified portal experience: public-facing
          company pages remain open, while internal daily tools are organized through a dedicated
          portal entry.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h2>Public Website</h2>
          <p>
            About, services, team, and contact pages continue to stay publicly accessible as the
            company-facing presentation layer.
          </p>
        </div>
        <div className="card">
          <h2>Unified Portal Strategy</h2>
          <p>
            Culture Escrow tools are being consolidated into a structured portal model instead of
            scattered standalone entry points.
          </p>
        </div>
        <div className="card">
          <h2>Daily Tools Entry</h2>
          <p>
            The <strong>/daily-tools</strong> page serves as the long-term internal tools hub for
            PG17, Temply, FedEx API, Refi A-Screen, and future tools.
          </p>
        </div>
      </div>
    </section>
  )
}
