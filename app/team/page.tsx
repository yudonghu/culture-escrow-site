import Breadcrumb from '@/components/Breadcrumb'

const team = [
  {
    name: 'Experienced Support',
    desc: 'A professional public-facing team presence helps clients feel guided and supported.',
  },
  {
    name: 'Client-Facing Trust',
    desc: 'Team presentation should strengthen confidence in the brand and service experience.',
  },
  {
    name: 'Operational Backing',
    desc: 'Internal systems continue to grow behind the scenes to support better day-to-day execution.',
  },
]

export default function TeamPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Team' }]} />

      <div className="hero-panel">
        <div className="hero-image" style={{ backgroundImage: "url('/images/home/hero-placeholder.svg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="badge">Team</span>
          <h1 className="section-title">A public presence that reflects trust and care.</h1>
          <p>
            This page is being shaped to look more like a polished escrow company team page instead of a portal placeholder.
          </p>
        </div>
      </div>

      <section className="section-block">
        <div className="card-grid">
          {team.map((item) => (
            <div key={item.name} className="card">
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
