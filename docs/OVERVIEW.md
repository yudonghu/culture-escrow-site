# Culture Escrow Portal — Overview

## 项目定位

`culture-escrow-site` 是 Culture Escrow Inc. 的官网 + 内部工具门户（Portal），承担两个角色：

- **对外**：公司官网（多语言，公开访问）
- **对内**：员工登录后的统一工具入口（Portal）

## 技术栈

| 层 | 技术 |
|---|---|
| 框架 | Next.js 16（App Router） |
| 认证 | NextAuth v5（Credentials Provider） |
| 数据库 | PostgreSQL（auth.users 表，temply 数据库） |
| 样式 | 纯 CSS（globals.css，无 Tailwind） |
| 部署 | AWS EC2 + Caddy + systemd |
| CI/CD | GitHub Actions self-hosted runner |

## 目录结构

```
culture-escrow-site/
├── app/
│   ├── (site)/[lang]/          # 公开官网页面（home/about/services/team/contact）
│   ├── (portal)/[lang]/        # 内部 Portal 页面（daily-tools/tools/admin）
│   ├── api/
│   │   ├── auth/[...nextauth]/ # NextAuth 路由
│   │   └── check-auth/         # Caddy forward_auth 端点
│   ├── login/                  # 登录页
│   ├── layout.tsx              # 根 layout（含 Providers + HeaderFromPath）
│   └── globals.css
├── components/
│   ├── HeaderFromPath.tsx      # 客户端 header，读 pathname + session
│   ├── LocalizedHeader.tsx     # header 渲染（含用户名、Manage Users、Sign Out）
│   ├── Providers.tsx           # SessionProvider wrapper
│   └── Breadcrumb.tsx
├── lib/
│   ├── auth.ts                 # NextAuth 配置（含 jwt/session callbacks）
│   ├── users.ts                # DB 查询（findUserByLogin / listUsers / createUser）
│   ├── db.ts                   # PostgreSQL 连接（withClient）
│   ├── site-copy.ts            # 公开页面多语言文案 + withLang()
│   └── portal-copy.ts          # Portal 页面多语言文案
├── data/
│   └── tools.ts                # 工具列表（ToolItem 类型 + tools 数组）
├── types/
│   └── next-auth.d.ts          # NextAuth 类型扩展（User.role / Session.user.role）
├── auth.config.ts              # NextAuth edge-compatible 配置（callbacks）
└── proxy.ts                    # Next.js Middleware（保护非公开路由）
```

## 访问边界

| 路径 | 访问控制 |
|---|---|
| `/`、`/about`、`/services`、`/team`、`/contact` | 公开 |
| `/zh-cn/*`、`/zh-tw/*`（官网） | 公开 |
| `/login`、`/api/auth/*` | 公开 |
| `/[lang]/daily-tools` | 需登录 |
| `/[lang]/tools/[slug]` | 需登录 |
| `/[lang]/admin/users` | 需登录 + admin role |
| `/pg17`、`/temply/*` | Caddy forward_auth（需登录） |
