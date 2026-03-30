const services = [
  {
    title: 'Escrow Services',
    desc: 'Core escrow workflow presentation and future structured service descriptions.',
  },
  {
    title: 'Operational Tooling',
    desc: 'Internal tooling access will be progressively organized through the portal workflow.',
  },
  {
    title: 'Digital Process Enablement',
    desc: 'Tools such as PG17, Temply, and FedEx-related services will be surfaced through a unified experience.',
  },
]

export default function ServicesPage() {
  return (
    <section className="hero">
      <h1>Services</h1>
      <p>
        This page begins the migration of service-oriented messaging from the legacy site into the
        new portal architecture.
      </p>

      <div className="card-grid">
        {services.map((item) => (
          <div key={item.title} className="card">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
