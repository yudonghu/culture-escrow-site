import { withClient } from './db'

export type User = {
  id: string
  username: string
  email: string
  password_hash: string
  is_active: boolean
  role: string
}

export type UserRow = {
  id: string
  username: string
  email: string
  role: string
  is_active: boolean
}

// 支持用邮箱或用户名查找用户
export async function findUserByLogin(login: string): Promise<User | null> {
  return withClient(async (client) => {
    const result = await client.query<User>(
      `SELECT id, username, email, password_hash, is_active, role
       FROM auth.users
       WHERE (LOWER(email) = $1 OR LOWER(username) = $1) AND is_active = TRUE
       LIMIT 1`,
      [login.toLowerCase().trim()]
    )
    return result.rows[0] ?? null
  })
}

export async function listUsers(): Promise<UserRow[]> {
  return withClient(async (client) => {
    const result = await client.query<UserRow>(
      `SELECT id, username, email, role, is_active
       FROM auth.users
       ORDER BY username ASC`
    )
    return result.rows
  })
}

export async function createUser(
  username: string,
  email: string,
  passwordHash: string,
  role: string
): Promise<void> {
  await withClient(async (client) => {
    await client.query(
      `INSERT INTO auth.users (username, email, password_hash, role, is_active)
       VALUES ($1, $2, $3, $4, TRUE)`,
      [username.trim(), email.trim().toLowerCase(), passwordHash, role]
    )
  })
}
