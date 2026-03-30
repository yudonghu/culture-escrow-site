# Tool Detail Structure v1.0

## 目标
为每个工具预留独立详情页结构，而不只停留在入口卡片层。

## 当前实现
- 新增动态详情页路由：`/tools/[slug]`
- 每个工具在 `data/tools.ts` 中新增：
  - `slug`
  - `summary`
  - `audience`

## 当前详情页展示
- Tool name
- Summary
- Status
- Category
- Audience
- Notes

## 设计意义
1. 让每个工具未来可以逐步拥有更完整说明
2. 便于后续加入截图、操作说明、权限说明
3. 让 portal 从“入口页”进一步演进为“工具信息层”
