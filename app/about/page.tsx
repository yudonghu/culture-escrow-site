import Breadcrumb from '@/components/Breadcrumb'

export default function AboutPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

      <div className="hero-panel">
        <h1 className="section-title">About Culture Escrow</h1>
        <p>
          Culture Escrow is evolving its public site into a portal experience that preserves the
          company-facing presentation layer while preparing a unified entry for internal tools.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Company Positioning</h2>
        <p className="section-subtitle">Public-facing identity remains clear while portal capabilities grow behind it.</p>
      </section>

      <div className="card-grid">
        <div className="card">
          <h2>Official Website Role</h2>
          <p>The site continues to serve as the public-facing official website.</p>
        </div>
        <div className="card">
          <h2>Portal Evolution</h2>
          <p>The same repository is also becoming the long-term internal tools entry layer.</p>
        </div>
        <div className="card">
          <h2>Open + Structured</h2>
          <p>Public content stays open, while internal tooling is organized more intentionally.</p>
        </div>
      </div>
    </section>
  )
}
