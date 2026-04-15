# Header Navigation

## 结构

Header 分为两个组件：

- **`HeaderFromPath`**（Client Component）：读取 `usePathname()` 判断语言，读取 `useSession()` 获取用户信息，传给 `LocalizedHeader`
- **`LocalizedHeader`**（Server-renderable）：接收 `lang`、`username`、`role`，渲染实际 header

根 `layout.tsx` 中渲染 `<HeaderFromPath />`，全站只有一层 header。

## 导航分组

```
Brand Block          Public               Portal    Language    User（登录后）
──────────────       ──────────────────   ───────   ─────────   ────────────────────
Culture Escrow       Home  About          Daily     EN 简中      jason
Official Website     Services Team        Tools     繁中         [Manage Users]  [Sign Out]
+ Portal             Contact
```

### Brand Block
- 品牌名：`Culture Escrow`（链接到首页）
- 副标题：`Official Website + Portal`（来自 `site-copy.nav.brandSubtitle`）

### Public
- Home / About / Services / Team / Contact
- 链接通过 `withLang(lang, path)` 生成（EN 不加前缀）

### Portal
- Daily Tools（链接到 `/[lang]/daily-tools`，**始终带 lang 前缀**）

### Language
- EN → `/`
- 简中 → `/zh-cn`
- 繁中 → `/zh-tw`

### User（仅登录后显示）
- 用户名（`nav-username`）
- **Manage Users** 按钮：仅 `role === 'admin'` 显示，链接到 `` `/${lang}/admin/users` ``
- **Sign Out** 按钮：调用 `signOutAction`（Server Action）

## 样式类

| class | 用途 |
|---|---|
| `.site-header` | header 容器 |
| `.nav-shell` | 内部 flex 容器 |
| `.brand-block` | 品牌区块 |
| `.nav-groups` | 导航分组容器 |
| `.nav-group` | 单个分组 |
| `.nav-group-label` | 分组标签（小写大写字母） |
| `.nav-links` | 链接行 |
| `.nav-user` | 用户区块 |
| `.nav-username` | 用户名文字 |
| `.nav-logout` | Sign Out / Manage Users 按钮（边框样式） |
