import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { findUserByLogin } from './users'
import { authConfig } from '../auth.config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: {
    maxAge: 400 * 24 * 60 * 60, // 400 天（浏览器最大限制）
  },
  // Cookie domain: allows session to be shared across subdomains (e.g. temply.hydenluc.com)
  cookies: process.env.COOKIE_DOMAIN ? {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax' as const,
        path: '/',
        secure: true,
        domain: process.env.COOKIE_DOMAIN,
      },
    },
  } : undefined,
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user }) {
      if (user?.role) token.role = user.role
      return token
    },
    async session({ session, token }) {
      if (token.role) session.user.role = token.role
      return session
    },
  },
  providers: [
    Credentials({
      credentials: {
        login: { label: 'Email or Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) return null

        const user = await findUserByLogin(credentials.login as string)
        if (!user) return null

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password_hash
        )
        if (!isValid) return null

        return {
          id: user.id,
          name: user.username,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  trustHost: true,
})
