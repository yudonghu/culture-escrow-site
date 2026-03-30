import './globals.css'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Culture Escrow Portal',
  description: 'Culture Escrow official site and daily tools portal',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav">
            <Link href="/" className="brand">Culture Escrow</Link>
            <nav>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/team">Team</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/daily-tools">日常工具</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
