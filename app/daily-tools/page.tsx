const tools = [
  {
    name: 'PG17',
    desc: 'California RPA page 17 fill tool for escrow workflows.',
    href: 'https://pg17.hydenluc.com',
    status: 'live',
    category: 'Document / Escrow',
  },
  {
    name: 'Temply',
    desc: 'Template system for Culture Escrow operational workflows.',
    href: '#',
    status: 'planned',
    category: 'Templates',
  },
  {
    name: 'FedEx API',
    desc: 'Shipping label, cancellation, and tracking related tooling.',
    href: '#',
    status: 'planned',
    category: 'Shipping',
  },
]

export default function DailyToolsPage() {
  return (
    <section className="hero">
      <h1>日常工具</h1>
      <p>
        This page is the unified internal entry point for Culture Escrow daily tools.
        Public website pages remain open, while this page is intended to become the protected
        navigation hub for staff-only workflows.
      </p>

      <div className="card-grid">
        {tools.map((tool) => (
          <div key={tool.name} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <span className="badge">{tool.status}</span>
              <span className="badge">{tool.category}</span>
            </div>
            <h2>{tool.name}</h2>
            <p>{tool.desc}</p>
            <p>
              <a href={tool.href}>Open tool</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
