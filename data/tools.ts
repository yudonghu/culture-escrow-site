export type ToolStatus = 'Live' | 'Planned' | 'Internal Test'
export type ToolAvailability = 'open' | 'coming-soon'

export type ToolItem = {
  name: string
  desc: string
  href: string
  status: ToolStatus
  category: string
  availability: ToolAvailability
  icon: string
  notes?: string
}

export const tools: ToolItem[] = [
  {
    name: 'PG17',
    desc: 'California RPA page 17 fill tool for escrow workflows.',
    href: 'https://pg17.hydenluc.com',
    status: 'Live',
    category: 'Document / Escrow',
    availability: 'open',
    icon: '📄',
    notes: 'Production-ready external tool entry.',
  },
  {
    name: 'Temply',
    desc: 'Template system for Culture Escrow operational workflows.',
    href: '#',
    status: 'Planned',
    category: 'Templates',
    availability: 'coming-soon',
    icon: '🧩',
    notes: 'Planned tool card placeholder.',
  },
  {
    name: 'FedEx API',
    desc: 'Shipping label, cancellation, and tracking related tooling.',
    href: '#',
    status: 'Internal Test',
    category: 'Shipping',
    availability: 'coming-soon',
    icon: '📦',
    notes: 'Internal test flow, not yet opened from portal.',
  },
  {
    name: 'Refi A-Screen',
    desc: 'Refinance intake extraction and review workflow entry.',
    href: '#',
    status: 'Planned',
    category: 'Intake / Refi',
    availability: 'coming-soon',
    icon: '🏠',
    notes: 'Reserved slot for future integration.',
  },
]
