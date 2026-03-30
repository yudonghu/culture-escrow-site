import Breadcrumb from '@/components/Breadcrumb'
import { defaultLang, siteCopy, type Lang } from '@/lib/site-copy'

export default async function LocalizedHomePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const copy = siteCopy[lang] ?? siteCopy[defaultLang]

  return (
    <section className="hero">
      <Breadcrumb items={[{ label: copy.nav.home }]} />
      <div className="hero-panel">
        <div className="hero-image" style={{ backgroundImage: "url('/images/home/hero-placeholder.svg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="badge">{copy.home.badge}</span>
          <h1 className="section-title">{copy.home.title}</h1>
          <p>{copy.home.desc}</p>
          <div className="hero-actions">
            <a className="button-primary" href={`/${lang}/contact`}>{copy.home.contact}</a>
            <a className="button-secondary" href={`/${lang}/services`}>{copy.home.services}</a>
          </div>
        </div>
      </div>
      <section className="section-block">
        <div className="section-block-header">
          <h2 style={{ marginBottom: 6 }}>{copy.home.whyTitle}</h2>
          <p className="section-subtitle">{copy.home.whyDesc}</p>
        </div>
        <div className="card-grid">
          {copy.home.cards.map(([title, desc]: [string, string]) => (
            <div key={title} className="card"><h2>{title}</h2><p>{desc}</p></div>
          ))}
        </div>
      </section>
    </section>
  )
}
