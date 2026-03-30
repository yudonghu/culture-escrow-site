import Breadcrumb from '@/components/Breadcrumb'

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
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />

      <div className="hero-panel">
        <h1 className="section-title">Services</h1>
        <p>
          This page continues the migration of service-oriented messaging from the legacy site into
          the new portal information architecture.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Service Presentation Layer</h2>
        <p className="section-subtitle">Public service messaging stays readable while operational context becomes more structured.</p>
      </section>

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
