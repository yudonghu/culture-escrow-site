import { tools } from '@/data/tools'

const statusClassMap = {
  Live: 'badge badge-live',
  Planned: 'badge badge-planned',
  'Internal Test': 'badge badge-test',
}

const groupDescriptions: Record<string, string> = {
  'Document / Escrow': 'Document-related tools for escrow processing and file generation.',
  Templates: 'Template and reusable workflow assets for Culture Escrow operations.',
  Shipping: 'Shipping, label, cancellation, and tracking related workflows.',
  'Intake / Refi': 'Refinance intake, extraction, and review-oriented workflows.',
}

const groupedTools = Object.entries(
  tools.reduce<Record<string, typeof tools>>((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = []
    acc[tool.category].push(tool)
    return acc
  }, {})
)

export default function DailyToolsPage() {
  return (
    <section className="hero">
      <div className="hero-panel">
        <h1 className="section-title">日常工具</h1>
        <p>
          This page is the unified internal tools entry for Culture Escrow portal. The public
          website remains open, while this area is being prepared as the long-term staff tools hub.
        </p>
      </div>

      <div className="card info-panel" style={{ marginBottom: 24 }}>
        <h2>当前阶段说明</h2>
        <p>
          当前页面以内部测试和入口整合为主。Microsoft 登录方案已经完成规划，但现阶段仍以占位方式保留，
          等后续正式上线时再启用。
        </p>
        <ul>
          <li>官网公开页面继续公开访问</li>
          <li>`/daily-tools` 作为统一工具入口持续完善</li>
          <li>正式 Microsoft 登录后续启用</li>
        </ul>
      </div>

      {groupedTools.map(([groupName, items]) => (
        <section key={groupName} style={{ marginBottom: 28 }}>
          <div style={{ marginBottom: 14 }}>
            <h2 style={{ marginBottom: 6 }}>{groupName}</h2>
            <p className="section-subtitle">{groupDescriptions[groupName] ?? 'Tool group'}</p>
          </div>
          <div className="card-grid">
            {items.map((tool) => {
              const openable = tool.availability === 'open'
              return (
                <div key={tool.name} className="card">
                  <div className="badge-row">
                    <span className={statusClassMap[tool.status]}>{tool.status}</span>
                    <span className="badge">{tool.category}</span>
                  </div>
                  <h2>{tool.icon} {tool.name}</h2>
                  <p>{tool.desc}</p>
                  {tool.notes ? <p><strong>Note:</strong> {tool.notes}</p> : null}
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {openable ? <a className="cta-link" href={tool.href}>Open tool →</a> : <span className="cta-link" style={{ opacity: 0.5 }}>Coming soon</span>}
                    <a className="cta-link" href={`/tools/${tool.slug}`}>View details →</a>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </section>
  )
}
