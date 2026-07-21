# Tool Schema

## ToolItem 类型

定义在 `data/tools.ts`：

```typescript
export type ToolStatus = 'Live' | 'Planned' | 'Internal Test'
export type ToolAvailability = 'open' | 'coming-soon'

export type ToolItem = {
  name: string           // 显示名称
  slug: string           // URL slug（用于 /tools/[slug]）
  desc: string           // 短描述（卡片用）
  href: string           // 外部工具链接（# 表示未开放）
  status: ToolStatus
  category: string       // 显示分类标签
  availability: ToolAvailability
  icon: string           // emoji 图标
  notes?: string         // 内部备注
  summary?: string       // 详情页摘要
  audience?: string      // 适用对象
  stage?: string         // 当前阶段说明
  roadmap?: string       // 后续计划
  portalNote?: string    // Portal 特殊说明（详情页展示）
}
```

## 当前工具列表

| name | slug | status | availability | href |
|---|---|---|---|---|
| PG17 | pg17 | Live | open | `https://portal.cultureescrow.com/pg17` |
| Temply | temply | Live | open | `https://portal.cultureescrow.com/temply/` |
| FedEx API | fedex-api | Internal Test | open | `https://portal.cultureescrow.com/fedex/` |
| Refi A-Screen | refi-a-screen | Planned | coming-soon | `#` |

## 工具详情页

路由：`/[lang]/tools/[slug]`，文件：`app/(portal)/[lang]/tools/[slug]/page.tsx`

### 标准展示区块

- **名称 + 图标**（顶部）
- **Status** badge + **Category** badge
- **Summary**：工具摘要
- **Audience**：适用对象
- **Stage**：当前阶段
- **Roadmap**：后续计划
- **Portal Note**（如有）：Portal 集成说明
- **Open tool** 按钮（仅 `availability: 'open'`）
- **返回 Daily Tools** 链接

### Breadcrumb

```
Home  /  Daily Tools  /  工具名称
```

## 工具分组（category）

当前分组：
- `Document / Escrow`
- `Templates`
- `Shipping`
- `Intake / Refi`

## 新增工具步骤

1. 在 `data/tools.ts` 的 `tools` 数组中添加新的 `ToolItem`
2. 确保 `slug` 唯一，`href` 指向真实部署地址
3. 如已上线：`status: 'Live'`，`availability: 'open'`
4. 工具详情页自动通过 `[slug]` 路由生成，无需新建页面文件

## FedEx Internal Test 入口（2026-07-21）

- FedEx 已通过 Portal `forward_auth` 和同源 `/fedex/` 路径完成 EC2 接入，因此 `availability` 改为 `open`。
- 默认地址由 `NEXT_PUBLIC_PORTAL_URL + /fedex/` 组成，也可用 `NEXT_PUBLIC_FEDEX_URL` 单独覆盖。
- 状态仍保持 `Internal Test`：当前用于已登录员工走查和练习模式，不表示已允许真实 FedEx 出单。
- 本次只改变 Portal 卡片的入口状态与链接，不修改 Caddy、DNS、邮件记录或 FedEx 凭据。
