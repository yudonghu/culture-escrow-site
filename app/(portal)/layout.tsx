import type { ReactNode } from 'react'
import LocalizedHeader from '@/components/LocalizedHeader'

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalizedHeader lang="en" />
      {children}
    </>
  )
}
