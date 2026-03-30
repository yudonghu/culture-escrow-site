export type PortalLang = 'en' | 'zh-cn' | 'zh-tw'

export const portalCopy: Record<PortalLang, any> = {
  en: {
    breadcrumbHome: 'Home',
    dailyTools: 'Daily Tools',
    overviewTitle: 'Portal Overview',
    overviewDesc: 'This page is the unified internal tools entry for Culture Escrow portal. It helps staff understand what tools exist, which ones are already open, and which ones are still being prepared for future rollout.',
    currentPhaseTitle: 'Current Phase',
    currentPhaseDesc: 'This page is currently focused on internal testing and entry consolidation. Microsoft login remains planned but is intentionally left as a future capability.',
    metrics: { total: 'Total Tools', live: 'Live', test: 'Internal Test', planned: 'Planned' },
    openTool: 'Open tool →',
    viewDetails: 'View details →',
    comingSoon: 'Coming soon',
    back: '← Back to daily-tools',
    openExternal: 'Open external tool →',
    notOpen: 'External entry not open yet',
    stage: 'Stage',
    entry: 'Entry Status',
    audience: 'Audience',
    roadmap: 'Roadmap',
    status: 'Status',
    category: 'Category',
    portalIntegration: 'Portal Integration Status',
    portalIntegrationDesc: 'PG17 is currently the first real tool being formally connected into the Culture Escrow portal structure. It serves as the reference sample for how future tools will be linked, described, and deployed.',
  },
  'zh-cn': {
    breadcrumbHome: '首页', dailyTools: '日常工具', overviewTitle: 'Portal 概览', overviewDesc: '这里是 Culture Escrow Portal 的统一内部工具入口，帮助团队了解有哪些工具、哪些已经开放、哪些仍在准备中。', currentPhaseTitle: '当前阶段', currentPhaseDesc: '当前页面以内部测试和入口整合为主。Microsoft 登录方案已经规划完成，但暂时保留为后续能力。', metrics: { total: '工具总数', live: '已上线', test: '内部测试', planned: '规划中' }, openTool: '打开工具 →', viewDetails: '查看详情 →', comingSoon: '即将开放', back: '← 返回 daily-tools', openExternal: '打开外部工具 →', notOpen: '外部入口尚未开放', stage: '使用阶段', entry: '入口状态', audience: '适用对象', roadmap: '后续计划', status: '状态', category: '分类', portalIntegration: 'Portal 接入状态', portalIntegrationDesc: 'PG17 是当前第一个正式接入 Culture Escrow Portal 结构的真实工具，它会作为后续工具接入、描述与部署的样板。'
  },
  'zh-tw': {
    breadcrumbHome: '首頁', dailyTools: '日常工具', overviewTitle: 'Portal 概覽', overviewDesc: '這裡是 Culture Escrow Portal 的統一內部工具入口，協助團隊了解有哪些工具、哪些已經開放、哪些仍在準備中。', currentPhaseTitle: '目前階段', currentPhaseDesc: '目前頁面以內部測試和入口整合為主。Microsoft 登入方案已規劃完成，但暫時保留為後續能力。', metrics: { total: '工具總數', live: '已上線', test: '內部測試', planned: '規劃中' }, openTool: '打開工具 →', viewDetails: '查看詳情 →', comingSoon: '即將開放', back: '← 返回 daily-tools', openExternal: '打開外部工具 →', notOpen: '外部入口尚未開放', stage: '使用階段', entry: '入口狀態', audience: '適用對象', roadmap: '後續計劃', status: '狀態', category: '分類', portalIntegration: 'Portal 接入狀態', portalIntegrationDesc: 'PG17 是目前第一個正式接入 Culture Escrow Portal 結構的真實工具，它會作為後續工具接入、描述與部署的樣板。'
  },
}
