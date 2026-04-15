import './globals.css'
import type { ReactNode } from 'react'
import HeaderFromPath from '@/components/HeaderFromPath'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'Culture Escrow Portal',
  description: 'Culture Escrow official site and daily tools portal',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <HeaderFromPath />
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
