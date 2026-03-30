# Login Flow Expectation v1.0

## 当前阶段
当前以内测为主，`/daily-tools` 的 Microsoft 登录能力先作为**未来启用能力**保留。

因此当前重点是：
- 保持 Portal 与工具入口继续推进
- 保留 Microsoft 登录方案文档与代码准备
- 暂不把认证启用作为当前阻塞项

## 未来启用后的预期流程
1. 用户打开官网公开页面：无需登录
2. 用户点击或进入 `/daily-tools`
3. 若未登录，跳转 `/login`
4. 用户点击 Microsoft 登录
5. 完成 Microsoft 认证后返回 `/daily-tools`
6. 用户看到当前可访问的工具卡片

## 当前版本策略
- 当前版本：占位 / 预留 / 不强制上线
- 后续版本：正式启用 Microsoft 登录
- 再后续版本：按角色 / 组控制不同工具可见性
