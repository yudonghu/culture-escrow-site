import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { listUsers } from '@/lib/users'
import { addUserAction } from './actions'
import type { PortalLang } from '@/lib/portal-copy'

export default async function AdminUsersPage({ params }: { params: Promise<{ lang: PortalLang }> }) {
  const session = await auth()
  if (session?.user?.role !== 'admin') redirect('/en/daily-tools')

  const { lang } = await params
  const users = await listUsers()

  return (
    <section style={{ paddingTop: 32 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>User Management</h1>
      <p style={{ color: 'var(--muted)', marginBottom: 32 }}>Manage team accounts and roles.</p>

      {/* User list */}
      <div className="card" style={{ marginBottom: 32 }}>
        <h2 style={{ marginTop: 0, marginBottom: 16 }}>All Users</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--line)', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px' }}>Username</th>
              <th style={{ padding: '8px 12px' }}>Email</th>
              <th style={{ padding: '8px 12px' }}>Role</th>
              <th style={{ padding: '8px 12px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '10px 12px', fontWeight: 600 }}>{u.username}</td>
                <td style={{ padding: '10px 12px', color: 'var(--muted)' }}>{u.email}</td>
                <td style={{ padding: '10px 12px' }}>
                  <span className={`badge ${u.role === 'admin' ? 'badge-live' : ''}`}>{u.role}</span>
                </td>
                <td style={{ padding: '10px 12px' }}>
                  <span className={`badge ${u.is_active ? 'badge-live' : 'badge-planned'}`}>
                    {u.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add user form */}
      <div className="card">
        <h2 style={{ marginTop: 0, marginBottom: 16 }}>Add New User</h2>
        <form action={addUserAction} style={{ display: 'grid', gap: 14, maxWidth: 480 }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
            Username
            <input name="username" required style={inputStyle} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
            Email
            <input name="email" type="email" required style={inputStyle} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
            Password
            <input name="password" type="password" required style={inputStyle} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
            Role
            <select name="role" style={inputStyle}>
              <option value="staff">staff</option>
              <option value="shipping">shipping</option>
              <option value="admin">admin</option>
            </select>
          </label>
          <button type="submit" className="button-primary" style={{ width: 'fit-content', marginTop: 4 }}>
            Add User
          </button>
        </form>
      </div>
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '8px 12px',
  borderRadius: 8,
  border: '1px solid var(--line)',
  fontSize: 14,
  background: 'var(--bg)',
  color: 'var(--text)',
}
