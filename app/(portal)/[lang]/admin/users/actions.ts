'use server'

import bcrypt from 'bcryptjs'
import { createUser } from '@/lib/users'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export async function addUserAction(formData: FormData) {
  const session = await auth()
  if (session?.user?.role !== 'admin') redirect('/en/daily-tools')

  const username = (formData.get('username') as string)?.trim()
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  const password = formData.get('password') as string
  const role = (formData.get('role') as string) || 'staff'

  if (!username || !email || !password) {
    throw new Error('Missing required fields')
  }

  const passwordHash = await bcrypt.hash(password, 12)
  await createUser(username, email, passwordHash, role)
  redirect('/en/admin/users')
}
