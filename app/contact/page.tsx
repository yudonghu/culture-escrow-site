import Breadcrumb from '@/components/Breadcrumb'

export default function ContactPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

      <div className="hero-panel">
        <h1 className="section-title">Contact</h1>
        <p>
          This page continues evolving from the legacy public website content into the portal-era contact structure.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Contact Surface</h2>
        <p className="section-subtitle">Public contact content remains open and should stay simple, clear, and accessible.</p>
      </section>

      <div className="card-grid">
        <div className="card">
          <h2>Public Contact Surface</h2>
          <p>Contact information remains part of the public-facing website and stays openly accessible.</p>
        </div>
        <div className="card">
          <h2>Portal Boundary</h2>
          <p>Public contact content stays open, while internal tooling continues to live under the portal structure.</p>
        </div>
        <div className="card">
          <h2>Future Consistency</h2>
          <p>This page now follows the same information architecture pattern as the rest of the portal site.</p>
        </div>
      </div>
    </section>
  )
}
