export type Lang = 'en' | 'zh-cn' | 'zh-tw'

export const defaultLang: Lang = 'en'
export const supportedLangs: Lang[] = ['en', 'zh-cn', 'zh-tw']

export function withLang(lang: Lang, path: string) {
  if (!path.startsWith('/')) path = `/${path}`
  if (lang === 'en') return path
  if (path === '/') return `/${lang}`
  return `/${lang}${path}`
}

export const siteCopy: Record<Lang, any> = {
  en: {
    nav: { brandSubtitle: 'Official Website + Portal', publicLabel: 'Public', portalLabel: 'Portal', home: 'Home', about: 'About', services: 'Services', team: 'Team', contact: 'Contact', dailyTools: 'Daily Tools' },
    home: { badge: 'Trusted Escrow Services', title: 'A more personal and dependable escrow experience.', desc: 'Culture Escrow combines a client-facing escrow website with a structured internal portal, helping us support transactions with clarity, care, and operational precision.', contact: 'Contact Us', services: 'View Services', whyTitle: 'Why Culture Escrow', whyDesc: 'We are shaping the site to feel like a real escrow company website first, while still supporting future portal growth.', cards: [['Reliable Process', 'Built to support smooth escrow coordination with a clear and professional experience.'], ['Local Market Feel', 'Visual direction is being prepared around San Marino-style homes and premium neighborhood presentation.'], ['Modern Operations', 'Behind the scenes, portal tools like pg17 are being integrated to support real workflow execution.']] },
    about: { badge: 'About Us', title: 'Trusted guidance through every stage of escrow.', desc: 'Culture Escrow is building a more refined public presence while continuing to strengthen the systems that support internal operations.', cards: [['Company Presence', 'We want the site to feel established, trustworthy, and aligned with the premium local real estate market.'], ['Client Confidence', 'Public pages should feel warm, professional, and easy for clients to understand.'], ['Operational Strength', 'Portal growth supports the team behind the scenes without taking away from the public website experience.']] },
    services: { badge: 'Services', title: 'Escrow services supported by thoughtful systems.', desc: 'Our public presentation is being refined to feel more like a professional escrow company website while remaining ready for future operational growth.', cards: [['Residential Escrow Support', 'Professional coordination and support for residential escrow transactions.'], ['Transaction Clarity', 'A website and workflow structure designed to make services easier to understand and access.'], ['Digital Tool Support', 'Portal-linked tools such as PG17, Temply, FedEx API, and future utilities expand operational support.']] },
    team: { badge: 'Team', title: 'A public presence that reflects trust and care.', desc: 'This page is being shaped to look more like a polished escrow company team page instead of a portal placeholder.', cards: [['Experienced Support', 'A professional public-facing team presence helps clients feel guided and supported.'], ['Client-Facing Trust', 'Team presentation should strengthen confidence in the brand and service experience.'], ['Operational Backing', 'Internal systems continue to grow behind the scenes to support better day-to-day execution.']] },
    contact: { badge: 'Contact', title: 'Reach out with confidence.', desc: 'Contact information should remain simple, visible, and consistent with a professional escrow website experience.', cards: [['Public Contact Surface', 'Contact details remain openly available as part of the official website.'], ['Clear Communication', 'Clients should be able to understand how to reach the company without confusion.'], ['Future Brand Content', 'Later, this page can be upgraded with final company contact details and branded imagery.']] },
  },
  'zh-cn': {
    nav: { brandSubtitle: '官方网站 + Portal', publicLabel: '公开页面', portalLabel: '工具入口', home: '首页', about: '关于我们', services: '服务', team: '团队', contact: '联系我们', dailyTools: '日常工具' },
    home: { badge: '值得信赖的 Escrow 服务', title: '更有人情味、也更可靠的 Escrow 体验。', desc: 'Culture Escrow 正在把公开官网与内部 Portal 结合起来，让客户体验与内部执行都更清晰、更稳。', contact: '联系我们', services: '查看服务', whyTitle: '为什么选择 Culture Escrow', whyDesc: '我们希望网站首先像一家真正成熟的 escrow 公司官网，同时也为未来的内部工具增长留出空间。', cards: [['流程可靠', '以清晰、专业的方式支持 escrow 流程推进。'], ['本地市场气质', '视觉方向会逐步替换为更贴近 San Marino 房屋与高端社区风格的图片。'], ['现代化运营', '像 pg17 这样的内部工具正在逐步接入 portal，支持真实业务执行。']] },
    about: { badge: '关于我们', title: '在 escrow 的每个阶段都提供值得信赖的支持。', desc: 'Culture Escrow 正在建立更成熟的公开品牌呈现，同时持续强化内部执行系统。', cards: [['公司形象', '我们希望网站呈现出稳重、可信赖、贴近高端地产市场的品牌气质。'], ['客户信任感', '公开页面应当温和、专业、易于理解。'], ['执行能力', 'Portal 的成长会在幕后支持团队，而不会削弱公开官网体验。']] },
    services: { badge: '服务', title: '由更周到的系统支持的 escrow 服务。', desc: '我们正在把公开服务展示升级得更像成熟 escrow 公司官网，同时也为未来流程整合做好准备。', cards: [['住宅 Escrow 支持', '为住宅 escrow 交易提供专业协调与支持。'], ['流程透明', '通过更清晰的网站结构帮助客户更容易理解服务内容。'], ['数字化支持', 'PG17、Temply、FedEx API 等工具将逐步为业务提供更多支撑。']] },
    team: { badge: '团队', title: '让公开形象体现信任与用心。', desc: '这个页面会逐步更像成熟 escrow 公司的团队页，而不是 portal 占位页。', cards: [['经验支持', '更专业的团队展示会让客户感到更安心。'], ['客户信任', '团队页面应强化品牌与服务体验的可信度。'], ['后台支撑', '内部系统会继续在幕后成长，支持更好的执行效率。']] },
    contact: { badge: '联系', title: '让客户更安心地联系到我们。', desc: '联系方式应当保持清晰、易见，并符合专业 escrow 官网的体验。', cards: [['公开联系方式', '联系方式继续作为官网公开内容的一部分。'], ['沟通清晰', '客户应能轻松明白如何联系公司。'], ['未来品牌内容', '后续可补充正式联系方式与品牌图片。']] },
  },
  'zh-tw': {
    nav: { brandSubtitle: '官方網站 + Portal', publicLabel: '公開頁面', portalLabel: '工具入口', home: '首頁', about: '關於我們', services: '服務', team: '團隊', contact: '聯絡我們', dailyTools: '日常工具' },
    home: { badge: '值得信賴的 Escrow 服務', title: '更有人情味、也更可靠的 Escrow 體驗。', desc: 'Culture Escrow 正在把公開官網與內部 Portal 結合起來，讓客戶體驗與內部執行都更清楚、更穩。', contact: '聯絡我們', services: '查看服務', whyTitle: '為什麼選擇 Culture Escrow', whyDesc: '我們希望網站首先像一家真正成熟的 escrow 公司官網，同時也為未來內部工具成長保留空間。', cards: [['流程可靠', '以清楚、專業的方式支持 escrow 流程推進。'], ['在地市場氣質', '視覺方向會逐步替換成更貼近 San Marino 房屋與高端社區風格的圖片。'], ['現代化營運', '像 pg17 這樣的內部工具正在逐步接入 portal，支援真實業務執行。']] },
    about: { badge: '關於我們', title: '在 escrow 的每個階段都提供值得信賴的支持。', desc: 'Culture Escrow 正在建立更成熟的公開品牌呈現，同時持續強化內部執行系統。', cards: [['公司形象', '我們希望網站呈現出穩重、可信賴、貼近高端地產市場的品牌氣質。'], ['客戶信任感', '公開頁面應當溫和、專業、容易理解。'], ['執行能力', 'Portal 的成長會在幕後支持團隊，而不會削弱公開官網體驗。']] },
    services: { badge: '服務', title: '由更周到的系統支持的 escrow 服務。', desc: '我們正在把公開服務展示升級得更像成熟 escrow 公司官網，同時也為未來流程整合做好準備。', cards: [['住宅 Escrow 支持', '為住宅 escrow 交易提供專業協調與支持。'], ['流程透明', '透過更清楚的網站結構幫助客戶更容易理解服務內容。'], ['數位化支持', 'PG17、Temply、FedEx API 等工具將逐步為業務提供更多支撐。']] },
    team: { badge: '團隊', title: '讓公開形象體現信任與用心。', desc: '這個頁面會逐步更像成熟 escrow 公司的團隊頁，而不是 portal 佔位頁。', cards: [['經驗支持', '更專業的團隊展示會讓客戶感到更安心。'], ['客戶信任', '團隊頁面應強化品牌與服務體驗的可信度。'], ['後台支撐', '內部系統會繼續在幕後成長，支持更好的執行效率。']] },
    contact: { badge: '聯絡', title: '讓客戶更安心地聯絡到我們。', desc: '聯絡方式應當保持清楚、易見，並符合專業 escrow 官網的體驗。', cards: [['公開聯絡方式', '聯絡方式繼續作為官網公開內容的一部分。'], ['溝通清楚', '客戶應能輕鬆明白如何聯絡公司。'], ['未來品牌內容', '後續可補充正式聯絡方式與品牌圖片。']] },
  },
}
