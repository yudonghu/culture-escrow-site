# PR26 Portal Deployment Next Step

## 当前目标
在 portal 已形成 v1 结构、pg17 已成为首个真实接入工具后，开始准备 portal 的 EC2 部署方案。

## 本次结论
- Portal 与 pg17 共用同一台 EC2
- Portal 作为统一入口站点
- pg17 保持独立服务
- Caddy 作为统一反向代理
- 当前阶段先做原生部署，不先上容器
