# PR9 Deployment Auth Checklist

## Microsoft Entra
- [ ] 创建 App Registration
- [ ] 配置本地 redirect URI
- [ ] 配置生产 redirect URI
- [ ] 创建 client secret
- [ ] 记录 client id / tenant id / secret

## 本地
- [ ] 配置 `.env.local`
- [ ] 验证登录跳转
- [ ] 验证返回 `/daily-tools`

## EC2 / 生产
- [ ] 写入生产 env
- [ ] 重启服务
- [ ] 验证生产域名登录跳转
- [ ] 验证仅 `/daily-tools` 被保护
