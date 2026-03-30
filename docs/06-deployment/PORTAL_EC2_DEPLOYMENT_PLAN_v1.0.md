# Portal EC2 Deployment Plan v1.0

## 目标
将 `culture-escrow-site`（Portal）部署到 EC2，并与 pg17 工具形成统一入口 + 独立工具服务的结构。

## 部署原则
1. Portal 与 pg17 部署在同一台 EC2
2. Portal 作为统一入口
3. pg17 作为独立工具服务运行
4. 使用 Caddy 统一反向代理
5. 当前阶段先保证原生部署可运行，后续再考虑容器化

## 推荐结构
### 域名层
- `hydenluc.com` → Portal
- `www.hydenluc.com` → Portal
- `app.hydenluc.com` → Portal（如需要单独 portal 域）
- `api.hydenluc.com` → pg17 API（现有）

### 路由层（推荐）
- `hydenluc.com/` → Portal 首页
- `hydenluc.com/daily-tools` → Portal 工具入口
- `hydenluc.com/tools/pg17` → Portal 中的 pg17 详情入口
- `app.hydenluc.com/tools/pg17` → 可作为 portal 侧工具前端入口保留

## 运行层
### Portal
- Next.js app
- 建议运行端口：`3000`
- 运行方式：`next start`
- systemd service: `culture-portal.service`

### pg17
- API 服务继续独立运行
- 保持现有 `pg17.service`
- 现有 API / 前端结构继续保留

## Caddy 方向
### Portal
```caddy
hydenluc.com, www.hydenluc.com {
    reverse_proxy 127.0.0.1:3000
}
```

### 可选 portal 子域
```caddy
app.hydenluc.com {
    reverse_proxy 127.0.0.1:3000
}
```

### pg17 API
```caddy
api.hydenluc.com {
    reverse_proxy 127.0.0.1:8787
}
```

## systemd 方向
### Portal service
- WorkingDirectory: portal repo
- ExecStart: `npm run start`
- Environment: `NODE_ENV=production`
- Restart: `always`

## 当前阶段注意事项
- Microsoft 登录先不启用，不作为部署阻塞项
- 先确保 portal 本体可访问
- 先保证 pg17 作为首个真实工具从 portal 可达
