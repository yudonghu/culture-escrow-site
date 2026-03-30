import Breadcrumb from '@/components/Breadcrumb'

export default function HomePage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home' }]} />

      <div className="hero-panel">
        <h1 className="section-title">Culture Escrow Portal</h1>
        <p>
          The official website is being upgraded into a unified portal experience: public-facing
          company pages remain open, while internal daily tools are organized through a dedicated
          portal entry.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Public Website Layer</h2>
        <p className="section-subtitle">
          Public pages continue to present company-facing information and remain openly accessible.
        </p>
        <div className="card-grid" style={{ marginTop: 16 }}>
          <div className="card">
            <h2>About</h2>
            <p>Company background and official positioning.</p>
          </div>
          <div className="card">
            <h2>Services</h2>
            <p>Public-facing service presentation and operational context.</p>
          </div>
          <div className="card">
            <h2>Team / Contact</h2>
            <p>Public people and contact surfaces remain accessible as part of the official site.</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Portal Layer</h2>
        <p className="section-subtitle">
          The portal layer organizes internal tools through a unified entry instead of scattered links.
        </p>
        <div className="card-grid" style={{ marginTop: 16 }}>
          <div className="card">
            <h2>Unified Tool Entry</h2>
            <p>`/daily-tools` is the long-term home for tool discovery, grouping, and navigation.</p>
          </div>
          <div className="card">
            <h2>Internal Test Mode</h2>
            <p>Current phase prioritizes internal testing, structure building, and iterative refinement.</p>
          </div>
          <div className="card">
            <h2>Future Auth Layer</h2>
            <p>Microsoft login remains a future activation path, not a current rollout blocker.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: 6 }}>Current Direction</h2>
        <p className="section-subtitle">
          The site is evolving from a static website into a portal with structured information,
          tool navigation, and future-ready access boundaries.
        </p>
      </section>
    </section>
  )
}
