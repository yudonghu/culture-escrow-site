# Portal EC2 Deploy Checklist v1.0

## Portal Build
- [ ] `npm install`
- [ ] `npm run build`
- [ ] `npm run start`

## EC2 Runtime
- [ ] 准备 portal 运行目录
- [ ] 写入生产环境变量（如需要）
- [ ] 创建 `culture-portal.service`
- [ ] 启动并验证 service

## Caddy
- [ ] 配置 `hydenluc.com`
- [ ] 如需要，配置 `www.hydenluc.com`
- [ ] 如需要，配置 `app.hydenluc.com`
- [ ] reload Caddy

## Validation
- [ ] 首页可访问
- [ ] `daily-tools` 可访问
- [ ] `/tools/pg17` 可访问
- [ ] pg17 外部入口链路可点击
