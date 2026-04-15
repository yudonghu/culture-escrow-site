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

### 当前员工账号

| username | role |
|---|---|
| kevin | admin |
| jason | admin |
| shauna | admin |
| hydenluc | admin |
| Justin | staff |
| tony | staff |
| vickie | staff |

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

## 环境变量（EC2 `/opt/culture-escrow-site/.env`）

```env
NEXTAUTH_SECRET=<random-secret>
NEXTAUTH_URL=https://portal.cultureescrow.com
DATABASE_URL=postgresql://postgres:<password>@localhost:5432/temply
AUTH_TRUST_HOST=true
```

## Caddy forward_auth

`/pg17` 和 `/temply/*` 通过 Caddy `forward_auth` 保护，调用 `/api/check-auth` 端点验证 session。未登录返回 302 跳转到 `/login`。
