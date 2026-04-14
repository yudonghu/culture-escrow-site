import { Client } from 'pg'

export function getDatabaseUrl() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL is required')
  return url
}

export async function withClient<T>(fn: (client: Client) => Promise<T>) {
  const client = new Client({ connectionString: getDatabaseUrl() })
  await client.connect()
  try {
    return await fn(client)
  } finally {
    await client.end()
  }
}
