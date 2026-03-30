const team = [
  {
    name: 'Leadership / Team Section',
    desc: 'This area will be used to migrate and structure official team presentation content from the legacy site.',
  },
  {
    name: 'Public Presentation Layer',
    desc: 'The team page remains public-facing and should preserve the company’s presentation quality during portal migration.',
  },
  {
    name: 'Future Internal Context',
    desc: 'Over time, this portal may also provide clearer context for which internal tools are relevant to which staff functions.',
  },
]

export default function TeamPage() {
  return (
    <section className="hero">
      <h1>Team</h1>
      <p>
        This page starts the transition from a legacy static team page into a structured portal-managed public page.
      </p>

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
