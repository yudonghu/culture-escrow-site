import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  trustHost: true,
  pages: {
    signIn: '/login',
  },
  callbacks: {
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
