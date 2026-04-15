'use server'

import { signIn } from '@/lib/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

export async function signInAction(formData: FormData) {
  try {
    await signIn('credentials', {
      login: formData.get('login'),
      password: formData.get('password'),
      redirectTo: '/en/daily-tools',
    })
  } catch (e) {
    if (e instanceof AuthError) {
      redirect('/login?error=invalid')
    }
    throw e
  }
}
