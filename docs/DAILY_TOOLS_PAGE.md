# Daily Tools Page

## 定位

`/[lang]/daily-tools` 是登录后的统一内部工具导航页，所有 Culture Escrow 工具入口收口于此。

## 页面布局（从上到下）

1. **Breadcrumb**：`Home / Daily Tools`
2. **工具卡片网格**：所有工具的入口卡片
3. **Current Phase 信息块**：当前阶段说明（`.info-panel`）
4. **统计卡片行**：Total / Live / Internal Test / Planned 数量
5. **Hero Panel**：页面简介（移至底部）

## 工具卡片

每张卡片包含：
- Status badge（Live / Planned / Internal Test）
- Category badge
- 工具图标 + 名称（可点击，跳转工具详情页）
- 简介文字（可点击，跳转工具详情页）
- Open tool 链接（仅 `availability: 'open'` 时显示）
- View Details 链接（跳转 `/[lang]/tools/[slug]`）

名称和简介的点击目标均为 `/[lang]/tools/[slug]`。

## Breadcrumb

```
Home  /  Daily Tools
```

- Home 链接：`/${lang}`
- Daily Tools：当前页，无链接

## 文案来源

`lib/portal-copy.ts`，支持 `en`、`zh-cn`、`zh-tw`。

关键字段：
- `dailyTools`：页面标题
- `openTool`：Open 按钮文字
- `comingSoon`：未开放工具文字
- `viewDetails`：详情链接文字
- `currentPhaseTitle` / `currentPhaseDesc`：阶段说明
- `metrics.total / live / test / planned`：统计标签

## 工具数据来源

`data/tools.ts` → `tools` 数组，类型 `ToolItem`。详见 [TOOL_SCHEMA.md](./TOOL_SCHEMA.md)。
