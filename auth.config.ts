import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  trustHost: true,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    redirect({ url, baseUrl }) {
      // 登出后跳回 /login
      if (url.includes('/login')) return `${baseUrl}/login`
      // 登录后始终跳转到 /en/daily-tools
      return `${baseUrl}/en/daily-tools`
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isPublic =
        nextUrl.pathname === '/login' ||
        nextUrl.pathname.startsWith('/api/auth')
      if (isPublic) return true
      return isLoggedIn
    },
  },
  providers: [],
} satisfies NextAuthConfig
