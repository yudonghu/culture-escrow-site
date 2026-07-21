# Roadmap

## 已完成（v1）

### 基础架构
- [x] Next.js App Router 项目结构
- [x] 公开官网页面（Home / About / Services / Team / Contact）
- [x] 三语言支持（EN / 简中 / 繁中）
- [x] 统一 Header（HeaderFromPath + LocalizedHeader）
- [x] 全局样式系统（globals.css）

### Portal
- [x] 登录页（`/login`）
- [x] NextAuth v5 Credentials 认证
- [x] PostgreSQL 用户表（`auth.users`）
- [x] `proxy.ts` 路由保护（除公开页和 login/api 外全部需登录）
- [x] 登录后始终跳转 `/en/daily-tools`
- [x] Session 400 天有效期

### Daily Tools 页面
- [x] 工具卡片网格（name、desc、status、category、icon）
- [x] 已开放工具：点击名称/简介直接跳转工具地址
- [x] 未开放工具：点击跳转详情页
- [x] 工具详情页（`/[lang]/tools/[slug]`）
- [x] Breadcrumb 导航
- [x] 当前阶段说明块 + 统计卡片

### 工具接入
- [x] PG17（Live，`portal.cultureescrow.com/pg17`）
- [x] Temply（Live，`portal.cultureescrow.com/temply/`）
- [x] FedEx API（Internal Test，Portal 认证入口已开放）
- [x] Refi A-Screen（Planned，占位）

### 认证增强
- [x] Role 系统（staff / admin）
- [x] JWT + session 携带 role
- [x] Header 显示登录用户名
- [x] admin 用户显示 Manage Users 按钮
- [x] `/[lang]/admin/users` 用户管理页（列表 + 添加用户）

### 部署
- [x] EC2 自动部署（self-hosted GitHub Actions runner）
- [x] Caddy forward_auth 保护 `/pg17` 和 `/temply/*`
- [x] `.env` 与 rsync 隔离（`--exclude='.env'`）

---

## 当前阶段

Portal v1 已全面上线，功能稳定可用。当前重点：

- 内部员工日常使用 Daily Tools 入口
- 管理员通过 `/en/admin/users` 管理账号
- 持续接入新工具

---

## 下一步（待规划）

### 工具层
- [ ] FedEx API 完成全体已登录员工走查与经批准的 Production 凭据验证（status → Live）
- [ ] Refi A-Screen 开发并接入

### 用户管理
- [ ] admin 页面支持停用/启用用户（`is_active` 切换）
- [ ] admin 页面支持修改用户 role

### Portal 体验
- [ ] 工具分组显示（按 category 分区）
- [ ] 按 role 控制工具卡片可见性

### 长期
- [ ] 工具配置动态化（从 DB 读取，而非硬编码 tools.ts）
- [ ] 登录日志 / 访问审计
