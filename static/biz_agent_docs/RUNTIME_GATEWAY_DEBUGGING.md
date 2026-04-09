# Runtime Gateway 调试手册

## 1. 先确认链路

当前 Session 页面实际链路如下：

```text
浏览器
  -> /api/sessions 获取 runtime_proxy_url
  -> iframe 加载 /opencode/index.html?opencodeUrl=<runtime_proxy_url>
  -> runtime-gateway
  -> runtime
  -> opencode serve
```

如果你还看到浏览器请求：

```text
/api/runtime-proxy/<sessionId>/...
```

说明页面还在走旧代理路径，先不要继续查 PTY。

## 2. 最短排查路径

### 第一步：确认 Session API 返回的是新地址

看 `GET /api/sessions?sessionId=<sessionId>` 返回值，应该包含：

```json
{
  "session": {
    "runtime_proxy_url": "https://your-domain/api/runtime-gateway/<sessionId>/<token>"
  }
}
```

如果没有：

- 检查 `apps/web/app/api/sessions/route.ts`
- 检查 `RUNTIME_GATEWAY_PUBLIC_URL`
- 检查 `RUNTIME_GATEWAY_SECRET` 是否存在

### 第二步：确认 gateway 健康

```bash
curl -i http://127.0.0.1:3200/health
```

预期：

- 返回 `200`
- body 含 `status: ok`

### 第三步：确认 session 能定位到 runtime

数据库排查：

```sql
SELECT
  s.session_id,
  s.user_id,
  s.container_key,
  s.status,
  cl.runtime_url
FROM sessions s
LEFT JOIN container_leases cl ON cl.container_key = s.container_key
WHERE s.session_id = '<sessionId>';
```

重点确认：

- `sessions` 记录存在
- `container_leases` 记录存在
- `runtime_url` 不是空值
- `runtime_url` 是 gateway 所在机器可达的地址

### 第四步：确认 runtime 初始化成功

Runtime 初始化入口：

```text
POST /session/init
```

如果初始化成功，runtime 会：

- 创建 workspace
- 启动 `opencode serve`

可观察到的正向信号：

- `packages/runtime/src/routes/session.ts` 返回 `200`
- runtime 日志出现 `opencode server listening on http://127.0.0.1:4096`

### 第五步：确认 HTTP API 正常

拿到 `runtime_proxy_url` 后，以下几个请求至少要通：

```bash
export PROXY_BASE='http://127.0.0.1:3200/api/runtime-gateway/<sessionId>/<token>'

curl -i "$PROXY_BASE/config/providers"
curl -i "$PROXY_BASE/global/event"
curl -i "$PROXY_BASE/session/status?directory=<workspace>"
curl -i "$PROXY_BASE/path"
```

如果这些还是 `404`：

- 先查 `runtime_url` 是否指到了旧 Runtime
- 再查 Runtime 是否已把非管理路径代理给 opencode

### 第六步：确认 Session 同步接口正常

手动同步入口：

```bash
curl -i \
  -X POST http://127.0.0.1:3000/api/sessions/sync \
  -H 'Content-Type: application/json' \
  -H 'Cookie: session=<your-session-cookie>' \
  -d '{"sessionId":"<sessionId>"}'
```

预期：

- 返回 `200`
- body 里包含 `result.uploadedFiles / deletedFiles / skipped`

查看 RustFS 当前前缀：

```bash
curl -s \
  "http://127.0.0.1:3100/sync/list?prefix=sessions/apps/<appId>/sessions/<userId>-<sessionId>"
```

如果 `POST /api/sessions/sync` 正常，但 `sync/list` 看不到对象：

- 先查 Runtime 是否访问到了正确的 RustFS
- 再查同步前缀是否写错
- 再查忽略规则是否把目标文件过滤掉了

## 3. PTY 专项排查

### 现象 A：`POST /pty` 404

含义：

- 请求没走到 opencode
- 或 Runtime 没有代理非管理路径

优先检查：

- 浏览器是不是还在打 `/api/runtime-proxy/...`
- `runtime_url` 是否指向旧 Runtime 实例
- `packages/runtime/src/index.ts` 是否已代理 `/pty`

