# Local Alias Fix Note v1.0

## 问题
本地运行时出现：

```bash
Module not found: Can't resolve '@/components/Breadcrumb'
```

## 原因
项目已经开始统一使用 `@/` 路径别名，但 `tsconfig.json` 中尚未声明：
- `baseUrl`
- `paths`

## 修复
在 `tsconfig.json` 中增加：

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./*"]
}
```

## 影响
这会统一支持：
- `@/components/*`
- `@/data/*`
- `@/lib/*`
- 以及后续其他顶层目录别名引用
