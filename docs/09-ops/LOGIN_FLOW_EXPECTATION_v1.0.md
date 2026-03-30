# Login Flow Expectation v1.0

## 用户访问流程
1. 用户打开官网公开页面：无需登录
2. 用户点击或进入 `/daily-tools`
3. 若未登录，跳转 `/login`
4. 用户点击 Microsoft 登录
5. 完成 Microsoft 认证后返回 `/daily-tools`
6. 用户看到当前可访问的工具卡片

## 当前版本
- v1 先实现“能登录并进入 daily-tools”
- v2 再做按角色 / 组控制不同工具可见性
