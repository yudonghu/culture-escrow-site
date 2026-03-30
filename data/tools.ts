export type ToolStatus = 'Live' | 'Planned' | 'Internal Test'
export type ToolAvailability = 'open' | 'coming-soon'

export type ToolItem = {
  name: string
  slug: string
  desc: string
  href: string
  status: ToolStatus
  category: string
  availability: ToolAvailability
  icon: string
  notes?: string
  summary?: string
  audience?: string
}

export const tools: ToolItem[] = [
  {
    name: 'PG17',
    slug: 'pg17',
    desc: 'California RPA page 17 fill tool for escrow workflows.',
    href: 'https://pg17.hydenluc.com',
    status: 'Live',
    category: 'Document / Escrow',
    availability: 'open',
    icon: '📄',
    notes: 'Production-ready external tool entry.',
    summary: 'Used for standardized page-17 completion workflow in Culture Escrow.',
    audience: 'Escrow staff handling PG17 completion workflow.',
  },
  {
    name: 'Temply',
    slug: 'temply',
    desc: 'Template system for Culture Escrow operational workflows.',
    href: '#',
    status: 'Planned',
    category: 'Templates',
    availability: 'coming-soon',
    icon: '🧩',
    notes: 'Planned tool card placeholder.',
    summary: 'Template management and reusable workflow content platform.',
    audience: 'Operations and staff members using standard content flows.',
  },
  {
    name: 'FedEx API',
    slug: 'fedex-api',
    desc: 'Shipping label, cancellation, and tracking related tooling.',
    href: '#',
    status: 'Internal Test',
    category: 'Shipping',
    availability: 'coming-soon',
    icon: '📦',
    notes: 'Internal test flow, not yet opened from portal.',
    summary: 'Supports shipping label generation, status tracking, and cancellation workflows.',
    audience: 'Shipping-related internal operations.',
  },
  {
    name: 'Refi A-Screen',
    slug: 'refi-a-screen',
    desc: 'Refinance intake extraction and review workflow entry.',
    href: '#',
    status: 'Planned',
    category: 'Intake / Refi',
    availability: 'coming-soon',
    icon: '🏠',
    notes: 'Reserved slot for future integration.',
    summary: 'Refinance intake extraction, structured review, and downstream processing support.',
    audience: 'Refi workflow review and intake staff.',
  },
]
