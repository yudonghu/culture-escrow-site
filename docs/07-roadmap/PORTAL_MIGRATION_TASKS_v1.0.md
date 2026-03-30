# Portal Migration Tasks v1.0

## 总目标
将 `culture-escrow-site` 升级为统一 Portal，并将所有 Culture Escrow 相关工具逐步收口到 `日常工具` 页面。

---

## P1 基础升级
- [ ] 在现有 repo 内初始化 Next.js
- [ ] 建立基础目录结构（app/components/lib/public）
- [ ] 制定多语言路由方案
- [ ] 保留旧静态页面作为迁移素材

## P2 官网迁移
- [ ] 迁移首页
- [ ] 迁移 about
- [ ] 迁移 services
- [ ] 迁移 team
- [ ] 迁移 contact
- [ ] 校对多语言文案一致性

## P3 Portal v1
- [ ] 新增 `/login`
- [ ] 新增 `/daily-tools`
- [ ] 工具卡片静态配置
- [ ] 首批接入 pg17 / temply / fedexAPI
- [ ] 定义工具卡片字段（名称 / 简介 / 链接 / 状态）

## P4 权限与演进
- [ ] 登录保护 `/daily-tools`
- [ ] 角色权限控制
- [ ] 动态化工具配置
- [ ] 统一认证 / SSO 预留

## P5 工具整合规则落地
- [ ] 制定“新工具接入 Portal”标准流程
- [ ] 所有现有 Culture 工具梳理清单
- [ ] 为每个工具补齐入口信息（名称 / 简介 / 链接 / 状态）
- [ ] 统一接入到 `/daily-tools`

---

## 执行规则
1. Portal 是默认统一入口。
2. 新增 Culture 工具默认进入 Portal 接入清单。
3. 工具本体保持独立 repo，不与 Portal 代码强耦合。
4. Portal 页面负责组织、展示、导航与后续权限控制。
