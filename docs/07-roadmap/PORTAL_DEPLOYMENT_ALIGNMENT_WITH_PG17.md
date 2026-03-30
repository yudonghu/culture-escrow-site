# Portal Deployment Alignment With PG17

## 目标
将 portal 的部署路径与 pg17 对齐，避免继续依赖临时手动 rsync / SSH。

## 对齐点
- 使用 EC2 self-hosted runner
- 使用 GitHub Actions 触发部署
- 使用 systemd 管理服务
- 使用 Caddy 提供公网入口

## 当前结论
portal 后续应与 pg17 一样，进入“merge → runner 自动部署”的长期稳定路径。
