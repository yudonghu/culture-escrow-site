# Microsoft Entra App Setup v1.0

## 当前阶段说明
目前 `culture-escrow-site` 仍以内测为主，**Microsoft 登录暂不立即落地启用**。

现阶段策略是：
- 保留 Microsoft 认证方案作为后续正式上线预案
- 当前仅做文档占位与未来接入准备
- 暂不要求立刻在 Microsoft Entra 后台创建应用

## 未来启用时再执行
当网站进入公开或正式内部上线阶段时，再进行以下操作：
- 创建 App Registration
- 配置 Redirect URI
- 创建 client secret
- 将 env 写入运行环境

## 未来需要准备的配置
### 应用类型
- Web

### Redirect URI
#### 本地开发
- `http://localhost:3000/api/auth/callback/microsoft-entra-id`

#### 生产环境
- `https://hydenluc.com/api/auth/callback/microsoft-entra-id`

## 未来需要记录的字段
- Application (client) ID → `MICROSOFT_CLIENT_ID`
- Directory (tenant) ID → `MICROSOFT_TENANT_ID`
- Client secret value → `MICROSOFT_CLIENT_SECRET`

## 注意事项
1. Client secret 只在创建时完整显示一次，要立即保存。
2. Redirect URI 必须与实际站点域名精确匹配。
3. 若未来使用独立子域名承载 portal，需要同步更新 redirect URI。
