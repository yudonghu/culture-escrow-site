import { tools } from '@/data/tools'

export default function DailyToolsPage() {
  return (
    <section className="hero">
      <h1>日常工具</h1>
      <p>
        This page is the unified internal tools entry for Culture Escrow portal.
        The public website remains open, while this area is being prepared as the long-term
        staff tools hub.
      </p>

      <div className="card" style={{ marginBottom: 24 }}>
        <h2>当前阶段说明</h2>
        <p>
          当前页面以内部测试和入口整合为主。Microsoft 登录方案已经完成规划，
          但现阶段仍以占位方式保留，等后续正式上线时再启用。
        </p>
        <ul>
          <li>官网公开页面继续公开访问</li>
          <li>`/daily-tools` 作为统一工具入口持续完善</li>
          <li>正式 Microsoft 登录后续启用</li>
        </ul>
      </div>

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
