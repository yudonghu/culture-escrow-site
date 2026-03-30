# Header Layout Architecture Fix v1

## 问题
header 在多个 layout 中重复渲染，先后导致：
- 双导航栏
- 三层导航栏
- 默认英文页面无导航栏

## 最终修复思路
不再让 site / portal / [lang] 各自渲染 header，改为：
- 根 layout 统一渲染唯一 header
- header 根据当前 pathname 自动判断当前语言
- 全站只保留这一层导航栏

## 当前实现
- 新增 `HeaderFromPath` 组件
- 使用 `usePathname()` 解析当前路径第一段
- 若命中 `en / zh-cn / zh-tw` 之一，则采用该语言
- 否则回退为默认 `en`

## 结果目标
- 英文页面：1 层 header
- 中文页面：1 层 header
- portal 页面：1 层 header
