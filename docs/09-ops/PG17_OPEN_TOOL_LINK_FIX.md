# PG17 Open Tool Link Fix

## 问题
portal 中 pg17 的 `Open tool` 按钮没有指向真正可用的线上 pg17 页面。

## 修复
将 pg17 的入口链接更新为：

```txt
https://hydenluc.com/pg17
```

## 原因
现在 `hydenluc.com/pg17` 已经通过 Caddy 暴露为 pg17 web 前端入口，因此应作为 portal 中的真实跳转目标。
