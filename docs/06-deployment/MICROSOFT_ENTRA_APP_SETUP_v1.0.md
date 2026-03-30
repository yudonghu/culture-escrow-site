# Microsoft Entra App Setup v1.0

## 目标
为 `culture-escrow-site` 的 `/daily-tools` 配置 Microsoft 登录能力。

## 需要准备
在 Microsoft Entra 管理后台创建一个新的应用注册（App Registration）。

## 建议应用用途
- Portal 登录
- 仅保护 `/daily-tools`
- 官网公开页面继续公开访问

## 基本配置
### 应用类型
- Web

### Redirect URI
#### 本地开发
- `http://localhost:3000/api/auth/callback/microsoft-entra-id`

#### 生产环境
- `https://hydenluc.com/api/auth/callback/microsoft-entra-id`

## 需要记录的字段
创建应用后，保存以下值：
- Application (client) ID → `MICROSOFT_CLIENT_ID`
- Directory (tenant) ID → `MICROSOFT_TENANT_ID`
- Client secret value → `MICROSOFT_CLIENT_SECRET`

## 注意事项
1. Client secret 只在创建时完整显示一次，要立即保存。
2. Redirect URI 必须与实际站点域名精确匹配。
3. 若未来使用独立子域名承载 portal，需要同步更新 redirect URI。
