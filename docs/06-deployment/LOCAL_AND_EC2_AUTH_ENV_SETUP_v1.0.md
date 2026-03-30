# Local and EC2 Auth Env Setup v1.0

## 本地开发环境
`.env.local` 示例：

```env
MICROSOFT_CLIENT_ID=xxxx
MICROSOFT_CLIENT_SECRET=xxxx
MICROSOFT_TENANT_ID=xxxx
NEXTAUTH_SECRET=replace-with-random-secret
NEXTAUTH_URL=http://localhost:3000
```

## 生产环境（EC2）
生产 env 示例：

```env
MICROSOFT_CLIENT_ID=xxxx
MICROSOFT_CLIENT_SECRET=xxxx
MICROSOFT_TENANT_ID=xxxx
NEXTAUTH_SECRET=replace-with-random-secret
NEXTAUTH_URL=https://hydenluc.com
```

## 说明
- 本地和线上主要区别是 `NEXTAUTH_URL`
- Microsoft Entra 后台要同时配置本地和生产回调地址
- 若后续 portal 迁移到独立域名，需要同步修改 `NEXTAUTH_URL`
