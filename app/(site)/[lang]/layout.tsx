import type { ReactNode } from 'react'
import LocalizedHeader from '@/components/LocalizedHeader'
import { defaultLang, supportedLangs, type Lang } from '@/lib/site-copy'

export default async function SiteLangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const safeLang = supportedLangs.includes(lang) ? lang : defaultLang
  return (
    <>
      <LocalizedHeader lang={safeLang} />
      {children}
    </>
  )
}
