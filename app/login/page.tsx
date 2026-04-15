import LoginForm from './login-form'
import { portalCopy } from '@/lib/portal-copy'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; lang?: string }>
}) {
  const { error, lang } = await searchParams
  const validLangs = ['en', 'zh-cn', 'zh-tw']
  const resolvedLang = validLangs.includes(lang ?? '') ? (lang as 'en' | 'zh-cn' | 'zh-tw') : 'en'
  const t = portalCopy[resolvedLang]

  return (
    <section className="hero">
      <div style={{ maxWidth: 400, margin: '60px auto', padding: '0 24px' }}>
        <h1>Login</h1>
        <p>Sign in with your email or username to access the internal portal.</p>
        <LoginForm
          error={error}
          rememberLabel={t.rememberLogin}
          errorMessage={t.loginError}
        />
      </div>
    </section>
  )
}
