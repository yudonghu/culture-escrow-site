# Portal Self-Hosted Runner Deploy

## 目标
让 `culture-escrow-site` 的部署方式与 pg17 对齐，使用 EC2 上的 self-hosted GitHub runner 执行自动部署。

## 部署链路
- GitHub main merge / workflow_dispatch
- EC2 self-hosted runner 接收任务
- 本机执行：同步代码 / npm install / build / restart service

## 为什么这样做
1. 比手动 rsync / 手动 SSH 更稳定
2. 与 pg17 已验证方案一致
3. 后续 portal 更新可直接 merge 后自动部署

## 当前 workflow 做的事
- checkout
- rsync 到 `/opt/culture-escrow-site`
- `npm install`
- `npm run build`
- restart `culture-portal.service`
- basic service verify
