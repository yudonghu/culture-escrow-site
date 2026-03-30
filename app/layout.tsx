import './globals.css'
import type { ReactNode } from 'react'
import HeaderFromPath from '@/components/HeaderFromPath'

export const metadata = {
  title: 'Culture Escrow Portal',
  description: 'Culture Escrow official site and daily tools portal',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <HeaderFromPath />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
