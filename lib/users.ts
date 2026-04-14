import { withClient } from './db'

export type User = {
  id: string
  username: string
  email: string
  password_hash: string
  is_active: boolean
}

// 支持用邮箱或用户名查找用户
export async function findUserByLogin(login: string): Promise<User | null> {
  return withClient(async (client) => {
    const result = await client.query<User>(
      `SELECT id, username, email, password_hash, is_active
       FROM auth.users
       WHERE (email = $1 OR username = $1) AND is_active = TRUE
       LIMIT 1`,
      [login.toLowerCase().trim()]
    )
    return result.rows[0] ?? null
  })
}
