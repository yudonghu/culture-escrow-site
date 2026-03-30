# Daily Tools Auth via Microsoft (Entra ID) v1.0

## 目标
仅对 `/daily-tools` 增加登录保护，并使用公司现有 Microsoft 员工邮箱体系作为登录入口。

## 边界
### 公开页面（无需登录）
- `/`
- `/about`
- `/services`
- `/team`
- `/contact`

### 受保护页面（需登录）
- `/daily-tools`

## 推荐方案
- Next.js Portal
- Auth.js / NextAuth.js
- Microsoft Entra ID Provider

## 原因
1. 员工已有 Microsoft 账号，无需额外造账号系统
2. 后续可自然接入角色、组、邮箱域名限制
3. 与未来 Teams / Graph / Microsoft 生态一致

## v1 最小实现
- 用户点击 `/daily-tools` 时，若未登录则跳转 Microsoft 登录
- 登录成功后返回 `/daily-tools`
- 先按允许邮箱域名 / 白名单做最小放行

## v2 演进
- 根据用户组控制工具可见性
- 按角色显示不同工具卡片
- 审计登录行为与入口访问日志

## 必要配置
- `MICROSOFT_CLIENT_ID`
- `MICROSOFT_CLIENT_SECRET`
- `MICROSOFT_TENANT_ID`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## 登录结果用途
登录只用于保护 `/daily-tools` 入口页；不改变官网公开属性。
