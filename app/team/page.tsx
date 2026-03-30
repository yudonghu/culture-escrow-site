import Breadcrumb from '@/components/Breadcrumb'

const team = [
  {
    name: 'Leadership / Team Section',
    desc: 'This area will be used to migrate and structure official team presentation content from the legacy site.',
  },
  {
    name: 'Public Presentation Layer',
    desc: 'The team page remains public-facing and should preserve the company presentation quality during portal migration.',
  },
  {
    name: 'Future Internal Context',
    desc: 'Over time, this portal may also provide clearer context for which internal tools are relevant to which staff functions.',
  },
]

export default function TeamPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Team' }]} />

      <div className="hero-panel">
        <h1 className="section-title">Team</h1>
        <p>
          This page continues the transition from a legacy static team page into a structured portal-managed public page.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Team Presentation Layer</h2>
        <p className="section-subtitle">The team page remains part of the public website while aligning to the portal information structure.</p>
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
