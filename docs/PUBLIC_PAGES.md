# Public Pages

## 定位

公开官网页面无需登录，面向客户和公众，体现 Culture Escrow 的专业形象。

## 页面列表

| 页面 | 路由 | 内容 |
|---|---|---|
| Home | `/[lang]` | Hero + 公司定位 + 服务简介 + Portal 入口引导 |
| About | `/[lang]/about` | 公司背景、使命、团队介绍 |
| Services | `/[lang]/services` | 服务内容（Escrow、Refi 等） |
| Team | `/[lang]/team` | 团队成员 |
| Contact | `/[lang]/contact` | 联系方式 |

## 页面结构（统一模式）

所有公开页面采用以下结构：

1. **Breadcrumb**（`components/Breadcrumb.tsx`）
2. **Hero Panel**：深色背景，标题 + 副标题
3. **Section 内容**：Card Grid 或 split-feature 布局

## 视觉风格

- 深色品牌底：`--brand: #142334`
- 金色点缀：`--accent: #b08a4a`
- 白色卡片：`--surface: #ffffff`
- 背景色：`--bg: #f6f4ef`
- 大图 Hero，稳重可信赖，面向高端房产 / escrow 行业客户

## 多语言文案

来源：`lib/site-copy.ts`，`siteCopy[lang]` 对象。

语言切换通过 Header 顶部 Language 区块（EN / 简中 / 繁中）。切换后，后续站内导航链接通过 `withLang(lang, path)` 保持语言一致性。

## 与 Portal 的边界

- 公开页面**不受** `proxy.ts` 保护，无需登录
- Header 中 Portal 分组的 Daily Tools 链接指向受保护区域
- 公开页面和 Portal 页面共用同一套 Header、全局样式
