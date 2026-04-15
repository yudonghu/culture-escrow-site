'use client'

import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import LocalizedHeader from '@/components/LocalizedHeader'
import { defaultLang, supportedLangs, type Lang } from '@/lib/site-copy'

export default function HeaderFromPath() {
  const pathname = usePathname() || '/'
  const first = pathname.split('/').filter(Boolean)[0]
  const lang = (supportedLangs.includes(first as Lang) ? first : defaultLang) as Lang
  const { data: session } = useSession()
  const username = session?.user?.name ?? null
  const role = session?.user?.role ?? null

  return <LocalizedHeader lang={lang} username={username} role={role} />
}
