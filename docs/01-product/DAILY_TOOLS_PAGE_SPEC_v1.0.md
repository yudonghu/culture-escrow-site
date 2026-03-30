# Daily Tools Page Spec v1.0

## 页面定位
`/daily-tools` 是 Culture Escrow Portal 中的统一内部工具导航页。

## 页面目标
- 作为所有内部工具的统一入口
- 避免用户分散记忆多个独立链接
- 为后续权限控制与工具扩展提供稳定入口

## 页面规则
- 该页面是内部入口页
- 后续需要登录保护
- 官网其余公开页面不受影响

## 工具卡片字段
每个工具卡片至少包含：
- `name`
- `desc`
- `href`
- `status`
- `category`

## 首批工具
- PG17
- Temply
- FedEx API

## 后续演进
- 按角色显示/隐藏工具
- 动态从配置源读取工具列表
- 增加工具状态标签（live / beta / planned / internal-only）
