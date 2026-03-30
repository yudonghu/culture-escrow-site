import Breadcrumb from '@/components/Breadcrumb'

export default function ContactPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

      <div className="hero-panel">
        <div className="hero-image" style={{ backgroundImage: "url('/images/home/hero-placeholder.svg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="badge">Contact</span>
          <h1 className="section-title">Reach out with confidence.</h1>
          <p>
            Contact information should remain simple, visible, and consistent with a professional escrow website experience.
          </p>
        </div>
      </div>

      <section className="section-block">
        <div className="card-grid">
          <div className="card">
            <h2>Public Contact Surface</h2>
            <p>Contact details remain openly available as part of the official website.</p>
          </div>
          <div className="card">
            <h2>Clear Communication</h2>
            <p>Clients should be able to understand how to reach the company without confusion.</p>
          </div>
          <div className="card">
            <h2>Future Brand Content</h2>
            <p>Later, this page can be upgraded with final company contact details and branded imagery.</p>
          </div>
        </div>
      </section>
    </section>
  )
}