### 现象 B：`POST /pty` 200，但 `/pty/.../connect` 400

这是最常见的 WebSocket upgrade 问题。

先用 curl 构造握手：

```bash
curl -i \
  -H 'Connection: Upgrade' \
  -H 'Upgrade: websocket' \
  -H 'Sec-WebSocket-Version: 13' \
  -H 'Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==' \
  "$PROXY_BASE/pty/<ptyId>/connect?directory=<workspace>"
```

预期：

- 正常应返回 `101 Switching Protocols`
- 如果返回 `400`，说明 upgrade 请求在某一层被当成无效 HTTP 请求拒绝

本次事故的真实根因就是这里：

- `runtime-gateway -> runtime` 这一跳已经保留了 `Connection/Upgrade`
- 但 `runtime -> opencode` 这一跳在 upgrade 转发时去掉了 `Host`，又没有补回
- opencode 收到一个不完整的 HTTP/1.1 upgrade 请求，直接返回 `400 Bad Request`

修复点：

- `packages/runtime/src/index.ts`

关键逻辑：

- 转发 upgrade 时显式补 `host: ${opencodeService.host}:${opencodeService.port}`

### 现象 C：`/pty/.../connect` 502

通常表示上游不可达。

排查顺序：

1. `runtime-gateway` 是否能连接 `runtime_url`
2. Runtime 是否存活
3. Runtime 是否已启动 `opencode serve`
4. `OPENCODE_HOST/OPENCODE_PORT` 是否和代理目标一致

### 现象 D：终端页签创建成功，但立刻显示 `Disconnected`

优先检查：

- WebSocket 被反向代理截断
- `Upgrade` / `Connection` 头被网关或 Ingress 清洗
- `proxy_http_version 1.1` 未开启

## 4. Session CWD 同步专项排查

### 现象 A：点击“立即同步”返回成功，但 RustFS 里没有文件

优先检查：

1. `POST /api/sessions/sync` 是否真的打到了当前 Session 对应 Runtime
2. `GET /sync/list?prefix=...` 查询的前缀是不是 `sessions/apps/{appId}/sessions/{userId}-{sessionId}`
3. 目标文件是不是落在忽略目录里，例如 `node_modules` 或 `.git`

### 现象 B：文件能上传，但删除后 RustFS 里还有旧对象

含义：

- 当前 Runtime 可能还在跑旧镜像
- 或 `syncDirectory` 没有真正执行“远端删除旧对象”

优先检查：

- 重新确认动态拉起的 Runtime 容器镜像是不是最新版本
- 再执行一次 `POST /api/sessions/sync`
- 再用 `GET /sync/list?prefix=...` 直接核对对象列表

### 现象 C：Runtime 重建后，Session 文件没有恢复

先直接重放初始化：

```bash
curl -i \
  -X POST http://127.0.0.1:3100/session/init \
  -H 'Content-Type: application/json' \
  -d '{"sessionId":"<sessionId>","appId":"<appId>","userId":"<userId>"}'
```

如果返回 `200` 但文件还是没回来：

- 先查 RustFS 前缀里本来有没有该文件
- 再查 `packages/runtime/src/lib/runtime-service.ts` 是否在 app 配置下载后继续下载了 session 前缀
- 再查该文件是否命中了忽略规则

## 5. 日志看哪里

### web

关注：

- `/api/sessions` 是否返回了 `runtime_proxy_url`
- 页面是否还在请求旧的 `/api/runtime-proxy/...`

### runtime-gateway

关注日志前缀：

- `[runtime-gateway] http proxy failed`
- `[runtime-gateway] websocket proxy failed`
- `[runtime-gateway] upgrade handler failed`
- `[runtime-gateway] session sync failed`
- `[runtime-gateway] session sync request failed`

### runtime

关注日志前缀：

- `[runtime] websocket proxy error`
- `[runtime] failed to proxy websocket upgrade`
- `[runtime] upstream stream failed`
- `[opencode] opencode server listening on ...`

