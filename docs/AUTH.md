# Auth

## 方案概述

使用 **NextAuth v5 + Credentials Provider + PostgreSQL**。员工通过用户名或邮箱 + 密码登录，无需 Microsoft 账号。

## 数据库

数据库：`temply`，schema：`auth`，表：`users`

```sql
CREATE TABLE auth.users (
  id            TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  username      TEXT NOT NULL UNIQUE,
  email         TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role          TEXT NOT NULL DEFAULT 'staff',
  is_active     BOOLEAN NOT NULL DEFAULT TRUE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### 账号管理

用户账号通过 `/[lang]/admin/users` 页面管理（需 admin 登录）。账号信息存储在数据库中，不在代码库中维护。

## Role 系统

| role | 权限 |
|---|---|
| `staff` | 登录后访问 daily-tools、工具详情页 |
| `admin` | 以上 + 访问 `/[lang]/admin/users`，Header 显示 Manage Users 按钮 |

## 配置文件

### `auth.config.ts`（edge-compatible）
- `trustHost: true`
- `pages.signIn: '/login'`
- `redirect` callback：登出跳 `/login`，登录后跳 `/en/daily-tools`
- `authorized` callback：判断路由是否需要登录

### `lib/auth.ts`
- Credentials Provider：接受 `login`（用户名或邮箱）+ `password`
- 查询 DB：`findUserByLogin()`（大小写不敏感）
- bcrypt 验证密码
- `jwt` callback：将 `user.role` 写入 token
- `session` callback：将 `token.role` 写入 `session.user.role`
- `session.maxAge`：400 天（浏览器最大限制）

## Session 读取

## 下游工具认证头

Portal 的 `/api/check-auth` 同时供 Caddy `forward_auth` 使用。认证成功时，它会返回：

- `X-Culture-Escrow-Actor`：用户 email，若无 email 则为用户名；
- `X-Culture-Escrow-Role`：用户角色，默认 `staff`。

这些响应头只能由 Caddy 的 `forward_auth copy_headers` 转发给受保护的内部工具，用于审计归因；它们不能替代 Portal session 本身，也不应被公网客户端直接信任。

## FedEx 真实操作角色

`shipping` 角色可由管理员在用户管理页分配，用于 FedEx 的真实出单和真实取消。FedEx 生产环境默认只允许 `admin,shipping` 执行这两类操作；普通 `staff` 可登录并使用练习模式、查询和历史记录，但不能触发真实 FedEx 请求。

**Server Component**（admin 页面权限校验）：
```typescript
import { auth } from '@/lib/auth'
const session = await auth()
if (session?.user?.role !== 'admin') redirect('/en/daily-tools')
```

**Client Component**（Header 显示用户名/role）：
```typescript
import { useSession } from 'next-auth/react'
const { data: session } = useSession()
const role = session?.user?.role
```

`useSession()` 需要 `SessionProvider`（`components/Providers.tsx`）包裹，已在根 `layout.tsx` 中配置。

## 环境变量（生产服务器 `.env`，不进 git）

```env
NEXTAUTH_SECRET=<openssl rand -base64 32 生成>
NEXTAUTH_URL=https://<your-domain>
DATABASE_URL=postgresql://<db-user>:<db-password>@localhost:5432/<db-name>
AUTH_TRUST_HOST=true
```

## Caddy forward_auth

`/pg17` 和 `/temply/*` 通过 Caddy `forward_auth` 保护，调用 `/api/check-auth` 端点验证 session。未登录返回 302 跳转到 `/login`。
