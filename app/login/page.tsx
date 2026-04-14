import { signIn } from '@/lib/auth'

export default function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  return (
    <section className="hero">
      <div style={{ maxWidth: 400, margin: '60px auto', padding: '0 24px' }}>
        <h1>Login</h1>
        <p>Sign in with your email or username to access the internal portal.</p>

        <form
          action={async (formData: FormData) => {
            'use server'
            await signIn('credentials', {
              login: formData.get('login'),
              password: formData.get('password'),
              redirectTo: '/daily-tools',
            })
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="login">Email or Username</label>
            <input
              id="login"
              name="login"
              type="text"
              required
              autoComplete="username"
              style={{ padding: '10px 12px', fontSize: 16, border: '1px solid #ccc', borderRadius: 4 }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              style={{ padding: '10px 12px', fontSize: 16, border: '1px solid #ccc', borderRadius: 4 }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '12px',
              backgroundColor: '#1B2B4B',
              color: '#F8F6F2',
              border: 'none',
              borderRadius: 4,
              fontSize: 16,
              cursor: 'pointer',
              marginTop: 8,
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  )
}
