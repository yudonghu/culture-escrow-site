import Breadcrumb from '@/components/Breadcrumb'

export default function HomePage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home' }]} />

      <div className="hero-panel">
        <div
          className="hero-image"
          style={{ backgroundImage: "url('/images/home/hero-placeholder.svg')" }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="badge">Trusted Escrow Services</span>
          <h1 className="section-title">A more personal and dependable escrow experience.</h1>
          <p>
            Culture Escrow combines a client-facing escrow website with a structured internal portal,
            helping us support transactions with clarity, care, and operational precision.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="/contact">Contact Us</a>
            <a className="button-secondary" href="/services">View Services</a>
          </div>
        </div>
      </div>

      <section className="section-block">
        <div className="section-block-header">
          <h2 style={{ marginBottom: 6 }}>Why Culture Escrow</h2>
          <p className="section-subtitle">
            We are shaping the site to feel like a real escrow company website first, while still supporting future portal growth.
          </p>
        </div>
        <div className="card-grid">
          <div className="card">
            <h2>Reliable Process</h2>
            <p>Built to support smooth escrow coordination with a clear and professional experience.</p>
          </div>
          <div className="card">
            <h2>Local Market Feel</h2>
            <p>Visual direction is being prepared around San Marino-style homes and premium neighborhood presentation.</p>
          </div>
          <div className="card">
            <h2>Modern Operations</h2>
            <p>Behind the scenes, portal tools like pg17 are being integrated to support real workflow execution.</p>
          </div>
        </div>
      </section>

      <section className="section-block split-feature">
        <div className="feature-panel">
          <h2>Professional Public Website</h2>
          <p>
            Home, About, Services, Team, and Contact are being refined to feel like a polished escrow brand presence.
          </p>
        </div>
        <div className="feature-panel">
          <h2>Internal Portal Growth</h2>
          <p>
            `daily-tools` remains the long-term internal tools hub, with pg17 as the first real connected tool.
          </p>
        </div>
      </section>
    </section>
  )
}
