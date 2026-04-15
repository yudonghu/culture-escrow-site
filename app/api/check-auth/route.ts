import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

// Caddy forward_auth 调用此接口检查登录状态
// 已登录 → 200，Caddy 放行
// 未登录 → 302 跳转到 /login，浏览器跟随重定向
export async function GET() {
  const session = await auth()

  if (session?.user) {
    return new NextResponse(null, { status: 200 })
  }

  const baseUrl = process.env.NEXTAUTH_URL ?? 'https://portal.cultureescrow.com'
  return NextResponse.redirect(`${baseUrl}/login`, { status: 302 })
}
