# Double Navigation Fix Note

## 问题
在多语言页面中出现了两个 navigation bar。

## 原因
- 根 layout 已经渲染了一层 header
- 多语言 site / portal layout 又额外渲染了一层 LocalizedHeader
- 导致双重 header 同时出现

## 修复
- 将根 layout 中的 header 移除
- 由多语言 layout 统一负责渲染带语言上下文的 header

## 结果
- 页面只保留一层导航栏
- 同时继续保留语言锁定逻辑
