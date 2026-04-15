import Link from 'next/link'
import { siteCopy, type Lang, withLang } from '@/lib/site-copy'
import { signOutAction } from '@/app/login/actions'

export default function LocalizedHeader({ lang, username, role }: { lang: Lang; username?: string | null; role?: string | null }) {
  const copy = siteCopy[lang]
  const publicNav = [
    { href: withLang(lang, '/'), label: copy.nav.home },
    { href: withLang(lang, '/about'), label: copy.nav.about },
    { href: withLang(lang, '/services'), label: copy.nav.services },
    { href: withLang(lang, '/team'), label: copy.nav.team },
    { href: withLang(lang, '/contact'), label: copy.nav.contact },
  ]
  const portalNav = [{ href: withLang(lang, '/daily-tools'), label: copy.nav.dailyTools }]
  const langNav = [
    { href: '/', label: 'EN' },
    { href: '/zh-cn', label: '简中' },
    { href: '/zh-tw', label: '繁中' },
  ]

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <div className="brand-block">
          <Link href={withLang(lang, '/')} className="brand">Culture Escrow</Link>
          <span className="brand-subtitle">{copy.nav.brandSubtitle}</span>
        </div>
        <div className="nav-groups">
          <div className="nav-group">
            <span className="nav-group-label">{copy.nav.publicLabel}</span>
            <nav className="nav-links">{publicNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
          </div>
          <div className="nav-group">
            <span className="nav-group-label">{copy.nav.portalLabel}</span>
            <nav className="nav-links">{portalNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
          </div>
          <div className="nav-group">
            <span className="nav-group-label">Language</span>
            <nav className="nav-links">{langNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
          </div>
          {username && (
            <div className="nav-group nav-user">
              <span className="nav-username">{username}</span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {role === 'admin' && (
                  <Link href={`/${lang}/admin/users`} className="nav-logout" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Manage Users</Link>
                )}
                <form action={signOutAction}>
                  <button type="submit" className="nav-logout">Sign Out</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
