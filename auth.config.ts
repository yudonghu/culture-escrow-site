import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  trustHost: true,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isProtected = nextUrl.pathname.startsWith('/daily-tools')
      if (isProtected) return isLoggedIn
      return true
    },
  },
  providers: [],
} satisfies NextAuthConfig
