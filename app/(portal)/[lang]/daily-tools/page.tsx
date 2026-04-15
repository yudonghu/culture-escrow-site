import Breadcrumb from '@/components/Breadcrumb'
import { tools } from '@/data/tools'
import { portalCopy, type PortalLang } from '@/lib/portal-copy'

const statusClassMap = { Live: 'badge badge-live', Planned: 'badge badge-planned', 'Internal Test': 'badge badge-test' }

export default async function LocalizedDailyToolsPage({ params }: { params: Promise<{ lang: PortalLang }> }) {
  const { lang } = await params
  const t = portalCopy[lang] ?? portalCopy.en

  const totalTools = tools.length
  const liveCount = tools.filter((tool) => tool.status === 'Live').length
  const internalTestCount = tools.filter((tool) => tool.status === 'Internal Test').length
  const plannedCount = tools.filter((tool) => tool.status === 'Planned').length

  return (
    <section className="hero">
      <Breadcrumb items={[{ label: t.breadcrumbHome, href: `/${lang}` }, { label: t.dailyTools }]} />

      {/* 1. 工具入口卡片 */}
      <div className="card-grid" style={{ marginBottom: 24 }}>
        {tools.map((tool) => {
          const openable = tool.availability === 'open'
          return (
            <div key={tool.name} className="card">
              <div className="badge-row">
                <span className={statusClassMap[tool.status]}>{tool.status}</span>
                <span className="badge">{tool.category}</span>
              </div>
              <a href={`/${lang}/tools/${tool.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 style={{ margin: '14px 0 10px' }}>{tool.icon} {tool.name}</h2>
                <p style={{ marginTop: 0 }}>{tool.desc}</p>
              </a>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {openable
                  ? <a className="cta-link" href={tool.href}>{t.openTool}</a>
                  : <span className="cta-link" style={{ opacity: 0.5 }}>{t.comingSoon}</span>}
                <a className="cta-link" href={`/${lang}/tools/${tool.slug}`}>{t.viewDetails}</a>
              </div>
            </div>
          )
        })}
      </div>

      {/* 2. Current Phase */}
      <div className="card info-panel" style={{ marginBottom: 24 }}>
        <h2>{t.currentPhaseTitle}</h2>
        <p>{t.currentPhaseDesc}</p>
      </div>

      {/* 3. 开发进度统计 */}
      <div className="card-grid" style={{ marginBottom: 24 }}>
        <div className="card"><h2>{t.metrics.total}</h2><p style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>{totalTools}</p></div>
        <div className="card"><h2>{t.metrics.live}</h2><p style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>{liveCount}</p></div>
        <div className="card"><h2>{t.metrics.test}</h2><p style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>{internalTestCount}</p></div>
        <div className="card"><h2>{t.metrics.planned}</h2><p style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>{plannedCount}</p></div>
      </div>

      {/* 4. 页面介绍（移至底部） */}
      <div className="hero-panel">
        <div className="hero-content">
          <h1 className="section-title">{t.dailyTools}</h1>
          <p>{t.overviewDesc}</p>
        </div>
      </div>
    </section>
  )
}
