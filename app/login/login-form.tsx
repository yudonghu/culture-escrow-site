'use client'

import { useEffect, useState } from 'react'
import { signInAction } from './actions'

const STORAGE_KEY = 'ce_remembered_login'

export default function LoginForm({ error }: { error?: string }) {
  const [savedLogin, setSavedLogin] = useState('')
  const [rememberMe, setRememberMe] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) setSavedLogin(saved)
  }, [])

  function handleSubmit(formData: FormData) {
    const login = formData.get('login') as string
    if (rememberMe) {
      localStorage.setItem(STORAGE_KEY, login)
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
    return signInAction(formData)
  }

  return (
    <>
      {error && (
        <div
          style={{
            marginTop: 24,
            padding: '12px 16px',
            backgroundColor: '#fff0f0',
            border: '1px solid #f5a5a5',
            borderRadius: 4,
            color: '#c0392b',
            fontSize: 14,
          }}
        >
          用户名或密码错误，请重试。
        </div>
      )}

      <form
        action={handleSubmit}
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
            defaultValue={savedLogin}
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

        <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            style={{ width: 16, height: 16, cursor: 'pointer' }}
          />
          记住用户名
        </label>

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
    </>
  )
}
