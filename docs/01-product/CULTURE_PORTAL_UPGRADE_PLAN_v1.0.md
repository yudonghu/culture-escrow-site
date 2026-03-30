# Culture Escrow Portal 升级方案 v1.0

## 1. 现状
当前 `culture-escrow-site` 是一个纯静态多语言展示站：
- HTML + CSS
- 无前端框架
- 无登录系统
- 无受保护页面

它适合做公开展示，但不适合继续承载内部工具入口与权限体系。

---

## 2. 升级目标
将该项目升级为：

### 对外
- 公司官网展示
- 多语言内容（EN / 简中 / 繁中）

### 对内
- 登录保护
- 新页面：`/daily-tools`
- 统一内部工具入口（pg17 / temply / fedexAPI 等）

---

## 3. 原地迁移 vs 新 repo 迁移

### 方案 A：原地迁移（推荐）
直接在 `culture-escrow-site` 当前 repo 内升级到新的 portal 技术栈。

#### 优点
- 沿用现有 repo 历史与域名定位
- 不会把官网与 portal 语义拆散
- 便于逐步迁移旧静态内容
- 用户视角连续

#### 缺点
- 迁移期间 repo 结构变化较大
- 需要一次性梳理旧页面资源

### 方案 B：新 repo 迁移
重新创建 portal repo，把旧展示站当素材迁移过去。

#### 优点
- 技术栈切换更干净
- 旧站保持完全不动

#### 缺点
- 上下文分裂
- 域名切换与内容迁移更绕
- 官网与门户关系不够清晰

### 结论
**推荐方案 A：原地迁移。**

原因：你后续要把 `culture-escrow-site` 本身演化为统一门户，继续在原 repo 内升级更符合长期产品形态。

---

## 4. 推荐目标技术栈
### 推荐
- **Next.js**

### 原因
- 易于承载官网 + 内部门户双形态
- 支持后续登录保护、中间件、SSR/静态混合
- 易于新增 `/daily-tools`
- 适合后续接入更多工具

---

## 5. 推荐迁移路线
### Phase 1：框架底座
- 初始化 Next.js 项目结构
- 引入多语言目录/路由规划
- 保留旧 HTML 页面作为迁移素材

### Phase 2：官网迁移
- 迁移 Home / About / Services / Team / Contact
- 保持现有多语言结构不丢失

### Phase 3：Portal 能力
- 增加 `/login`
- 增加 `/daily-tools`
- 加入静态工具卡片导航

### Phase 4：权限与平台化
- 登录保护
- 工具按角色显示
- 动态工具配置
- 后续 SSO 预留

---

## 6. 日常工具页（Portal v1）
初版先做静态卡片配置：
- PG17
- Temply
- FedEx API

每张卡片包含：
- 工具名
- 简介
- 按钮：打开工具

---

## 7. 部署方向
- 该 Portal 与 pg17 一样部署到同一台 EC2
- 通过 Caddy 统一反向代理
- 推荐：
  - 主站：`hydenluc.com`
  - 日常工具页：`hydenluc.com/daily-tools`
  - 各工具独立子域名：`pg17.hydenluc.com` / `temply.hydenluc.com` / `fedex.hydenluc.com`

---

## 8. 结论
`culture-escrow-site` 应从“静态官网”升级为：

**Culture Escrow Portal（官网 + 登录后的日常工具入口）**

并采用：
- **原地迁移**
- **Next.js 技术栈**
- **逐步迁移旧静态页面内容**
