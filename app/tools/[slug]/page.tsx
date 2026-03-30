import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import { tools } from '@/data/tools'

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tool = tools.find((item) => item.slug === slug)

  if (!tool) return notFound()

  const openable = tool.availability === 'open'

  return (
    <section className="hero">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Daily Tools', href: '/daily-tools' }, { label: tool.name }]} />

      <div className="hero-panel">
        <h1 className="section-title">{tool.icon} {tool.name}</h1>
        <p>{tool.summary ?? tool.desc}</p>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link className="cta-link" href="/daily-tools">← Back to daily-tools</Link>
          {openable ? (
            <a className="cta-link" href={tool.href}>Open external tool →</a>
          ) : (
            <span className="cta-link" style={{ opacity: 0.5 }}>External entry not open yet</span>
          )}
        </div>
        <p style={{ marginTop: 12 }}>
          {openable
            ? 'This tool currently has an active external entry from the portal.'
            : 'This tool is still in planning or internal-test stage and is not yet opened directly from the portal.'}
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h2>使用阶段</h2>
          <p>{tool.stage ?? 'TBD'}</p>
        </div>
        <div className="card">
          <h2>入口状态</h2>
          <p>{openable ? 'Open from portal' : 'Coming soon / placeholder'}</p>
        </div>
        <div className="card">
          <h2>适用对象</h2>
          <p>{tool.audience ?? 'TBD'}</p>
        </div>
        <div className="card">
          <h2>后续计划</h2>
          <p>{tool.roadmap ?? 'TBD'}</p>
        </div>
        <div className="card">
          <h2>Status</h2>
          <p>{tool.status}</p>
        </div>
        <div className="card">
          <h2>Category</h2>
          <p>{tool.category}</p>
        </div>
      </div>
    </section>
  )
}
