import Breadcrumb from '@/components/Breadcrumb'

const team = [
  {
    name: 'Leadership & Team Presence',
    desc: 'This page supports the official public presentation of the Culture Escrow team.',
  },
  {
    name: 'Public Website Continuity',
    desc: 'The team page remains a public-facing part of the official website experience.',
  },
  {
    name: 'Portal Context',
    desc: 'Over time, portal structure may provide clearer mapping between teams and internal tools.',
  },
]

export default function TeamPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Team' }]} />

      <div className="hero-panel">
        <h1 className="section-title">Team</h1>
        <p>
          The team page remains part of the public site while aligning with the portal information structure.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Team Presentation Layer</h2>
        <p className="section-subtitle">
          Public team presentation remains visible and aligned with the broader portal structure.
        </p>
      </section>

      <div className="card-grid">
        {team.map((item) => (
          <div key={item.name} className="card">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
