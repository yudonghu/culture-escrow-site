import { signIn } from '@/lib/auth'

export default function LoginPage() {
  return (
    <section className="hero">
      <h1>Login</h1>
      <p>Use your Microsoft employee account to access the internal daily tools page.</p>
      <form
        action={async () => {
          'use server'
          await signIn('microsoft-entra-id', { redirectTo: '/daily-tools' })
        }}
      >
        <button type="submit">Sign in with Microsoft</button>
      </form>
    </section>
  )
}
