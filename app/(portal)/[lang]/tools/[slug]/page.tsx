import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import { tools } from '@/data/tools'
import { portalCopy, type PortalLang } from '@/lib/portal-copy'

export default async function LocalizedToolDetailPage({ params }: { params: Promise<{ lang: PortalLang; slug: string }> }) {
  const { lang, slug } = await params
  const t = portalCopy[lang] ?? portalCopy.en
  const tool = tools.find((item) => item.slug === slug)
  if (!tool) return notFound()
  const openable = tool.availability === 'open'
  const isPg17 = tool.slug === 'pg17'

  return (
    <section className="hero">
      <Breadcrumb items={[{ label: t.breadcrumbHome, href: `/${lang}` }, { label: t.dailyTools, href: `/${lang}/daily-tools` }, { label: tool.name }]} />
      <div className="hero-panel"><div className="hero-content"><h1 className="section-title">{tool.icon} {tool.name}</h1><p>{tool.summary ?? tool.desc}</p></div></div>
      {isPg17 ? <div className="card info-panel" style={{ marginBottom: 24 }}><h2>{t.portalIntegration}</h2><p>{t.portalIntegrationDesc}</p></div> : null}
      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link className="cta-link" href={`/${lang}/daily-tools`}>{t.back}</Link>
          {openable ? <a className="cta-link" href={tool.href}>{t.openExternal}</a> : <span className="cta-link" style={{ opacity: 0.5 }}>{t.notOpen}</span>}
        </div>
      </div>
      <div className="card-grid">
        <div className="card"><h2>{t.stage}</h2><p>{tool.stage ?? 'TBD'}</p></div>
        <div className="card"><h2>{t.entry}</h2><p>{openable ? 'Open from portal' : 'Coming soon / placeholder'}</p></div>
        <div className="card"><h2>{t.audience}</h2><p>{tool.audience ?? 'TBD'}</p></div>
        <div className="card"><h2>{t.roadmap}</h2><p>{tool.roadmap ?? 'TBD'}</p></div>
        <div className="card"><h2>{t.status}</h2><p>{tool.status}</p></div>
        <div className="card"><h2>{t.category}</h2><p>{tool.category}</p></div>
      </div>
    </section>
  )
}
