# Language Switch Lock Fix Note

## 问题
用户切换到中文后，只要继续跳转页面，就会回到英文页面。

## 原因
顶部导航仍使用默认英文路径（如 `/about`、`/services`），没有根据当前语言自动带上语言前缀。

## 修复
- 新增 `withLang()` 路径辅助函数
- 新增 `LocalizedHeader` 组件
- 在多语言 site / portal layout 中使用当前语言生成导航链接

## 结果
用户一旦进入某个语言版本，后续站内跳转会继续保持该语言，不会自动跳回英文。