## 6. 浏览器里看什么

### Network

正常顺序通常是：

1. `GET /config/providers` -> `200`
2. `GET /global/event` -> `200`
3. `POST /pty` -> `200`
4. `PUT /pty/<ptyId>` -> `200`
5. `GET ws /pty/<ptyId>/connect` -> `101`

### Console

优先区分两类错误：

- 平台链路错误：`WebSocket connection ... failed: Unexpected response code: 400/502`
- OpenCode 自身噪音：如 `beforeunload` 提示，这类不一定影响 PTY

## 7. 生产环境最容易踩的坑

### 1. `RUNTIME_GATEWAY_PUBLIC_URL` 写成内网地址

错误示例：

```text
http://127.0.0.1:3200/api/runtime-gateway
```

结果：

- 浏览器拿到的是宿主机内环地址
- 外部用户无法访问

正确做法：

- 写成浏览器真实可达的正式域名
- 例如 `https://agent.example.com/api/runtime-gateway`

### 2. `web` 和 `runtime-gateway` 的密钥不一致

结果：

- gateway 返回 `401` 或 `403`

相关变量：

- `RUNTIME_GATEWAY_SECRET`
- 也可回退到 `SESSION_SECRET` / `AUTH_SECRET`

### 3. 反向代理没开 WebSocket

结果：

- 普通 API 都通
- 只有 PTY connect 挂掉

需要确认：

- `proxy_http_version 1.1`
- `Upgrade` 头
- `Connection: upgrade`

### 4. gateway 指向了旧 runtime

现象：

- `/config/providers`、`/pty` 返回 `404`

本质：

- 旧 runtime 只有管理接口，没有 opencode 的 API 面

### 5. Runtime 镜像是新的，但旧容器没被替换

现象：

- 代码里已经有同步逻辑
- 但运行时表现仍然像旧版本

本质：

- `web` 动态拉起 Runtime 时吃的是镜像，不是你本机当前源码
- 如果旧 Runtime 容器没删掉，新建 Session 仍可能复用旧容器

处理：

1. 重建 `agent-runtime:latest`
2. 删掉旧 Runtime 容器
3. 再创建新的 Session 触发真实编排

## 8. 一次完整自检

```bash
# 1. gateway 健康
curl -i http://127.0.0.1:3200/health

# 2. OpenCode 基础 API
curl -i "$PROXY_BASE/config/providers"

# 3. 创建 PTY
curl -i -X POST "$PROXY_BASE/pty?directory=<workspace>"

# 4. 验证 WS 握手
curl -i \
  -H 'Connection: Upgrade' \
  -H 'Upgrade: websocket' \
  -H 'Sec-WebSocket-Version: 13' \
  -H 'Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==' \
  "$PROXY_BASE/pty/<ptyId>/connect?directory=<workspace>"

# 5. 触发一次手动同步
curl -i \
  -X POST http://127.0.0.1:3000/api/sessions/sync \
  -H 'Content-Type: application/json' \
  -H 'Cookie: session=<your-session-cookie>' \
  -d '{"sessionId":"<sessionId>"}'

# 6. 查看 RustFS 前缀对象
curl -s \
  "http://127.0.0.1:3100/sync/list?prefix=sessions/apps/<appId>/sessions/<userId>-<sessionId>"
```

若这六步全部通过，PTY 和 Session cwd 同步基本都正常。

## 9. 本次修复结论

这次问题分成两段：

1. 旧 `/api/runtime-proxy/...` 方案不适合生产 PTY/WebSocket
2. 切到 `runtime-gateway` 后，Runtime 的 upgrade 转发缺少 `Host` 头，导致 `/pty/.../connect` 握手 `400`

最终验证结果：

- Session 页面已使用 `runtime_proxy_url`
- `POST /pty` 正常
- `WebSocket /pty/.../connect` 正常
- 终端内执行 `pwd` 可收到回包
- 手动同步可把 Session cwd 写入 RustFS
- idle 自动同步可自动收敛新增和删除
- Runtime 重新初始化后可从 RustFS 恢复 Session 文件
