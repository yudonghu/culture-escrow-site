import { notFound } from 'next/navigation'
import { tools } from '@/data/tools'

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const tool = tools.find((item) => item.slug === slug)

  if (!tool) return notFound()

  return (
    <section className="hero">
      <div className="hero-panel">
        <h1 className="section-title">{tool.icon} {tool.name}</h1>
        <p>{tool.summary ?? tool.desc}</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h2>使用阶段</h2>
          <p>{tool.stage ?? 'TBD'}</p>
        </div>
        <div className="card">
          <h2>入口状态</h2>
          <p>{tool.availability === 'open' ? 'Open from portal' : 'Coming soon / placeholder'}</p>
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
