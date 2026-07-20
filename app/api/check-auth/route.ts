import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

function safeHeaderValue(value: unknown) {
  return String(value ?? '').replace(/[\r\n]/g, '').trim().slice(0, 160)
}

// Caddy forward_auth 调用此接口检查登录状态
// 已登录 → 200，Caddy 放行
// 未登录 → 302 跳转到 /login，浏览器跟随重定向
export async function GET() {
  const session = await auth()

  if (session?.user) {
    // Caddy forward_auth copies only these response headers to the protected
    // upstream service. They provide audit attribution; the Caddy route still
    // remains the authentication boundary.
    const headers = new Headers()
    const actor = safeHeaderValue(session.user.email || session.user.name)
    const role = safeHeaderValue(session.user.role || 'staff')
    if (actor) headers.set('X-Culture-Escrow-Actor', actor)
    headers.set('X-Culture-Escrow-Role', role)
    return new NextResponse(null, { status: 200, headers })
  }

  const baseUrl = process.env.NEXTAUTH_URL ?? 'https://portal.cultureescrow.com'
  return NextResponse.redirect(`${baseUrl}/login`, { status: 302 })
}
