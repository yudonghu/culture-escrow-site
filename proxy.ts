import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

const { auth } = NextAuth(authConfig)

export const proxy = auth

export const config = {
  // 保护所有页面，排除：登录页、NextAuth API、Next.js 静态资源
  matcher: [
    '/((?!login|api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
}
