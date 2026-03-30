import type { ReactNode } from 'react'
import LocalizedHeader from '@/components/LocalizedHeader'

export default function DefaultPortalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalizedHeader lang="en" />
      {children}
    </>
  )
}
