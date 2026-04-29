import { handlers } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

// Subdomains allowed to read the session cross-origin (for cookie-based auth sharing)
const CORS_ORIGINS = (process.env.CORS_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean)

function corsHeaders(origin: string | null): Record<string, string> {
  if (!origin || !CORS_ORIGINS.includes(origin)) return {}
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  }
}

async function withCors(req: NextRequest, handler: (req: NextRequest) => Promise<NextResponse>) {
  const origin = req.headers.get('origin')
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204, headers: corsHeaders(origin) })
  }
  const res = await handler(req)
  const headers = corsHeaders(origin)
  Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v))
  return res
}

export function GET(req: NextRequest) {
  return withCors(req, (r) => handlers.GET(r) as Promise<NextResponse>)
}

export function POST(req: NextRequest) {
  return withCors(req, (r) => handlers.POST(r) as Promise<NextResponse>)
}

export function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin')
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) })
}
