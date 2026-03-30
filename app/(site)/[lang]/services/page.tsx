import Breadcrumb from '@/components/Breadcrumb'
import { defaultLang, siteCopy, type Lang } from '@/lib/site-copy'

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const copy = siteCopy[lang] ?? siteCopy[defaultLang]
  const section = copy['services']
  return (
    <section className="hero">
      <Breadcrumb items={[{ label: copy.nav.home, href: "/" }, { label: copy.nav['services'] }]} />
      <div className="hero-panel">
        <div className="hero-image" style={{ backgroundImage: "url('/images/home/hero-placeholder.svg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="badge">{section.badge}</span>
          <h1 className="section-title">{section.title}</h1>
          <p>{section.desc}</p>
        </div>
      </div>
      <section className="section-block">
        <div className="card-grid">
          {section.cards.map(([title, desc]: [string, string]) => (
            <div key={title} className="card"><h2>{title}</h2><p>{desc}</p></div>
          ))}
        </div>
      </section>
    </section>
  )
}
