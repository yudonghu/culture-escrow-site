import Breadcrumb from '@/components/Breadcrumb'

export default function AboutPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

      <div className="hero-panel">
        <h1 className="section-title">About Culture Escrow</h1>
        <p>
          Culture Escrow Portal is designed to preserve a clear public website while creating a
          structured long-term home for internal operational tools.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Company Positioning</h2>
        <p className="section-subtitle">
          Public-facing presentation remains clear and professional while the portal grows behind it.
        </p>
      </section>

      <div className="card-grid">
        <div className="card">
          <h2>Official Website Role</h2>
          <p>The site continues to serve as the public-facing official website for Culture Escrow.</p>
        </div>
        <div className="card">
          <h2>Portal Role</h2>
          <p>The same project also serves as the future internal tools entry and organizational layer.</p>
        </div>
        <div className="card">
          <h2>Current Phase</h2>
          <p>Portal v1 emphasizes structure, usability, and internal testing readiness.</p>
        </div>
      </div>
    </section>
  )
}
