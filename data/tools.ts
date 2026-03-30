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
  stage?: string
  roadmap?: string
}

export const tools: ToolItem[] = [
  {
    name: 'PG17',
    slug: 'pg17',
    desc: 'California RPA page 17 fill tool for escrow workflows.',
    href: 'https://hydenluc.com/pg17',
    status: 'Live',
    category: 'Document / Escrow',
    availability: 'open',
    icon: '📄',
    notes: 'Live portal-connected tool entry. Current public entry is aligned to the deployed portal/app domain.',
    summary: 'PG17 is the first real Culture Escrow tool formally integrated into the portal and deployed through the current production path.',
    audience: 'Escrow staff handling California RPA page-17 completion workflows.',
    stage: 'Production-facing portal entry active',
    roadmap: 'Next step is refining the final in-portal routing and continuing production hardening around the pg17 experience.',
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
    stage: 'Planning / reserved portal slot',
    roadmap: 'Connect actual tool endpoint and add operational detail guidance.',
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
    stage: 'Internal testing / not publicly exposed in portal',
    roadmap: 'Complete portal hookup and clarify operator-facing usage notes.',
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
    stage: 'Planning / integration pending',
    roadmap: 'Add actual intake flow entry and future review guidance.',
  },
]
