import Breadcrumb from '@/components/Breadcrumb'

export default function ContactPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

      <div className="hero-panel">
        <h1 className="section-title">Contact</h1>
        <p>
          Contact content remains public, accessible, and aligned with the rest of the portal-facing site structure.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Contact Surface</h2>
        <p className="section-subtitle">
          Public contact content should remain simple, readable, and easy to maintain.
        </p>
      </section>

      <div className="card-grid">
        <div className="card">
          <h2>Public Contact Surface</h2>
          <p>Contact information remains part of the official public site experience.</p>
        </div>
        <div className="card">
          <h2>Portal Boundary</h2>
          <p>Portal tooling grows behind the public website without changing the open nature of contact content.</p>
        </div>
        <div className="card">
          <h2>Consistency</h2>
          <p>This page follows the same information architecture pattern used across the current portal v1 site.</p>
        </div>
      </div>
    </section>
  )
}
