# Routing

## URL 结构

### 公开官网（site）

| URL | 文件 | 说明 |
|---|---|---|
| `/` | `app/page.tsx` | 重定向到 `/en` |
| `/en` | `app/(site)/[lang]/page.tsx` | 英文首页 |
| `/en/about` | `app/(site)/[lang]/about/page.tsx` | |
| `/en/services` | `app/(site)/[lang]/services/page.tsx` | |
| `/en/team` | `app/(site)/[lang]/team/page.tsx` | |
| `/en/contact` | `app/(site)/[lang]/contact/page.tsx` | |
| `/zh-cn/*` | 同上，lang='zh-cn' | 简中 |
| `/zh-tw/*` | 同上，lang='zh-tw' | 繁中 |

### Portal（需登录）

| URL | 文件 | 说明 |
|---|---|---|
| `/en/daily-tools` | `app/(portal)/[lang]/daily-tools/page.tsx` | 工具入口页 |
| `/en/tools/[slug]` | `app/(portal)/[lang]/tools/[slug]/page.tsx` | 工具详情页 |
| `/en/admin/users` | `app/(portal)/[lang]/admin/users/page.tsx` | 用户管理（admin only） |

### 其他

| URL | 文件 | 说明 |
|---|---|---|
| `/login` | `app/login/page.tsx` | 登录页 |
| `/api/auth/*` | NextAuth 自动生成 | |
| `/api/check-auth` | `app/api/check-auth/route.ts` | Caddy forward_auth 端点 |

## 多语言

支持三种语言：`en`、`zh-cn`、`zh-tw`，通过路径第一段区分。

**`lib/site-copy.ts`** 中的 `withLang(lang, path)` 函数生成带语言前缀的路径：
- `en`：不加前缀（`/about` 而非 `/en/about`）
- `zh-cn`：加前缀（`/zh-cn/about`）
- `zh-tw`：加前缀（`/zh-tw/about`）

> **注意**：Portal 路由（`/[lang]/daily-tools` 等）必须始终带 lang 前缀，包括英文（`/en/daily-tools`）。不要对 Portal 路由使用 `withLang()`，直接使用 `` `/${lang}/path` ``。

`HeaderFromPath` 组件通过 `usePathname()` 读取当前路径第一段来判断当前语言，回退默认为 `en`。

## 路由保护（proxy.ts）

`proxy.ts`（Next.js Middleware）保护所有非公开路径：

```typescript
matcher: ['/((?!login|api/auth|_next/static|_next/image|favicon.ico).*)']
```

未登录访问受保护路由 → 重定向到 `/login?callbackUrl=...`

登录后统一重定向到 `/en/daily-tools`（在 `auth.config.ts` 的 redirect callback 中配置）。
