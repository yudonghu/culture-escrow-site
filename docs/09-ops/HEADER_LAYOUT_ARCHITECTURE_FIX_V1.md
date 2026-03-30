# Header Layout Architecture Fix v1

## 问题
在多轮修复后，header 被分散放到了多个 layout 中，导致默认英文页、多语言页、portal 页叠加渲染出多层导航栏。

## 本次修复原则
Header 只能在一层 layout 中渲染，不能在嵌套 layout 中重复出现。

## 修复后结构
- `app/layout.tsx`：不渲染 header
- `app/(site)/layout.tsx`：默认英文 site 页面统一渲染一层 header
- `app/(portal)/layout.tsx`：默认英文 portal 页面统一渲染一层 header
- `app/(site)/[lang]/layout.tsx`：不再重复渲染 header
- `app/(portal)/[lang]/layout.tsx`：不再重复渲染 header

## 结果目标
- 英文默认页面：1 层 header
- 中文页面：1 层 header
- portal 页面：1 层 header
