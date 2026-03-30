import Breadcrumb from '@/components/Breadcrumb'

const services = [
  {
    title: 'Escrow Services',
    desc: 'Core public-facing escrow service presentation for the official site.',
  },
  {
    title: 'Operational Workflows',
    desc: 'Internal workflows are gradually being represented through structured portal entry points.',
  },
  {
    title: 'Digital Tool Support',
    desc: 'Portal-linked tools such as PG17, Temply, FedEx API, and future utilities expand operational support.',
  },
]

export default function ServicesPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />

      <div className="hero-panel">
        <h1 className="section-title">Services</h1>
        <p>
          The services layer remains public-facing while the broader portal architecture supports future workflow integration.
        </p>
      </div>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ marginBottom: 6 }}>Service Presentation Layer</h2>
        <p className="section-subtitle">
          Public website messaging remains readable while portal support becomes more structured.
        </p>
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
