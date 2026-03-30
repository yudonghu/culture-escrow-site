# Portal Bootstrap Architecture (PR4 updated)

## 目标
为 `culture-escrow-site` 建立可承载 Portal 能力的基础骨架，并明确访问边界。

## 访问边界
- 官网展示页：公开访问
- `/daily-tools`：后续登录保护

## 路由分层
### Public
- `/`
- `/about`
- `/services`
- `/team`
- `/contact`

### Protected
- `/daily-tools`

## 说明
后续登录逻辑应仅作用于 `/daily-tools`，不应影响官网公开访问与 SEO。
