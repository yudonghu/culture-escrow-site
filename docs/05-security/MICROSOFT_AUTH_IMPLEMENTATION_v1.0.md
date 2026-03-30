# Microsoft Auth Implementation v1.0

## 本次实现范围
- 接入 Auth.js / NextAuth.js
- 使用 Microsoft Entra ID Provider
- 通过 middleware 仅保护 `/daily-tools`
- 官网公开页面不受影响

## 需要配置的环境变量
- `MICROSOFT_CLIENT_ID`
- `MICROSOFT_CLIENT_SECRET`
- `MICROSOFT_TENANT_ID`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## 当前状态
- 已完成代码骨架与路由保护结构
- 仍需在 Microsoft Entra 后台创建应用并填写真实 env
