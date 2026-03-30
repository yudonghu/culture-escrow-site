# Default English Header Restore Note

## 问题
修复双导航栏后，默认英文页面（如 `/about`）出现了没有导航栏的问题。

## 原因
- 根 layout 的 header 被移除
- 但默认英文页面没有进入 `[lang]` layout
- 导致只有多语言页面有 header，英文默认页面没有 header

## 修复
- 为默认英文 site 页面增加 `app/(site)/layout.tsx`
- 为默认英文 portal 页面增加 `app/(portal)/layout.tsx`
- 统一复用 `LocalizedHeader lang="en"`

## 结果
- 默认英文页面恢复单层导航栏
- 多语言页面继续保持单层导航栏
