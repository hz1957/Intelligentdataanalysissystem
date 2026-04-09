# iframe 嵌入使用指南

## 概述

OpenCodeUI 支持通过 iframe 嵌入到其他页面中，并可以通过 URL 参数指定后端地址。

- docs/IFRAME_EMBED.md

## URL 参数

| 参数名        | 说明                      | 示例                               |
| ------------- | ------------------------- | ---------------------------------- |
| `opencodeUrl` | OpenCode 后端地址（推荐） | `?opencodeUrl=http://backend:4096` |

## 基本用法

### 嵌入到页面

```html
<iframe
  src="http://your-server.com/opencode/?opencodeUrl=http://backend:4096"
  width="100%"
  height="800px"
  frameborder="0"
></iframe>
```

### 支持多级路由路径

如果后端部署在子路径下，可以直接携带路径：

```html
<iframe src="http://your-server.com/opencode/?opencodeUrl=http://backend:4096/xx"></iframe>
```

API 请求会发送到 `http://backend:4096/xx/session` 等。

### 多 iframe 隔离

每个 iframe 使用独立的 `sessionStorage` 存储，配置互不冲突：

```html
<iframe src="http://your-server.com/opencode/?opencodeUrl=http://backend1:4096"></iframe>
<iframe src="http://your-server.com/opencode/?opencodeUrl=http://backend2:4096"></iframe>
<iframe src="http://your-server.com/opencode/?opencodeUrl=http://backend3:4096"></iframe>
```

## 行为说明

1. **首次访问**：从 URL 参数读取后端地址，设为默认服务器
2. **刷新页面**：保持 URL 参数指定的配置（存在 sessionStorage 中）
3. **关闭重开**：恢复默认值（URL 参数），因为 sessionStorage 生命周期是会话级别
4. **iframe 隔离**：每个 iframe 实例使用独立的 sessionStorage，不与其他 iframe 或标签页共享
