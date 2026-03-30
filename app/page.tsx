import Breadcrumb from '@/components/Breadcrumb'

export default function HomePage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home' }]} />

      <div className="hero-panel">
        <h1 className="section-title">Culture Escrow Portal</h1>
        <p>
          Culture Escrow Portal is evolving into a unified experience that combines the official
          website with a structured internal tools entry. Public pages remain open, while the
          portal layer prepares the foundation for internal operational workflows.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Public Website Layer</h2>
        <p className="section-subtitle">
          Company-facing pages remain simple, clear, and publicly accessible.
        </p>
        <div className="card-grid" style={{ marginTop: 16 }}>
          <div className="card">
            <h2>About</h2>
            <p>Present the company background, positioning, and public identity.</p>
          </div>
          <div className="card">
            <h2>Services</h2>
            <p>Show the service offering in a clean public-facing format.</p>
          </div>
          <div className="card">
            <h2>Team & Contact</h2>
            <p>Keep people and contact surfaces visible as part of the official website.</p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Portal Layer</h2>
        <p className="section-subtitle">
          Internal tools are being organized into one structured portal instead of scattered links and isolated entry points.
        </p>
        <div className="card-grid" style={{ marginTop: 16 }}>
          <div className="card">
            <h2>Unified Entry</h2>
            <p>`/daily-tools` is the main internal tools entry point for current and future Culture Escrow tools.</p>
          </div>
          <div className="card">
            <h2>Internal Test Mode</h2>
            <p>The current portal focuses on structure, visibility, and usability during internal testing.</p>
          </div>
          <div className="card">
            <h2>Future-Ready Access</h2>
            <p>Microsoft login remains planned for later activation, not as a blocker for the current phase.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ marginBottom: 6 }}>Current Direction</h2>
        <p className="section-subtitle">
          Portal v1 is focused on clarity, structure, local usability, and future extensibility.
        </p>
      </section>
    </section>
  )
}
