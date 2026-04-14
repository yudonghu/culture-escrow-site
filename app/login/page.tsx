import LoginForm from './login-form'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <section className="hero">
      <div style={{ maxWidth: 400, margin: '60px auto', padding: '0 24px' }}>
        <h1>Login</h1>
        <p>Sign in with your email or username to access the internal portal.</p>
        <LoginForm error={error} />
      </div>
    </section>
  )
}
