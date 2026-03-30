import Breadcrumb from '@/components/Breadcrumb'

const services = [
  {
    title: 'Residential Escrow Support',
    desc: 'Professional coordination and support for residential escrow transactions.',
  },
  {
    title: 'Transaction Clarity',
    desc: 'A website and workflow structure designed to make services easier to understand and access.',
  },
  {
    title: 'Operational Efficiency',
    desc: 'Internal tools are being integrated to support consistency, speed, and service quality.',
  },
]

export default function ServicesPage() {
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />

      <div className="hero-panel">
        <div className="hero-image" style={{ backgroundImage: "url('/images/home/hero-placeholder.svg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="badge">Services</span>
          <h1 className="section-title">Escrow services supported by thoughtful systems.</h1>
          <p>
            Our public presentation is being refined to feel more like a professional escrow company website while remaining ready for future operational growth.
          </p>
        </div>
      </div>

      <section className="section-block">
        <div className="card-grid">
          {services.map((item) => (
            <div key={item.title} className="card">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
