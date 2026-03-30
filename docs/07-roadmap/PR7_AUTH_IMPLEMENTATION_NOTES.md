# PR7 Auth Implementation Notes

## 决策
`/daily-tools` 登录保护采用 Microsoft Entra ID。

## 原则
- 官网公开内容不加登录
- 只保护 `/daily-tools`
- 不额外造一套账号密码系统

## 下一步技术实现
1. 在 Next.js Portal 中接入 Auth.js / NextAuth.js
2. 增加 Microsoft Provider
3. 在 middleware 或 route layer 对 `/daily-tools` 做保护
4. 配置 env:
   - `MICROSOFT_CLIENT_ID`
   - `MICROSOFT_CLIENT_SECRET`
   - `MICROSOFT_TENANT_ID`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL`
