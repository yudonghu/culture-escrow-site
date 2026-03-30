# Tool Card Schema v1.0

## 目标
统一 `daily-tools` 页面中每个工具卡片的数据结构，方便后续持续接入更多工具。

## 当前字段
- `name`
- `desc`
- `href`
- `status`
- `category`
- `availability`
- `icon`
- `notes`

## 状态枚举
- `Live`
- `Planned`
- `Internal Test`

## 可用性枚举
- `open`
- `coming-soon`

## 设计目的
- 让工具卡片更标准化
- 支撑后续更多 Culture 工具接入
- 为未来角色控制 / 分组展示 / icon 扩展留结构
