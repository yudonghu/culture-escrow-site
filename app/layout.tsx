import './globals.css'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Culture Escrow Portal',
  description: 'Culture Escrow official site and daily tools portal',
}

const publicNav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

const portalNav = [
  { href: '/daily-tools', label: 'Daily Tools' },
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-shell">
            <div className="brand-block">
              <Link href="/" className="brand">Culture Escrow</Link>
              <span className="brand-subtitle">Official Website + Portal</span>
            </div>

            <div className="nav-groups">
              <div className="nav-group">
                <span className="nav-group-label">Public</span>
                <nav className="nav-links">
                  {publicNav.map((item) => (
                    <Link key={item.href} href={item.href}>{item.label}</Link>
                  ))}
                </nav>
              </div>

              <div className="nav-group">
                <span className="nav-group-label">Portal</span>
                <nav className="nav-links">
                  {portalNav.map((item) => (
                    <Link key={item.href} href={item.href}>{item.label}</Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  )
}
