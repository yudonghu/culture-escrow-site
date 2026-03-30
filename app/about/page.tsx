import Breadcrumb from '@/components/Breadcrumb'

export default function AboutPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

      <div className="hero-panel">
        <div className="hero-image" style={{ backgroundImage: "url('/images/home/hero-placeholder.svg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="badge">About Us</span>
          <h1 className="section-title">Trusted guidance through every stage of escrow.</h1>
          <p>
            Culture Escrow is building a more refined public presence while continuing to strengthen the systems that support internal operations.
          </p>
        </div>
      </div>

      <section className="section-block">
        <div className="card-grid">
          <div className="card">
            <h2>Company Presence</h2>
            <p>We want the site to feel established, trustworthy, and aligned with the premium local real estate market.</p>
          </div>
          <div className="card">
            <h2>Client Confidence</h2>
            <p>Public pages should feel warm, professional, and easy for clients to understand.</p>
          </div>
          <div className="card">
            <h2>Operational Strength</h2>
            <p>Portal growth supports the team behind the scenes without taking away from the public website experience.</p>
          </div>
        </div>
      </section>
    </section>
  )
}
